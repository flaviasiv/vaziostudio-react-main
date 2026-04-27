const copy = {
  pt: {
    cta: 'Tem um projeto em mente?',
    footer: 'VAZIO © 2024 - São Paulo, Brasil',
  },
  en: {
    cta: 'Got a project in mind?',
    footer: 'VAZIO © 2024 - São Paulo, Brasil',
  },
}

export default function Contato({ lang }) {
  const t = copy[lang]

  return (
    <section id="contato" className="px-6 md:px-12 pt-32 pb-16">
      <div className="divider mb-24" />

      {/* CTA block */}
      <div className="flex flex-col items-start gap-10 mb-24">
        <p
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            color: 'var(--color-accent)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: '14ch',
          }}
        >
          {t.cta}
        </p>

        <a
          href="mailto:oi@vazio.studio"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)',
            color: 'var(--color-text)',
            letterSpacing: '0.01em',
            borderBottom: '1px solid var(--color-muted)',
            paddingBottom: '4px',
            transition: 'color 0.25s ease, border-color 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--color-highlight)'
            e.currentTarget.style.borderColor = 'var(--color-highlight)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--color-text)'
            e.currentTarget.style.borderColor = 'var(--color-muted)'
          }}
        >
          oi@vazio.studio
        </a>
      </div>

      {/* Footer */}
      <div className="divider mb-8" />
      <div className="flex items-center justify-between">
        <span
          style={{
            fontFamily: "'Syne Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            color: 'var(--color-muted)',
          }}
        >
          {t.footer}
        </span>
        <span
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '1.1rem',
            color: 'var(--color-muted)',
            letterSpacing: '0.05em',
          }}
        >
          VAZIO
        </span>
      </div>
    </section>
  )
}
