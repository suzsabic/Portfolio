import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data'

const icons = {
  projects: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  about: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
}

const links = [
  { href: '#prosjekter', label: 'Prosjekter', icon: 'projects' },
  { href: '#om-meg', label: 'Om meg', icon: 'about' },
  { href: '#kontakt', label: 'Kontakt', icon: 'contact' },
]

export default function Header() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  // På forsiden scroller vanlige anker-lenker mykt. På andre sider går vi via forsiden.
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo" viewTransition>
          <img src={`${import.meta.env.BASE_URL}logo.svg`} width="40" height="40" alt="" />
          {profile.name}
        </Link>
        <nav className="nav" aria-label="Hovedmeny">
          {links.map((l) => {
            const svg = (
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {icons[l.icon]}
              </svg>
            )
            return home ? (
              <a key={l.href} href={l.href} aria-label={l.label} data-label={l.label}>{svg}</a>
            ) : (
              <Link key={l.href} to={`/${l.href}`} aria-label={l.label} data-label={l.label} viewTransition>{svg}</Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
