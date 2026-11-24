"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { FloatingDock } from "@/components/navigation/FloatingDock";
import { CommandPalette } from "@/components/navigation/CommandPalette";
import { sections } from "@/lib/portfolio";
import { CustomCursor } from "@/components/motion/CustomCursor";

export function SiteChrome() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [scrolled, setScrolled] = useState(false);
  const [session, setSession] = useState(0);
  const progress = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  const show = useCallback(() => { setSession((value) => value + 1); setOpen(true); }, []);
  useEffect(() => {
    const shortcut = (event: globalThis.KeyboardEvent) => {
      if (event.isComposing || event.repeat) return;
      const target = event.target as HTMLElement;
      const typing = target.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])");
      if (((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") || (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey)) {
        event.preventDefault(); if (open) close(); else show();
      }
    };
    document.addEventListener("keydown", shortcut);
    return () => document.removeEventListener("keydown", shortcut);
  }, [open, close, show]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0})`;
      setScrolled(window.scrollY > 80);
      if (pathname === "/") {
        let current: string = "top";
        for (const section of sections) { const element = document.getElementById(section.id); if (element && element.getBoundingClientRect().top <= Math.min(innerHeight * .36, 350)) current = section.id; }
        setActive(current);
      }
      frame = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule); observer.observe(document.body);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [pathname]);
  const current = pathname.startsWith("/projects") ? "archive" : pathname.startsWith("/research") ? "research" : active;
  return <><CustomCursor key={`cursor:${pathname}`} suspended={open} /><div className="scroll-progress" ref={progress} aria-hidden="true" /><Header key={pathname} active={current} scrolled={scrolled || pathname !== "/"} onSearch={show} /><FloatingDock activeLabel={sections.find((section) => section.id === current)?.label ?? "Intro"} visible={scrolled || pathname !== "/"} onSearch={show} /><CommandPalette key={session} open={open} onClose={close} /></>;
}
