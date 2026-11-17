import Image from "next/image";
import { portfolio } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillLabels: Record<keyof typeof portfolio.skills, string> = { programming: "Programming", web: "Web development", dataAndAI: "Data & AI", designAndResearch: "Design & research", workflowsAndOffice: "Workflows & office", developerTools: "Developer tools" };

export function About() {
  return <section className="section about" id="about" tabIndex={-1}><div className="container">
    <SectionHeading kicker="04 / Beyond the code" title={<>A little <em>about me.</em></>} />
    <div className="about-grid"><figure className="portrait"><Image src={portfolio.identity.portrait} alt={portfolio.identity.portraitAlt} fill sizes="(max-width: 767px) 90vw, 40vw" /><figcaption>{portfolio.identity.name} / {portfolio.identity.location}</figcaption></figure>
      <div className="about-copy"><h3>Thoughtful by nature.<br /><em>Driven to build.</em></h3><p>{portfolio.about.short}</p><p>{portfolio.about.long}</p>
        <dl className="bio-meta"><div><dt>Education</dt><dd>{portfolio.education.map((item) => <div key={item.institution}><strong>{item.degree}</strong><br />{item.institution}<br />{item.specialization}<br />{item.start} – {item.expectedGraduation}</div>)}</dd></div><div><dt>Experience</dt><dd>{portfolio.experience.map((item) => <div key={item.organization}><strong>{item.title} · {item.organization}</strong><br />{item.arrangement} · {item.start} – {item.end}<p>{item.description}</p></div>)}</dd></div><div><dt>Languages</dt><dd>{portfolio.languages.join(" · ")}</dd></div></dl>
      </div>
    </div>
    <div className="about-details"><div><h3 className="detail-label">Skills & tools</h3>{Object.entries(portfolio.skills).map(([key, values]) => <details className="skill-group" key={key} open={key === "programming" || key === "web"}><summary>{skillLabels[key as keyof typeof skillLabels]}<span aria-hidden="true">+</span></summary><div className="tags">{values.map((skill) => <span key={skill}>{skill}</span>)}</div></details>)}</div>
      <div><h3 className="detail-label">Recognition</h3><ul className="recognition-list">{portfolio.achievements.map((item) => <li key={item}>{item}</li>)}</ul><h3 className="detail-label mt-10">Courses & training</h3><ul className="training-list">{portfolio.coursesAndTraining.map((item) => <li key={item.name}><span>{item.name}</span><small>{item.provider} · {item.year}</small></li>)}</ul><details className="skill-group mt-6"><summary>Academic coursework<span aria-hidden="true">+</span></summary><div className="tags">{portfolio.education[0].coursework.map((course) => <span key={course}>{course}</span>)}</div></details></div>
    </div>
  </div></section>;
}
