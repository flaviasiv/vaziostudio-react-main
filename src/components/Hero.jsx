import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from '@phosphor-icons/react';
import Face from './Face';
import { useLang } from '../i18n/useLang';
import '../styles/hero.css';

const MotionLink = motion.create(Link);

export default function Hero({ ready }) {
  const { t } = useLang();
  const lines = t.hero.lines;
  const reduce = useReducedMotion();
  const state = ready ? 'show' : 'hide';

  const line = {
    hide: { y: reduce ? 0 : '110%' },
    show: (i) => ({
      y: 0,
      transition: { duration: reduce ? 0 : 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
    }),
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
    <section id="hero" className="hero container">
      <div className="hero__main">
      <h1 className="hero__title" aria-label={lines.join(' ')}>
        {lines.map((text, i) => (
          <span className="hero__line" key={text} aria-hidden="true">
            <motion.span custom={i} variants={line} initial="hide" animate={state}>
              {text}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div className="hero__face" custom={0.5} variants={fade} initial="hide" animate={state}>
        <Face alt={t.hero.faceAlt} />
      </motion.div>
      </div>

      <div className="hero__foot">
        <motion.p className="hero__sub" custom={0.45} variants={fade} initial="hide" animate={state}>
          {t.hero.sub}
        </motion.p>
        <MotionLink
          to={{ hash: '#work' }}
          className="hero__cta"
          custom={0.6}
          variants={fade}
          initial="hide"
          animate={state}
        >
          {t.hero.cta}
          <ArrowDown size={18} weight="regular" aria-hidden="true" />
        </MotionLink>
      </div>
    </section>
  );
}
