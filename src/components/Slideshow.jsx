import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Slideshow({ slides }) {
  const [index, setIndex] = useState(0)
  const count = slides.length

  useEffect(() => {
    const go = (dir) => setIndex((i) => (i + dir + count) % count)
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count])

  const step = (dir) => setIndex((i) => (i + dir + count) % count)

  return (
    <div className="slideshow">
      <div className="slideshow__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          typeof slide === 'string' ? (
            <div className={`slide tone-${slide}`} key={i} role="img"
              aria-label={`Bilde ${i + 1} av ${count}`}>
              <span>{String(i + 1).padStart(2, '0')}</span>
            </div>
          ) : (
            <img className="slide slide--img" key={i} src={slide.src} alt={slide.alt} />
          )
        ))}
      </div>
      {count > 1 && (
        <>
          <button className="slideshow__arrow slideshow__arrow--prev" onClick={() => step(-1)}
            aria-label="Forrige bilde">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="slideshow__arrow slideshow__arrow--next" onClick={() => step(1)}
            aria-label="Neste bilde">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="slideshow__dots">
            {slides.map((_, i) => (
              <button key={i} className={i === index ? 'is-active' : ''}
                onClick={() => setIndex(i)} aria-label={`Gå til bilde ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
