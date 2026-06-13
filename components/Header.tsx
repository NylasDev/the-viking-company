"use client";

import { useState } from "react";
import { social } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, DiscordIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={`site-header${open ? " open" : ""}`}>
      <div className="wrap">
        <a className="brand" href="#top" aria-label="The Viking Company — home" onClick={close}>
          <span className="mark" aria-hidden="true">
            ᚠ
          </span>
          <span>
            The Viking Company
            <span className="brand-sub">AI Engineering</span>
          </span>
        </a>

        <nav className="primary-nav" aria-label="Primary">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-social">
            <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href="#contact" aria-label="Discord — see contact" onClick={close}>
              <DiscordIcon />
            </a>
          </div>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
