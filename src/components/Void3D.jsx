import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useScroll } from 'motion/react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import {
  CanvasTexture,
  Color,
  MathUtils,
  MeshPhysicalMaterial,
  PMREMGenerator,
  Quaternion,
  RepeatWrapping,
  Vector3,
} from 'three';

const CAM_Z = 6;
const FOV = 40;
const HAND_SCALE = 16; // o modelo tem cerca de 0,18 m de comprimento
const DESIGN_WIDTH = 7; // largura do mundo (em unidades) para a qual a mão foi composta: janela 1280 x 800
const HAND_WIDTH = 3.8; // largura da mão na tela (em unidades) com escala 1
const HAND_SPAN = 4.2; // tamanho aproximado na tela, para a detecção do mouse

/* Pose da mão: curvatura em radianos de cada junta (proximal, intermediária, distal).
   Indicador quase estendido, os outros mais fechados, como na logo. */
const FINGERS = [
  { name: 'index-finger', base: [0.15, 0.25, 0.1], wave: 0.0 },
  { name: 'middle-finger', base: [0.45, 0.7, 0.4], wave: 0.9 },
  { name: 'ring-finger', base: [0.6, 0.85, 0.5], wave: 1.8 },
  { name: 'pinky-finger', base: [0.7, 0.9, 0.5], wave: 2.7 },
];
const SEGMENTS = ['phalanx-proximal', 'phalanx-intermediate', 'phalanx-distal'];
const X_AXIS = new Vector3(1, 0, 0);
const Y_AXIS = new Vector3(0, 1, 0);

const SKIN = new Color('#8c8c8c'); // o cinza de sempre: no canvas em difference vira o cinza/branco da marca

/* Textura de poro: ruído fino usado só como relevo, para a pele não parecer plástico liso. */
function makePoreTexture() {
  const size = 256;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < size * size; i += 1) {
    const v = 150 + Math.random() * 105;
    img.data.set([v, v, v, 255], i * 4);
  }
  ctx.putImageData(img, 0, 0);
  const tex = new CanvasTexture(c);
  tex.wrapS = RepeatWrapping;
  tex.wrapT = RepeatWrapping;
  tex.repeat.set(10, 10);
  return tex;
}

function makeSkinMaterial(pores) {
  return new MeshPhysicalMaterial({
    color: SKIN,
    roughness: 0.55,
    metalness: 0,
    bumpMap: pores,
    bumpScale: 0.35,
  });
}

/* O modelo vem do pacote de perfis WebXR (mão genérica, MIT). Os ossos chegam soltos, então cada dedo é
   religado em cadeia para que girar uma junta leve as seguintes. */
function useHandRig(group) {
  const rig = useRef(null);
  useEffect(() => {
    const root = group.current;
    if (!root) return;
    const find = (n) => root.getObjectByName(n);
    const bones = [];
    FINGERS.forEach((f) => {
      const chain = ['metacarpal', ...SEGMENTS, 'tip'].map((s) => find(`${f.name}-${s}`));
      for (let i = 1; i < chain.length; i += 1) chain[i - 1].attach(chain[i]);
    });
    const thumb = ['metacarpal', 'phalanx-proximal', 'phalanx-distal', 'tip'].map((s) => find(`thumb-${s}`));
    for (let i = 1; i < thumb.length; i += 1) thumb[i - 1].attach(thumb[i]);

    FINGERS.forEach((f) => {
      SEGMENTS.forEach((s, si) => {
        const b = find(`${f.name}-${s}`);
        bones.push({ bone: b, rest: b.quaternion.clone(), base: f.base[si], cur: f.base[si], wave: f.wave + si * 0.5, spread: si === 0 });
      });
    });
    ['phalanx-proximal', 'phalanx-distal'].forEach((s, si) => {
      const b = find(`thumb-${s}`);
      const base = [0.25, 0.3][si];
      bones.push({ bone: b, rest: b.quaternion.clone(), base, cur: base, wave: 3.6 + si * 0.5, spread: false });
    });

    const pores = makePoreTexture();
    const skin = makeSkinMaterial(pores);

    root.traverse((o) => {
      if (o.isSkinnedMesh) {
        o.frustumCulled = false;
        o.material = skin;
      }
    });
    rig.current = bones;
  }, [group]);
  return rig;
}

/* Luz de ambiente de estúdio (do próprio three), fraca, só para dar reflexo à pele. */
function setupStudio({ gl, scene }) {
  const pmrem = new PMREMGenerator(gl);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.08;
  pmrem.dispose();
}

/* A mão da marca, único objeto 3D do site: um modelo com ossos que atravessa a tela conforme o scroll
   (descer e subir percorrem o mesmo caminho), gira pouco, para nunca ficar torcida, e mexe os dedos devagar,
   mais quando o mouse está sobre ela. O canvas usa mix-blend-mode: difference, então a mão inverte as cores
   do que passa por baixo (ref: Lusion). */
