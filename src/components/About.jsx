import { skills, profile } from '../data'
import portrait from '../assets/suzana.jpg'

export default function About() {
  return (
    <section className="section about" id="om-meg">
      <div className="container about__inner">
        <div>
          <p className="eyebrow">Om meg</p>
          <h2>👩🏻‍💻</h2>
          <p className="lead">
            {profile.description}
          </p>
          <ul className="tags tags--lg">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div className="about__photo">
          <img className="about__image" src={portrait} alt="Portrett av Suzana Sabic" />
        </div>
      </div>
    </section>
  )
}
