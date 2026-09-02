import PageHero from '../components/PageHero'
import PageSection from '../components/PageSection'
import { CORE, CURRENT_CORE } from '../data/core'
import heroPhoto from '../assets/heroes/core.jpg'
import './CorePage.css'

export default function CorePage() {
  return (
    <>
      <PageHero
        image={heroPhoto}
        imagePosition="center 60%"
        title="Meet Core"
      />

      <PageSection
        title={`Core ${CURRENT_CORE}`}
      >
        <div className="core-groups">
          {CORE.map((g) => (
            <div className={`core-group${g.tag ? ` core-group--${g.tag}` : ''}`} key={g.group}>
              <h3 className="core-group-heading">{g.group}</h3>
              <div className="core-group-grid">
                {g.members.map((m) => (
                  <div className="core-member" key={m.name}>
                    <div className="core-member-photo">
                      <img src={m.img} alt={`${m.name}, ${m.role}`} />
                    </div>
                    <p className="core-member-name">{m.name}</p>
                    <p className="core-member-role">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  )
}
