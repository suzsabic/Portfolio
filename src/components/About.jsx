import { skills } from '../data'
import portrait from '../assets/suzana.jpg'

export default function About() {
  return (
    <section className="section about" id="om-meg">
      <div className="container about__inner">
        <div>
          <p className="eyebrow">Om meg</p>
          <h2>Suzana Sabic</h2>
          <p className="lead">
            Bor i Oslo. Er bachelorstudent i informasjonsteknologi med fordypning i frontend- og mobilutvikling ved Høyskolen Kristiania. Går nå tredje året og er ferdig utdannet våren 2027. Er interessert i moderne webutvikling og UI/UX, og liker å kombinere kreativitet og teknologi for å bygge løsninger som både ser bra ut og fungerer godt i praksis.
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
