import CodeCard from "./CodeCard"

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero__text">
        <p className="eyebrow">Introduksjon</p>
        <h1>
          Hei! Jeg heter
          <em> Suzana Sabic.</em>
        </h1>
        <p className="lead">
          Velkommen til min portefølje, der jeg viser mine nyeste prosjekter innen frontend og mobilutvikling.
        </p>
        <div className="hero__actions">
          <a className="btn" href="#prosjekter">Se prosjekter</a>
        </div>
      </div>
      <div>
        <CodeCard />
      </div>
    </section>
  )
}
