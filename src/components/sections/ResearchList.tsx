import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { research } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ResearchList({ standalone = false }: { standalone?: boolean }) {
  return <section className={standalone ? "research-list" : "section research-list"} id="research" tabIndex={-1}>
    <div className={standalone ? "" : "container"}>{!standalone && <SectionHeading kicker="Research & innovation" title={<>Questions worth <em>asking.</em></>}>Research, emerging ideas, and careful investigation — with transparent status labels and limitations.</SectionHeading>}
    {research.map((item, index) => <details className="research-item" key={item.slug}><summary><span className="research-number">{String(index + 1).padStart(2, "0")}</span><span className="research-summary"><span className="research-title">{item.title}</span><span className="research-description">{item.summary}</span></span><span className="research-status">{item.status}</span><Plus className="research-expand" size={20} aria-hidden="true" /></summary><div className="research-expanded"><h3>Scope & limitations</h3><p>{item.importantQualification}</p><Link className="text-link" href={`/research/${item.slug}`}>Read research note <ArrowUpRight size={16} /></Link></div></details>)}
    {!standalone && <div className="mt-8 flex justify-end"><Link className="text-link" href="/research">All research notes <ArrowUpRight size={16} /></Link></div>}
  </div></section>;
}
