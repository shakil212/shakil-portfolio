"use client";

import { useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { categories, searchProjects } from "@/lib/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "@/components/motion/Reveal";

export function ProjectArchive() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const filtered = searchProjects(query, category);
  const reset = () => { setCategory("All"); setQuery(""); input.current?.focus(); };
  return <div>
    <div className="filters" role="group" aria-label="Filter projects by discipline">{categories.map((item) => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <div className="archive-toolbar"><label className="search-field"><Search size={18} aria-hidden="true" /><span className="sr-only">Search projects, skills or keywords</span><input ref={input} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, skills or keywords…" autoComplete="off" /></label><div className="flex items-center gap-4">{(query || category !== "All") && <button className="reset-button" onClick={reset}><X size={14} />Reset</button>}<p className="result-count" role="status" aria-live="polite">{filtered.length} project{filtered.length === 1 ? "" : "s"} found</p></div></div>
    <Reveal className="archive-grid">{filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}</Reveal>
    {!filtered.length && <div className="empty-state"><h3>No matches found.</h3><p>Try another keyword or explore all disciplines.</p><button className="button button-outline" onClick={reset}>Clear search & filters</button></div>}
    <p className="archive-note mono">Each project includes its contribution, current stage, and limitations.</p>
  </div>;
}
