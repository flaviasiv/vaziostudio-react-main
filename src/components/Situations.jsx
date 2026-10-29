import Reveal from './Reveal';
import { useLang } from '../i18n/useLang';

/* Lista tipográfica: ao passar sobre uma linha, as outras recuam (hover ligado, ref: Monopo). */
export default function Situations() {
  const { t } = useLang();
  return (
    <section className="situations container" aria-labelledby="situations-title">
      <Reveal as="h2" className="section-title">
        <span id="situations-title">{t.situations.title}</span>
      </Reveal>
      <ul className="situations__list">
        {t.situations.items.map((item, i) => (
          <li key={item.problem} className="situations__row" tabIndex={0}>
            <Reveal delay={i * 0.05} className="situations__inner">
              <p className="situations__problem">{item.problem}</p>
              <p className="situations__answer">{item.answer}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
