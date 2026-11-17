import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { Spotlight } from "@/components/motion/Spotlight";

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-heading" tabIndex={-1}>
    <div className="orb" aria-hidden="true" /><div className="orb-line" aria-hidden="true" /><Spotlight />
    <span className="vertical-issue" aria-hidden="true">Portfolio / Interactive 02</span>
    <div className="container hero-main">
      <p className="eyebrow"><span>{portfolio.identity.name}</span><span className="eyebrow-divider">/</span><span>{portfolio.identity.eyebrow.replaceAll(" / ", " · ")}</span></p>
      <h1 id="hero-heading"><span>From curiosity</span><span>to <em>creation.</em></span></h1>
      <div className="hero-description"><p>I&apos;m {portfolio.identity.firstName} — a {portfolio.identity.role.toLowerCase()} building useful software, exploring intelligent systems, and designing better experiences.</p></div>
      <div className="flex flex-wrap gap-3 hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={20} /></a><a className="button button-outline" href="#contact">Contact me <ArrowUpRight size={20} /></a></div>
    </div>
    <div className="container hero-bottom"><span className="availability"><i />{portfolio.identity.availability}</span><span>{portfolio.identity.location}</span><a href="#work">Scroll to discover <ArrowDown size={12} /></a></div>
  </section>;
}
