import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

/**
 * Repository activity collected daily by `python -m quirq_wiki activity` into
 * `_activity/YYYY/MM/DD/records.jsonl`. Titles, actors and branch names come
 * from GitHub and are rendered as text only.
 */
export type ActivityKind =
  'commit' | 'pull_request' | 'issue' | 'release' | 'workflow';

export interface ActivityItem {
  id: string;
  kind: ActivityKind;
  /** Repository name without the org, after renames (depot -> qq). */
  repo: string;
  title: string;
  url: string;
  actor: string | null;
  occurredAt: string;
  /** What happened, in a word: merged, opened, closed, failure... (empty for commits). */
  action: string;
  /** Pull request or issue number. */
  number: number | null;
  /** A failed, cancelled or timed-out workflow run. */
  failed: boolean;
}

export interface Activity {
  /** Newest first, one entry per pull request, issue, commit, release or run. */
  items: ActivityItem[];
  days: string[];
  repos: string[];
  lastCollection: string | null;
}

const KINDS = new Set<ActivityKind>([
  'commit',
  'pull_request',
  'issue',
  'release',
  'workflow',
]);

/** Repositories renamed since their records were collected. */
const FORMER_NAMES: Readonly<Record<string, string>> = { depot: 'qq' };

export const KIND_LABELS: Readonly<Record<ActivityKind, string>> = {
  commit: 'Commit',
  pull_request: 'Pull request',
  issue: 'Issue',
  release: 'Release',
  workflow: 'Workflow run',
};

export function currentRepoName(name: string): string {
  return FORMER_NAMES[name] ?? name;
}

export function activityHref(repo?: string): string {
  return repo ? `/activity/${encodeURIComponent(repo)}/` : '/activity/';
}

/**
 * Wiki Markdown links into `_activity/` become site routes: the archive index,
 * a day's batch and a repository's history.
 */
export function activityRoute(sourcePath: string): string | undefined {
  if (sourcePath === '_activity/INDEX.md') return activityHref();
  const day = /^_activity\/(\d{4})\/(\d{2})\/(\d{2})\/README\.md$/.exec(
    sourcePath,
  );
  if (day) return `${activityHref()}#day-${day[1]}-${day[2]}-${day[3]}`;
  const repo = /^_activity\/repos\/([^/]+)\.md$/.exec(sourcePath);
  if (repo) return activityHref(currentRepoName(repo[1]!));
  return undefined;
}

const text = (value: unknown): string | null =>
  typeof value === 'string' && value.trim() ? value.trim() : null;

function describe(
  kind: ActivityKind,
  details: Record<string, unknown>,
): { action: string; failed: boolean } {
  if (kind === 'pull_request') {
    if (text(details.merged_at)) return { action: 'merged', failed: false };
    if (details.state === 'closed') return { action: 'closed', failed: false };
    const opened =
      text(details.created_at) && details.created_at === details.updated_at;
    return { action: opened ? 'opened' : 'updated', failed: false };
  }
  if (kind === 'issue') {
    if (details.state === 'closed') return { action: 'closed', failed: false };
    const opened =
      text(details.created_at) && details.created_at === details.updated_at;
    return { action: opened ? 'opened' : 'updated', failed: false };
  }
  if (kind === 'workflow') {
    const conclusion = text(details.conclusion);
    const failed =
      conclusion === 'failure' ||
      conclusion === 'timed_out' ||
      conclusion === 'startup_failure';
    return { action: conclusion ?? text(details.status) ?? 'ran', failed };
  }
  if (kind === 'release') return { action: 'published', failed: false };
  return { action: '', failed: false };
}

/** Parse one stored record; anything malformed or off GitHub is skipped. */
export function parseRecord(line: string): ActivityItem | undefined {
  let record: unknown;
  try {
    record = JSON.parse(line);
  } catch {
    return undefined;
  }
  if (!record || typeof record !== 'object') return undefined;
  const r = record as Record<string, unknown>;
  const kind = r.kind as ActivityKind;
  const id = text(r.id);
  const repoFull = text(r.repo);
  const url = text(r.url);
  const occurredAt = text(r.occurred_at);
  if (!KINDS.has(kind) || !id || !repoFull || !url || !occurredAt)
    return undefined;
  // Only GitHub links are rendered; anything else is not a record we wrote.
  if (!url.startsWith('https://github.com/')) return undefined;
  if (Number.isNaN(Date.parse(occurredAt))) return undefined;
  const details =
    r.details && typeof r.details === 'object'
      ? (r.details as Record<string, unknown>)
      : {};
  const number =
    typeof details.number === 'number' && Number.isInteger(details.number)
      ? details.number
      : null;
  return {
    id,
    kind,
    repo: currentRepoName(repoFull.split('/').pop()!),
    title: text(r.title) ?? KIND_LABELS[kind],
    url,
    actor: text(r.actor),
    occurredAt: new Date(occurredAt).toISOString(),
    number,
    ...describe(kind, details),
  };
}

/** One entry per thing: the newest revision of each pull request or issue. */
function subjectKey(item: ActivityItem): string {
  if (
    item.number !== null &&
    (item.kind === 'pull_request' || item.kind === 'issue')
  )
    return `${item.repo}:${item.kind}:${item.number}`;
  // Runs and releases are stored once per revision: repo:kind:id:updated_at:hash.
  if (item.kind === 'workflow' || item.kind === 'release')
    return item.id.split(':').slice(0, 3).join(':');
  return item.id;
}

async function listRecordFiles(directory: string): Promise<string[]> {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch {
    return [];
  }
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory() && /^\d+$/.test(entry.name))
        return listRecordFiles(filename);
      return entry.isFile() && entry.name === 'records.jsonl' ? [filename] : [];
    }),
  );
  return nested.flat();
}

export function buildActivity(
  items: ActivityItem[],
  lastCollection: string | null,
): Activity {
  const latest = new Map<string, ActivityItem>();
  for (const item of items) {
    const key = subjectKey(item);
    const seen = latest.get(key);
    if (!seen || seen.occurredAt < item.occurredAt) latest.set(key, item);
  }
  const sorted = [...latest.values()].sort(
    (a, b) =>
      b.occurredAt.localeCompare(a.occurredAt) || a.id.localeCompare(b.id),
  );
  return {
    items: sorted,
    days: [...new Set(sorted.map((item) => item.occurredAt.slice(0, 10)))],
    repos: [...new Set(sorted.map((item) => item.repo))].sort(),
    lastCollection,
  };
}

let cached: Promise<Activity> | undefined;

export function getActivity(): Promise<Activity> {
  cached ??= (async () => {
    const root = path.join(process.cwd(), '_activity');
    const files = await listRecordFiles(root);
    const items: ActivityItem[] = [];
    for (const file of files.sort()) {
      for (const line of (await readFile(file, 'utf8')).split('\n')) {
        if (!line.trim()) continue;
        const item = parseRecord(line);
        if (item) items.push(item);
      }
    }
    let lastCollection: string | null = null;
    try {
      const state = JSON.parse(
        await readFile(path.join(root, 'state.json'), 'utf8'),
      ) as { repos?: Record<string, { last_success?: unknown }> };
      for (const repo of Object.values(state.repos ?? {})) {
        const value = text(repo.last_success);
        if (value && (!lastCollection || value > lastCollection))
          lastCollection = value;
      }
    } catch {
      // No collection has run yet; pages say so.
    }
    return buildActivity(items, lastCollection);
  })();
  return cached;
}
