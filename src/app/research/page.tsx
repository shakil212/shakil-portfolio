import { ResearchList } from "@/components/sections/ResearchList";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Research notes", "Unpublished academic research, working manuscripts, and proposed research directions by Shakil Mahmud.", "/research");
export default function ResearchPage() {
  return <main className="container inner-page" id="main" tabIndex={-1}><div className="page-intro"><span className="kicker">Research / Questions in progress</span><h1>Questions worth <em>asking.</em></h1><p>Academic work and developing ideas, with scope and maturity stated openly. Expand a note to read its limitations.</p></div><ResearchList standalone /></main>;
}
