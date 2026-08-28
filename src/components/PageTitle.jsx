import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_TITLE = 'PASAE @ Berkeley'

const TITLES = {
  '/about': 'About',
  '/events': 'Events',
  '/core': 'Core',
  '/join': 'Join',
  '/login': 'Log In',
  '/members': 'Member Hub',
  '/confessions': 'Confessions',
  '/overheards': 'Overheards',
  '/interview-bank': 'Interview Bank',
}

export default function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = TITLES[pathname]
    document.title = page ? `${page} - ${BASE_TITLE}` : BASE_TITLE
  }, [pathname])

  return null
}
