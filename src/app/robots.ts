import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/projects", "/posts"],
      disallow: [],
    },
    sitemap: `https://sellucas.vercel.app/sitemap.xml`,
  };
}
