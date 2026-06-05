import { Link, NavLink } from 'react-router'
import { useEffect, useState } from 'react'
import { navigationItems } from '../../data/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 10)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen)
    return () => document.body.classList.remove('nav-open')
  }, [isOpen])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`.trim()} data-header>
      <Link className="brand-mark" to="/" aria-label="Avietho Digital Marketing home" onClick={() => setIsOpen(false)}>
        <img className="brand-logo" src="/assets/avietho-digital-logo.png" alt="Avietho Digital" />
      </Link>
      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span></span>
        <span></span>
      </button>
      <nav className={`site-nav ${isOpen ? 'is-open' : ''}`.trim()} data-nav>
        {navigationItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <Link className="site-nav-campaign" to="/contact" onClick={() => setIsOpen(false)}>
          Start a Campaign
        </Link>
      </nav>
      <Link className="nav-cta" to="/contact">
        Start a Campaign
      </Link>
    </header>
  )
}
