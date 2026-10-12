import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projects } from '../data'

export default function Projects() {
  return (
    <section className="section container" id="prosjekter">
      <div className="section__head">
        <p className="eyebrow">Utvalgt arbeid</p>
        <h2>Prosjekter</h2>
      </div>
      <div className="grid">
        {projects.map((p) => (
          <Link className="card" key={p.id} to={`/prosjekt/${p.id}`} viewTransition>
            <div className="card__top">
              <span className="card__icon" aria-hidden="true">
                <FontAwesomeIcon icon={p.icon} />
              </span>
            </div>
            <p className="card__type">{p.type}</p>
            <h3>{p.title}</h3>
            <p className="card__text">{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  )
}
