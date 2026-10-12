import { ArrowUpRight } from '@phosphor-icons/react';
import Reveal from './Reveal';
import { projects } from '../data/projects';
import { useLang } from '../i18n/useLang';
import '../styles/works.css';

function WorkBody({ project, index }) {
  const { t } = useLang();
  return (
    <>
      <div className="work__media">
        <img
          src={project.image}
          width={project.width}
          height={project.height}
          alt={t.work.alt(index + 1)}
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
            {p.href ? (
              <a href={p.href} className="work">
                <WorkBody project={p} index={i} />
              </a>
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
