/** Public site origin. Vercel hostnames must never become the canonical URL. */
export const CANONICAL_SITE_URL = "https://grouphedge.org";

export function getSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured || /vercel\.app/i.test(configured)) {
    return new URL(CANONICAL_SITE_URL);
  }

  const normalized = configured.startsWith("http")
    ? configured
    : `https://${configured}`;

  return new URL(normalized.replace(/\/$/, ""));
}

export function getSiteOrigin(): string {
  return getSiteUrl().origin;
}
