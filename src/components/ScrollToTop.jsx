import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router doesn't reset scroll position on navigation — do it manually.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 'instant', not 'auto' — html has scroll-behavior: smooth set
    // globally, which would otherwise animate this jump
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}