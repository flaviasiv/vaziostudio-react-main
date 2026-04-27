import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectsSlider from '../components/ProjectsSlider';
import { fadeUp, Section, FadeUp, Frame } from '../utils/animations';
import '../styles/lata.css';
import '../styles/font.css';

const Lata = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 75]);

  return (
    <>
      <Helmet>
        <title>Lata 05 - Secret Event Branding & Art Direction | Vazio Design Studio</title>
        <meta name="description" content="Branding and Art Direction for Lata 05, a secret event with no fixed location, date or theme, featuring invitation-only first editions and surprise performances as the main way to spark curiosity." />
        <meta property="og:title" content="Lata 05 - Secret Event Branding & Art Direction" />
        <meta property="og:description" content="Branding for Lata 05, a secret artistic movement bringing an overlap of musical genres to energize national art." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.vaziodesignstudio.com/lata" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.vaziodesignstudio.com/lata" />
      </Helmet>

      <div className='lata-page'>
        <motion.div className="cover" style={{ y: yHero }}>
          <video src="/assets/lata/01-lata05.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
        </motion.div>

        <main>
          <div className="aboutcontainer container">
            <Section className="firstabout about">
              <FadeUp className="aboutgrid about1" id="aboutgrid1">
                <motion.h1 variants={fadeUp}>LATA 05</motion.h1>
                <motion.h6 id="h6-m" variants={fadeUp}>2023 / BRANDING / ART DIRECTION</motion.h6>
                <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
                <motion.p className="about1" id="about1" variants={fadeUp}>
                  Lata 05 is an unconventional artistic movement that will bring an overlap of musical genres to energize national art. Creating a habitat with new musical flavors in a laboratory format, where the crafting of a new Brazilian art will take place.
                  <br /><br />
                  A secret event, without a disclosed location, date, or predefined theme, which will only include invited guests in the first editions and will rely on surprise performances as the primary way to intrigue new people and spread the brand.
                </motion.p>
              </FadeUp>
            </Section>

            <Section className="aboutgrid about2" id="aboutgrid1">
              <motion.h6 id="h6-w" variants={fadeUp}>2023 / BRANDING / ART DIRECTION</motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p className="about1" id="p2-1" variants={fadeUp}>
                Lata 05 é um movimento artístico nada convencional, que trará uma sobreposição de gêneros musicais para movimentar a arte nacional. Criar um habitat com novos sabores musicais em um formato de laboratório, onde irá acontecer a confecção de uma nova arte brasileira.
                <br /><br />
                Um evento secreto, sem local, data ou temática pré definida que contará apenas com convidados nas primeira edições e usará das apresentações surpresas como a principal forma de instigar novas pessoas e difundir a marca.
              </motion.p>
            </Section>
          </div>

          <Frame className="frames1 frames1-1">
            <video className="img1" src="/assets/lata/02-lata05.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Frame className="frames1">
            <video src="/assets/lata/03-lata05.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Frame className="frames2">
            <img src="\assets\lata\frame1.png" alt="" draggable="false" />
          </Frame>

          <Section className="about desafiogrid container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// CHALLENGE</motion.h6>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                A product of a post-national pandemic generation. An exaltation of the Brazilian identity in the best possible way. Good taste in music, consumption, and style, using the culture of collaborations to support national brands, showcase emerging local artists, and surprise the audience with performances by already established artists.
                <br /><br />
                "An unconventional way to move art" is an invitation to the development of a versatile and provocative brand. A combination of elements that subtly pay homage to Brazilian culture
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.p variants={fadeUp}>
                Desenvolver um produto de uma geração pós pandêmica nacional. Uma exaltação da identidade brasileira da melhor forma possível. Bom gosto para música, consumo e estilo, utilizando da cultura das colaborações para apoiar marcas nacionais, expor artistas locais emergentes e surpreender o público com apresentações de artistas já consagrados.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1 frames1-1">
            <video src="/assets/lata/04-lata05.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// SOLUTION</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The logo was built with the intersection of the classic and the modern, providing flexibility and easy adaptation in its own space.
                <br /><br />
                A distorted serif font is capable of evoking this sensation as it is the combination of the traditional with an unpredictable movement - like the future.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Uma forma não convencional de movimentar a arte' é um convite para o desenvolvimento de uma marca versátil e provocativa com elementos que sutilmente homenageiam a cultura brasileira.
                <br /><br />
                O logo foi construído com a intercepção entre o clássico e o moderno com uma flexibilidade e fácil adaptação em seu próprio espaço.
                <br /><br />
                Uma fonte serifada distorcida é capaz de despertar essa sensação pois é a soma do tradicional com um movimento imprevisível - como o futuro.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <video src="/assets/lata/05-lata05.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <img src="/assets/lata/frame2.jpg" alt="imagem capa lata 05" draggable="false" />
            <img src="/assets/lata/frame3.jpg" alt="imagem capa lata 05" draggable="false" />
            <img src="/assets/lata/frame4.jpg" alt="imagem capa lata 05" draggable="false" />
            <video src="/assets/lata/06-lata05.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}></motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The selection of images should be made with the aim of always conveying the feeling of people living good moments.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>A escolha de imagens deverá ser feita visando transmitir sempre a sensação de pessoas vivendo bons momentos.</motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <video src="/assets/lata/07-lata05.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <img src="/assets/lata/frame5.jpg" alt="imagem capa lata 05" draggable="false" />
            <video src="/assets/lata/08-lata05.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <img src="/assets/lata/frame6.jpg" alt="imagem capa lata 05" draggable="false" />
          </Frame>

          <ProjectsSlider />
        </main>
      </div>
    </>
  );
};

export default Lata;
