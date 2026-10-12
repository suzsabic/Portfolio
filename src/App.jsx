import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

// Scroller til toppen (eller til en seksjon) når du bytter side
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
    // Kun ved sidebytte. Anker-lenker på forsiden scroller mykt av seg selv.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Header />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prosjekt/:id" element={<ProjectPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
