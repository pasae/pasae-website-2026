import { Link } from 'react-router-dom'
import PageSection from '../components/PageSection'
import FormLink from '../components/FormLink'
import EntryList from '../components/EntryList'
import { CONFESSIONS } from '../data/confessions'
import './BoardPage.css'

// Paste the Confessions form's link here (the normal "Send" link is
// fine — this is a link-out, not an embed, so no ?embedded=true needed).
const CONFESSIONS_FORM_URL = ''

export default function ConfessionsPage() {
  return (
    <div className="board-page">
      <div className="board-page-head">
        <Link to="/members" className="text-link board-page-back">
          Back to Member Hub
        </Link>
        <h1 className="section-title board-page-title">PASAE Confessions</h1>
        <p className="board-page-sub">
          Feel free to share your thoughts. Just remember to be respectful and kind.
        </p>
      </div>

      <PageSection
        title="Submit a confession"
        body="Totally anonymous — this form doesn't collect names or emails."
      >
        <FormLink
          url={CONFESSIONS_FORM_URL}
          label="PASAE Confessions submission form"
          constantName="CONFESSIONS_FORM_URL"
          fileName="src/pages/ConfessionsPage.jsx"
        />
      </PageSection>

      <PageSection tone="deep" title="This week's confessions">
        <EntryList
          entries={CONFESSIONS}
          emptyText="Nothing posted yet this week — check back soon."
          renderEntry={(entry) => (
            <>
              <span className="entry-week">{entry.week}</span>
              <p className="entry-text">{entry.text}</p>
            </>
          )}
        />
      </PageSection>
    </div>
  )
}
