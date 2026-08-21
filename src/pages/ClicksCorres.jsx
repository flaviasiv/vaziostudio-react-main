import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectsSlider from '../components/ProjectsSlider';
import { fadeUp, Section, FadeUp, Frame } from '../utils/animations';
import '../styles/corresclicks.css';
import '../styles/font.css';

const ClicksCorres = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 75]);

  return (
    <>
      <Helmet>
        <title>Clicks & Corres - Projeto Fotográfico Pessoal | Vazio Design Studio</title>
        <meta name="description" content="Projeto fotográfico pessoal documentando corridas durante a pandemia de COVID-19. Todo o material foi capturado no celular ao longo de meses correndo a mesma rota na zona norte de São Paulo." />
        <meta property="og:title" content="Clicks & Corres - Projeto Fotográfico Pessoal" />
        <meta property="og:description" content="Projeto fotográfico documentando corridas durante a pandemia de COVID-19 em São Paulo." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.vaziodesignstudio.com/clickscorres" />
        <meta property="og:image" content="https://www.vaziodesignstudio.com/assets/corres/frame1.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clicks & Corres - Projeto Fotográfico Pessoal" />
        <meta name="twitter:description" content="Projeto fotográfico documentando corridas durante a pandemia em São Paulo." />
        <meta name="twitter:image" content="https://www.vaziodesignstudio.com/assets/corres/frame1.jpg" />
        <link rel="canonical" href="https://www.vaziodesignstudio.com/clickscorres" />
      </Helmet>

      <div className='corresclicks-page'>
        <motion.div className="cover" style={{ y: yHero }}>
          <video src="/assets/corres/01-cc.mp4" autoPlay playsInline muted loop></video>
        </motion.div>

        <main>
          <div className="aboutcontainer container">
            <Section className="firstabout about">
              <FadeUp className="aboutgrid about1" id="aboutgrid1">
                <motion.h1 variants={fadeUp}>
                  CORRES
                  <br />& CLICKS
                </motion.h1>
                <motion.h6 id="h6-m" variants={fadeUp}>2020 / PERSONAL PROJECT / PHOTOGRAPHY</motion.h6>
                <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
                <motion.p className="about1" id="about1" variants={fadeUp}>
                  On March 11, 2020, the WHO declared COVID-19 a pandemic.
                  <br /><br />
                  During this time, I started working from home, a period marked by intense anxiety due to the numerous challenges it brought.
                  <br /><br />
                  I documented everything through my phone while running daily along the same route in the northern zone of São Paulo
                </motion.p>
              </FadeUp>
            </Section>

            <Section className="aboutgrid about2" id="aboutgrid1">
              <motion.h6 id="h6-w" variants={fadeUp}>2020 / PERSONAL PROJECT / PHOTOGRAPHY</motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p className="about1" id="p2-1" variants={fadeUp}>
                Em 11 de março de 2020, a COVID-19 foi caracterizada pela OMS como uma pandemia.
                <br /><br />
                Comecei a trabalhar em home office nesse período, marcado por intensa ansiedade devido aos inúmeros motivos que esse período trazia consigo.
                <br /><br />
                Todos os registros foram feitos através do celular durante meses praticando corrida de rua pelo mesmo trajeto na zona norte de São Paulo.
              </motion.p>
            </Section>
          </div>

          <Frame className="frames1-1">
            <img src="/assets/corres/frames2.png" alt="" draggable="false" />
          </Frame>

          <Frame className="frames1">
            <img className="img1" src="/assets/corres/frames3.png" alt="imagem capa lata 05" draggable="false" />
            <img className="img1" src="/assets/corres/frames4.png" alt="imagem capa lata 05" draggable="false" />
          </Frame>

          <Section className="about desafiogrid container" id="aboutgrid1">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}></motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                As a result of this anxiety, I developed some compulsions. To cope, I began practicing sports, adopting daily street running as a strict routine.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h6 variants={fadeUp}></motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>Como resultado dessas ansiedades, desenvolvi algumas compulsões. <br />
                Para lidar com isso, comecei a praticar esportes, adotando a corrida diária na rua como uma rotina rígida.</motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1" style={{ marginBottom: '110px' }}>
            <video src="/assets/corres/02-cc.mp4" autoPlay playsInline muted loop></video>
          </Frame>

          <Frame className="frames1 frames1-2">
            <img src="/assets/corres/frames5.png" alt="" draggable="false" />
            <img src="/assets/corres/frames6.png" alt="" draggable="false" />
            <img src="/assets/corres/frames7.png" alt="" draggable="false" />
          </Frame>

          <Section className="about desafiogrid container" id="aboutgrid1">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}></motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                It all started as an outlet to express and alleviate the anxiety that was tormenting me.
                <br /><br />
                By repeating the same route, my focus began to shift to the routine aspects of a now strange, empty, and cold everyday life.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h6 variants={fadeUp}></motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Tudo começou como uma válvula de escape para expressar e aliviar a ansiedade que me atormentava.
                <br /><br />
                Repetindo o mesmo trajeto, meu olhar começou a se voltar para aspectos rotineiros de um cotidiano agora estranho, vazio e frio.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <img src="/assets/corres/frames8.png" alt="imagem capa lata 05" draggable="false" />
          </Frame>

          <Frame className="frames1-1 frames1-3">
            <img src="/assets/corres/frames9.png" alt="imagem capa lata 05" draggable="false" />
          </Frame>

          <Frame className="frames2">
            <img src="/assets/corres/frames10.png" alt="" draggable="false" />
          </Frame>

          <Frame className="frames1">
            <img src="/assets/corres/frames11.png" alt="" draggable="false" />
          </Frame>

          <Section className="about tipografia container" id="aboutgrid1">
            <FadeUp className="aboutgrid about1">
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Practicing photography while running is something everyone should experience at least once.
                <br /><br />
                The brain's oxygenation, the blood flowing through the veins, and the focus on breathing are simple details we often overlook, but they become more evident through this practice.
                <br /><br />
                This experiment allowed me to connect with these subtle details.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2" id="aboutgrid2">
              <motion.h6 variants={fadeUp}>
                <video src="/assets/corres/03-cc.mp4" autoPlay playsInline muted loop></video>
              </motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Praticar fotografia durante a corrida é algo que todos deveriam experimentar ao menos uma vez.
                <br /><br />
                A oxigenação do cérebro, o sangue correndo nas veias e o foco na respiração são detalhes simples que muitas vezes não percebemos, mas que se tornam mais evidentes através dessa prática.
                <br /><br />
                Esse experimento me permitiu me conectar com esses mínimos detalhes.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1 frames1-2">
            <img src="/assets/corres/frames12.png" alt="" draggable="false" />
            <img src="/assets/corres/frames13.png" alt="" draggable="false" />
          </Frame>

          <Section className="about container" id="aboutgrid3">
            <FadeUp className="aboutgrid about1">
              <motion.div variants={fadeUp}>
                <video className="ab-vid" src="/assets/corres/04-cc.mp4" autoPlay playsInline muted loop></video>
              </motion.div>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The world is in constant flux, and it is essential to stay attentive.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>O mundo está em constante mutação e é preciso estar atento.</motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames3">
            <img src="/assets/corres/frames14.png" alt="" draggable="false" />
            <img src="/assets/corres/frames15.png" alt="" draggable="false" />
          </Frame>

          <ProjectsSlider />
        </main>
      </div>
    </>
  );
};

export default ClicksCorres;
