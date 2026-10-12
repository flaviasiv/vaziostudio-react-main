import Reveal from './Reveal';
import { useLang } from '../i18n/useLang';
import '../styles/about.css';

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="about container" aria-labelledby="about-text">
      <Reveal as="p" className="about__statement" id="about-text">
        {t.about.statement}
      </Reveal>

      <ul className="about__services">
        {t.about.services.map((s, i) => (
          <Reveal as="li" key={s.name} delay={i * 0.07} className="about__service">
            <h3>{s.name}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
