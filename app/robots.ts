import { MetadataRoute } from "next";
import { baseUrl } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"], // TODO: Add next pages here
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
