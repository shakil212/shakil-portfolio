import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/content/portfolio";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return <article className="archive-card" data-category={project.category} data-reveal>
    {/* Abstract decoration only; never presented as a project screenshot. */}
    <div className="card-visual" aria-hidden="true"><span className="card-visual-orbit" /><span className="card-visual-line" /><span className="card-visual-core" /></div>
    <div className="card-copy"><span className="category">{project.category}</span><h3><Link href={`/projects/${project.slug}`}>{project.title}<span className="card-hit-area" aria-hidden="true" /></Link></h3><p>{project.summary}</p></div>
    <div className="card-end"><span className="card-stage">{project.status}</span><ArrowUpRight size={19} aria-hidden="true" /></div>
  </article>;
}
