import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { profile, projects } from '../data'
import Gallery from '../components/Gallery'

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
        <p className="eyebrow">404 - Fant ikke prosjektet</p>
        <Link className="btn" to="/#prosjekter">Tilbake til prosjekter</Link>
      </main>
    )
  }

  return (
    <main className="page project container">
      <Link className="back" to="/#prosjekter" viewTransition>
        <FontAwesomeIcon icon={faArrowLeft} /> Alle prosjekter
      </Link>

      <header className="project__head">
        <p className="eyebrow">{project.type}</p>
        <h1>{project.title}</h1>
      </header>

      <Gallery slides={project.slides} />

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

    </main>
  )
}
