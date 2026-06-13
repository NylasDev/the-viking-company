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

export const metadata: Metadata = {
  metadataBase: new URL("https://thevikingcompany.eu"),
  title: "The Viking Company — Sergiu Vataman, AI Engineer",
  description:
    "AI engineer crafting autonomous agents, skills, tooling, and RAG systems. Twelve years of web craft, now forged into artificial intelligence. Bucharest, Romania.",
  keywords: [
    "AI engineer",
    "AI agents",
    "RAG",
    "retrieval augmented generation",
    "automation",
    "LLM integration",
    "Sergiu Vataman",
    "The Viking Company",
  ],
  authors: [{ name: "Sergiu Vataman", url: "https://github.com/nylasdev" }],
  openGraph: {
    title: "The Viking Company — Sergiu Vataman, AI Engineer",
    description:
      "Autonomous agents, skills, tooling, and RAG systems. Built to last.",
    type: "website",
    locale: "en_US",
    siteName: "The Viking Company",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2efe6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${garamond.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
