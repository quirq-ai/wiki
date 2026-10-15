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
    /** Null when GitHub gave no size for some repository. */
    githubBytes: number | null;
    complete: boolean;
  };
}

export interface Sizes {
  /** Oldest first. */
  snapshots: SizeSnapshot[];
  latest: SizeSnapshot | null;
  /** The snapshot from the UTC day before `latest`, or null when that day is missing. */
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
      githubBytes: t.github_complete === false ? null : kb * 1024,
      complete: t.complete === true,
    },
  };
}

const DAY = 86_400_000;

/** The snapshot taken exactly one UTC day before `snapshot`, if there is one. */
export function dayBefore(
  snapshots: readonly SizeSnapshot[],
  snapshot: SizeSnapshot,
): SizeSnapshot | null {
  const day = new Date(Date.parse(snapshot.takenAt.slice(0, 10)) - DAY)
    .toISOString()
    .slice(0, 10);
  return snapshots.find((item) => item.takenAt.startsWith(day)) ?? null;
}

export function buildSizes(snapshots: SizeSnapshot[]): Sizes {
  const sorted = [...snapshots].sort((a, b) =>
    a.takenAt.localeCompare(b.takenAt),
  );
  const latest = sorted.at(-1) ?? null;
  return {
    snapshots: sorted,
    latest,
    previous: latest ? dayBefore(sorted, latest) : null,
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

/** The organization's change in one figure, only when both days were measured in full. */
export function totalsChange(
  now: SizeSnapshot | null | undefined,
  before: SizeSnapshot | null | undefined,
  figure: 'files' | 'bytes',
): number | null {
  return now?.totals.complete && before?.totals.complete
    ? change(now.totals[figure], before.totals[figure])
    : null;
}

/** A repository's change in bytes, only when both days measured it in full. */
export function repoChange(
  now: RepoSize | undefined,
  before: RepoSize | undefined,
): number | null {
  if (!now || !before || now.truncated || before.truncated) return null;
  return change(now.bytes, before.bytes);
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

/** `_sizes/README.md` unchanged, for the page's Markdown twin. */
export async function getSizesMarkdown(): Promise<string | null> {
  try {
    return await readFile(
      path.join(process.cwd(), '_sizes', 'README.md'),
      'utf8',
    );
  } catch {
    return null;
  }
}
