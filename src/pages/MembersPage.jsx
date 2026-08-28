import { Link, useNavigate } from 'react-router-dom'
import './MembersPage.css'

const SECTIONS = [
  {
    to: '/confessions',
    kicker: 'Weekly · Anonymous',
    title: 'Confessions',
    body: "Have something to confess? Submit it anonymously, and it\'ll be posted weekly.",
    accent: 'vermillion',
  },
  {
    to: '/overheards',
    kicker: 'Weekly · Anonymous',
    title: 'Overheards',
    body: 'Overheard something from another member? Submit it anonymously, and it\'ll be posted weekly.',
    accent: 'gold',
  },
  {
    to: '/interview-bank',
    kicker: 'Ongoing',
    title: 'Interview Bank',
    body: 'Real interview questions and experiences from PASAE members, organized by company and role.',
    accent: 'azure',
  },
]

export default function MembersPage() {
  const navigate = useNavigate()

  function handleLogOut() {
    localStorage.removeItem('pasae-authed')
    navigate('/login')
  }

  return (
    <div className="members-page">
      <div className="members-page-head">
        <div>
          <h1 className="section-title members-page-title">Welcome back</h1>
          <p className="members-page-sub">Core and Pa'ssociates only — glad you're here.</p>
        </div>
        <button type="button" className="text-link members-page-logout" onClick={handleLogOut}>
          Log out
        </button>
      </div>

      <div className="members-page-grid">
        {SECTIONS.map(({ to, kicker, title, body, accent }) => (
          <Link key={to} to={to} className={`members-card members-card--${accent}`}>
            <span className="members-card-kicker">{kicker}</span>
            <h2 className="members-card-title">{title}</h2>
            <p className="members-card-body">{body}</p>
            <span className="text-link members-card-cta">Open</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
