import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import { useLang } from '../i18n/useLang';
import { usePageMeta } from '../utils/usePageMeta';
import { works } from '../data/works';

export default function Works() {
  const { t } = useLang();
  usePageMeta(`${t.work.indexTitle} | Vazio Design Studio`, t.work.indexIntro);
  return (
    <section id="top" className="works container" aria-labelledby="works-title">
      <h1 id="works-title" className="works__title">{t.work.indexTitle}</h1>
      <p className="works__intro">{t.work.indexIntro}</p>
      <ul className="works__list">
        {works.map((w, i) => {
          const item = t.work.items[w.slug];
          return (
            <li key={w.slug}>
              <Reveal delay={(i % 2) * 0.1} className="works__card">
                <Link to={`/works/${w.slug}`} data-cursor={t.work.cursor} className="works__link">
                  <div className="works__frame">
                    <img src={w.cover.src} width={w.cover.w} height={w.cover.h} alt={item.alts[w.cover.alt] ?? ''} loading={i < 2 ? 'eager' : 'lazy'} />
                  </div>
                  <div className="works__meta">
                    <h2>{item.name}</h2>
                    <p>{item.text}</p>
                    <span className="works__year">{[w.year, item.scope].filter(Boolean).join(' · ')}</span>
                  </div>
                  <ArrowUpRight size={24} className="works__arrow" aria-hidden="true" />
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
