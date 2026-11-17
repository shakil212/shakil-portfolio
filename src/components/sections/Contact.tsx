import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export function Contact() {
  return <section className="contact" id="contact" tabIndex={-1}><div className="container relative"><span className="kicker">05 / The next chapter</span><h2>Let&apos;s make<br /><em>something matter.</em></h2><p>{portfolio.identity.careerGoal}</p><a className="email-link" href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}<ArrowUpRight aria-hidden="true" /></a><div className="flex flex-wrap gap-3 mt-8"><a className="button button-outline" href={portfolio.contact.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={18} /><span className="sr-only"> (opens in a new tab)</span></a><a className="button button-outline" href={portfolio.contact.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={18} /><span className="sr-only"> (opens in a new tab)</span></a>{portfolio.contact.resumeUrl && <a className="button button-outline" href={portfolio.contact.resumeUrl} download>Download résumé <ArrowUpRight size={18} /></a>}</div></div></section>;
}
