import CopyButton from "./CopyButton";
import { ArrowIcon } from "./Icons";

export default function Hero() {
  const cmd = "viking agents run rag-pipeline --ground ./knowledge";
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <span className="eyebrow">AI Engineer • Bucharest • Agents · Skills · RAG</span>
        <h1>
          I Build Agents That
          <span className="turn">Learn and Ship.</span>
        </h1>
        <p className="lede">
          I&apos;m Sergiu Vataman — an AI engineer crafting autonomous agents,
          custom skills, and the tooling around them. I design RAG systems that
          retrieve, reason, and act, turning frontier models into software that
          does real work.
        </p>

        <div className="hero-meta">
          <span>
            <b>12 yrs</b> shipping software
          </span>
          <span>
            <b>Agents</b> · automation
          </span>
          <span>
            <b>RAG</b> · retrieval &amp; evals
          </span>
        </div>

        <div className="terminal" role="img" aria-label="Example agent session">
          <div className="terminal-bar">
            <span className="dots" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span>~ /the-viking-company</span>
            <CopyButton text={cmd} />
          </div>
          <div className="terminal-body">
            <div>
              <span className="prompt">$</span> {cmd}
            </div>
            <div className="ok">✓ indexed 12,480 docs · embeddings ready</div>
            <div className="ok">✓ retrieval p95 48ms · reranker on</div>
            <div className="muted">→ agent online. ask it anything.</div>
            <div>
              <span className="prompt">$</span>
              <span className="cursor" aria-hidden="true"></span>
            </div>
          </div>
        </div>

        <div className="hero-cta">
          <a className="btn primary" href="#work">
            See the Work <ArrowIcon />
          </a>
          <a className="btn" href="#contact">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
