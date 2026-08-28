import { FLYERS } from '../data/flyers'
import PageHero from '../components/PageHero'
import PageSection from '../components/PageSection'
import heroPhoto from '../assets/heroes/events.jpg'
import '../components/Events.css'
import './EventsPage.css'

export default function EventsPage() {
  return (
    <div className="events-page">
      <PageHero
        image={heroPhoto}
        title="Events & Calendar"
      />

      <PageSection
        title="Upcoming events"
        body="For the latest updates, follow our Instagram!"
        link={{ to: 'https://instagram.com/ucb.pasae', label: 'Follow @ucb.pasae', external: true }}
      />

      <PageSection
        tone="deep"
        title="Past events"
        body="These are the events we've hosted so far this year."
      >
        <ul className="flyer-block-grid events-page-grid">
          {FLYERS.map((f) => (
            <li className="flyer-block" key={f.src}>
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
      </PageSection>
    </div>
  )
}
