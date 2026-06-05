export type NavItem = {
  label: string
  to: string
}

export const navigationItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Our Services', to: '/services' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]
