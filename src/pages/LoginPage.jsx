import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

// Client-side gate only, not real authentication — anyone can read
// these out of the shipped JS bundle. Fine for keeping casual visitors
// out, not for anything actually sensitive.
const LOGIN_USERNAME = 'pasae39'
const LOGIN_PASSWORD = 'pasaetilidie'

export default function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!LOGIN_USERNAME || !LOGIN_PASSWORD) {
      setError("Log in isn't set up yet — check back soon.")
      return
    }

    if (username === LOGIN_USERNAME && password === LOGIN_PASSWORD) {
      localStorage.setItem('pasae-authed', 'true')
      setError('')
      navigate('/members')
      return
    }

    setError('Incorrect username or password.')
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Log In</h1>
        <p className="login-sub">Members only — The log in is shared by Core members.</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label className="login-field">
            <span className="login-field-label">Username</span>
            <input
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>

          <label className="login-field">
            <span className="login-field-label">Password</span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="btn btn--solid login-submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}
