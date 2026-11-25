import type { Metadata } from "next";
import { portfolio } from "@/content/portfolio";
import { parseSiteUrl } from "./site-url";

// Configure only after a canonical public domain is approved.
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl = parseSiteUrl(configuredUrl);
export const socialImages = siteUrl ? [{ url: new URL("/og", siteUrl).href, width: 1200, height: 630, alt: portfolio.identity.siteTitle }] : [];
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const socialTitle = path === "/" ? portfolio.identity.siteTitle : `${title} | ${portfolio.identity.name}`;
  return {
    title,
    description,
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: socialImages,
    },
    ...(siteUrl ? { alternates: { canonical: new URL(path, siteUrl).href } } : {}),
    openGraph: {
      siteName: portfolio.identity.name,
      locale: "en_US",
      title: socialTitle,
      description,
      type: "website",
      images: socialImages,
      ...(siteUrl ? { url: new URL(path, siteUrl).href } : {}),
    },
  };
}
