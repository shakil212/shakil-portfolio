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
import { motionTokens } from "@/components/motion/motionTokens";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function FeaturedWork() {
  const [active, setActive] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const { effectsEnabled } = useMotionPreference();
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
  return <section className="section featured" id="work" tabIndex={-1} aria-labelledby="work-heading"><div className="container">
    <SectionHeading id="work-heading" kicker="01 / The work" title={<>Proof over <em>promises.</em></>}>A selection of software and research work. Every project is labeled by its actual development stage.</SectionHeading>
    <div className="featured-grid" ref={container}>
      <aside className="featured-context" aria-label="Currently featured project"><span className="mono muted">Currently exploring</span>
        <div className="featured-copy-stack">{featuredProjects.map((project, index) => <motion.div className="featured-copy" key={project.slug} aria-hidden={active !== index} inert={active !== index} initial={false} animate={{ opacity: active === index ? 1 : 0, y: effectsEnabled && active !== index ? 8 : 0 }} transition={{ duration: effectsEnabled ? motionTokens.feedback : 0, ease: motionTokens.ease }}>
          <p className="featured-number">{String(index + 1).padStart(2, "0")} / 03 · {project.category}</p><h3>{project.title}</h3><p className="featured-summary">{project.summary}</p><span className="stage">{project.status}</span>
          <div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </motion.div>)}</div>
        <div className="chapter-jumps" role="group" aria-label="Jump between featured projects">{featuredProjects.map((item, index) => {
          const number = String(index + 1).padStart(2, "0");
          const label = index === 0 ? "CareerPath" : index === 1 ? "MOT-SSL-GRU" : "Automation";
          return <a key={item.slug} href={`#feature-${item.slug}`} aria-current={active === index ? "step" : undefined} aria-label={`${number} ${label}: jump to ${item.title}`} onClick={() => setActive(index)}><span>{number}</span><span className="chapter-label">{label}</span></a>;
        })}</div>
        <p className="featured-hint mono">↓ Scroll through selected work · Select a project</p>
      </aside>
      <div>{featuredProjects.map((item, index) => <article className="showcase-item" id={`feature-${item.slug}`} data-feature={index} key={item.slug}>
        <Reveal><Link className="art-link" data-cursor="view" href={`/projects/${item.slug}`} aria-label={`Read ${item.title} case study`}><ProjectArtwork project={item} number={index + 1} /></Link></Reveal>
        <div className="work-caption"><div><h3><Link href={`/projects/${item.slug}`}>{item.title}</Link></h3><p><span>{item.kind}</span><span className="caption-stage">{item.status}</span></p></div><Link className="round-link" href={`/projects/${item.slug}`} aria-label={`Read ${item.title}`}><ArrowUpRight size={20} /></Link></div>
        {item.limitations && <p className="project-qualification">{item.limitations}</p>}
      </article>)}</div>
    </div><div className="flex justify-end"><Magnetic><Link className="button button-outline" href="/projects">View full archive <ArrowUpRight size={18} /></Link></Magnetic></div>
  </div></section>;
}
