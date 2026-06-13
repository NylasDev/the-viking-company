import { social } from "@/lib/data";
import DiscordTag from "./DiscordTag";
import { GitHubIcon, LinkedInIcon, ExternalIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <div className="footer-brand">The Viking Company</div>
          <div className="footer-meta">
            The Viking Company S.R.L. · Bucharest, RO
            <br />
            CUI 50915794 · EUID ROONRC.J2024042919007
            <br />
            AI engineering · agents · skills · RAG
          </div>
        </div>

        <div className="footer-links">
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon size={15} /> GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon size={15} /> LinkedIn
          </a>
          <DiscordTag handle={social.discord} />
          <a href={social.devSite} target="_blank" rel="noopener noreferrer">
            theviking.dev <ExternalIcon />
          </a>
        </div>

        <div className="footer-meta">
          © 2026 The Viking Company
          <br />
          Built with Next.js · Hermes mythic style
        </div>
      </div>
    </footer>
  );
}
