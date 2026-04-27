import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectsSlider from '../components/ProjectsSlider';
import { fadeUp, Section, FadeUp, Frame } from '../utils/animations';
import '../styles/astropay.css';
import '../styles/font.css';

const AstroPay = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 75]);

  return (
    <>
      <Helmet>
        <title>AstroPay - Motion Graphics & Art Direction | Vazio Design Studio</title>
        <meta name="description" content="Motion Graphics and Art Direction for AstroPay, a global digital payments company based in London with users across more than 150 countries, known for connecting people and businesses through fast, secure and accessible solutions." />
        <meta property="og:title" content="AstroPay - Motion Graphics & Art Direction" />
        <meta property="og:description" content="Motion Graphics for AstroPay, a global digital payments company connecting people and businesses through secure solutions." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.vaziodesignstudio.com/astropay" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.vaziodesignstudio.com/astropay" />
      </Helmet>

      <div className="astropay-page">
        <motion.div className="cover" style={{ y: yHero }}>
          <video src="/assets/astropay/ASTROPAY_INTRO.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
        </motion.div>

        <main>
          {/* INTRODUÇÃO */}
          <div className="aboutcontainer container">
            <Section className="firstabout about">
              <FadeUp className="aboutgrid about1" id="aboutgrid1">
                <motion.h1 variants={fadeUp}>ASTROPAY</motion.h1>
                <motion.h6 className='h6as' id="h6-m" variants={fadeUp}>2025 / MOTION GRAPHICS / SENIOR DESIGNER</motion.h6>
                <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
                <motion.p className="about1" id="about1" variants={fadeUp}>
                  AstroPay is a global digital payments company with users across more than 150 countries. Headquartered in London, it offers solutions like prepaid cards, local payment methods and a digital wallet. The brand focuses on connecting people and businesses through fast, secure and accessible transactions.
                </motion.p>
              </FadeUp>
            </Section>

            <Section className="aboutgrid about2" id="aboutgrid1">
              <motion.h6 id="h6-w" variants={fadeUp}>2025 / MOTION GRAPHICS / SENIOR DESIGNER</motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p id="p2-1" variants={fadeUp}>
                A AstroPay é uma empresa global de pagamentos digitais, com presença em diversos mercados e usuários em mais de 150 países. Sediada em Londres, oferece soluções como cartões pré-pagos, pagamentos locais e carteiras digitais. Seu foco é conectar pessoas e negócios por meio de transações rápidas, seguras e acessíveis.
              </motion.p>
            </Section>
          </div>

          <Frame className="frames1">
            <video src="/assets/astropay/ap-portifa-hero2.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          {/* MOTION PLAYBOOK */}
          <Section className="about container section-motion-playbook">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>//MOTION PLAYBOOK</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The Motion Playbook was created to support multiple departments at AstroPay while keeping visual consistency and speed. It includes templates and small prebuilt scenes such as text animations, intros, transitions and outros. This system makes it possible to produce videos at scale in three languages with quality and efficiency.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                O Motion Playbook nasceu da necessidade de atender múltiplos setores da AstroPay, garantindo consistência visual e agilidade. Ele reúne templates e microcenas pré-montadas; animações de texto, intros, transições, encerramentos, que permitem produzir vídeos em escala sempre em três idiomas, mantendo padrão, velocidade e qualidade.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="motion-grid-row">
            <div className="frames1 grid-single">
              <img src="/assets/astropay/hero2.gif" alt="Motion playbook animation" />
            </div>
          </Frame>

          <Frame className="motion-grid-row">
            <div className="frames1 grid-two">
              <img src="/assets/astropay/hero3.gif" alt="Motion playbook animation" />
              <img src="/assets/astropay/hero4.gif" alt="Motion playbook animation" />
            </div>
          </Frame>

          <Frame className="frames1 grid-full">
            <img src="/assets/astropay/hero5.gif" alt="Motion playbook animation" />
            <video src="/assets/astropay/hero6.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          {/* SOCIAL & PAID MEDIA */}
          <Section className="about container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>//SOCIAL & PAID MEDIA</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Some of my favorite animations produced in 2025. These pieces were created for different platforms, combining dynamism, clarity and strong visual identity. The goal is to deliver short, impactful and performance-driven videos that help expand the brand's reach in global campaigns.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Algumas das minhas animações favoritas produzidas em 2025. São peças criadas para diferentes plataformas, combinando dinamismo, clareza e identidade visual. O objetivo é entregar vídeos curtos, impactantes e otimizados para performance, ampliando o alcance da marca em campanhas globais.
              </motion.p>
            </FadeUp>
          </Section>

          <div className="mw">
            <Frame className="frames1 grid-left">
              <video src="/assets/astropay/hero7.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
              <video src="/assets/astropay/hero8.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            </Frame>
            <Frame className="frames1 grid-right">
              <video src="/assets/astropay/hero9.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
              <video src="/assets/astropay/hero10.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            </Frame>
            <Frame className="frames1 grid-left">
              <video src="/assets/astropay/hero11.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
              <video src="/assets/astropay/hero12.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            </Frame>
            <Frame className="frames1 grid-right">
              <video src="/assets/astropay/hero14.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
              <video src="/assets/astropay/hero13.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            </Frame>
            <Frame className="frames1 grid-left gridimgs">
              <img src="/assets/astropay/hero15.png" alt="" />
              <img src="/assets/astropay/hero16.png" alt="" />
            </Frame>
            <Frame className="frames1 grid-right vfull">
              <video src="/assets/astropay/hero17.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            </Frame>
            <Frame className="frames1 grid-left grid-t">
              <video className='videosm' src="/assets/astropay/hero18.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
              <video className='videosx' src="/assets/astropay/hero19.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            </Frame>
          </div>

          {/* EDUCATIONAL BRAND TUTORIALS */}
          <Section className="about container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>//EDUCATIONAL BRAND TUTORIALS</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                AstroPay has a strong educational approach to support its users. Every time a new feature is released, we create tutorials that guide people step by step. These videos help reduce questions, improve the overall experience and make the app easier to understand for all audiences.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                A AstroPay possui um forte compromisso educacional com seus usuários. Sempre que uma nova funcionalidade é lançada, criamos tutoriais claros e diretos que explicam o passo a passo. Esses conteúdos ajudam a reduzir dúvidas, melhorar a experiência e tornar o uso do app mais intuitivo para todos os públicos.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames4-f">
            <video src="/assets/astropay/ASTROPAY_DEEL_WITHDRAW_9x16_COP (2).mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <video src="/assets/astropay/TRANSFER_USDT_9x16_ES.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <video src="/assets/astropay/LAUNCHING_CRYPTO_GLOBAL_9x16_6s.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <video src="/assets/astropay/USDT_TUTORIAL_9x16_LATAM.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          {/* SALES TEAM & GROWTH */}
          <Section className="about container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>//SALES TEAM & GROWTH</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Institutional videos for booths and events, along with promotional materials tailored for B2B. These are strategic pieces designed to present products, use cases and business opportunities with clarity, impact and consistent visual alignment.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Vídeos institucionais para estandes e eventos, além de materiais promocionais voltados ao B2B. São conteúdos estratégicos que apresentam produtos, cases e oportunidades de negócio com clareza, impacto e alinhamento visual.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1 f-mt">
            <video src="/assets/astropay/hero20.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Frame className="frameimg">
            <img className='frameimgimg' src="/assets/astropay/img_1531.jpg" alt="" />
            <video src="/assets/astropay/hero21.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <ProjectsSlider />
        </main>
      </div>
    </>
  );
};

export default AstroPay;
