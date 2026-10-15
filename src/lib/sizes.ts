import { readFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * Daily size snapshots written by `python -m quirq_wiki sizes` to
 * `_sizes/history.jsonl`: files and bytes in each public repository's default
 * branch at HEAD, and GitHub's own size, which includes history.
 */
export interface RepoSize {
  repo: string;
  defaultBranch: string | null;
  /** Null when the repository could not be measured. */
  files: number | null;
  bytes: number | null;
  /** GitHub's repository size in bytes (reported in KB), history included. */
  githubBytes: number | null;
  /** GitHub cut the tree, so the counts are a floor. */
  truncated: boolean;
  failed: boolean;
}

export interface SizeSnapshot {
  takenAt: string;
  repos: RepoSize[];
  totals: {
    repos: number;
    files: number;
    bytes: number;
    githubBytes: number;
    complete: boolean;
  };
}

export interface Sizes {
  /** Oldest first. */
  snapshots: SizeSnapshot[];
  latest: SizeSnapshot | null;
  previous: SizeSnapshot | null;
}

const REPO_NAME = /^(?!\.\.?$)[A-Za-z0-9_.-]+$/;

const count = (value: unknown): number | null =>
  typeof value === 'number' && Number.isInteger(value) && value >= 0
    ? value
    : null;

/** Parse one stored snapshot; a malformed line is skipped, not half-shown. */
export function parseSnapshot(line: string): SizeSnapshot | undefined {
  let record: unknown;
  try {
    record = JSON.parse(line);
  } catch {
    return undefined;
  }
  if (!record || typeof record !== 'object') return undefined;
  const r = record as Record<string, unknown>;
  if (r.schema_version !== 1 || typeof r.taken_at !== 'string')
    return undefined;
  if (Number.isNaN(Date.parse(r.taken_at))) return undefined;
  if (!Array.isArray(r.repos) || !r.totals || typeof r.totals !== 'object')
    return undefined;
  const repos: RepoSize[] = [];
  for (const item of r.repos as unknown[]) {
    if (!item || typeof item !== 'object') return undefined;
    const row = item as Record<string, unknown>;
    if (typeof row.repo !== 'string' || !REPO_NAME.test(row.repo))
      return undefined;
    const failed = typeof row.error === 'string' && row.error.length > 0;
    const kb = count(row.github_kb);
    repos.push({
      repo: row.repo,
      defaultBranch:
        typeof row.default_branch === 'string' ? row.default_branch : null,
      files: failed ? null : count(row.files),
      bytes: failed ? null : count(row.bytes),
      githubBytes: kb === null ? null : kb * 1024,
      truncated: row.truncated === true,
      failed,
    });
  }
  const t = r.totals as Record<string, unknown>;
  const files = count(t.files);
  const bytes = count(t.bytes);
  const kb = count(t.github_kb);
  if (files === null || bytes === null || kb === null) return undefined;
  return {
    takenAt: new Date(r.taken_at).toISOString(),
    repos,
    totals: {
      repos: repos.length,
      files,
      bytes,
      githubBytes: kb * 1024,
      complete: t.complete === true,
    },
  };
}

export function buildSizes(snapshots: SizeSnapshot[]): Sizes {
  const sorted = [...snapshots].sort((a, b) =>
    a.takenAt.localeCompare(b.takenAt),
  );
  return {
    snapshots: sorted,
    latest: sorted.at(-1) ?? null,
    previous: sorted.at(-2) ?? null,
  };
}

/** The change since the previous snapshot, or null when either side is unknown. */
export function change(
  now: number | null | undefined,
  before: number | null | undefined,
): number | null {
  return typeof now === 'number' && typeof before === 'number'
    ? now - before
    : null;
}

export function sizeHref(repo?: string): string {
  return repo ? `/sizes/#size-${encodeURIComponent(repo)}` : '/sizes/';
}

let cached: Promise<Sizes> | undefined;

export function getSizes(): Promise<Sizes> {
  cached ??= (async () => {
    let text = '';
    try {
      text = await readFile(
        path.join(process.cwd(), '_sizes', 'history.jsonl'),
        'utf8',
      );
    } catch {
      // No snapshot has been taken yet; pages say so.
    }
    const snapshots = text
      .split('\n')
      .filter((line) => line.trim())
      .map(parseSnapshot)
      .filter((item): item is SizeSnapshot => Boolean(item));
    return buildSizes(snapshots);
  })();
  return cached;
}
