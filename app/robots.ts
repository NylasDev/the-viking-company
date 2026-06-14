import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Emitted as /robots.txt at build.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://thevikingcompany.eu/sitemap.xml",
    host: "https://thevikingcompany.eu",
  };
}
