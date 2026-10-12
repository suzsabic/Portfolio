// Bento-galleri: ett stort bilde og to mindre, i grupper på tre.
// Hvert element i `slides` er enten en plassholderfarge (tekst) eller { src, alt }.
function Item({ slide, number }) {
  if (typeof slide === 'string') {
    return (
      <div className={`bento__item bento__ph tone-${slide}`} role="img"
        aria-label={`Plassholderbilde ${number}`}>
        <span>{String(number).padStart(2, '0')}</span>
      </div>
    )
  }
  return (
    <figure className="bento__item">
      <img src={slide.src} alt={slide.alt} loading="lazy" />
    </figure>
  )
}

export default function Gallery({ slides }) {
  const groups = []
  for (let i = 0; i < slides.length; i += 3) groups.push(slides.slice(i, i + 3))

  return (
    <div className="gallery">
      {groups.map((group, g) => (
        <div className={`bento bento--${group.length}`} key={g}>
          {group.map((slide, i) => (
            <Item slide={slide} number={g * 3 + i + 1} key={i} />
          ))}
        </div>
      ))}
    </div>
  )
}
