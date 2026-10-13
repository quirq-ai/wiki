import GithubSlugger from 'github-slugger';

/** Element ids the page layout owns. Article headings never take them. */
export const LAYOUT_IDS = [
  'appearance',
  'main-content',
  'site-navigation',
  'contents-list',
  'wiki-search',
  'tool-status',
] as const;

/** A slugger that skips the layout's own ids, so a heading cannot clobber a control. */
export function headingSlugger(): GithubSlugger {
  const slugger = new GithubSlugger();
  for (const id of LAYOUT_IDS) slugger.slug(id);
  return slugger;
}

/** Display helpers do not alter the underlying documentation. */
export function formatBytes(bytes: number | null): string {
  if (bytes === null) return 'Size not recorded';
  if (bytes < 1000) return `${bytes} B`;
  if (bytes < 1_000_000)
    return `${new Intl.NumberFormat('en', { maximumFractionDigits: 1 }).format(bytes / 1000)} kB`;
  return `${new Intl.NumberFormat('en', { maximumFractionDigits: 1 }).format(bytes / 1_000_000)} MB`;
}

export function formatDate(value: string): string {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function codeFence(source: string, language: string | null): string {
  const longest = Math.max(
    2,
    ...[...source.matchAll(/`+/g)].map((match) => match[0].length),
  );
  const fence = '`'.repeat(longest + 1);
  return `${fence}${language?.toLowerCase().replace(/[^\w+-]/g, '') || 'text'}\n${source}\n${fence}`;
}
