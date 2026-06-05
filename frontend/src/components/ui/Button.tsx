import { Link } from 'react-router'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  to?: string
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, variant = 'primary', to, className = '', ...props }: ButtonProps) {
  const classes = ['button', `button-${variant}`, className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link className={classes} to={to} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} type="button" {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
