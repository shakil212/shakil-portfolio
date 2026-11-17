import type { MetadataRoute } from "next";
import { projects, research } from "@/lib/portfolio";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ["/", "/projects", "/research", ...projects.map((project) => `/projects/${project.slug}`), ...research.map((item) => `/research/${item.slug}`)].map((path) => ({ url: new URL(path, siteUrl).href }));
}
