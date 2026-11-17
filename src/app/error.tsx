"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main id="main" className="container inner-page error-page" tabIndex={-1}><span className="kicker">A small interruption</span><h1>Something went wrong.</h1><p>Please try loading this page again.</p><button className="button button-primary" onClick={reset}>Try again ↗</button></main>;
}
