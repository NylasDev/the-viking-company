import type { Metadata, Viewport } from "next";
import { EB_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Display / body serif — old-style, high contrast (the Hermes look).
const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Mono — install/command blocks, eyebrows, metadata.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://thevikingcompany.eu";
const TITLE = "The Viking Company — Sergiu Vataman, AI Engineer";
const DESCRIPTION =
  "AI engineer building autonomous agents, custom skills, tooling, and RAG systems. Twelve years of web craft, now forged into AI. Bucharest, Romania.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s — The Viking Company",
  },
  description: DESCRIPTION,
  applicationName: "The Viking Company",
  keywords: [
    "AI engineer",
    "AI agency",
    "AI agents",
    "agentic automation",
    "RAG",
    "retrieval augmented generation",
    "LLM integration",
    "AI automation",
    "skills development",
    "tooling",
    "Sergiu Vataman",
    "The Viking Company",
    "Bucharest",
  ],
  authors: [{ name: "Sergiu Vataman", url: "https://github.com/nylasdev" }],
  creator: "Sergiu Vataman",
  publisher: "The Viking Company",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE,
    siteName: "The Viking Company",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Viking Company — AI engineering: agents, skills, and RAG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f2efe6",
  width: "device-width",
  initialScale: 1,
};

// Structured data — Organization + Person + WebSite, linked via @id.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE}/#org`,
      name: "The Viking Company",
      alternateName: "The Viking Company S.R.L.",
      url: SITE,
      description: DESCRIPTION,
      email: "sales@thevikingcompany.eu",
      logo: `${SITE}/icon.svg`,
      image: `${SITE}/og.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bucharest",
        addressCountry: "RO",
      },
      areaServed: "Worldwide",
      founder: { "@id": `${SITE}/#sergiu` },
      sameAs: [
        "https://github.com/nylasdev",
        "https://www.linkedin.com/in/sergiu-vataman-b18259162/",
      ],
      knowsAbout: [
        "AI agents",
        "Retrieval-Augmented Generation",
        "LLM integration",
        "AI automation",
        "Web engineering",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#sergiu`,
      name: "Sergiu Vataman",
      jobTitle: "AI Engineer",
      worksFor: { "@id": `${SITE}/#org` },
      url: SITE,
      sameAs: [
        "https://github.com/nylasdev",
        "https://www.linkedin.com/in/sergiu-vataman-b18259162/",
      ],
      knowsAbout: [
        "AI agents",
        "Retrieval-Augmented Generation",
        "LLM tooling",
        "Next.js",
        "Angular",
        "Node.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "The Viking Company",
      publisher: { "@id": `${SITE}/#org` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${garamond.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
