import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import ProjectsSlider from '../components/ProjectsSlider';
import { fadeUp, Section, FadeUp, Frame } from '../utils/animations';
import '../styles/buddy.css';
import '../styles/font.css';

const BuddyNutrition = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 75]);

  return (
    <>
      <Helmet>
        <title>Buddy Nutrition - Branding, Packaging & Design System | Vazio Design Studio</title>
        <meta name="description" content="Branding, Packaging, and Design System for Buddy Nutrition, a canine supplement brand that creates high-quality formulas with personalized recommendations for pet health and well-being." />
        <meta property="og:title" content="Buddy Nutrition - Branding, Packaging & Design System" />
        <meta property="og:description" content="Complete branding project for Buddy Nutrition, a canine supplement brand with personalized recommendations." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.vaziodesignstudio.com/buddynutrition" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.vaziodesignstudio.com/buddynutrition" />
      </Helmet>

      <div className='buddy-page'>
        <motion.div className="cover" style={{ y: yHero }}>
          <video src="/assets/buddy/01-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
        </motion.div>

        <main>
          <div className="aboutcontainer container">
            <Section className="firstabout about">
              <FadeUp className="aboutgrid about1" id="aboutgrid1">
                <motion.h1 variants={fadeUp}>
                  BUDDY <br />
                  NUTRITION
                </motion.h1>
                <motion.h6 id="h6-m" variants={fadeUp}>2022 / BRANDING / PACKAGING / WEBSITE / DESIGN SYSTEM / ART DIRECTION</motion.h6>
                <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
                <motion.p className="about1" id="about1" variants={fadeUp}>
                  Buddy develops canine supplements with the best possible formulas and makes personalized recommendations so you can easily learn how to take care of your pet's health and well-being, his takes into account their breed, age, health history, and what their owners most enjoy doing together.
                </motion.p>
              </FadeUp>
            </Section>

            <Section className="aboutgrid about2" id="aboutgrid1">
              <motion.h6 id="h6-w" variants={fadeUp}>2022 / BRANDING / PACKAGING / WEBSITE / DESIGN SYSTEM / ART DIRECTION</motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p id="p2-1" variants={fadeUp}>
                A Buddy desenvolve suplementos caninos com as melhores fórmulas possíveis e faz recomendações personalizadas para que você descubra de um jeito descomplicado como cuidar da saúde e bem estar do seu bichinho, levando em conta a sua raça, idade, histórico de saúde e o que os donos mais gostam de fazer juntos.
              </motion.p>
            </Section>
          </div>

          <Frame className="frames1 frames1-sm">
            <video className="vd-br" src="/assets/buddy/02-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Frame className="frames1">
            <video className="img1" src="/assets/buddy/03-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// CHALLENGE</motion.h6>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Trabalhando em conjunto com o time de pesquisa na fundação da marca, descobrimos que embora o cuidado com os pets se equiparam aos cuidados com um membro da família o consumo de suplementação canina ainda é fortemente restrita a indicação de veterinários/profissionais da saúde.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.p variants={fadeUp}>
                Working together with the research team on the brand foundation, we discovered that although pet care is considered on par with family member care, the consumption of canine supplements is still strongly restricted to recommendations from veterinarians/health professionals.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1 frames1-1">
            <video src="/assets/buddy/04-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// SOLUTION</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                I started with the hypothesis that if we had a simple and educational visual in the brand's DNA, we could reduce this credibility barrier to some extent. These characteristics are present in the colors, elements, and product names.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Parti da hipótese de que se tivéssemos um visual simples e didático no DNA da marca, reduziríamos em certa fração esse bloqueio de credibilidade. Essas características estão presente nos tons, elementos e nome dos produtos.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames-l">
            <video className="video-r" src="/assets/buddy/05-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Swiper
            className="mySwiper2"
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            slidesPerView="auto"
            speed={1000}
            freeMode={true}
            centeredSlides={true}
            modules={[Autoplay, FreeMode]}
          >
            <SwiperSlide className="swiper2"><img src="/assets/buddy/swip1.png" alt="" /></SwiperSlide>
            <SwiperSlide className="swiper2"><img src="/assets/buddy/swip2.png" alt="" /></SwiperSlide>
            <SwiperSlide className="swiper2"><img src="/assets/buddy/swip3.png" alt="" /></SwiperSlide>
            <SwiperSlide className="swiper2"><img src="/assets/buddy/swip4.png" alt="" /></SwiperSlide>
            <SwiperSlide className="swiper2"><img src="/assets/buddy/swip5.png" alt="" /></SwiperSlide>
            <SwiperSlide className="swiper2"><img src="/assets/buddy/swip6.png" alt="" /></SwiperSlide>
          </Swiper>

          <Section className="about tipografia tipo-m container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 className="h-i" id="h-i" variants={fadeUp}>
                <video src="/assets/buddy/06-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
                <br />
                <label htmlFor="h-i">(maus exemplos vigentes no mercado)</label>
              </motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Product naming is 100% clear, which facilitates understanding of what the product is—especially compared to existing pet health products on the market.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h6 variants={fadeUp}></motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>Nomenclatura de produtos 100% clara que facilita o entendimento do que se trata o produto - principalmente em comparação com produtos de saúde pet vigentes no mercado.</motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <video src="/assets/buddy/07-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Frame className="frames3">
            <img src="/assets/buddy/frame1.png" alt="" draggable="false" />
            <img src="/assets/buddy/frame2.png" alt="" draggable="false" />
          </Frame>

          <Frame className="frames3">
            <video className="gif-b" src="/assets/buddy/08-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <img src="/assets/buddy/frame4.png" alt="" draggable="false" />
          </Frame>

          <Frame className="frames3">
            <img src="/assets/buddy/frame5.png" alt="" draggable="false" />
            <video className="gif-b" src="/assets/buddy/09-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Section className="about tipografia container about-m-bd">
            <FadeUp className="aboutgrid about-m-bd">
              <motion.h6 variants={fadeUp}></motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Consistency in the colors of each product and their specificities is crucial to maintaining the concept of identification intact. This requires careful and close monitoring with all parties involved in the project. <br />
                <br />A dominant color for each product organically results in a cheerful and friendly color palette.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                A fidelidade nos tons de cada produto e suas especificidades é fundamental para que o conceito de identificação se mantenha intacto. Isso demanda um acompanhamento cauteloso e em proximidade com todas as pontas envolvidas no projeto.
                <br /><br />
                Uma cor mandante para cada produto resulta organicamente uma paleta de cores alegre e amigável.
              </motion.p>
            </FadeUp>
          </Section>

          <Swiper
            className="mySwiper2"
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            slidesPerView="auto"
            speed={1000}
            freeMode={true}
            centeredSlides={true}
            modules={[Autoplay, FreeMode]}
          >
            <SwiperSlide className="swiper2"><img src="/assets/buddy/1swip1.png" alt="" /></SwiperSlide>
            <SwiperSlide className="swiper2"><img src="/assets/buddy/1swip2.png" alt="" /></SwiperSlide>
            <SwiperSlide className="swiper2"><img src="/assets/buddy/1swip3.png" alt="" /></SwiperSlide>
            <SwiperSlide className="swiper2"><img src="/assets/buddy/1swip4.png" alt="" /></SwiperSlide>
            <SwiperSlide className="swiper2"><img src="/assets/buddy/1swip5.png" alt="" /></SwiperSlide>
            <SwiperSlide className="swiper2"><img src="/assets/buddy/1swip6.png" alt="" /></SwiperSlide>
          </Swiper>

          <div className="cred">
            <p>(MOCKUPS POR <a href="https://www.instagram.com/jaqrine/">JAQUELINE ZACCARI)</a></p>
          </div>

          <Section className="about container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>//VISUAL SYSTEM</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Based on the most common design system structures for interfaces, I developed a restricted visual system that grants autonomy to other departments whose daily demands used to consume a significant amount of time—despite being simple and lacking visual challenges, they took up execution time.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Baseado nas estruturas mais comuns de design system voltado para interfaces, desenvolvi um sistema visual restrito que dá autonomia para os demais setores cuja as demandas de dia-a-dia costumavam tomar grande parte do dia - apesar de simples e sem desafios visuais, tomavam tempo de execução.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1 frames2">
            <video src="/assets/buddy/10-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
            <video src="/assets/buddy/11-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <Frame className="frames4">
            <video src="/assets/buddy/12-buddy.mp4" autoPlay preload="auto" playsInline webkit-playsinline="true" x-webkit-airplay="allow" muted loop controls={false} disablePictureInPicture style={{ WebkitTransform: 'translateZ(0)' }}></video>
          </Frame>

          <div className="cred">
            <p>(ILUSTRAÇÕES POR <a href="https://www.instagram.com/jaqrine/">JAQUELINE ZACCARI)</a></p>
          </div>

          <Frame className="frames5">
            <img src="/assets/buddy/frame6.png" alt="" draggable="false" />
          </Frame>

          <Frame className="frames1">
            <img src="/assets/buddy/fr8.png" alt="" draggable="false" />
          </Frame>

          <ProjectsSlider />
        </main>
      </div>
    </>
  );
};

export default BuddyNutrition;
