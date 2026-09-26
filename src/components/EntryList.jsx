import './EntryList.css'

// Left column azure, middle vermillion, right gold — repeats per row
// since the grid is 3 columns wide.
const COLORS = ['azure', 'vermillion', 'gold']

export default function EntryList({ entries, emptyText, renderEntry }) {
  if (!entries.length) {
    return <p className="entry-list-empty">{emptyText}</p>
  }

  return (
    <ul className="entry-list">
      {entries.map((entry, i) => (
        <li className={`entry-list-item entry-list-item--${COLORS[i % 3]}`} key={i}>
          {renderEntry(entry)}
        </li>
      ))}
    </ul>
  )
}
