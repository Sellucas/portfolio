import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `https://sellucas.vercel.app/sitemap.xml`,
    host: "https://sellucas.vercel.app",
  };
}
