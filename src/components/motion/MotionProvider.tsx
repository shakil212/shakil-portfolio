"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { motionIsEnabled } from "@/lib/interactions";

const MotionContext = createContext({ enabled: false, toggle: () => {} });
export function MotionProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("shakil-motion"); } catch { /* Storage may be disabled. */ }
      setEnabled(motionIsEnabled(saved, media.matches));
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(() => { document.documentElement.dataset.motion = enabled ? "on" : "off"; }, [enabled]);
  const toggle = useCallback(() => {
    setEnabled((previous) => {
      try { localStorage.setItem("shakil-motion", previous ? "off" : "on"); } catch { /* Keep the in-memory preference. */ }
      return !previous;
    });
  }, []);
  return <MotionContext.Provider value={{ enabled, toggle }}><MotionConfig reducedMotion={enabled ? "never" : "always"}>{children}</MotionConfig></MotionContext.Provider>;
}
export const useMotionPreference = () => useContext(MotionContext);
