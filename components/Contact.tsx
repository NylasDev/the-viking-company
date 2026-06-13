import { social } from "@/lib/data";
import Reveal from "./Reveal";
import DiscordTag from "./DiscordTag";
import { GitHubIcon, LinkedInIcon, ArrowIcon } from "./Icons";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="contact-inner">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s build something that lasts.</h2>
          <p>
            Have an agent to design, a RAG system to ground, or an automation
            that should just run on its own? Tell me what you&apos;re building —
            I reply to every serious message.
          </p>
          <div className="contact-actions">
            <a className="btn primary" href={`mailto:${social.email}`}>
              {social.email} <ArrowIcon />
            </a>
          </div>
          <div className="contact-links">
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon size={15} /> GitHub
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon size={15} /> LinkedIn
            </a>
            <DiscordTag handle={social.discord} />
          </div>
        </Reveal>
        <div className="contact-end" aria-hidden="true" />
      </div>
    </section>
  );
}
