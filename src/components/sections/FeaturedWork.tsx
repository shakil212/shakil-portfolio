"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { featuredRootMargin } from "@/lib/interactions";

export function FeaturedWork() {
  const [active, setActive] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const { enabled } = useMotionPreference();
  useEffect(() => {
    const items = container.current?.querySelectorAll<HTMLElement>("[data-feature]");
    if (!items || !window.IntersectionObserver) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    const observe = () => {
      observer?.disconnect();
      // Keep the non-sticky mobile context from changing height above the reader.
      if (!desktop.matches) return;
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.feature));
      }, { rootMargin: featuredRootMargin(window.innerHeight), threshold: 0 });
      items.forEach((item) => observer?.observe(item));
    };
    const resize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(observe);
    };
    observe();
    window.addEventListener("resize", resize);
    return () => { observer?.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, []);
  const project = featuredProjects[active];
  return <section className="section featured" id="work" tabIndex={-1} aria-labelledby="work-heading"><div className="container">
    <SectionHeading id="work-heading" kicker="01 / The work" title={<>Proof over <em>promises.</em></>}>A selection of software and research work. Every project is labeled by its actual development stage.</SectionHeading>
    <div className="featured-grid" ref={container}>
      <aside className="featured-context" aria-label="Currently featured project"><span className="mono muted">Currently exploring</span>
        <motion.div key={project.slug} initial={{ opacity: enabled ? .65 : 1, y: enabled ? 6 : 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: enabled ? .18 : 0 }}>
          <p className="featured-number">{String(active + 1).padStart(2, "0")} / 03 · {project.category}</p><h3>{project.title}</h3><p className="featured-summary">{project.summary}</p><span className="stage">{project.status}</span>
          <div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </motion.div>
        <div className="chapter-jumps" role="group" aria-label="Jump between featured projects">{featuredProjects.map((item, index) => <a key={item.slug} href={`#feature-${item.slug}`} aria-current={active === index ? "step" : undefined} aria-label={`Jump to ${item.title}`} onClick={() => setActive(index)}><span>{String(index + 1).padStart(2, "0")}</span><span className="chapter-label">{index === 0 ? "CareerPath" : index === 1 ? "MOT-SSL-GRU" : "Automation"}</span></a>)}</div>
        <p className="featured-hint mono">↓ Scroll through selected work · Select a project</p>
      </aside>
      <div>{featuredProjects.map((item, index) => <article className="showcase-item" id={`feature-${item.slug}`} data-feature={index} key={item.slug}>
        <Link className="art-link" href={`/projects/${item.slug}`} aria-label={`Read ${item.title} case study`}><ProjectArtwork project={item} number={index + 1} /></Link>
        <div className="work-caption"><div><h3><Link href={`/projects/${item.slug}`}>{item.title}</Link></h3><p>{item.kind} · {item.status}</p></div><Link className="round-link" href={`/projects/${item.slug}`} aria-label={`Read ${item.title}`}><ArrowUpRight size={20} /></Link></div>
        {item.limitations && <p className="project-qualification">{item.limitations}</p>}
      </article>)}</div>
    </div><div className="flex justify-end"><Link className="button button-outline" href="/projects">View full archive <ArrowUpRight size={18} /></Link></div>
  </div></section>;
}
