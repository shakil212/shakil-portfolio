"use client";

import { useEffect, useRef } from "react";
import { useMotionPreference } from "./MotionProvider";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled } = useMotionPreference();
  useEffect(() => {
    const layer = ref.current;
    const parent = layer?.parentElement;
    if (!enabled || !layer || !parent || !matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        layer.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
        layer.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
        frame = 0;
      });
    };
    parent.addEventListener("pointermove", move, { passive: true });
    return () => { parent.removeEventListener("pointermove", move); cancelAnimationFrame(frame); };
  }, [enabled]);
  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
