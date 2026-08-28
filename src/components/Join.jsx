import { Link } from 'react-router-dom'
import mark from '../assets/brand/pasae-mark-black.png'
import './Join.css'

export default function Join() {
  return (
    <section id="join" className="section join">
      <img src={mark} alt="" aria-hidden="true" className="section-decal join-decal join-decal--left" />
      <img src={mark} alt="" aria-hidden="true" className="section-decal join-decal join-decal--right" />
      <div className="join-layout">
        <div className="join-inner">
          <h2 className="section-title join-title">Want to connect with PASAE?</h2>
          <p className="section-body join-sub">
            We open associate and general member applications at the start of every semester
            to students of every background. Feel free to reach out if you have any questions and we hope to see you soon!
          </p>
          <Link to="/join" className="text-link join-cta">
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  )
}
