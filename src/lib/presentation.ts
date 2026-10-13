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
