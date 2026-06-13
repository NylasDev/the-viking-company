import { expertise } from "@/lib/data";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section className="expertise" id="expertise">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Expertise</span>
          <h2 className="section-title">
            From the model to the metal — the whole stack of putting AI to work.
          </h2>
        </div>

        <div className="grid-features">
          {expertise.map((e) => (
            <Reveal as="article" className="cell" key={e.num}>
              <span className="num">{e.num}</span>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
              <ul className="tags">
                {e.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
