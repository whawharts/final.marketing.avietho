import { Link } from 'react-router'

type CTASectionProps = {
  eyebrow: string
  title: string
  body: string
  primary: { label: string; to: string }
  secondary: { label: string; to: string }
  className?: string
}

export function CTASection({ eyebrow, title, body, primary, secondary, className = '' }: CTASectionProps) {
  return (
    <section className={`section final-cta section-black ${className}`.trim()}>
      <div className="container cta-panel">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="button-row">
          <Link className="button button-primary" to={primary.to}>{primary.label}</Link>
          <Link className="button button-secondary" to={secondary.to}>{secondary.label}</Link>
        </div>
      </div>
    </section>
  )
}
