import { useLayoutEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/brand/pasae-logo.png'
import useTheme from '../hooks/useTheme'
import ThemeToggle from './ThemeToggle'
import './Nav.css'

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/core', label: 'Core' },
  { to: '/join', label: 'Join' },
  { to: '/login', label: 'Log In' },
]

function NavLink({ to, label, onClick }) {
  return (
    <Link to={to} onClick={onClick}>
      {label}
    </Link>
  )
}

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, toggleTheme] = useTheme()

  useLayoutEffect(() => {
    // switch the nav solid once the page's own hero has scrolled past
    const heroEl = document.querySelector('[data-hero]')
    if (!heroEl) {
      setScrolled(true)
      return
    }

    const onScroll = () => setScrolled(window.scrollY > heroEl.offsetHeight * 0.72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return (
    <header className={`nav${!scrolled ? ' on-dark' : ''}${scrolled ? ' nav--scrolled' : ''}`}>
      <Link to="/" className="nav-mark" aria-label="PASAE, back to top">
        <img src={logo} alt="" className="nav-mark-img" />
        <span className="nav-mark-text">PASAE</span>
      </Link>

      <nav className="nav-links" aria-label="Primary">
        {LINKS.map((l) => (
          <NavLink key={l.label} {...l} />
        ))}
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </nav>

      <div className="nav-mobile-controls">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />

        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-sheet">
          {LINKS.map((l) => (
            <NavLink key={l.label} {...l} onClick={() => setOpen(false)} />
          ))}
        </div>
      )}
    </header>
  )
}