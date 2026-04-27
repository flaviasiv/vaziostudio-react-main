import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectsSlider from '../components/ProjectsSlider';
import { fadeUp, stagger, Section, FadeUp, Frame } from '../utils/animations';
import '../styles/puraterapia.css';
import '../styles/font.css';

const PuraTerapia = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 75]);

  return (
    <>
      <Helmet>
        <title>Pura Terapia - Branding, Art Direction & Web Design | Vazio Design Studio</title>
        <meta name="description" content="Identidade visual, site institucional e automação de atendimento para a Pura Terapia®, plataforma de telemedicina especializada em cannabis medicinal." />
        <meta property="og:title" content="Pura Terapia - Branding, Art Direction & Web Design" />
        <meta property="og:description" content="Identidade visual, site institucional e automação de atendimento para a Pura Terapia®, plataforma de telemedicina especializada em cannabis medicinal." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vaziodesignstudio.com/pura-terapia" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://vaziodesignstudio.com/pura-terapia" />
      </Helmet>

      <div className="puraterapia-page">

        {/* 1. Cover */}
        <motion.div className="cover" style={{ y: yHero }}>
          <video
            src="/assets/pura-terapia/primary-logo-icon-loop-1400x600.webm"
            autoPlay preload="auto" playsInline
            webkit-playsinline="true" x-webkit-airplay="allow"
            muted loop controls={false}
            disablePictureInPicture
            style={{ WebkitTransform: 'translateZ(0)' }}
          />
        </motion.div>

        <main>

          {/* 2. Intro */}
          <Section className="about firstabout">
            <FadeUp className="aboutgrid about1" id="aboutgrid1">
              <motion.h1 variants={fadeUp}>PURA TERAPIA</motion.h1>
              <motion.h6 id="h6-m" variants={fadeUp}>2026 / BRANDING / ART DIRECTION / WEB DESIGN</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Pura Terapia® is a telemedicine platform specializing in medical cannabis.
                The challenge was to build an identity that balanced clinical credibility
                with human closeness, in a market still surrounded by stigma and misinformation.
              </motion.p>
            </FadeUp>
          </Section>
          <Section className="aboutgrid about2 firstabout2" id="aboutgrid1">
            <motion.h6 id="h6-w" variants={fadeUp}>2026 / BRANDING / ART DIRECTION / WEB DESIGN</motion.h6>
            <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
            <motion.p id="p2-1" variants={fadeUp}>
              A Pura Terapia® é uma plataforma de telemedicina especializada em cannabis medicinal. O desafio era construir uma identidade que equilibrasse credibilidade clínica e proximidade humana, em um mercado ainda cercado de estigma e desinformação.
            </motion.p>
          </Section>

          {/* 3. frame1 */}
          <Frame className="frames1">
            <img src="/assets/pura-terapia/frame1.png" alt="Pura Terapia brand application" draggable="false" />
          </Frame>

          {/* 4. // DESAFIO */}
          <Section className="about">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// CHALLENGE</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The project was born with full scope: create the brand from scratch, develop
                the institutional website, and structure an automated service flow via WhatsApp.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                O projeto nasceu com escopo completo: criar a marca do zero, desenvolver o site institucional e estruturar um fluxo de atendimento automatizado via WhatsApp.
              </motion.p>
            </FadeUp>
          </Section>

          {/* 5. logo-grid */}
          <Frame className="frames1">
            <video
              src="/assets/pura-terapia/logo-grid-ezgif.com-gif-to-webm-converter.webm"
              autoPlay preload="auto" playsInline
              webkit-playsinline="true" x-webkit-airplay="allow"
              muted loop controls={false} disablePictureInPicture
              style={{ WebkitTransform: 'translateZ(0)' }}
            />
          </Frame>

          {/* 6. // SÍMBOLO */}
          <Section className="about">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// LOGO</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The symbol is formed by two overlapping circles to express welcome, care and
                closeness. The softness of the curves conveys lightness and empathy, reinforcing
                the feeling of privacy and safety - essential pillars in the brand's health experience.
                <br /><br />
                The repetition of the form evokes balance and exchange: a symbol of care built
                as equals, where patient and professional share a common journey. Together, the
                elements subtly evoke a flower, blooming as a metaphor for care that nurtures
                and transforms.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                O símbolo é formado por dois círculos sobrepostos para expressar acolhimento, cuidado e proximidade. A suavidade das curvas transmite leveza e empatia, reforçando a sensação de privacidade e segurança - pilares essenciais na experiência de saúde da marca.
                <br /><br />
                A repetição da forma evoca equilíbrio e troca: um símbolo do cuidado construído de igual para igual, onde paciente e profissional compartilham uma jornada comum. Combinados, os elementos remetem sutilmente a uma flor,  o florescimento como metáfora de um cuidado que nutre e transforma.
              </motion.p>
            </FadeUp>
          </Section>

          {/* 7. Taglines */}
          <motion.div
            className="pt-taglines"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="pt-tagline" variants={fadeUp}>
              <img src="/assets/pura-terapia/primary-logo-icon.png" alt="" draggable="false" />
              {/* <div className="pt-tagline-texts">
                <span className="pt-tagline-en">Curves that embrace before speaking.</span>
                <span className="pt-tagline-pt">Curvas que abraçam antes de falar.</span>
              </div> */}
            </motion.div>
            <motion.div className="pt-tagline" variants={fadeUp}>
              <img src="/assets/pura-terapia/primary-logo-icon-1.png" alt="" draggable="false" />
              {/* <div className="pt-tagline-texts">
                <span className="pt-tagline-en">Two sides, one journey only.</span>
                <span className="pt-tagline-pt">Dois lados, uma jornada só.</span>
              </div> */}
            </motion.div>
            <motion.div className="pt-tagline" variants={fadeUp}>
              <img src="/assets/pura-terapia/primary-logo-icon-2.png" alt="" draggable="false" />
              {/* <div className="pt-tagline-texts">
                <span className="pt-tagline-en">Together, it flourishes.</span>
                <span className="pt-tagline-pt">Junto, floresce.</span>
              </div> */}
            </motion.div>
          </motion.div>

          {/* 8. frame2-1 */}
          <Frame className="frames1">
            <img src="/assets/pura-terapia/frame2-1.png" alt="Pura Terapia" draggable="false" />
          </Frame>

          {/* 9. frame2 */}
          <Frame className="frames1">
            <img src="/assets/pura-terapia/frame2.png" alt="Pura Terapia" draggable="false" />
          </Frame>

          {/* 10. // TIPOGRAFIA */}
          <Section className="about">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// TYPOGRAPHY</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                In the logo typography, the rounded details were designed to soften reading and
                reinforce the sense of naturalness. This choice brings a more organic and human
                aesthetic, aligned with the proposal of accessible care.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Na tipografia do logo, os detalhes arredondados na foram pensados para suavizar a leitura e reforçar a sensação de naturalidade. Essa escolha traz uma estética mais orgânica e humana, alinhada à proposta de cuidado acessível.
              </motion.p>
            </FadeUp>
          </Section>

          {/* 11. Swatches */}
          <motion.div
            className="pt-swatches-wrap"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="pt-swatches">
              <img src="/assets/pura-terapia/Rectangle 12.png" alt="" draggable="false" />
              <img src="/assets/pura-terapia/Rectangle 12-1.png" alt="" draggable="false" />
              <img src="/assets/pura-terapia/Rectangle 12-2.png" alt="" draggable="false" />
              <img src="/assets/pura-terapia/Rectangle 12-3.png" alt="" draggable="false" />
            </div>
          </motion.div>

          {/* 12. frame3 */}
          <Frame className="frames1">
            <img src="/assets/pura-terapia/frame3.png" alt="Pura Terapia brand content" draggable="false" />
          </Frame>

          {/* 13. // PALETA */}
          <Section className="about">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// PALETTE</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The palette combines institutional dark green with vibrant lime yellow, lavender and
                wine, a calculated tension between authority and lightness. Benton Sans anchors the
                headings with presence, and Inter ensures fluidity in support texts.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                A paleta combina verde escuro institucional com amarelo-limão vibrante, lavanda e vinho, tensão calculada entre autoridade e leveza. Benton Sans ancora os títulos com presença, e a Inter garante fluidez nos textos de apoio.
              </motion.p>
            </FadeUp>
          </Section>

          {/* 14. website video */}
          <Frame className="frames1">
            <video
              src="/assets/pura-terapia/pura-terapia-gif-website.webm"
              autoPlay preload="auto" playsInline
              webkit-playsinline="true" x-webkit-airplay="allow"
              muted loop controls={false} disablePictureInPicture
              style={{ WebkitTransform: 'translateZ(0)' }}
            />
          </Frame>

          {/* 15. frame4 */}
          <Frame className="frames1">
            <img src="/assets/pura-terapia/frame4.png" alt="Pura Terapia website" draggable="false" />
          </Frame>

          {/* 16. // WEBSITE */}
          <Section className="about">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// WEBSITE</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The site was developed to convert visitors into patients with minimum friction.
                White background, bold black typography and generous spacing create clean, direct
                reading, the aesthetic reflects the brand positioning: accessible, clear and trustworthy.
                <br /><br />
                The page flow guides the user in three simple steps ,schedule, receive the prescription,
                start treatment, demystifying the process and reducing entry barriers. Real testimonials,
                FAQ on medical cannabis, and lime-green CTAs distributed throughout the scroll reinforce
                trust and drive conversion.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                O site foi desenvolvido para converter visitantes em pacientes com o mínimo de atrito. Fundo branco, tipografia preta em peso bold e espaçamento generoso criam uma leitura limpa e direta, a estética reflete o posicionamento da marca: acessível, clara e confiável.
                <br /><br />
                O fluxo da página guia o usuário em três passos simples ,agende, receba a prescrição, inicie o tratamento, desmistificando o processo e reduzindo barreiras de entrada. Depoimentos reais, FAQ sobre cannabis medicinal e CTAs em verde-limão distribuídos ao longo do scroll reforçam confiança e direcionam a conversão.
              </motion.p>
            </FadeUp>
          </Section>

          {/* 17. whatsapp video */}
          <Frame className="frames1">
            <video
              src="/assets/pura-terapia/whatsapp-flow.webm"
              autoPlay preload="auto" playsInline
              webkit-playsinline="true" x-webkit-airplay="allow"
              muted loop controls={false} disablePictureInPicture
              style={{ WebkitTransform: 'translateZ(0)' }}
            />
          </Frame>

          {/* 18. // WHATSAPP */}
          <Section className="about">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// WHATSAPP</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The project also included an automated service flow via WhatsApp, mapping the most
                critical journeys to preserve the brand's welcoming tone even in automated interactions.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                O projeto incluiu também um fluxo de atendimento automatizado via WhatsApp, mapeando as jornadas mais críticas para preservar o tom acolhedor da marca mesmo nas interações automatizadas.
              </motion.p>
            </FadeUp>
          </Section>

          {/* 19. frame5 */}
          <Frame className="frames1">
            <img src="/assets/pura-terapia/frame5.png" alt="Pura Terapia WhatsApp" draggable="false" />
          </Frame>

          {/* 20. // RESULTADO */}
          <Section className="about">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// RESULT</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                A complete and cohesive system, visual identity, institutional website and service
                automation operating in the same language. Pura Terapia® went from zero to a consistent
                brand presence at every patient touchpoint.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
               Um sistema completo e coeso, identidade visual, site institucional e automação de atendimento operando na mesma linguagem. A Pura Terapia® foi do zero a uma presença de marca consistente em todos os pontos de contato com o paciente.
              </motion.p>
            </FadeUp>
          </Section>

          {/* 21. ProjectsSlider */}
          <ProjectsSlider />

        </main>
      </div>
    </>
  );
};

export default PuraTerapia;
