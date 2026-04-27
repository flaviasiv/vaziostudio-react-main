import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectsSlider from '../components/ProjectsSlider';
import { fadeUp, stagger, Section, FadeUp, Frame } from '../utils/animations';
import '../styles/supernova.css';
import '../styles/font.css';

const Supernova = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 75]);

  return (
    <>
      <Helmet>
        <title>Supernova Entertainment - Branding & Art Direction | Vazio Design Studio</title>
        <meta name="description" content="Branding and Art Direction for Supernova Entertainment, a music label in São Paulo marked by the astronomical rise of its artists, including Thiago Veigh who reached global top 1 on Spotify." />
        <meta property="og:title" content="Supernova Entertainment - Branding & Art Direction" />
        <meta property="og:description" content="Branding and Art Direction for Supernova Entertainment, a music label in São Paulo marked by the astronomical rise of its artists." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.vaziodesignstudio.com/supernova" />
        <meta property="og:image" content="https://www.vaziodesignstudio.com/assets/supernova/Frame2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.vaziodesignstudio.com/supernova" />
      </Helmet>

      <div className="supernova-page">
        <motion.div className="cover" style={{ y: yHero }}>
          <video src="/assets/supernova/01-spnv.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
        </motion.div>

        <main>
          <Section className="about firstabout">
            <FadeUp className="aboutgrid about1" id="aboutgrid1">
              <motion.h1 variants={fadeUp}>
                SUPERNOVA <br />
                ENTERTAINMENT
              </motion.h1>
              <motion.h6 id="h6-m" variants={fadeUp}>2023 / BRANDING / ART DIRECTION</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Supernova Entertainment is a record label/music producer located in São Paulo (BRA) marked by the astronomical rise of its artists.
                <br /><br />
                Thiago Veigh is the main name,{' '}
                <a href="https://www.correiobraziliense.com.br/diversao-e-arte/2023/05/5097968-trapper-veigh-fala-sobre-conquista-do-1-lugar-do-spotify-global.html" target="_blank" rel="noreferrer">
                  he reached the global top 1 on Spotify
                </a>
                . The rapper also has the biggest national debut in the platform's history with the album Dos Prédios Deluxe (more than 6.5 million streaming hits).
              </motion.p>
            </FadeUp>
          </Section>

          <Section className="aboutgrid about2 firstabout2" id="aboutgrid1">
            <motion.h6 id="h6-w" variants={fadeUp}>2023 / BRANDING / ART DIRECTION</motion.h6>
            <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
            <motion.p id="p2-1" variants={fadeUp}>
              Supernova Entertainment é uma gravadora/produtora musical localizada em São Paulo (BRA) marcada pela ascensão astronômica de seus artistas.
              <br /><br />
              Thiago Veigh é o principal nome,{' '}
              <a href="https://www.correiobraziliense.com.br/diversao-e-arte/2023/05/5097968-trapper-veigh-fala-sobre-conquista-do-1-lugar-do-spotify-global.html" target="_blank" rel="noreferrer">
                conquistou o top 1 global do Spotify
              </a>
              . O rapper detém ainda a maior estreia nacional da história da plataforma com o disco Dos Prédios Deluxe (mais de 6,5 de milhões de acessos no streaming).
            </motion.p>
          </Section>

          <Frame className="frames1">
            <video src="/assets/supernova/02-spnv.mp4" className="img1" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Section className="about">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// CHALLENGE</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The beginning of this work is part of the label's clear objective of professionalizing the brand and showing how its productions are capable of polishing and boosting young Brazilian trap talents.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                O inicio desse trabalho parte do objetivo claro da gravadora de profissionalizar a marca e transparecer o quanto suas produções são capazes de lapidar e impulsionar jovens talentos do trap brasileiro.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <img src="/assets/supernova/Frame2.png" alt="imagem capa supernova" draggable="false" />
            <video src="/assets/supernova/03-spnv.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Section className="about">
            <FadeUp className="aboutgrid about1">
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Ascension and dimension are the key words at this moment.
                <br /> <br />
                I opted for a typography that would go unnoticed in no application. Impactful and dense enough to allow for the internalization of the brand's rising star design.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Ascensão e dimensão são as palavras-chave nesse momento
                <br /> <br />
                Optei por uma tipografia que em nenhuma aplicação passaria por despercebida. Impactante e densa o suficiente para que comportasse a internalização do traçado da estrela ascendida.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <img src="/assets/supernova/frame4.jpg" alt="imagem capa supernova" draggable="false" />
          </Frame>

          <Section className="about tipografia">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>
                // TIPOGRAFIA <br />& ELEMENTOS
              </motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The Humane typographic family has decisive flexibility to support the idea of ascension due to its variety of weight.
                <br /><br />
                To support this path of development, I represented the idea of expansion and amplification in a playful way through 'waves'.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                A família tipográfica Humane possui flexibilidade determinante para sustentar a ideia de ascensão devido a sua variedade de peso.
                <br /><br />
                Como apoio a esse caminho de desenvolvimento representei a ideia de expansão e amplificação de maneira lúdica através de 'ondas'.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <video src="/assets/supernova/04-spnv.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <video src="/assets/supernova/05-spnv.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <video src="/assets/supernova/06-spnv.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Section className="about tipografia solucao">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// SOLUTION</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The sum of the work in collaboration with the founders together with the producer's rich background resulted in visual decisions that objectively reflect the greatness present in the brand's DNA.
                <br /><br />
                An intentionally impactful brand like itself astronomical event.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                A soma do trabalho em colaboração com os fundadores juntamente ao rico background da produtora resultou em decisões visuais que refletem objetivamente a grandeza presente no DNA da marca.
                <br /><br />
                Uma marca intencionalmente impactante como o próprio evento astronômico.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="prints">
            <div className="printsgrid">
              <div className="grid1">
                <img src="/assets/supernova/frame3.png" alt="" draggable="false" />
              </div>
              <div className="grid2">
                <img className="img-mr" src="/assets/supernova/frame1-1.png" alt="" draggable="false" />
                <img src="/assets/supernova/frame1-2.png" alt="" draggable="false" />
                <img className="img-mr" src="/assets/supernova/frame1-3.png" alt="" draggable="false" />
                <img src="/assets/supernova/frame1-4.png" alt="" draggable="false" />
              </div>
            </div>
          </Frame>

          <Frame className="frames1">
            <video src="/assets/supernova/07-spnv.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <video src="/assets/supernova/08-spnv.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <ProjectsSlider />
        </main>
      </div>
    </>
  );
};

export default Supernova;
