import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { Spotlight } from "@/components/motion/Spotlight";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-heading" tabIndex={-1}>
    <div className="hero-grid" aria-hidden="true" />
    <div className="orb" aria-hidden="true" /><div className="orb-line" aria-hidden="true" /><Spotlight />
    <span className="vertical-issue" aria-hidden="true">Portfolio / Interactive V3</span>
    <Reveal className="container hero-main">
      <p className="eyebrow"><span>{portfolio.identity.name}</span><span className="eyebrow-divider">/</span><span>{portfolio.identity.positioning}</span></p>
      <h1 id="hero-heading"><span data-reveal>{portfolio.identity.headline[0]}</span>{" "}<span data-reveal><em>{portfolio.identity.headline[1]}</em></span></h1>
      <div className="hero-description"><p>{portfolio.identity.role}</p></div>
      <div className="flex flex-wrap gap-3 hero-actions" data-reveal><Magnetic><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={20} /></a></Magnetic><a className="button button-outline" href="#contact">Contact me <ArrowUpRight size={20} /></a></div>
    </Reveal>
    <div className="container hero-bottom"><span className="availability"><i />{portfolio.identity.availability}</span><span>{portfolio.identity.location}</span><a href="#work">Scroll to discover <ArrowDown size={12} /></a></div>
  </section>;
}
