import { MetadataRoute } from "next";

import { baseUrl } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog", "/blog/projects", "/blog/articles"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

