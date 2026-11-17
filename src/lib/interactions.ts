/** IntersectionObserver percentage margins use width, even on the vertical axis. */
export function featuredRootMargin(viewportHeight: number) {
  const height = Math.max(1, viewportHeight);
  return `-${Math.round(height * .35)}px 0px -${Math.round(height * .45)}px 0px`;
}

export function motionIsEnabled(saved: string | null, prefersReducedMotion: boolean) {
  return saved === "on" || (saved !== "off" && !prefersReducedMotion);
}
