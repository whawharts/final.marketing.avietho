import { useEffect } from 'react'

export function useServiceCategoryNav() {
  useEffect(() => {
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.services-category-nav a'))
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.getAttribute('href') ?? ''))
      .filter(Boolean) as HTMLElement[]

    if (navLinks.length === 0 || sections.length === 0) return

    const setActiveLink = (section: HTMLElement) => {
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${section.id}`)
      })
    }

    const clickCleanups = navLinks.map((link) => {
      const onClick = () => {
        const section = document.querySelector<HTMLElement>(link.getAttribute('href') ?? '')
        if (section) setActiveLink(section)
      }
      link.addEventListener('click', onClick)
      return () => link.removeEventListener('click', onClick)
    })

    if (!('IntersectionObserver' in window)) {
      return () => clickCleanups.forEach((cleanup) => cleanup())
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveLink(visible.target as HTMLElement)
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.08, 0.2] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      clickCleanups.forEach((cleanup) => cleanup())
      observer.disconnect()
    }
  }, [])
}
