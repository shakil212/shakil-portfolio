import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { careerFocus } from "@/content/portfolio";
import { courseAnchor, projects, research } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/metadata";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? pageMetadata(project.title, project.summary, `/projects/${slug}`) : {};
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const links = Object.entries(project.links ?? {}).filter(([, url]) => Boolean(url));
  return <main className="container inner-page case-page" id="main" tabIndex={-1}>
    <Link className="text-link back-link" href="/projects"><ArrowLeft size={16} /> Project archive</Link>
    <header className="page-intro"><span className="kicker">{project.category} / Project {String(index + 1).padStart(2, "0")}</span><h1>{project.title}</h1><p>{project.kind}</p><span className="stage">{project.status}</span></header>
    <div className="case-grid"><aside className="case-context"><h2>At a glance</h2><dl><div><dt>Discipline</dt><dd>{project.category}</dd></div><div><dt>Current stage</dt><dd>{project.status}</dd></div></dl>{project.technologies.length > 0 && <><h3 className="detail-label">Tools & methods</h3><div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></>}{links.length > 0 && <div className="case-links">{links.map(([label, href]) => <a className="button button-outline" href={href} key={label} target="_blank" rel="noopener noreferrer">{label === "demo" ? (slug === "personal-portfolio" ? "Visit earlier portfolio" : "Visit project") : label === "source" ? "Source code" : "Read report"}<ArrowUpRight size={16} /><span className="sr-only"> (opens in a new tab)</span></a>)}</div>}</aside>
      <div className="case-body"><section><span className="kicker">01 / Overview</span><h2>Purpose & scope</h2><p>{project.summary}</p></section>
        {project.myWork.length > 0 && <section><span className="kicker">02 / Contribution</span><h2>What I worked on</h2><ol className="contribution-list">{project.myWork.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></section>}
        {project.featured && <figure className="case-figure"><ProjectArtwork project={project} number={index + 1} /><figcaption>Illustrative concept — an explanatory view of the supplied project scope, not a captured product screen.</figcaption></figure>}
        <section className="scope-note"><span className="kicker">03 / Current state</span><h2>Status & limitations</h2><p>{project.limitations ?? `The supplied portfolio records this project as ${project.status.toLowerCase()}. No additional performance or deployment outcomes are documented.`}</p>{project.slug === "mot-ssl-gru-dashboard" && <p>The research manuscript is a separate deliverable. <Link className="inline-link" href={`/research/${research[0].slug}`}>Read its scope and publication status.</Link></p>}</section>
        <section><h2>Career connections</h2>
          {project.relevance && <p>{project.relevance}</p>}
          {project.transferable && <p><strong>Transferable skills</strong> · {project.transferable}</p>}
          <ul className="evidence-links">{careerFocus.filter((pathway) => project.careers.includes(pathway.id)).map((pathway) => <li key={pathway.id}><Link className="inline-link" href={`/#career-${pathway.id}`}>{pathway.title}</Link></li>)}</ul>
          {project.courses.length > 0 && <><h3 className="detail-label">Related coursework</h3><ul className="evidence-links">{project.courses.map((course) => <li key={course}><Link className="inline-link" href={`/#${courseAnchor(course)}`}>{course}</Link></li>)}</ul></>}
        </section>
        <section><span className="kicker">04 / Evidence</span><h2>Available material</h2><p>{links.length ? "The public project link is provided in the project context. This case study is based on the supplied portfolio record." : "This case study summarizes the supplied portfolio record. Public source code, a demo, and original project screenshots have not been provided for this entry."}</p></section>
      </div>
    </div><nav className="case-navigation" aria-label="More projects"><Link href={`/projects/${previous.slug}`}><span><ArrowLeft size={16} /> Previous project</span><strong>{previous.title}</strong></Link><Link href={`/projects/${next.slug}`}><span>Next project <ArrowRight size={16} /></span><strong>{next.title}</strong></Link></nav>
  </main>;
}
