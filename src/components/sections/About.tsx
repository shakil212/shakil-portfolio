import Image from "next/image";
import { portfolio } from "@/content/portfolio";

export function About() {
  return (
    <section className="section about" id="about" tabIndex={-1} aria-labelledby="about-title">
      <div className="container about-grid">
        <figure className="portrait">
          <Image src={portfolio.identity.portrait} alt={portfolio.identity.portraitAlt} fill sizes="(max-width: 767px) 90vw, 40vw" />
          <figcaption>{portfolio.identity.name} / {portfolio.identity.location}</figcaption>
        </figure>
        <div className="about-copy">
          <span className="kicker">About me</span>
          <h2 className="section-title" id="about-title">Thoughtful by nature.<br /><em>Driven to build.</em></h2>
          <p>{portfolio.about.short}</p><p>{portfolio.about.long}</p>
          <details className="skill-group">
            <summary>Research & technical interests<span aria-hidden="true">+</span></summary>
            <div className="tags">{portfolio.about.interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
          </details>
          <nav className="profile-links" aria-label="Explore my background">
            <a href="#careers">Career focus</a><a href="#skills">Skills</a><a href="#education">Education</a>
          </nav>
        </div>
      </div>
    </section>
  );
}
