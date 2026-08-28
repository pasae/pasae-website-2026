import './PageHero.css'

// `data-hero` is how Nav measures how far to scroll before switching
// from transparent to solid.
export default function PageHero({ image, imagePosition, label, title, subtitle }) {
  return (
    <section className="page-hero on-dark" data-hero>
      <div className="page-hero-media" aria-hidden="true">
        <img
          src={image}
          alt=""
          className="page-hero-photo"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
        <div className="page-hero-scrim" />
      </div>

      <div className="page-hero-content">
        {label && <div className="spec-label">{label}</div>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
      </div>
    </section>
  )
}
