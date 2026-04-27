import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectsSlider from '../components/ProjectsSlider';
import { fadeUp, Section, FadeUp, Frame } from '../utils/animations';
import '../styles/botteghe.css';
import '../styles/font.css';

const Botteghe = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 75]);

  return (
    <>
      <Helmet>
        <title>Botteghe Del Caffè - Branding & Art Direction | Vazio Design Studio</title>
        <meta name="description" content="Branding and Art Direction for Botteghe Del Caffè, an environmentally conscious cosmetics brand utilizing green coffee oil from a family farm in southern Minas Gerais." />
        <meta property="og:title" content="Botteghe Del Caffè - Branding & Art Direction" />
        <meta property="og:description" content="Branding for Botteghe Del Caffè, an environmentally conscious cosmetics brand utilizing green coffee oil." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.vaziodesignstudio.com/botteghe" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.vaziodesignstudio.com/botteghe" />
      </Helmet>

      <div>
        <motion.div className="cover" style={{ y: yHero }}>
          <video src="/assets/botteghe/01-botteghe.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
        </motion.div>

        <main>
          <div className="aboutcontainer container">
            <Section className="firstabout about">
              <FadeUp className="aboutgrid about1" id="aboutgrid1">
                <motion.h1 variants={fadeUp}>
                  BOTTEGHE <br />
                  DEL CAFFÈ
                </motion.h1>
                <motion.h6 id="h6-m" variants={fadeUp}>2023 / BRANDING / ART DIRECTION</motion.h6>
                <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
                <motion.p className="about1" id="about1" variants={fadeUp}>
                  Botteghe Del Caffè is an environmentally conscious cosmetics brand that utilizes green coffee oil from a family farm in southern Minas Gerais.
                  <br /><br />
                  Collaborating with local olive oil producers, their products, backed by a{' '}
                  <a style={{ textDecoration: 'underline' }} href="https://www.teses.usp.br/teses/disponiveis/60/60137/tde-06092013-092132/publico/Tese_Completa.pdf" target="_blank" rel="noreferrer">
                    study from USP
                  </a>
                  , offer hydration, protection, maintenance, healing, and improved cutaneous barrier, with heightened antioxidant and photoprotective properties for therapeutic and cosmetic use.
                </motion.p>
              </FadeUp>
            </Section>

            <Section className="aboutgrid about2" id="aboutgrid1">
              <motion.h6 id="h6-w" variants={fadeUp}>2023 / BRANDING / ART DIRECTION</motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p className="about1" id="p2-1" variants={fadeUp}>
                Com uma inclinação natural pela proteção ao meio ambiente – Botteghe Del Caffè é uma marca de cosméticos com produtos a base do óleo extraído do café verde em uma fazenda familiar no sul de Minas Gerais.
                <br /><br />
                Em parceria com produtores locais de azeite, seus produtos, respaldados por um{' '}
                <a style={{ textDecoration: 'underline' }} href="https://www.teses.usp.br/teses/disponiveis/60/60137/tde-06092013-092132/publico/Tese_Completa.pdf" target="_blank" rel="noreferrer">
                  estudo realizado pela Faculdade de Ciências Farmacêuticas da USP
                </a>
                , oferecem hidratação, proteção, manutenção, cicatrização e melhoria da barreira cutânea, com propriedades antioxidantes e fotoprotetoras aprimoradas para uso terapêutico e cosmético.
              </motion.p>
            </Section>
          </div>

          <Frame className="frames1 frames1-1">
            <video src="/assets/botteghe/02-botteghe.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Frame className="frames1">
            <img className="img1" src="/assets/botteghe/Frame3.png" alt="imagem capa botteghe" draggable="false" />
          </Frame>

          <Frame className="frames2">
            <img src="/assets/botteghe/Frame4.png" alt="" draggable="false" />
          </Frame>

          <Section className="about desafiogrid container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// CHALLENGE</motion.h6>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The São Luís do Palmela farm, with over 40 years dedicated to coffee cultivation in Campanha-MG, stands out for its 140 hectares, encompassing the headquarters and extensive preservation areas.
                <br /><br />
                The owning family has consistently prioritized products that add value, care for the plantations, and respect the local environment and the health of collaborators.
                <br /><br />
                Given this commitment, there arises the need for a vibrant brand that clearly reflects these principles, representing excellence and scientific potential in coffee cultivation, as well as a commitment to environmental conservation and the well-being of the team.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.p variants={fadeUp}>
                A fazenda São Luís do Palmela, com mais de 40 anos de dedicação à cafeicultura em Campanha-MG, destaca-se por seus 140 hectares, que incluem a sede e amplas áreas de preservação.
                <br /><br />
                A família proprietária sempre priorizou produtos que agregam valor, cuidam das plantações e respeitam a natureza local e a saúde dos colaboradores.
                <br /><br />
                Diante desse comprometimento, surge a necessidade de uma marca vibrante que reflita claramente esses princípios, representando a excelência e os potenciais científicos na cafeicultura, o respeito ao meio ambiente e à saúde da equipe
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1 frames1-1">
            <img src="/assets/botteghe/Frame5.png" alt="imagem capa botteghe" draggable="false" />
          </Frame>

          <Frame className="frame2-2">
            <img src="/assets/botteghe/gif3.gif" alt="imagem capa botteghe" draggable="false" />
            <video src="/assets/botteghe/03-botteghe.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <div className="frames1"></div>

          <Frame className="frames3">
            <video src="/assets/botteghe/04-botteghe.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <img src="/assets/botteghe/frame8.png" alt="imagem capa botteghe" draggable="false" />
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// SOLUTION</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The icon was designed to reflect and reinforce the fundamental principles of the brand, values such as health, and environmental responsibility. It was conceived to be easily applied in various contexts, such as marketing materials, packaging, social media, etc.
                <br /><br />
                The selection of specific elements, such as health, skin radiance, and roots, implies a connection to environmental responsibility and suggests a commitment to sustainable practices.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                O ícone foi projetado para refletir e reforçar os princípios fundamentais da marca, valores como saúde e responsabilidade ambiental. Foi concebido de forma a ser facilmente aplicado em diferentes contextos, como em materiais de marketing, embalagens, mídias sociais, etc.
                <br /><br />
                A escolha de elementos específicos, como saúde, brilho da pele e raízes, sugere uma conexão com a responsabilidade ambiental e sugere um compromisso com práticas sustentáveis.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <img src="/assets/botteghe/08ec6a2c417565846ce6d744ebc776fd.gif" alt="" />
            <img src="/assets/botteghe/frame9.png" alt="" draggable="false" />
            <video src="/assets/botteghe/05-botteghe.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <img className="img-sm" src="/assets/botteghe/frame10.png" alt="" draggable="false" />
            <img src="/assets/botteghe/frame11.png" alt="" draggable="false" />
          </Frame>

          <Frame className="frames4">
            <img className="img-4-1" src="/assets/botteghe/frame12.png" alt="" draggable="false" />
            <img className="img-4-2" src="/assets/botteghe/frame13.png" alt="" draggable="false" />
          </Frame>

          <Frame className="frames1">
            <video src="/assets/botteghe/06-botteghe.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <ProjectsSlider />
        </main>
      </div>
    </>
  );
};

export default Botteghe;
