import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sellucas.vercel.app",
      lastModified: new Date(),
    },
  ];
}
