import {
  projects,
  categoryMeta,
  soulProject,
  type ProjectCategory,
} from "@/lib/data";
import Reveal from "./Reveal";
import { ArrowIcon, ExternalIcon } from "./Icons";

const order: ProjectCategory[] = ["public", "client", "oss"];

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Work · Selected Projects</span>
          <h2 className="section-title">
            National-scale systems, client platforms, and open experiments.
          </h2>
        </div>

        {order.map((cat) => {
          const items = projects.filter((p) => p.category === cat);
          if (!items.length) return null;
          const meta = categoryMeta[cat];
          return (
            <div className="work-group" key={cat}>
              <div className="work-group-head">
                <span className="eyebrow">{meta.label}</span>
                <span className="work-group-note">{meta.note}</span>
              </div>
              <div className="grid-work">
                {items.map((p) => (
                  <Reveal as="article" className="project" key={p.name}>
                    <div className="project-top">
                      <span>{p.kind}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.blurb}</p>
                    {p.href ? (
                      <a
                        className="go"
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.code ? "View code" : "Visit site"}
                        {p.code ? <ExternalIcon /> : <ArrowIcon />}
                      </a>
                    ) : (
                      <span className="go disabled">Confidential · NDA</span>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}

        {/* Soul project — a different register */}
        <Reveal className="soul">
          <div className="soul-text">
            <span className="eyebrow">{soulProject.kind}</span>
            <h3>{soulProject.name}</h3>
            <p>{soulProject.blurb}</p>
          </div>
          <div className="soul-actions">
            <a
              className="btn primary"
              href={soulProject.video}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube <ExternalIcon />
            </a>
            <a
              className="btn"
              href={soulProject.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              ADD Astronautica <ExternalIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
