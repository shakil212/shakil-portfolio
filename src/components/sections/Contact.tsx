import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { ContactSocialLinks } from "./ContactSocialLinks";

export function Contact() {
  return <section className="contact" id="contact" tabIndex={-1}><div className="container relative"><span className="kicker">Contact</span><h2>{portfolio.contact.headline[0]}{" "}<em>{portfolio.contact.headline[1]}</em></h2><p>{portfolio.contact.description}</p><a className="email-link" href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}<ArrowUpRight aria-hidden="true" /></a><div className="flex flex-wrap gap-3 mt-8"><ContactSocialLinks />{portfolio.contact.resumeUrl && <a className="button button-outline" href={portfolio.contact.resumeUrl} download>Download résumé <ArrowUpRight size={18} /></a>}</div></div></section>;
}
