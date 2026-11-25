import type { Metadata, Viewport } from "next";
import { portfolio } from "@/content/portfolio";
import { siteUrl, socialImages } from "@/lib/metadata";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import "./visual-refinements.css";
import "./professional-profile.css";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: { default: portfolio.identity.siteTitle, template: "%s | Shakil Mahmud" },
  description: portfolio.identity.introduction,
  keywords: ["Software Engineering", "Artificial Intelligence", "Machine Learning", "Data Analysis", "MIS and Reporting", "UI/UX Design", "Business Operations", "Corporate Opportunities", "Research and Innovation"],
  applicationName: "Shakil Mahmud Portfolio",
  authors: [{ name: portfolio.identity.name }],
  robots: siteUrl ? { index: true, follow: true } : { index: false, follow: false },
  icons: { icon: "/icon.svg" },
  openGraph: { siteName: "Shakil Mahmud", locale: "en_US", type: "website", images: socialImages },
  twitter: { card: "summary_large_image", images: socialImages },
};
export const viewport: Viewport = { themeColor: "#0B0B0E", colorScheme: "dark" };
export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" data-motion="off"><body><a className="skip-link" href="#main">Skip to content</a><MotionProvider><SiteChrome />{children}<Footer /></MotionProvider></body></html>;
}
