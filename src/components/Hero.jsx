import heroPhoto from '../assets/heroes/home.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero on-dark" data-hero>
      <div className="hero-media" aria-hidden="true">
        <img
          src={heroPhoto}
          alt=""
          className="hero-photo"
        />
        <div className="hero-scrim" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to PASAE at Berkeley
        </h1>
        <p className="hero-sub">
          We are the Pilipinx Association of Scientists, Architects, and Engineers
          &mdash; a professional and cultural student organization at UC Berkeley
          supporting students in STEM.
        </p>
      </div>
    </section>
  )
}
