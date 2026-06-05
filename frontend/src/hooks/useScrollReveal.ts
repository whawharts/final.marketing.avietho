import { useEffect } from 'react'

const isInViewport = (element: Element) => {
  const rect = element.getBoundingClientRect()

  return rect.top < window.innerHeight && rect.bottom > 0
}

export function useScrollReveal(refreshKey: string) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealCards = document.querySelectorAll('.reveal-card')

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealCards.forEach((card) => card.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, revealObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    revealCards.forEach((card) => {
      if (card.classList.contains('is-visible') || isInViewport(card)) {
        card.classList.add('is-visible')
        return
      }

      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [refreshKey])
}
