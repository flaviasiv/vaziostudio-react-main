import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import Reveal from './Reveal';
import { useLang } from '../i18n/useLang';
import { works } from '../data/works';

export default function Work() {
  const { t } = useLang();
  const featured = works.filter((w) => w.featured);
  return (
    <section id="work" className="work container" aria-labelledby="work-title">
      <h2 id="work-title" className="section-title">{t.work.title}</h2>
      <div className="work__grid">
        {featured.map((w, i) => {
          const item = t.work.items[w.slug];
          return (
            <Reveal key={w.slug} delay={i * 0.1} className={`work__tile work__tile--${w.tile.cls}`}>
              <Link to={`/works/${w.slug}`} data-cursor={t.work.cursor} className="work__link">
                <div className="work__frame">
                  <img src={w.tile.src} width={w.tile.w} height={w.tile.h} alt={item.alts[w.tile.alt]} loading="lazy" />
                </div>
                <div className="work__meta">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                  <span className="work__visit">
                    {t.work.cursor}
                    <ArrowRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
      <Link to="/works" className="btn btn--line work__all">
        {t.work.all}
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </section>
  );
}
