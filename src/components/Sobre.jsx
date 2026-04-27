const copy = {
  pt: {
    label: 'SOBRE O ESTÚDIO',
    langTag: '(PT)',
    body: 'Somos um estúdio pequeno com propósito grande. Trabalhamos em parceria com fundadores, marcas independentes e empresas que valorizam design como estratégia, não decoração.',
    stats: [
      { value: '+40', desc: 'projetos' },
      { value: '4', desc: 'anos' },
      { value: '3', desc: 'pessoas' },
    ],
  },
  en: {
    label: 'ABOUT THE STUDIO',
    langTag: '(EN)',
    body: 'We are a small studio with a big purpose. We partner with founders, independent brands, and companies that value design as strategy, not decoration.',
    stats: [
      { value: '+40', desc: 'projects' },
      { value: '4', desc: 'years' },
      { value: '3', desc: 'people' },
    ],
  },
}

export default function Sobre({ lang }) {
  const t = copy[lang]

  return (
    <section id="sobre" className="px-6 md:px-12 py-32">
      <div className="divider" style={{ marginBottom: '4rem' }} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '2px',
          rowGap: '5rem',
          alignItems: 'start',
        }}
      >
        {/* Row 1 - label / lang tag / body */}
        <span
          className="section-label"
          style={{ gridColumn: 1, gridRow: 1 }}
        >
          {t.label}
        </span>

        <span
          style={{
            gridColumn: 2,
            gridRow: 1,
            fontFamily: "'Syne Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            color: 'var(--color-muted)',
            paddingTop: '0.2rem',
          }}
        >
          {t.langTag}
        </span>

        <p
          style={{
            gridColumn: 3,
            gridRow: 1,
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
            color: 'var(--color-text)',
            lineHeight: 1.65,
            maxWidth: '42ch',
          }}
        >
          {t.body}
        </p>

        {/* Row 2 - stats each aligned to their grid column */}
        {t.stats.map((s, i) => (
          <div
            key={i}
            style={{
              gridColumn: i + 1,
              gridRow: 2,
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: 'var(--color-accent)',
                letterSpacing: '-0.02em',
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                marginTop: '0.4rem',
              }}
            >
              {s.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
