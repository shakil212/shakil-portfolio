"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMotionPreference } from "./MotionProvider";
import { finePointerQuery, useMediaQuery } from "./useMediaQuery";

export function CustomCursor({ suspended = false }: { suspended?: boolean }) {
  const { effectsEnabled } = useMotionPreference();
  const finePointer = useMediaQuery(`(min-width: 768px) and ${finePointerQuery}`);
  return effectsEnabled && finePointer && !suspended ? <CursorLayer /> : null;
}

function CursorLayer() {
  const layer = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const overlay = layer.current;
    if (!overlay || !dot.current || !ring.current) return;
    const dotX = gsap.quickSetter(dot.current, "x", "px");
    const dotY = gsap.quickSetter(dot.current, "y", "px");
    // Reuse two tweens; no allocations or React renders on each pointer move.
    const ringX = gsap.quickTo(ring.current, "x", { duration: 0.28, ease: "power3.out" });
    const ringY = gsap.quickTo(ring.current, "y", { duration: 0.28, ease: "power3.out" });
    let frame = 0;
    let visible = false;
    let selecting = false;
    let latest: PointerEvent | undefined;
    const hide = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      visible = false;
      overlay.dataset.visible = "false";
      delete root.dataset.customCursor;
      ringX.tween.pause();
      ringY.tween.pause();
    };
    const paint = () => {
      frame = 0;
      if (!latest) return;
      const { clientX: x, clientY: y, target } = latest;
      const element = target instanceof Element ? target : null;
      // Keep native editing, selection, dialogs, and the untouched contact section.
      if (!element || element.closest("input, textarea, select, [contenteditable]:not([contenteditable='false']), dialog, #contact, [data-native-cursor]") || x >= root.clientWidth || y >= root.clientHeight) { hide(); return; }
      dotX(x);
      dotY(y);
      if (!visible) {
        ringX(x, x);
        ringY(y, y);
      } else {
        ringX(x);
        ringY(y);
      }
      const state = element.closest("a[data-cursor='view']") ? "view" : element.closest("a, button, summary") ? "link" : "idle";
      if (overlay.dataset.state !== state) overlay.dataset.state = state;
      if (!visible) {
        visible = true;
        overlay.dataset.visible = "true";
        root.dataset.customCursor = "active";
      }
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.buttons || selecting || document.hidden) { hide(); return; }
      latest = event;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const leave = (event: PointerEvent) => { if (!event.relatedTarget) hide(); };
    const selection = () => {
      const currentSelection = window.getSelection();
      selecting = Boolean(currentSelection && !currentSelection.isCollapsed);
      if (selecting) hide();
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerout", leave);
    document.addEventListener("pointerdown", hide, { passive: true });
    document.addEventListener("pointercancel", hide);
    document.addEventListener("selectionchange", selection);
    document.addEventListener("keydown", hide);
    document.addEventListener("visibilitychange", hide);
    // A stationary pointer must never retain VIEW after the artwork scrolls away.
    window.addEventListener("scroll", hide, { passive: true, capture: true });
    window.addEventListener("blur", hide);
    window.addEventListener("resize", hide);
    return () => {
      hide();
      ringX.tween.kill();
      ringY.tween.kill();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", leave);
      document.removeEventListener("pointerdown", hide);
      document.removeEventListener("pointercancel", hide);
      document.removeEventListener("selectionchange", selection);
      document.removeEventListener("keydown", hide);
      document.removeEventListener("visibilitychange", hide);
      window.removeEventListener("scroll", hide, true);
      window.removeEventListener("blur", hide);
      window.removeEventListener("resize", hide);
    };
  }, []);

  return <div ref={layer} className="custom-cursor" data-visible="false" data-state="idle" aria-hidden="true">
    <div ref={dot} className="cursor-position"><span className="cursor-dot" /></div>
    <div ref={ring} className="cursor-position"><span className="cursor-ring" /><span className="cursor-label">VIEW</span></div>
  </div>;
}
