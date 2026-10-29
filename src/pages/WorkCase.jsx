import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import Media from '../components/Media';
import Reveal from '../components/Reveal';
import { useLang } from '../i18n/useLang';
import { usePageMeta } from '../utils/usePageMeta';
import { findWork, works } from '../data/works';

export default function WorkCase() {
  const { slug } = useParams();
  const { t } = useLang();
  const work = findWork(slug);
  const item = work ? t.work.items[work.slug] : null;
  usePageMeta(item ? `${item.name} | Vazio Design Studio` : t.meta.title, item ? item.summary : t.meta.description);

  if (!work) return <Navigate to="/works" replace />;

  const next = works[(works.indexOf(work) + 1) % works.length];
  const nextItem = t.work.items[next.slug];

  return (
    <article id="top" className="case">
      <header className="case__head container">
        <Link to="/works" className="case__back">
          <ArrowLeft size={18} aria-hidden="true" />
          {t.work.back}
        </Link>
        <h1 className="case__title">{item.name}</h1>
        <div className="case__facts">
          <p className="case__summary">{item.summary}</p>
          <dl className="case__meta">
            {work.year && (
              <div>
                <dt>{t.work.year}</dt>
                <dd>{work.year}</dd>
              </div>
            )}
            <div>
              <dt>{t.work.scope}</dt>
              <dd>{item.scope}</dd>
            </div>
          </dl>
          {work.href && (
            <a href={work.href} target="_blank" rel="noopener noreferrer" className="btn btn--line">
              {t.work.visit}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </header>

      <div className="case__body container">
        <Media items={[work.hero]} alts={item.alts} eager />
        {work.blocks.map((b, i) => {
          if (b.type === 'media') {
            return (
              <Reveal key={i}>
                <Media items={b.items} alts={item.alts} />
              </Reveal>
            );
          }
          const s = item.sections[b.key];
          return (
            <Reveal key={i} className="case__text">
              <h2>{s.label}</h2>
              <div>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>

      <Link to={`/works/${next.slug}`} className="case__next container" data-cursor={t.work.cursor}>
        <span>{t.work.next}</span>
        <strong>
          {nextItem.name}
          <ArrowRight size={40} aria-hidden="true" />
        </strong>
      </Link>
    </article>
  );
}
