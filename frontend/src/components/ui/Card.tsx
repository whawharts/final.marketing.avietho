import type { HTMLAttributes, ReactNode } from 'react'

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div' | 'section'
  children: ReactNode
}

export function Card({ as: Component = 'article', children, className = '', ...props }: CardProps) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}
