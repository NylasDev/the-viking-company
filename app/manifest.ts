import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Emitted as /manifest.webmanifest at build.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Viking Company",
    short_name: "Viking Co.",
    description:
      "AI engineer building autonomous agents, custom skills, tooling, and RAG systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2efe6",
    theme_color: "#f2efe6",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
