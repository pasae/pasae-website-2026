import { Link } from 'react-router-dom'
import './PageSection.css'

export default function PageSection({ id, label, title, body, link, tone = 'paper', center = false, children }) {
  const paragraphs = Array.isArray(body) ? body : [body]

  return (
    <section
      id={id}
      className={`section page-section page-section--${tone}${tone === 'dark' ? ' on-dark' : ''}${center ? ' page-section--center' : ''}`}
    >
      <div className="page-section-inner">
        <div className="page-section-head section-head">
          {label && <div className="spec-label">{label}</div>}
          <h2 className="section-title">{title}</h2>
          {paragraphs.map((p) => (
            <p className="section-body" key={p}>{p}</p>
          ))}
          {link && (
            link.external ? (
              <a href={link.to} target="_blank" rel="noreferrer" className="text-link page-section-link">
                {link.label}
              </a>
            ) : (
              <Link to={link.to} className="text-link page-section-link">
                {link.label}
              </Link>
            )
          )}
        </div>

        {children && <div className="page-section-body">{children}</div>}
      </div>
    </section>
  )
}

// `position` on a photo is an optional CSS object-position override,
// for when the default center crop doesn't land right.
export function PhotoRow({ photos }) {
  return (
    <div className="page-photo-row">
      {photos.map((p) => (
        <div className="page-photo-row-item" key={p.src}>
          <img src={p.src} alt={p.alt || ''} style={p.position ? { objectPosition: p.position } : undefined} />
        </div>
      ))}
    </div>
  )
}
