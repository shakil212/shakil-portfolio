"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { motionIsEnabled } from "@/lib/interactions";

const MotionContext = createContext({ enabled: false, effectsEnabled: false, toggle: () => {} });
export function MotionProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("shakil-motion"); } catch { /* Storage may be disabled. */ }
      setEnabled(motionIsEnabled(saved, media.matches));
      setReduced(media.matches);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  const effectsEnabled = enabled && !reduced;
  useEffect(() => { document.documentElement.dataset.motion = effectsEnabled ? "on" : "off"; }, [effectsEnabled]);
  useEffect(() => {
    document.documentElement.dataset.effects = effectsEnabled ? "on" : "off";
    return () => { delete document.documentElement.dataset.effects; };
  }, [effectsEnabled]);
  const toggle = useCallback(() => {
    setEnabled((previous) => {
      try { localStorage.setItem("shakil-motion", previous ? "off" : "on"); } catch { /* Keep the in-memory preference. */ }
      return !previous;
    });
  }, []);
  return <MotionContext.Provider value={{ enabled, effectsEnabled, toggle }}><MotionConfig reducedMotion={effectsEnabled ? "never" : "always"}>{children}</MotionConfig></MotionContext.Provider>;
}
export const useMotionPreference = () => useContext(MotionContext);
