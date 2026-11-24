import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/content/portfolio";
import { ArtworkParallax } from "@/components/motion/ArtworkParallax";

export function ProjectArtwork({ project, number = 1 }: { project: PortfolioProject; number?: number }) {
  const kind = project.slug === "careerpath-ai" ? "career" : project.slug === "mot-ssl-gru-dashboard" ? "research" : "automation";
  return <div className={`project-art art-${kind}`} role="img" aria-label={`Illustrative concept for ${project.title}; an explanatory diagram, not a product screenshot.`}>
    <div className="art-meta"><span>{kind === "research" ? "MOT-SSL-GRU" : kind === "career" ? "CareerPath" : "Automation"} / {String(number).padStart(3, "0")}</span><span className="concept-label">Illustrative concept</span></div>
    <ArtworkParallax>{kind === "career" ? <div className="architecture" aria-hidden="true"><div className="architecture-heading"><span>CAREERPATH AI</span><ArrowUpRight size={18} /></div><p>A direction.<br /><em>A next step.</em></p><div className="architecture-flow"><div><small>Interface</small><strong>Next.js</strong></div><ArrowRight /><div><small>API</small><strong>Django REST</strong></div><ArrowRight /><div><small>Database</small><strong>PostgreSQL</strong></div></div><span className="art-footnote">Profile → career-guidance workflow · MVP</span></div>
      : kind === "research" ? <><div className="diagram-grid" /><div className="diagram-orbit" /><div className="research-flow" aria-hidden="true">{["Data|Submission", "Notes|Research", "Flow|Pipeline"].map((item, i) => <div className="research-step" key={item}><div><strong>{item.split("|")[0]}</strong><small>{item.split("|")[1]}</small></div>{i < 2 && <ArrowRight />}</div>)}</div><p className="art-footnote research-footnote">Research workflow · No live model inference</p></>
      : <><div className="automation-flow" aria-hidden="true">{["Schedule.", "Reminder.", "Notify."].map((label, i) => <div className={`flow-card flow-${i}`} key={label}><small>0{i + 1} / {i === 0 ? "Set a task" : i === 1 ? "Stay on track" : "Complete flow"}</small><strong>{label}</strong></div>)}</div><ArrowUpRight className="flow-arrow" aria-hidden="true" /></>}
    </ArtworkParallax>
  </div>;
}
