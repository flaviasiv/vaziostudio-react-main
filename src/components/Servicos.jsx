import { useState } from 'react'

const copy = {
  pt: {
    label: 'SERVIÇOS',
    items: [
      { num: '01', name: 'Identidade de Marca' },
      { num: '02', name: 'Design Editorial' },
      { num: '03', name: 'Embalagem & Naming' },
      { num: '04', name: 'Motion & Digital' },
    ],
  },
  en: {
    label: 'SERVICES',
    items: [
      { num: '01', name: 'Brand Identity' },
      { num: '02', name: 'Editorial Design' },
      { num: '03', name: 'Packaging & Naming' },
      { num: '04', name: 'Motion & Digital' },
    ],
  },
}

function ServiceItem({ item }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-baseline justify-between py-7"
      style={{
        borderBottom: '1px solid',
        borderColor: hovered ? 'var(--color-highlight)' : 'var(--color-muted)',
        transition: 'border-color 0.3s ease',
        opacity: hovered ? 1 : 0.7,
        transition: 'border-color 0.3s ease, opacity 0.3s ease',
      }}
    >
      <span
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
          color: 'var(--color-accent)',
          letterSpacing: '-0.01em',
        }}
      >
        {item.name}
      </span>
      <span
        style={{
          fontFamily: "'Syne Mono', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          color: hovered ? 'var(--color-highlight)' : 'var(--color-muted)',
          transition: 'color 0.3s ease',
        }}
      >
        {item.num}
      </span>
    </div>
  )
}

export default function Servicos({ lang }) {
  const t = copy[lang]

  return (
    <section id="servicos" className="px-6 md:px-12 py-32">
      <div className="divider mb-16" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '2px',
          alignItems: 'start',
        }}
      >
        <span className="section-label" style={{ gridColumn: 1, paddingTop: '1.1rem' }}>
          {t.label}
        </span>

        <div
          style={{
            gridColumn: '2 / 4',
            borderTop: '1px solid var(--color-muted)',
          }}
        >
          {t.items.map(item => (
            <ServiceItem key={item.num} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
