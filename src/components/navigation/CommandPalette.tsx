"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Search, X } from "lucide-react";
import { searchCommands } from "@/lib/commands";

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const restoreFocus = useRef(true);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();
  const results = searchCommands(query);
  const selected = Math.min(active, Math.max(0, results.length - 1));
  useEffect(() => {
    const node = dialog.current;
    if (!node || !open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    restoreFocus.current = true;
    node.showModal();
    input.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      node.close();
      document.body.style.overflow = previousOverflow;
      if (restoreFocus.current && previouslyFocused?.isConnected) previouslyFocused.focus({ preventScroll: true });
    };
  }, [open]);
  useEffect(() => { if (open) document.getElementById(`command-result-${selected}`)?.scrollIntoView({ block: "nearest" }); }, [selected, open]);
  const activate = (href: string) => {
    restoreFocus.current = false;
    // Close synchronously before routing so the destination is no longer inert.
    dialog.current?.close();
    onClose();
    if (href.startsWith("/#") && location.pathname === "/") {
      const hash = href.slice(1);
      if (location.hash !== hash) location.hash = hash;
      else window.dispatchEvent(new Event("portfolio-reveal"));
      const target = document.getElementById(hash.slice(1));
      target?.focus({ preventScroll: true });
      target?.scrollIntoView({ block: "start" });
    } else {
      router.push(href);
    }
  };
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); if (results.length) setActive((selected + (event.key === "ArrowDown" ? 1 : -1) + results.length) % results.length); }
    if (event.key === "Enter" && results[selected]) { event.preventDefault(); activate(results[selected].href); }
  };
  return <dialog className="command-dialog" ref={dialog} aria-modal="true" aria-labelledby="command-title" onKeyDown={(event) => {
    if (event.key !== "Tab") return;
    const controls = event.currentTarget.querySelectorAll<HTMLElement>("button:not([disabled]), input:not([disabled])");
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }} onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose(); } }}>
    <div className="command-head"><h2 id="command-title">Quick navigation</h2><button onClick={onClose} aria-label="Close Quick Find">Esc <X size={12} /></button></div>
    <label className="command-input"><Search size={20} aria-hidden="true" /><span className="sr-only">Search careers, skills, courses, projects and research</span><input ref={input} value={query} onChange={(event) => { setQuery(event.target.value); setActive(0); }} onKeyDown={onKeyDown} placeholder="Search careers, skills, courses or projects…" role="combobox" aria-expanded={open} aria-autocomplete="list" aria-controls="command-results" aria-activedescendant={results.length ? `command-result-${selected}` : undefined} autoComplete="off" /></label>
    <div className="command-results" id="command-results" role="listbox" aria-label="Quick navigation results">{results.map((item, index) => <div role="option" id={`command-result-${index}`} aria-selected={selected === index} key={item.href} className="command-option" onPointerMove={() => setActive(index)} onClick={() => activate(item.href)}><span className="command-index">{String(index + 1).padStart(2, "0")}</span><span className="command-name">{item.label}</span><span className="command-tag">{item.tag}</span><ArrowUpRight size={17} /></div>)}</div>
    {!results.length && <p className="command-empty" role="status">No matches. Try “Python”, “CareerPath”, or “research”.</p>}
    {results.length > 0 && <p className="sr-only" role="status">{results.length} navigation result{results.length === 1 ? "" : "s"} available.</p>}
    <div className="command-tip"><span>↑ ↓ to select</span><span>↵ to open</span><span>Ctrl / ⌘ + K</span><span>/ to search</span></div>
  </dialog>;
}
