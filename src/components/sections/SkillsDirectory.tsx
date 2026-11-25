"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Search } from "lucide-react";
import { skillGroups, type SkillGroup } from "@/content/portfolio";
import { projects } from "@/lib/portfolio";
import { ProjectLinks } from "@/components/ui/ProjectLinks";

function SkillContents({ group, matches }: { group: SkillGroup; matches: readonly string[] }) {
  return <>
    <div className="tags">{matches.map((skill) => <span key={skill}>{skill}</span>)}</div>
    {group.projects.length > 0 && <div className="skills-evidence"><span>Related work</span><ProjectLinks items={projects.filter((project) => group.projects.includes(project.slug))} /></div>}
  </>;
}

function SkillCategory({ group, searching }: { group: SkillGroup & { matches: string[] }; searching: boolean }) {
  const [expanded, setExpanded] = useState(searching);
  const content = <SkillContents group={group} matches={group.matches} />;
  return (
    <details className="skill-group" id={`skills-${group.id}`} open={searching || undefined}
      onToggle={(event) => setExpanded(event.currentTarget.open)}>
      <summary>{group.title}<span aria-hidden="true">+</span></summary>
      {expanded ? content : <noscript>{content}</noscript>}
    </details>
  );
}

export function SkillsDirectory() {
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const resetForDestination = () => {
      // The fragment handler needs the unfiltered target mounted before moving focus.
      if (query && location.hash.startsWith("#skills-")) flushSync(() => setQuery(""));
    };
    window.addEventListener("portfolio-fragment", resetForDestination);
    return () => window.removeEventListener("portfolio-fragment", resetForDestination);
  }, [query]);
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const groups = skillGroups.map((group) => ({
    ...group,
    matches: group.skills.filter((skill) => words.every((word) => `${group.title} ${skill}`.toLowerCase().includes(word))),
  })).filter((group) => group.matches.length);

  return (
    <div>
      <div className="archive-toolbar skills-toolbar">
        <label className="search-field"><Search size={18} aria-hidden="true" /><span className="sr-only">Search skills and categories</span>
          <input ref={input} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search skills, e.g. Excel or Python" />
        </label>
        <span className="result-count" role="status">{groups.length} of {skillGroups.length} categories</span>
      </div>
      <div className="directory-grid skills-list">{groups.map((group) => (
        <SkillCategory key={`${group.id}-${Boolean(words.length)}`} group={group} searching={Boolean(words.length)} />
      ))}</div>
      {groups.length === 0 && <div className="empty-state"><p>No skills match “{query}”.</p><button className="button button-outline" onClick={() => { setQuery(""); input.current?.focus(); }}>Show all skills</button></div>}
    </div>
  );
}
