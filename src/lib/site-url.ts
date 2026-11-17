/** Require an origin, not a path, credential-bearing URL, or silent fallback. */
export function parseSiteUrl(value: string | undefined): URL | undefined {
  if (!value?.trim()) return undefined;
  let url: URL;
  try { url = new URL(value.trim()); } catch { throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute HTTP(S) origin."); }
  if (!/^https?:$/.test(url.protocol) || url.username || url.password || url.search || url.hash || url.pathname !== "/") {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without credentials, path, query, or fragment.");
  }
  return new URL(url.origin);
}
