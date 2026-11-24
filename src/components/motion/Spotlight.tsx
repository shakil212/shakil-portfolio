"use client";

import { useEffect, useRef } from "react";
import { useMotionPreference } from "./MotionProvider";
import { finePointerQuery, useMediaQuery } from "./useMediaQuery";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const { effectsEnabled } = useMotionPreference();
  const finePointer = useMediaQuery(finePointerQuery);
  useEffect(() => {
    const layer = ref.current;
    const parent = layer?.parentElement;
    if (!effectsEnabled || !finePointer || !layer || !parent) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const hide = () => { cancelAnimationFrame(frame); frame = 0; layer.style.opacity = "0"; };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.buttons) { hide(); return; }
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        layer.style.transform = `translate3d(${x - rect.left - 430}px, ${y - rect.top - 430}px, 0)`;
        layer.style.opacity = "1";
        frame = 0;
      });
    };
    parent.addEventListener("pointermove", move, { passive: true });
    parent.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    return () => { parent.removeEventListener("pointermove", move); parent.removeEventListener("pointerleave", hide); window.removeEventListener("blur", hide); hide(); layer.style.removeProperty("transform"); };
  }, [effectsEnabled, finePointer]);
  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
