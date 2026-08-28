import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPONENTS } from '../data/components'
import './Components.css'

export default function Components() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % COMPONENTS.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const current = COMPONENTS[active]

  return (
    <section id="components" className="section components">
      <div className="components-layout">
        <div className="components-media">
          <div className="components-stage">
            {COMPONENTS.map((c, i) => (
              <div
                className={`components-slide components-slide--${c.tag}${i === active ? ' is-active' : ''}`}
                key={c.title}
              >
                <img src={c.img} alt="" aria-hidden={i !== active} />
              </div>
            ))}

            <div className="components-dots">
              {COMPONENTS.map((c, i) => (
                <button
                  key={c.title}
                  type="button"
                  className={`components-dot components-dot--${c.tag}${i === active ? ' is-active' : ''}`}
                  aria-label={`Show ${c.title}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          <div className="components-caption">
            <span className="components-caption-name">{current.title}</span>
            <span className="components-caption-pillar">Pillar &mdash; {current.pillar}</span>
          </div>
        </div>

        <div className="section-head components-head">
          <h2 className="section-title">Our 3 Components</h2>
          <p className="section-body">PASAE is comprised of three distinct components: External, Internal, and Creative. Each component embodies one of our pillars and plays a unique role in our mission. </p>
          <Link to="/core" className="text-link components-cta">Meet our board</Link>
        </div>
      </div>
    </section>
  )
}
