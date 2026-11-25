"use client";

import { useEffect } from "react";

// Resolve both shared URLs and Quick Find results inside collapsed directories.
export function FragmentNavigation() {
  useEffect(() => {
    let frame = 0;
    const reveal = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        window.dispatchEvent(new Event("portfolio-fragment"));
        const target = document.getElementById(location.hash.slice(1));
        const disclosure = target?.closest("details");
        if (!target || !disclosure) return;
        disclosure.open = true;
        const destination = target === disclosure ? disclosure.querySelector("summary") : target;
        destination?.focus({ preventScroll: true });
        destination?.scrollIntoView({ block: "start" });
      });
    };
    const repeatLink = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (link?.hash && link.pathname === location.pathname && link.hash === location.hash) reveal();
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    window.addEventListener("portfolio-reveal", reveal);
    document.addEventListener("click", repeatLink);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", reveal);
      window.removeEventListener("portfolio-reveal", reveal);
      document.removeEventListener("click", repeatLink);
    };
  }, []);
  return null;
}
