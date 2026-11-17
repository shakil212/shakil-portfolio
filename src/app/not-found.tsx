import Link from "next/link";

export default function NotFound() {
  return <main id="main" className="container inner-page error-page" tabIndex={-1}><span className="kicker">404 / A different path</span><h1>This page isn&apos;t here.</h1><p>Explore the project archive or return to the portfolio.</p><div className="flex flex-wrap gap-3"><Link className="button button-primary" href="/">Back home ↗</Link><Link className="button button-outline" href="/projects">Project archive ↗</Link></div></main>;
}
