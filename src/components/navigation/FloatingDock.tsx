"use client";

import { ArrowUp, CircleDashed, Pause, Search } from "lucide-react";
import { useMotionPreference } from "@/components/motion/MotionProvider";

export function FloatingDock({ activeLabel, visible, onSearch }: { activeLabel: string; visible: boolean; onSearch: () => void }) {
  const { enabled, toggle } = useMotionPreference();
  return <nav className={`floating-dock ${visible ? "is-visible" : ""}`} aria-label="Portfolio controls">
    <span className="dock-section"><i />{activeLabel}</span><button onClick={onSearch} aria-label="Open Quick Find" title="Quick Find (Ctrl/Cmd+K)"><Search size={16} /><span className="dock-text">Quick Find</span><kbd>⌘ K</kbd></button>
    <button onClick={toggle} aria-label={enabled ? "Turn motion off" : "Turn motion on"} aria-pressed={enabled} title={enabled ? "Turn motion off" : "Turn motion on"}>{enabled ? <CircleDashed size={16} /> : <Pause size={16} />}<span className="dock-text">Motion {enabled ? "on" : "off"}</span></button>
    <a className="dock-top" href="#main" aria-label="Back to top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: enabled ? "smooth" : "instant" }); document.getElementById("main")?.focus({ preventScroll: true }); }}><ArrowUp size={18} /></a>
  </nav>;
}
