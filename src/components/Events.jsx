import { Link } from 'react-router-dom'
import { FEATURED_FLYERS } from '../data/flyers'
import './Events.css'

export default function Events() {
  return (
    <section id="events" className="section events">
      <div className="events-layout">
        <div className="section-head events-head">
          <h2 className="section-title">Events + Opportunities</h2>
          <p className="section-body">
            Check out some of the events we've held in the past. Follow our Instagram for workshops, opportunities, and updates on our applications!
          </p>
          <Link to="/events" className="text-link events-cta">
            View our upcoming events
          </Link>
        </div>

        <ul className="flyer-block-grid">
          {FEATURED_FLYERS.map((f) => (
            <li className="flyer-block" key={f.name}>
              <a href={f.src} target="_blank" rel="noreferrer">
                <img src={f.src} alt="" aria-hidden="true" className="flyer-block-bg" />
                <img src={f.src} alt={`${f.name} event flyer`} className="flyer-block-fg" />
                <span className="flyer-block-overlay">
                  <span className="flyer-block-name">{f.name}</span>
                  <span className="flyer-block-kind">{f.kind}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}