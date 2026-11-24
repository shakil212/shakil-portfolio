"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { scroll } from "motion";
import { animate } from "motion/mini";
import { useMotionPreference } from "./MotionProvider";
import { finePointerQuery, useMediaQuery } from "./useMediaQuery";

export function ArtworkParallax({ children }: { children: ReactNode }) {
  const layer = useRef<HTMLDivElement>(null);
  const { effectsEnabled } = useMotionPreference();
  const desktop = useMediaQuery(`(min-width: 768px) and ${finePointerQuery}`);
  useEffect(() => {
    const element = layer.current;
    const frame = element?.parentElement;
    if (!effectsEnabled || !desktop || !element || !frame) return;
    // Move only the illustration, leaving its frame, labels, and hit area fixed.
    const animation = animate(element, { transform: ["translateY(14px)", "translateY(-14px)"] }, { ease: "linear" });
    const stop = scroll(animation, { target: frame, offset: ["start end", "end start"] });
    return () => { stop(); animation.cancel(); element.style.removeProperty("transform"); };
  }, [effectsEnabled, desktop]);
  return <div className="art-parallax-layer" ref={layer}>{children}</div>;
}
