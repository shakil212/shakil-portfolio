"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export function Header({ active, scrolled, onSearch }: { active: string; scrolled: boolean; onSearch: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOutside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setMenuOpen(false); };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !document.querySelector("dialog[open]")) {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    const media = matchMedia("(min-width: 768px)");
    const resize = () => { if (media.matches) setMenuOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", escape);
    media.addEventListener("change", resize);
    return () => { document.removeEventListener("pointerdown", closeOutside); document.removeEventListener("keydown", escape); media.removeEventListener("change", resize); };
  }, [menuOpen]);
  const search = () => { if (menuOpen) toggle.current?.focus(); setMenuOpen(false); onSearch(); };
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} ref={header}>
    <Link className="wordmark" href="/#top" aria-label={`${portfolio.identity.name}, home`} onClick={() => setMenuOpen(false)}><span>SHAKIL</span><span>MAHMUD<small>Portfolio / 2026</small></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{[{ id: "work", name: "Work" }, { id: "research", name: "Research" }, { id: "about", name: "About" }].map((item) => <Link key={item.id} href={`/#${item.id}`} aria-current={active === item.id ? "location" : undefined}>{item.name}</Link>)}<Link className="nav-contact" href="/#contact" aria-current={active === "contact" ? "location" : undefined}>Let&apos;s connect ↗</Link><button className="search-launcher" onClick={search} title="Quick Find (Ctrl/Cmd+K)"><Search size={12} />Quick Find</button></nav>
    <button ref={toggle} className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}{menuOpen ? <X size={15} /> : <Menu size={15} />}</button>
    <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen}>{[{ id: "work", label: "Work" }, { id: "archive", label: "Projects" }, { id: "research", label: "Research" }, { id: "about", label: "About" }, { id: "contact", label: "Contact" }].map((item) => <Link key={item.id} href={`/#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={() => setMenuOpen(false)}>{item.label}<span aria-hidden="true">↗</span></Link>)}<button onClick={search}>Quick Find <Search size={16} /></button></nav>
  </header>;
}
