import { Link } from 'react-router-dom'
import logo from '../assets/brand/pasae-logo.png'
import { IconInstagram, IconFacebook, IconDiscord, IconMail } from './FooterIcons'
import './Footer.css'

const CONTACTS = [
  { label: 'Instagram', href: 'https://instagram.com/ucb.pasae', Icon: IconInstagram },
  { label: 'Email', href: 'mailto:ucb.pasae@gmail.com', Icon: IconMail },
  { label: 'Facebook', href: 'https://www.facebook.com/ucbpasae', Icon: IconFacebook },
  { label: 'Discord', href: 'https://discord.gg/9Wg2Ur86k', Icon: IconDiscord },
]

const COLUMNS = [
  {
    heading: 'General',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Events', to: '/events' },
    ],
  },
  {
    heading: 'Members',
    links: [
      { label: 'Join', to: '/join' },
      { label: 'Core', to: '/core' },
      { label: 'Log In', to: '/login' },
    ],
  },
]

function FooterLink({ to, label }) {
  return <Link to={to}>{label}</Link>
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="" className="footer-logo-img" />
            <span>PASAE</span>
          </Link>

          <ul className="footer-contacts">
            {CONTACTS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <Icon className="footer-contact-icon" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-columns">
          {COLUMNS.map((col) => (
            <div className="footer-column" key={col.heading}>
              <p className="footer-column-heading">{col.heading}</p>
              {col.links.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <a
          href="https://www.ocf.berkeley.edu"
          target="_blank"
          rel="noreferrer"
          className="footer-ocf"
        >
          <img
            src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
            alt="Hosted by the OCF"
            width="72"
            height="29"
          />
        </a>
        <p className="footer-disclaimer">
          We are a student group acting independently of the University of California. We take full responsibility
          for our organization and this web site.
        </p>
        <a href="https://pasae.studentorg.berkeley.edu/old" target="_blank" rel="noreferrer" className="footer-old-site">
          View our previous site
        </a>
        <p className="footer-copy">&copy; PASAE {year} &middot; UC Berkeley</p>
      </div>
    </footer>
  )
}