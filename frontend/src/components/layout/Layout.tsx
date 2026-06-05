import { Outlet, useLocation } from 'react-router'
import { useLayoutEffect } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const pageClassByPath: Record<string, string> = {
  '/': 'home-page',
  '/services': 'services-page',
  '/projects': 'projects-page',
  '/contact': 'contact-page',
}

export function Layout() {
  const location = useLocation()
  useScrollReveal(location.pathname)

  useLayoutEffect(() => {
    const pageClass = pageClassByPath[location.pathname] ?? ''
    document.body.className = pageClass

    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }

    window.setTimeout(() => {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView()
      }
    }, 0)
  }, [location.pathname, location.hash])

  return (
    <>
      <Navbar />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
