import { useEffect } from 'react'

export function useIdentityCards() {
  useEffect(() => {
    const section = document.querySelector('[data-identity-section]')
    const portraits = section?.querySelector('[data-identity-portraits]')
    const cards = Array.from(section?.querySelectorAll<HTMLElement>('[data-identity-segment]') ?? [])

    if (!section || !portraits || cards.length === 0) return

    let pinnedSegment: string | null = null
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    const setActiveSegment = (segment: string | null = null) => {
      cards.forEach((card) => {
        const isActive = card.dataset.identitySegment === segment
        card.classList.toggle('is-active', isActive)
        card.setAttribute('aria-pressed', String(isActive))
      })
      portraits.classList.toggle('identity-portrait-group-active', Boolean(segment))
    }

    const cleanups = cards.flatMap((card) => {
      const segment = card.dataset.identitySegment ?? null
      const onMouseEnter = () => canHover && setActiveSegment(segment)
      const onFocus = () => setActiveSegment(segment)
      const onClick = () => {
        if (canHover) {
          setActiveSegment(segment)
          return
        }
        pinnedSegment = pinnedSegment === segment ? null : segment
        setActiveSegment(pinnedSegment)
      }

      card.addEventListener('mouseenter', onMouseEnter)
      card.addEventListener('focus', onFocus)
      card.addEventListener('click', onClick)

      return [
        () => card.removeEventListener('mouseenter', onMouseEnter),
        () => card.removeEventListener('focus', onFocus),
        () => card.removeEventListener('click', onClick),
      ]
    })

    const onMouseLeave = () => canHover && setActiveSegment()
    const onFocusOut = () => {
      window.setTimeout(() => {
        if (!portraits.contains(document.activeElement)) {
          setActiveSegment(canHover ? null : pinnedSegment)
        }
      }, 0)
    }

    portraits.addEventListener('mouseleave', onMouseLeave)
    portraits.addEventListener('focusout', onFocusOut)

    return () => {
      cleanups.forEach((cleanup) => cleanup())
      portraits.removeEventListener('mouseleave', onMouseLeave)
      portraits.removeEventListener('focusout', onFocusOut)
    }
  }, [])
}

export function useTeamCards() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-team-card]'))
    if (cards.length === 0) return

    const grid = cards[0].closest('.team-grid')
    const toggleCard = (card: HTMLElement) => {
      const willActivate = !card.classList.contains('is-active')

      cards.forEach((item) => {
        const isActive = item === card && willActivate
        item.classList.toggle('is-active', isActive)
        item.setAttribute('aria-pressed', String(isActive))
      })
      grid?.classList.toggle('has-active-card', willActivate)
    }

    const cleanups = cards.flatMap((card) => {
      const onClick = () => toggleCard(card)
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          toggleCard(card)
        }
      }

      card.addEventListener('click', onClick)
      card.addEventListener('keydown', onKeyDown)

      return [
        () => card.removeEventListener('click', onClick),
        () => card.removeEventListener('keydown', onKeyDown),
      ]
    })

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])
}
