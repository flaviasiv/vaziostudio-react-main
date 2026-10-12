import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import Reveal from './Reveal';
import { projects } from '../data/projects';
import { useLang } from '../i18n/useLang';
import '../styles/works.css';

function WorkBody({ project, index }) {
  const { t } = useLang();
  const alt = t.cases[project.slug]?.cardAlt ?? t.work.alt(index + 1);
  return (
    <>
      <div className="work__media">
        <img
          src={project.image}
          width={project.width}
          height={project.height}
          alt={alt}
          loading="lazy"
          draggable="false"
        />
      </div>
      <div className="work__caption">
        <h3>{project.title || t.work.placeholder}</h3>
        <span className="work__category">{t.work.categories[project.category]}</span>
        <ArrowUpRight className="work__arrow" size={20} aria-hidden="true" />
      </div>
    </>
  );
}

export default function Works() {
  const { t } = useLang();
  return (
    <section id="work" className="works container" aria-labelledby="work-title">
      <Reveal as="h2" className="works__title" id="work-title">
        {t.work.title}
      </Reveal>

      <div className="works__grid">
        {projects.map((p, i) => (
          <Reveal key={p.id} className="work-slot">
            {p.slug ? (
              <Link to={`/work/${p.slug}`} className="work">
                <WorkBody project={p} index={i} />
              </Link>
            ) : (
              <article className="work" tabIndex={0}>
                <WorkBody project={p} index={i} />
              </article>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
