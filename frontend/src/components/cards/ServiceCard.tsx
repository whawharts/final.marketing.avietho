import type { ServicePanel, ServiceRow } from '../../data/services'
import { useState } from 'react'

export function ServiceAccordion({ rows }: { rows: ServiceRow[] }) {
  const [activeId, setActiveId] = useState(rows[0]?.id ?? '')

  return (
    <div className="service-row-list">
      {rows.map((row) => {
        const isActive = activeId === row.id
        return (
          <article key={row.id} className={`service-row reveal-card ${isActive ? 'is-active' : ''}`.trim()} data-service-row>
            <button type="button" aria-expanded={isActive} onClick={() => setActiveId(isActive ? '' : row.id)}>
              <span>{row.number}</span><strong>{row.label}</strong><i aria-hidden="true">&rarr;</i>
            </button>
            <div><h3>{row.title}</h3><p>{row.body}</p></div>
          </article>
        )
      })}
    </div>
  )
}

export function ServiceCard({ item }: { item: ServicePanel }) {
  return (
    <article className="reveal-card" tabIndex={0}>
      <span>{item.number}</span>
      <h3>{item.title}</h3>
      <strong>{item.subtitle}</strong>
      <p>{item.body}</p>
    </article>
  )
}

