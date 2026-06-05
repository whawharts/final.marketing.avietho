import type { HTMLAttributes, ReactNode } from 'react'

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export function Section({ children, className = 'section', ...props }: SectionProps) {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  )
}
