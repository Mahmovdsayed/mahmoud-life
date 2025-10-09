import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/settings", "/auth", "/api", "/discover"],
      },
    ],
    sitemap: `https://mahmoud.life/sitemap.xml`,
  };
}
