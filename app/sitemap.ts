import { MetadataRoute } from "next";
import { baseUrl } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
