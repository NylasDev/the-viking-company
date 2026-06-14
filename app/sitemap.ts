import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Single-page site → one canonical entry. Emitted as /sitemap.xml at build.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thevikingcompany.eu",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
