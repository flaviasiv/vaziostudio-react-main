import { motion, useScroll, useTransform } from 'framer-motion';
import 'swiper/css';
import { Helmet } from 'react-helmet-async';
import ProjectsSlider from '../components/ProjectsSlider';
import { fadeUp, Section, FadeUp, Frame } from '../utils/animations';
import '../styles/e97.css';
import '../styles/font.css';

const Estadio97 = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 75]);

  return (
    <>
      <Helmet>
        <title>Estádio 97 - Branding & Direção de Arte para Rádio Esportiva | Vazio Design Studio</title>
        <meta name="description" content="Branding e Direção de Arte para o Estádio 97, um dos programas de rádio esportiva mais tradicionais do Brasil, da Energia 97 FM, celebrando 25 anos como líder de audiência." />
        <meta property="og:title" content="Estádio 97 - Branding & Direção de Arte para Rádio Esportiva" />
        <meta property="og:description" content="Branding para o Estádio 97, um dos programas de rádio esportiva mais tradicionais do Brasil, celebrando 25 anos." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.vaziodesignstudio.com/estadio97" />
        <meta property="og:image" content="https://www.vaziodesignstudio.com/assets/estadio97/frame1.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estádio 97 - Branding & Direção de Arte para Rádio Esportiva" />
        <meta name="twitter:description" content="Branding para o Estádio 97, tradicional programa de rádio esportiva celebrando 25 anos." />
        <meta name="twitter:image" content="https://www.vaziodesignstudio.com/assets/estadio97/frame1.png" />
        <link rel="canonical" href="https://www.vaziodesignstudio.com/estadio97" />
      </Helmet>

      <div className='e97-page'>
        <motion.div className="cover" style={{ y: yHero }}>
          <video src="/assets/estadio97/01-e97.mp4" autoPlay playsInline muted loop></video>
        </motion.div>

        <main>
          <div className="aboutcontainer container">
            <Section className="firstabout">
              <FadeUp className="aboutgrid about1" id="aboutgrid1">
                <motion.h1 variants={fadeUp}>ESTÁDIO 97</motion.h1>
                <motion.h6 id="h6-m" variants={fadeUp}>2024 / BRANDING / ART DIRECTION</motion.h6>
                <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
                <motion.p className="about1" id="about1" variants={fadeUp}>
                  <a href="https://www.instagram.com/estadio97/">Estádio 97</a> is one of Brazil's most traditional sports radio programs, produced by{' '}
                  <a href="https://www.youtube.com/@energia97">Energia 97 FM</a>. This radio station is a fixture in the daily lives of Brazilians, whether it's on a taxi radio for a short trip or while heading to the stadium via major streaming platforms, as the station has successfully adapted to contemporary media.
                </motion.p>
              </FadeUp>
            </Section>

            <Section className="aboutgrid about2" id="aboutgrid1">
              <motion.h6 id="h6-w" variants={fadeUp}>2024 / BRANDING / ART DIRECTION</motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p id="p2-1" variants={fadeUp}>
                O{' '}
                <a href="https://www.instagram.com/estadio97/">Estádio 97</a> é um dos mais tradicionais programas esportivos de rádio do Brasil, um produto da{' '}
                <a href="https://www.youtube.com/@energia97">Energia 97 FM</a>, emissora de rádio que está presente no cotidiano do brasileiro nos mais diversos contextos, seja na rádio de um taxista em um curto trajeto ou a caminho do estádio em qualquer uma das principais plataformas de streaming, uma vez que a rádio se adaptou com êxito aos meios contemporâneos.
              </motion.p>
            </Section>
          </div>

          <Frame className="frames1 frames1-1">
            <video className="img1" src="/assets/estadio97/02-e97.mp4" autoPlay playsInline muted loop></video>
          </Frame>

          <Frame className="frames1">
            <video src="/assets/estadio97/03-e97.mp4" autoPlay playsInline muted loop></video>
          </Frame>

          <Section className="about desafiogrid container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// CHALLENGE</motion.h6>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                O programa possui uma longa trajetória sendo líder de audiências nas rádios esportivas do Brasil e foi no seu aniversário de 25 anos onde se fez necessário a criação de um logo que representasse e sustentasse essa grandeza e tradição deste clássico e apaixonante meio de comunicação.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.p variants={fadeUp}>The program has a long history of leading sports radio audiences in Brazil, and on its 25th anniversary, it became necessary to create a logo that would represent and uphold the greatness and tradition of this classic and passionate medium of communication.</motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <img src="/assets/estadio97/frame1.png" alt="" draggable="false" />
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// SOLUTION</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The logo features bold elements to convey a sense of something well-established, enduring, and solid. The tall typography supports authority, complemented by a distinct icon for the number 97, which represents the radio's frequency (and how it's popularly known as 'Rádio 97').
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>Extremos prologandos para transimitir a sensação algo bem estabelecido, longevo, sólido. Tipografia alta para sustentar autoridade somado a um ícone independente para o numero 97 que representa a sintonia da rádio (e como ela é conhecida popularmente, 'Rádio 97').</motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames2">
            <video src="/assets/estadio97/04-e97.mp4" autoPlay playsInline muted loop></video>
            <img src="/assets/estadio97/frame2.jpg" alt="" />
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Symbolizing the triumph of the brand's longevity, the laurel wreath indicates great merit, traditionally representing the glory of its bearer. The ball is strategically positioned to subtly represent the origin of everything and the motivation behind the entire journey.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>Representando o triunfo da longevidade da marca, a coroa de louros indica grande mérito, tradicionalmente simbolizava a glória de quem a usava.
                <br /><br />
                A bola está posicionada estratégicamente de maneira que sutilmente represente a origem de tudo e a motivação de toda essa tragetória.</motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1 framesgap">
            <video src="/assets/estadio97/05-e97.mp4" autoPlay playsInline muted loop></video>
            <img src="/assets/estadio97/frame3.jpg" alt="imagem capa lata 05" draggable="false" />
            <video src="/assets/estadio97/06-e97.mp4" autoPlay playsInline muted loop></video>
          </Frame>

          <Frame className="frames1 frames3">
            <a href="https://www.youtube.com/@energia97" target="_blank" rel="noreferrer">
              <img src="/assets/estadio97/frames6.png" alt="" />
            </a>
          </Frame>

          <Frame className="frames1 framesgap">
            <img src="/assets/estadio97/frames4.png" alt="" />
            <img src="/assets/estadio97/frames5.png" alt="" />
            <div className="vd-br">
              <video src="/assets/estadio97/07-e97.mp4" autoPlay playsInline muted loop></video>
            </div>
            <div className="vd-br-phone">
              <video src="/assets/estadio97/08-e97.mp4" autoPlay playsInline muted loop></video>
            </div>
            <img src="/assets/estadio97/frames7.png" alt="" draggable="false" />
          </Frame>

          <ProjectsSlider />
        </main>
      </div>
    </>
  );
};

export default Estadio97;
