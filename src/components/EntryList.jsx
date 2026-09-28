import { useState } from 'react'
import './EntryList.css'

// Left column azure, middle vermillion, right gold — repeats per row
// since the grid is 3 columns wide.
const COLORS = ['azure', 'vermillion', 'gold']

// Only used when a list is given renderBack (currently just Interview
// Bank) — click toggles between the normal content and the back content.
function FlippableItem({ entry, colorClass, renderEntry, renderBack }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <li
      className={`entry-list-item entry-flip ${colorClass}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="entry-flip-content" key={flipped}>
        {flipped ? renderBack(entry) : renderEntry(entry)}
      </div>
      <span className="entry-flip-hint">{flipped ? 'Click to go back' : 'Click to show answer'}</span>
    </li>
  )
}

export default function EntryList({ entries, emptyText, renderEntry, renderBack }) {
  if (!entries.length) {
    return <p className="entry-list-empty">{emptyText}</p>
  }

  return (
    <ul className="entry-list">
      {entries.map((entry, i) => {
        const colorClass = `entry-list-item--${COLORS[i % 3]}`
        return renderBack ? (
          <FlippableItem key={i} entry={entry} colorClass={colorClass} renderEntry={renderEntry} renderBack={renderBack} />
        ) : (
          <li className={`entry-list-item ${colorClass}`} key={i}>
            {renderEntry(entry)}
          </li>
        )
      })}
    </ul>
  )
}
