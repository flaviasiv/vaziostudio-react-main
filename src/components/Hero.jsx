import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';
import { useLang } from '../i18n/useLang';
import HandMark from './HandMark';

export default function Hero({ ready }) {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const state = ready ? 'show' : 'hide';

  const rise = {
    hide: { y: reduce ? 0 : '105%' },
    show: { y: 0, transition: { duration: reduce ? 0 : 1, ease: [0.16, 1, 0.3, 1] } },
  };
  const fade = {
    hide: { opacity: 0, y: reduce ? 0 : 16 },
    show: (d) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
    }),
  };

  return (
    <section id="top" className="hero container">
      <div className="hero__hand-fallback" aria-hidden="true">
        <HandMark />
      </div>
      <h1 className="hero__title">
        <span className="hero__mask">
          <motion.span variants={rise} initial="hide" animate={state} className="hero__text">
            {t.hero.title}
          </motion.span>
        </span>
      </h1>
      <div className="hero__foot">
        <motion.p className="hero__sub" custom={0.35} variants={fade} initial="hide" animate={state}>
          {t.hero.sub}
        </motion.p>
        <motion.div className="hero__ctas" custom={0.5} variants={fade} initial="hide" animate={state}>
          <a href="#contact" className="btn btn--solid">
            {t.cta}
            <ArrowRight size={18} weight="regular" aria-hidden="true" />
          </a>
          <a href="#work" className="btn btn--line">
            {t.hero.work}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
