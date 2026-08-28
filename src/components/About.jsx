import { Link } from 'react-router-dom'
import missionPhoto from '../assets/sections/mission.jpg'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-inner">
        <div className="section-head about-head">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-body">
            Established in 1988, the Pilipinx Association of Scientists, Architects, and Engineers (PASAE) serves as a close-knit
            support group for students in the technical fields, providing student members a space for social interaction, cultural understanding,
            professional guidance, and academic support.
          </p>
          <Link to="/about" className="text-link about-cta">
            Learn more about us
          </Link>
        </div>

        <div className="about-photos">
          <img
            src={missionPhoto}
            alt="A large PASAE holiday gathering, dressed up and smiling."
            className="about-photo-img"
          />
        </div>
      </div>
    </section>
  )
}