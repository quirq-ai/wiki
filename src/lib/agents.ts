/** Crawler and agent helpers: Markdown twins of articles and absolute URLs. */

/** The Markdown twin of an article: /wiki/<slug>/ is also served as /wiki/<slug>.md. */
export function markdownHref(slug: string): string {
  return `/wiki/${slug.split('/').map(encodeURIComponent).join('/')}.md`;
}

/** An absolute URL when the site origin is known at build time, else the path. */
export function absolute(path: string, site: URL | undefined): string {
  return site ? new URL(path, site).href : path;
}
