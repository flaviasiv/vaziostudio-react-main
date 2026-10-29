import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';

/* Vídeo mudo em loop que só toca enquanto está na tela. Com movimento reduzido não toca sozinho: mostra os controles. */
function Clip({ src, w, h }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.play().catch(() => {});
      else el.pause();
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <video
      ref={ref}
      src={src}
      width={w}
      height={h}
      muted
      loop
      playsInline
      preload="metadata"
      controls={Boolean(reduce)}
      aria-hidden={reduce ? undefined : 'true'}
      disablePictureInPicture
    />
  );
}

/* Uma linha de mídia. Cada item cresce na proporção da sua imagem, então todos terminam com a mesma altura. */
export default function Media({ items, alts, eager = false }) {
  return (
    <div className="media">
      {items.map((m) => (
        <figure key={m.src} className="media__item" style={{ '--ratio': m.w / m.h }}>
          {m.type === 'video' ? (
            <Clip src={m.src} w={m.w} h={m.h} />
          ) : (
            <img src={m.src} width={m.w} height={m.h} alt={alts[m.alt] ?? ''} loading={eager ? 'eager' : 'lazy'} />
          )}
        </figure>
      ))}
    </div>
  );
}
