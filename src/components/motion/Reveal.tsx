"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";
import { inView } from "motion";
import { animate } from "motion/mini";
import { useMotionPreference } from "./MotionProvider";
import { motionTokens } from "./motionTokens";

/** Enhances existing layout boxes; SSR and waiting content remain fully visible. */
export function Reveal({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const scope = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const { effectsEnabled } = useMotionPreference();

  useEffect(() => {
    const root = scope.current;
    if (!root || !effectsEnabled || played.current) return;
    const cleanups: (() => void)[] = [];
    const finish = () => cleanups.forEach((cleanup) => cleanup());
    const stopObserving = inView(root, () => {
      played.current = true;
      if (root.contains(document.activeElement)) return;
      const marked = root.querySelectorAll<HTMLElement>("[data-reveal]");
      const targets = marked.length ? Array.from(marked) : [root];
      targets.forEach((target, index) => {
        const previous = { transform: target.style.transform, opacity: target.style.opacity };
        const animation = animate(target, {
          opacity: [0.72, 1], transform: ["translateY(22px)", "translateY(0px)"],
        }, {
          duration: motionTokens.reveal,
          delay: Math.min(index, 4) * motionTokens.stagger,
          ease: motionTokens.ease,
        });
        const restore = () => {
          animation.cancel();
          target.style.transform = previous.transform;
          target.style.opacity = previous.opacity;
        };
        cleanups.push(restore);
        // Release the transform so CSS hover feedback can take over after entry.
        animation.then(restore);
      });
    }, { amount: 0.08 });
    // Keyboard focus immediately restores the untransformed layout.
    root.addEventListener("focusin", finish);
    return () => { stopObserving(); finish(); root.removeEventListener("focusin", finish); };
  }, [effectsEnabled]);

  return <div ref={scope} {...props}>{children}</div>;
}
