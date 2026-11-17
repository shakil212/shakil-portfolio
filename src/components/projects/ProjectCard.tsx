import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/content/portfolio";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return <article className="archive-card"><span className="category">{project.category}</span><h3><Link href={`/projects/${project.slug}`}>{project.title}<span className="card-hit-area" aria-hidden="true" /></Link></h3><p>{project.summary}</p><div className="card-end"><span>{project.status}</span><ArrowUpRight size={19} aria-hidden="true" /></div></article>;
}
