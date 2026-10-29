import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react';
import '@fontsource/pt-serif/400.css';
import '@fontsource-variable/public-sans';
import '@fontsource/oswald/700.css';
import '@fontsource-variable/dm-sans';
import Reveal from '../components/Reveal';
import { useLang } from '../i18n/useLang';
import '../styles/case.css';

export default function Case() {
  const { slug } = useParams();
  const { t } = useLang();
  const c = t.cases[slug];
  const ui = t.caseUi;

  if (!c) return <Navigate to="/" replace />;

  const base = `/work/${slug}`;

  return (
    <article className="case">
      <header className="case__head container">
        <Link to={{ pathname: '/', hash: '#work' }} className="case__back">
          <ArrowLeft size={18} aria-hidden="true" />
          {ui.back}
        </Link>
        <Reveal as="h1" className="case__title">{c.title}</Reveal>
        <Reveal as="p" className="case__tagline" delay={0.08}>{c.tagline}</Reveal>
      </header>

      <Reveal className="case__hero container">
        <img src={`${base}/hero.webp`} width="1440" height={c.heroHeight ?? 800} alt={c.heroAlt} />
      </Reveal>

      <Reveal as="dl" className="case__meta container">
        <div>
          <dt>{ui.client}</dt>
          <dd>{c.client}</dd>
        </div>
        <div>
          <dt>{ui.services}</dt>
          <dd>
            {c.services.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </dd>
        </div>
        <div>
          <dt>{ui.year}</dt>
          <dd>{c.year}</dd>
        </div>
        <div>
          <dt>{ui.languages}</dt>
          <dd>{c.languages}</dd>
        </div>
      </Reveal>

      <section className="case__intro container">
        <Reveal as="p" className="case__lead">{c.intro}</Reveal>
        <Reveal delay={0.1}>
          <a href={c.url} className="case__visit" target="_blank" rel="noopener noreferrer">
            {ui.visit} {c.urlLabel}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <section className="case__brief container" aria-labelledby="case-brief">
        <Reveal as="h2" id="case-brief">{c.brief.title}</Reveal>
        <Reveal as="p" delay={0.08}>{c.brief.text}</Reveal>
      </section>

      <section className="case__concept container" aria-labelledby="case-concept">
        <Reveal as="h2" id="case-concept" className="case__concept-title">{c.concept.title}</Reveal>
        <Reveal as="p" className="case__statement">{c.concept.statement}</Reveal>
        <Reveal className="case__concept-media">
          <img src={`${base}/approach.webp`} width="1440" height={c.concept.imageHeight ?? 820} alt={c.concept.imageAlt} loading="lazy" />
        </Reveal>
        <Reveal as="p" className="case__concept-text">{c.concept.text}</Reveal>
      </section>

      <section className="case__identity container" aria-labelledby="case-identity">
        <Reveal as="h2" id="case-identity">{c.identity.title}</Reveal>

        <p className="case__label">{ui.palette}</p>
        <ul className="swatches">
          {c.identity.swatches.map((s, i) => (
            <Reveal
              as="li"
              key={s.hex}
              delay={i * 0.05}
              className={`swatch${s.dark ? ' swatch--ink' : ''}`}
              style={{ '--swatch': s.hex }}
            >
              <span className="swatch__name">{s.name}</span>
              <span className="swatch__hex">{s.hex}</span>
            </Reveal>
          ))}
        </ul>

        <p className="case__label">{ui.type}</p>
        <ul className="specimens">
          {c.identity.fonts.map((f) => (
            <Reveal as="li" key={f.name} className="specimen">
              <span className="specimen__glyph" style={{ fontFamily: f.family }} aria-hidden="true">Aa</span>
              <span className="specimen__name">{f.name}</span>
              <span className="specimen__role">{f.role}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="case__site container" aria-labelledby="case-site">
        <Reveal as="h2" id="case-site">{c.site.title}</Reveal>
        <div className="shots">
          {c.site.shots.map((s) => (
            <Reveal as="figure" key={s.id} className="shot">
              <div className="shot__media">
                <img
                  src={`${base}/${s.id}.webp`}
                  width={s.width}
                  height={s.height}
                  alt={ui.screenshotAlt(c.title, s.caption)}
                  loading="lazy"
                />
              </div>
              <figcaption>{s.caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="case__build container" aria-labelledby="case-build">
        <Reveal as="h2" id="case-build">{c.build.title}</Reveal>
        <ul className="build">
          {c.build.groups.map((g, i) => (
            <Reveal as="li" key={g.name} delay={i * 0.06} className="build__item">
              <h3>{g.name}</h3>
              <p>{g.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <div className="case__end container">
        <a href={c.url} className="case__visit" target="_blank" rel="noopener noreferrer">
          {ui.visit} {c.urlLabel}
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
        <Link to={{ pathname: '/', hash: '#work' }} className="case__back">
          <ArrowLeft size={18} aria-hidden="true" />
          {ui.back}
        </Link>
      </div>
    </article>
  );
}
