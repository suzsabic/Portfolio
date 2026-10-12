import { skills } from '../data'
import portrait from '../assets/suzana.jpg'

export default function About() {
  return (
    <section className="section about" id="om-meg">
      <div className="container about__inner">
        <div>
          <p className="eyebrow">Om meg</p>
          <h2>👩🏻‍💻</h2>
          <p className="lead">
            <b>Suzana Sabic.</b> Jeg er en <em>Oslo-basert</em> bachelorstudent i frontend- og mobilutvikling ved Høyskolen Kristiania, ferdig våren 2027. Jeg liker å kombinere <b>kreativitet og teknologi</b>, og drømmer om å lage applikasjoner som gjør hverdagen litt enklere for andre. Utenom koding: gaming, utforske nye kafeer, true crime dokumentarer, leke med Claude Design/Code og like altfor mange kattevideoer på TikTok.
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
