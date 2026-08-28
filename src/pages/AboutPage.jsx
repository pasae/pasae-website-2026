import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PageSection, { PhotoRow } from '../components/PageSection'
import heroPhoto from '../assets/heroes/about.jpg'
import joinPhoto1 from '../assets/sections/why-join-tabling.jpg'
import joinPhoto2 from '../assets/sections/why-join-kickoff.jpg'
import corePhoto from '../assets/core/group.jpg'
import corePhoto2 from '../assets/sections/who-runs-pasae.jpg'
import './AboutPage.css'

const JOIN_PHOTOS = [
  { src: joinPhoto1, alt: 'Members tabling on Sproul Plaza with Oski and a PASAE sign.', position: 'center 25%' },
  { src: joinPhoto2, alt: 'The group at PCN SO Kickoff, posing together in front of the banner.' },
]

const CORE_PHOTOS = [
  { src: corePhoto, alt: 'Core 38, the current PASAE officer board, on the steps of Sproul Hall.' },
  { src: corePhoto2, alt: 'Three members playing spikeball on a sunny day on campus.' },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHero
        image={heroPhoto}
        title="About PASAE"
      />

      <PageSection
        title="Why Join PASAE?"
        body="PASAE is like a family away from home. We learn from each other, cook delicious meals, and celebrate our accomplishments together. Whether you want to celebrate Pilipinx culture, seeking career opportunities, or just looking to make new friends, we welcome everyone with open arms!"
      >
        <PhotoRow photos={JOIN_PHOTOS} />
      </PageSection>

      <PageSection
        title="Pa'ssociates & General Members"
        body="We offer two programs for new and returning members to get involved."
      >
        <div className="about-membership-grid">
          <article className="about-membership-card about-membership-card--vermillion">
            <h3>Pa'ssociates</h3>
            <p>
              This is the best way to get involved and make meaningful connections to our community. Associates are paired with a Core member based on their interests and goals. Core members provide mentorship, career guidance, and support academically and personally. Associates are encouraged to attend our bi-weekly workshops and the time commitment is generally 1-3 hours a week.
            </p>
          </article>
          <article className="about-membership-card about-membership-card--azure">
            <h3>General Members</h3>
            <p>
              General members get access to PASAE events, workshops, and resources without the time commitment of being an Associate. If you want to be part of PASAE but don't have the time to make a serious commitment, then this is the best option.
            </p>
          </article>
        </div>

        <Link to="/join" className="text-link about-membership-cta">
          Apply to join
        </Link>
      </PageSection>

      <PageSection
        title="Who runs PASAE?"
        body="PASAE is run by Core, our board of officers who plan and organize every event, workshop, and social. Core members take in Pa'ssociates and provide a unique mentorship experience, connecting them to PASAE and the wider Pil-community. All Core members are required to be an Associate first and we return to provide members with the same mentorship and support that made us love PASAE. Core applications open every Spring semester so be sure to look out for those if you are interested in joining Core!"
        link={{ to: '/core', label: 'Meet Core' }}
      >
        <PhotoRow photos={CORE_PHOTOS} />
      </PageSection>
    </div>
  )
}
