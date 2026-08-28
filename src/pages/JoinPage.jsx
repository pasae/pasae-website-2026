import PageHero from '../components/PageHero'
import PageSection from '../components/PageSection'
import FormLink from '../components/FormLink'
import { IconInstagram, IconFacebook, IconDiscord, IconMail } from '../components/FooterIcons'
import heroPhoto from '../assets/heroes/join.jpg'
import './JoinPage.css'

const PASSOCIATE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSftraBWqipcftBeRv585C72T3_Qt9BSgmpomG1zvih_prK1eA/viewform'
const GM_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdVhnaP-1DSE1TgjVIxg0vp1vX30sFuu_Y5xAFyIdFs3u7PRg/viewform'

const SOCIALS = [
  { label: 'Instagram', detail: '@ucb.pasae', href: 'https://instagram.com/ucb.pasae', Icon: IconInstagram, accent: 'vermillion' },
  { label: 'Email', detail: 'ucb.pasae@gmail.com', href: 'mailto:ucb.pasae@gmail.com', Icon: IconMail, accent: 'azure' },
  { label: 'Facebook', detail: 'PASAE at UC Berkeley', href: 'https://www.facebook.com/ucbpasae', Icon: IconFacebook, accent: 'gold' },
  { label: 'Discord', detail: 'Chat with the community', href: 'https://discord.gg/9Wg2Ur86k', Icon: IconDiscord, accent: 'ink' },
]

export default function JoinPage() {
  return (
    <div className="join-page">
      <PageHero image={heroPhoto} title="Join PASAE!" />

      <PageSection
        title="Connect with us"
      >
        <div className="join-page-socials-grid">
          {SOCIALS.map(({ label, detail, href, Icon, accent }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className={`join-page-social-card join-page-social-card--${accent}`}
            >
              <Icon className="join-page-social-icon" />
              <span className="join-page-social-text">
                <span className="join-page-social-label">{label}</span>
                <span className="join-page-social-detail">{detail}</span>
              </span>
            </a>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="apply"
        tone="deep"
        title="Apply as a Pa'ssociate"
        body="The best way to get involved and make meaningful connections to our community."
      >
        <FormLink
          url={PASSOCIATE_FORM_URL}
          label="PASAE Pa'ssociate application form"
          constantName="PASSOCIATE_FORM_URL"
          fileName="src/pages/JoinPage.jsx"
        />
      </PageSection>

      <PageSection
        title="Apply as a General Member"
        body="Get access to PASAE events, workshops, and resources without the time commitment of being an Associate."
      >
        <FormLink
          url={GM_FORM_URL}
          label="PASAE General Member application form"
          constantName="GM_FORM_URL"
          fileName="src/pages/JoinPage.jsx"
        />
      </PageSection>
    </div>
  )
}
