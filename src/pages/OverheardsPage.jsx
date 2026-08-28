import { Link } from 'react-router-dom'
import PageSection from '../components/PageSection'
import FormLink from '../components/FormLink'
import EntryList from '../components/EntryList'
import { OVERHEARDS } from '../data/overheards'
import './BoardPage.css'

// Paste the Overheards form's link here — same as Confessions.
const OVERHEARDS_FORM_URL = ''

export default function OverheardsPage() {
  return (
    <div className="board-page">
      <div className="board-page-head">
        <Link to="/members" className="text-link board-page-back">
          Back to Member Hub
        </Link>
        <h1 className="section-title board-page-title">Overheard at PASAE</h1>
        <p className="board-page-sub">
          Heard a member say something worth sharing? Send it in.
        </p>
      </div>

      <PageSection
        title="Submit an overheard"
        body="Totally anonymous — this form doesn't collect names or emails."
      >
        <FormLink
          url={OVERHEARDS_FORM_URL}
          label="PASAE Overheards submission form"
          constantName="OVERHEARDS_FORM_URL"
          fileName="src/pages/OverheardsPage.jsx"
        />
      </PageSection>

      <PageSection tone="deep" title="This week's overheards">
        <EntryList
          entries={OVERHEARDS}
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
