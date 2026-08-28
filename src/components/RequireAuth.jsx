import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Client-side gate only, not real access control — see LoginPage.
export default function RequireAuth({ children }) {
  const navigate = useNavigate()
  const [authed, setAuthed] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('pasae-authed') === 'true') {
      setAuthed(true)
    } else {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  if (!authed) return null
  return children
}
