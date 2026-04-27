const copy = {
  pt: {
    p1: 'Acreditamos que o melhor design\ncomeça com a pergunta certa.',
    p2: 'Trabalhamos com marcas que querem\ndizer algo de verdade.',
  },
  en: {
    p1: 'We believe the best design\nstarts with the right question.',
    p2: 'We work with brands that have\nsomething real to say.',
  },
}

export default function Manifesto({ lang }) {
  const t = copy[lang]

  return (
    <section id="manifesto" className="px-6 md:px-12 py-32">
      <div className="divider mb-16" />
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
        <p
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            color: 'var(--color-accent)',
            lineHeight: 1.25,
            whiteSpace: 'pre-line',
          }}
        >
          {t.p1}
        </p>
        <p
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            color: 'var(--color-text)',
            lineHeight: 1.25,
            whiteSpace: 'pre-line',
            opacity: 0.65,
          }}
        >
          {t.p2}
        </p>
      </div>
    </section>
  )
}
