import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">About</span>
        </div>
        <div className="about-grid">
          <Reveal>
            <p className="about-lead">
              Twelve years of craft, now forged into AI.
            </p>
            <p>
              The Viking Company began as a web studio in Bucharest — a decade
              and more of shipping software across Europe. Not just brand sites
              and e-commerce, but the high-stakes kind: national public
              procurement, border tolling, internal taxation systems where
              downtime and error simply aren&apos;t options. The obsession was
              always the same — build things that are usable, dependable, and
              made to last.
            </p>
            <p>
              Today that obsession points at a new horizon. I build the agents,
              skills, and retrieval systems that let teams put frontier models to
              real work — reliably, observably, and in production. RAG pipelines
              that stay grounded. Automations that run unattended. Tooling that
              extends what a model can reach.
            </p>
            <p>
              Same Norse stubbornness about quality. New waters.
            </p>
            <ul className="values">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Collaboration</li>
            </ul>
          </Reveal>

          <Reveal as="figure" className="plate" delay={120}>
            <img
              src="/img/about-leiv.webp"
              alt="Engraved illustration of a Viking sighting new land from a longship"
              width={1100}
              height={716}
              loading="lazy"
            />
            <figcaption>
              Charting new waters — Leiv Eiriksson sights land. After Christian
              Krohg, 1893. Engraved in the Hermes mythic style.
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
