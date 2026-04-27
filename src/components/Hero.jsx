const copy = {
  pt: {
    label: 'EST. 2021 - SÃO PAULO, BR',
    subtitle: 'Estúdio de design que cria\nmarcas com intenção.',
    cta: '→ Ver projetos',
  },
  en: {
    label: 'EST. 2021 - SÃO PAULO, BR',
    subtitle: 'A design studio that builds\nbrands with intention.',
    cta: '→ View projects',
  },
}

const letters = ['V', 'A', 'Z', 'I', 'O']

export default function Hero({ lang }) {
  const t = copy[lang]

  return (
    <section
      id="hero"
      style={{ minHeight: '100svh' }}
      className="relative flex flex-col justify-between px-6 md:px-12 pt-40 pb-16"
    >
      {/* Label */}
      <span
        className="section-label fade-up"
        style={{ animationDelay: '0.1s' }}
      >
        {t.label}
      </span>

      {/* Giant VAZIO */}
      <div className="flex-1 flex items-center justify-center py-8">
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(18vw, 22vw, 308px)',
            lineHeight: 1,
            letterSpacing: '-0.01em',
            color: 'var(--color-accent)',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
          aria-label="VAZIO"
        >
          {letters.map((l, i) => (
            <span
              key={i}
              className="hero-letter"
              style={{ animationDelay: `${0.05 + i * 0.08}s` }}
            >
              {l}
            </span>
          ))}
        </h1>
      </div>

      {/* Subtitle + CTA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <p
          className="fade-up"
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--color-text)',
            whiteSpace: 'pre-line',
            lineHeight: 1.35,
            animationDelay: '0.55s',
          }}
        >
          {t.subtitle}
        </p>

        <a
          href="#projetos"
          className="fade-up group flex items-center gap-3 self-start md:self-auto"
          style={{
            fontFamily: "'Syne Mono', monospace",
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
            color: 'var(--color-highlight)',
            animationDelay: '0.7s',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          {t.cta}
        </a>
      </div>
    </section>
  )
}
