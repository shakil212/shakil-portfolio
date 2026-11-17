import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: siteUrl ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    ...(siteUrl ? { sitemap: new URL("/sitemap.xml", siteUrl).href } : {}),
  };
}
