import Link from "next/link";
import { portfolio } from "@/content/portfolio";

export function Footer() {
  return <footer className="container footer"><strong>{portfolio.identity.name} © 2026</strong><span>Built with curiosity. Grounded in learning.</span><Link href="/#top">Back to intro ↑</Link></footer>;
}
