"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useSpring } from "motion/react";
import { useMotionPreference } from "./MotionProvider";
import { finePointerQuery, useMediaQuery } from "./useMediaQuery";

export function Magnetic({ children }: { children: ReactNode }) {
  const target = useRef<HTMLSpanElement>(null);
  const { effectsEnabled } = useMotionPreference();
  const finePointer = useMediaQuery(finePointerQuery);
  const x = useSpring(0, { stiffness: 240, damping: 24, mass: 0.5 });
  const y = useSpring(0, { stiffness: 240, damping: 24, mass: 0.5 });
  useEffect(() => {
    const element = target.current;
    if (!element || !effectsEnabled || !finePointer) return;
    let bounds: DOMRect | undefined;
    const reset = () => { bounds = undefined; x.jump(0); y.jump(0); };
    const leave = () => { bounds = undefined; x.set(0); y.set(0); };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.buttons || element.contains(document.activeElement)) { reset(); return; }
      bounds ??= element.getBoundingClientRect();
      x.set(Math.max(-5, Math.min(5, (event.clientX - bounds.left - bounds.width / 2) * 0.08)));
      y.set(Math.max(-4, Math.min(4, (event.clientY - bounds.top - bounds.height / 2) * 0.12)));
    };
    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", leave);
    element.addEventListener("pointerdown", reset);
    element.addEventListener("pointercancel", reset);
    element.addEventListener("focusin", reset);
    window.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("resize", reset);
    window.addEventListener("blur", reset);
    return () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
      element.removeEventListener("pointerdown", reset);
      element.removeEventListener("pointercancel", reset);
      element.removeEventListener("focusin", reset);
      window.removeEventListener("scroll", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("blur", reset);
      reset();
    };
  }, [effectsEnabled, finePointer, x, y]);
  return <span className="magnetic-target" ref={target}><motion.span className="magnetic-content" style={{ x, y }}>{children}</motion.span></span>;
}
