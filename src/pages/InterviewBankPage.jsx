import { Link } from 'react-router-dom'
import PageSection from '../components/PageSection'
import FormLink from '../components/FormLink'
import EntryList from '../components/EntryList'
import { INTERVIEW_BANK } from '../data/interviewBank'
import './BoardPage.css'

// Paste the Interview Bank form's link here — same as Confessions.
const INTERVIEW_FORM_URL = 'https://forms.gle/p6cHekmihh7vcjzj9'

export default function InterviewBankPage() {
  return (
    <div className="board-page">
      <div className="board-page-head">
        <Link to="/members" className="text-link board-page-back">
          Back to Member Hub
        </Link>
        <h1 className="section-title board-page-title">Interview Bank</h1>
        <p className="board-page-sub">
          Real interview questions and experiences from PASAE members, organized so the next person walking into that same interview doesn't have to start from scratch.
        </p>
      </div>

      <PageSection
        title="Share your experience"
        body="Company, role, what they asked, how it went — anything that would've helped you going in."
      >
        <FormLink
          url={INTERVIEW_FORM_URL}
          label="PASAE Interview Bank submission form"
          constantName="INTERVIEW_FORM_URL"
          fileName="src/pages/InterviewBankPage.jsx"
        />
      </PageSection>

      <PageSection tone="deep" title="Browse the bank">
        <EntryList
          entries={INTERVIEW_BANK}
          emptyText="No entries yet — be the first to add one."
          renderEntry={(entry) => (
            <>
              <p className="entry-title">
                {entry.company} — {entry.role}
              </p>
              <span className="entry-meta">
                {entry.season}
                {entry.application ? ` · ${entry.application}` : ''}
                {entry.kind ? ` · ${entry.kind}` : ''}
              </span>
              {entry.question && <p className="entry-question">{entry.question}</p>}
              <p className="entry-notes">{entry.notes}</p>
            </>
          )}
          renderBack={(entry) => (
            <>
              <p className="entry-question">{entry.answer}</p>
              {entry.name && <span className="entry-meta">— {entry.name}</span>}
              {entry.email && (
                <a
                  className="entry-meta entry-email"
                  href={`mailto:${entry.email}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {entry.email}
                </a>
              )}
            </>
          )}
        />
      </PageSection>
    </div>
  )
}
