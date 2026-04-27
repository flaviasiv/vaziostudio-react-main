import { useState } from 'react'

const copy = {
  pt: {
    label: 'PROJETOS SELECIONADOS - 2022–2024',
    cta: 'VER PROJETO',
  },
  en: {
    label: 'SELECTED PROJECTS - 2022–2024',
    cta: 'VIEW CASE',
  },
}

const projects = [
  {
    num: '01',
    title: { pt: 'Identidade Visual', en: 'Visual Identity' },
    tag: 'Branding',
    desc: {
      pt: 'Construção de identidade do zero para uma marca independente com posicionamento premium.',
      en: 'Brand identity built from scratch for an independent label with premium positioning.',
    },
  },
  {
    num: '02',
    title: { pt: 'Campanha Editorial', en: 'Editorial Campaign' },
    tag: 'Design Editorial',
    desc: {
      pt: 'Sistema editorial completo: direção de arte, tipografia e grid para publicação impressa.',
      en: 'Full editorial system: art direction, typography, and grid for a printed publication.',
    },
  },
  {
    num: '03',
    title: { pt: 'Embalagem & Naming', en: 'Packaging & Naming' },
    tag: 'Packaging',
    desc: {
      pt: 'Naming estratégico e embalagem que comunica propósito antes das palavras.',
      en: 'Strategic naming and packaging that communicates purpose before words do.',
    },
  },
  {
    num: '04',
    title: { pt: 'Motion & Identidade', en: 'Motion & Identity' },
    tag: 'Motion Design',
    desc: {
      pt: 'Identidade em movimento para uma marca digital que vive em tela.',
      en: 'Motion identity for a digital brand that lives on screen.',
    },
  },
]

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 19 16" fill="none">
    <path
      d="M18.2071 8.89461C18.5976 8.50408 18.5976 7.87092 18.2071 7.48039L11.8431 1.11643C11.4526 0.725908 10.8195 0.725908 10.4289 1.11643C10.0384 1.50696 10.0384 2.14012 10.4289 2.53065L16.0858 8.1875L10.4289 13.8444C10.0384 14.2349 10.0384 14.868 10.4289 15.2586C10.8195 15.6491 11.4526 15.6491 11.8431 15.2586L18.2071 8.89461ZM0 9.1875L17.5 9.1875V7.1875L0 7.1875L0 9.1875Z"
      fill="currentColor"
    />
  </svg>
)

function ProjectCard({ project, lang, reverse }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '2px',
      }}
    >
      {/* Placeholder image area */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          gridColumnStart: reverse ? 1 : 2,
          aspectRatio: '4/3',
          background: hovered ? '#1A1A1A' : 'var(--color-surface)',
          transition: 'background 0.4s ease',
          position: 'relative',
          overflow: 'clip',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <span
          style={{
            fontFamily: "'Syne Mono', monospace",
            fontSize: 'clamp(6rem, 12vw, 11rem)',
            color: '#1A1A1A',
            lineHeight: 0.85,
            userSelect: 'none',
            pointerEvents: 'none',
            position: 'absolute',
            bottom: '-1rem',
            left: '-0.5rem',
            letterSpacing: '-0.05em',
          }}
          aria-hidden="true"
        >
          {project.num}
        </span>
      </div>

      {/* Info */}
      <div
        style={{
          gridColumnStart: reverse ? 2 : 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2rem 1.5rem',
          minHeight: '100%',
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.15rem',
              fontWeight: 600,
              color: 'var(--color-accent)',
              letterSpacing: '0.01em',
            }}
          >
            {project.title[lang]}
          </h2>

          <span
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              display: 'block',
              marginTop: '0.75rem',
            }}
          >
            {project.tag}
          </span>

          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.78rem',
              color: 'var(--color-muted)',
              lineHeight: 1.65,
              marginTop: '1.25rem',
              maxWidth: '28ch',
            }}
          >
            {project.desc[lang]}
          </p>
        </div>

        <button
          style={{
            marginTop: '2.5rem',
            background: 'transparent',
            border: '1px solid var(--color-muted)',
            borderRadius: '32px',
            color: 'var(--color-text)',
            fontFamily: "'Syne', sans-serif",
            fontSize: '0.68rem',
            fontWeight: 600,
            padding: '7px 20px',
            cursor: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            width: 'fit-content',
            transition: 'border-color 0.3s ease, color 0.3s ease',
            letterSpacing: '0.04em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--color-highlight)'
            e.currentTarget.style.color = 'var(--color-highlight)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--color-muted)'
            e.currentTarget.style.color = 'var(--color-text)'
          }}
        >
          <ArrowIcon />
          {copy[lang].cta}
        </button>
      </div>
    </div>
  )
}

export default function Projetos({ lang }) {
  const t = copy[lang]

  return (
    <section id="projetos" className="px-6 md:px-12 py-32">
      <div className="divider mb-16" />

      {/* Section header in 3-col grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '2px',
          marginBottom: '5rem',
        }}
      >
        <span className="section-label" style={{ gridColumnStart: 1 }}>
          WORKS
        </span>
        <span
          className="section-label"
          style={{
            gridColumnStart: 3,
            fontSize: '0.65rem',
          }}
        >
          {t.label}
        </span>
      </div>

      {/* Project cards */}
      <div
        style={{
          display: 'grid',
          rowGap: '8rem',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            lang={lang}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>
    </section>
  )
}
