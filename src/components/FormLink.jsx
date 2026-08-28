import './FormLink.css'

function IconExternal(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M8.5 4.5H4.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 10.5 15.5 4.5M11 4.5h4.5V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Links out to the Google Form on Google's own site rather than embedding
// it in an iframe — OCF's virtual hosting policy prohibits "substantial
// inline frames of non-berkeley.edu domains", so a real off-site link
// (like the site's other social links) is the compliant version of this.
export default function FormLink({ url, label, constantName, fileName }) {
  return (
    <div className="form-link">
      {url ? (
        <a href={url} target="_blank" rel="noreferrer" className="form-link-card">
          <span className="form-link-text">
            <span className="form-link-title">{label}</span>
            <span className="form-link-hint">Opens the Google Form in a new tab</span>
          </span>
          <IconExternal className="form-link-icon" />
        </a>
      ) : (
        <div className="form-link-placeholder">
          <p className="form-link-placeholder-title">This form isn't linked up yet</p>
          <p className="form-link-placeholder-hint">
            Paste the Google Form's link into <code>{constantName}</code> in{' '}
            <code>{fileName}</code> and it'll appear here.
          </p>
        </div>
      )}
    </div>
  )
}