function Hand({ progress }) {
  const outer = useRef(null);
  const model = useRef(null);
  const smooth = useRef(0);
  const hover = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const ndc = useRef(new Vector3());
  const q = useRef(new Quaternion());
  const q2 = useRef(new Quaternion());
  const gap = useRef(null); // centro do vão entre o título e o texto do hero, de 0 (topo) a 1 (pé) da janela, com a página no topo
  const gltf = useLoader(GLTFLoader, '/hand.glb');
  const rig = useHandRig(model);

  useEffect(() => {
    const measure = () => {
      const title = document.querySelector('.hero__title');
      const foot = document.querySelector('.hero__foot');
      if (!title || !foot) return;
      const top = title.getBoundingClientRect().bottom + window.scrollY;
      const bottom = foot.getBoundingClientRect().top + window.scrollY;
      // um pouco acima do centro: os dedos pendem para baixo da origem da mão
      gap.current = (top + bottom) / 2 / window.innerHeight - 0.03;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  useFrame((state, dt) => {
    const m = outer.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    smooth.current = MathUtils.damp(smooth.current, progress.get(), 2.5, dt);
    const p = smooth.current;
    pointer.current.x = MathUtils.damp(pointer.current.x, state.pointer.x, 2, dt);
    pointer.current.y = MathUtils.damp(pointer.current.y, state.pointer.y, 2, dt);
    const sweep = Math.sin(p * Math.PI * 2);
    const arc = Math.sin(p * Math.PI);

    m.rotation.y = sweep * 0.3 + pointer.current.x * 0.25;
    m.rotation.x = 0.35 + pointer.current.y * 0.2;
    m.rotation.z = -0.1 + sweep * 0.08;
    // a mão acompanha a largura da janela: o tamanho e o vai-e-vem lateral escalam juntos
    const fit = MathUtils.clamp(state.viewport.width / DESIGN_WIDTH, 0.42, 1.15);
    const size = MathUtils.lerp(1, 0.78, arc) * fit; // encolhe até o meio e volta a crescer, para o texto ler melhor
    // em janela estreita o vai-e-vem é limitado para a mão não sair da tela
    const room = Math.max(0, (state.viewport.width - HAND_WIDTH * size) / 2);
    m.position.x = MathUtils.clamp(MathUtils.lerp(1.2, -1.2, arc) * fit, -room, room);
    // em tela vertical o hero é baixo: no topo a mão fica no vão entre o título e o texto
    const portrait = MathUtils.clamp((1.1 - state.viewport.aspect) / 0.3, 0, 1);
    const y = MathUtils.lerp(0.1, -0.4, p);
    const gapY = gap.current == null ? y : (1 - 2 * gap.current) * (state.viewport.height / 2);
    m.position.y = MathUtils.lerp(y, gapY, portrait * (1 - p)) + Math.sin(t * 0.6) * 0.06;
    m.scale.setScalar(size);

    ndc.current.copy(m.position).project(state.camera);
    const visH = 2 * CAM_Z * Math.tan(MathUtils.degToRad(FOV / 2));
    const visW = visH * state.viewport.aspect;
    const dx = (state.pointer.x - ndc.current.x) / ((HAND_SPAN * m.scale.x) / visW);
    const dy = (state.pointer.y - ndc.current.y) / ((HAND_SPAN * 0.6 * m.scale.x) / visH);
    const near = 1 - MathUtils.smoothstep(Math.hypot(dx, dy), 0.7, 1.1);
    hover.current = MathUtils.damp(hover.current, near, 2, dt);

    if (rig.current) {
      const open = 1 - arc * 0.2; // a mão se fecha um pouco no meio do scroll
      rig.current.forEach((r) => {
        // dois ritmos que não se alinham dão uma respiração irregular; a onda do hover percorre os dedos em fila
        const idle = Math.sin(t * 0.6 + r.wave) * 0.03 + Math.sin(t * 0.37 + r.wave * 1.7) * 0.025;
        const wave = Math.sin(t * 1.3 - r.wave) * 0.18 * hover.current;
        // a junta persegue o alvo com inércia, em vez de seguir o seno direto
        r.cur = MathUtils.damp(r.cur, r.base * open + idle + wave, 5, dt);
        q.current.setFromAxisAngle(X_AXIS, -r.cur);
        r.bone.quaternion.copy(r.rest);
        if (r.spread) {
          // a base do dedo abre e fecha um pouco para os lados
          q2.current.setFromAxisAngle(Y_AXIS, Math.sin(t * 0.45 + r.wave) * 0.03 + hover.current * 0.04 * Math.sin(r.wave));
          r.bone.quaternion.multiply(q2.current);
        }
        r.bone.quaternion.multiply(q.current);
      });
    }
  });

  return (
    <group ref={outer}>
      <group rotation={[Math.PI - 0.6, 0, -Math.PI / 2]} scale={HAND_SCALE}>
        <group ref={model} position={[-0.03, 0.03, 0]}>
          <primitive object={gltf.scene} />
        </group>
      </group>
    </group>
  );
}

export default function Void3D() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="void3d" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, CAM_Z], fov: FOV }}
        dpr={[1, window.innerWidth < 900 ? 1.5 : 2]}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        eventSource={document.body}
        eventPrefix="client"
        onCreated={setupStudio}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[2, 4, 5]} intensity={2.4} />
        <directionalLight position={[-3, -1, 2]} intensity={0.6} />
        <Hand progress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
