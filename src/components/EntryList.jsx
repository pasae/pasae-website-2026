import './EntryList.css'

export default function EntryList({ entries, emptyText, renderEntry }) {
  if (!entries.length) {
    return <p className="entry-list-empty">{emptyText}</p>
  }

  return (
    <ul className="entry-list">
      {entries.map((entry, i) => (
        <li className="entry-list-item" key={i}>
          {renderEntry(entry)}
        </li>
      ))}
    </ul>
  )
}
