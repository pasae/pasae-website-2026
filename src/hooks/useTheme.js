import { useEffect, useState } from 'react'

const STORAGE_KEY = 'pasae-theme'

function getInitialTheme() {
  // index.html sets this on <html> before React even loads, so read it
  // back rather than recomputing — keeps this in sync with that script
  // and avoids a light/dark flash on mount.
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return [theme, toggleTheme]
}
