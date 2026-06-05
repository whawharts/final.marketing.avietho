import type { ReactNode } from 'react'

type HeroProps = {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  className?: string
}

export function Hero({ eyebrow, title, children, className = 'page-hero section-black' }: HeroProps) {
  return (
    <section className={className}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  )
}
