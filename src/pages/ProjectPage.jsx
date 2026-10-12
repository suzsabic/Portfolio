import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { profile, projects } from '../data'
import Slideshow from '../components/Slideshow'

export default function ProjectPage() {
  const { id } = useParams()
  const index = projects.findIndex((p) => String(p.id) === id)
  const project = projects[index]

  useEffect(() => {
    if (!project) return
    const previous = document.title
    document.title = `${project.title} — ${profile.name}`
    return () => { document.title = previous }
  }, [project])

  if (!project) {
    return (
      <main className="page project container">
        <p className="eyebrow">404</p>
        <h1>Fant ikke prosjektet</h1>
        <Link className="btn project__next" to="/#prosjekter">Tilbake til prosjekter</Link>
      </main>
    )
  }

  const next = projects[(index + 1) % projects.length]

  return (
    <main className="page project container">
      <Link className="back" to="/#prosjekter" viewTransition>
        <FontAwesomeIcon icon={faArrowLeft} /> Alle prosjekter
      </Link>

      <header className="project__head">
        <span className="card__icon" aria-hidden="true"><FontAwesomeIcon icon={project.icon} /></span>
        <p className="eyebrow">{project.type}</p>
        <h1>{project.title}</h1>
      </header>

      <Slideshow slides={project.slides} />

      <div className="project__info">
        <div>
          <p className="lead">{project.description}</p>
          <ul className="tags tags--lg">
            {project.tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          {project.link?.href && (
            <a className="btn project__link" href={project.link.href} target="_blank" rel="noopener noreferrer">
              {project.link.label}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </div>
        <dl className="meta">
          <div><dt>År</dt><dd>{project.year}</dd></div>
          <div><dt>Type</dt><dd>{project.type}</dd></div>
        </dl>
      </div>

      {next.id !== project.id && (
        <Link className="project__next" to={`/prosjekt/${next.id}`} viewTransition>
          <span>Neste prosjekt</span>
          <strong>{next.title} <FontAwesomeIcon icon={faArrowRight} /></strong>
        </Link>
      )}
    </main>
  )
}
