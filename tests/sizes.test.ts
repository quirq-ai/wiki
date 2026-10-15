import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildSizes,
  change,
  parseSnapshot,
  repoChange,
  totalsChange,
} from '../src/lib/sizes';

const snapshot = (fields: Record<string, unknown> = {}) =>
  JSON.stringify({
    schema_version: 1,
    org: 'quirq-ai',
    taken_at: '2026-10-15T06:45:00Z',
    repos: [
      {
        repo: 'wiki',
        default_branch: 'main',
        files: 1309,
        bytes: 9945154,
        github_kb: 4904,
        truncated: false,
        error: null,
      },
      {
        repo: 'broken',
        default_branch: 'main',
        files: null,
        bytes: null,
        github_kb: 10,
        truncated: false,
        error: 'GitHub API 500',
      },
    ],
    totals: {
      repos: 2,
      files: 1309,
      bytes: 9945154,
      github_kb: 4914,
      complete: false,
    },
    ...fields,
  });

test('size snapshots parse, and a failed repository shows as unknown', () => {
  const parsed = parseSnapshot(snapshot());
  assert.equal(parsed?.repos[0]?.files, 1309);
  assert.equal(parsed?.repos[0]?.githubBytes, 4904 * 1024);
  assert.equal(parsed?.repos[1]?.failed, true);
  assert.equal(parsed?.repos[1]?.bytes, null);
  assert.equal(parsed?.totals.complete, false);
});

test('malformed snapshots are skipped whole', () => {
  assert.equal(parseSnapshot('not json'), undefined);
  assert.equal(parseSnapshot(snapshot({ schema_version: 2 })), undefined);
  assert.equal(parseSnapshot(snapshot({ taken_at: 'yesterday' })), undefined);
  assert.equal(
    parseSnapshot(snapshot({ repos: [{ repo: '..', files: 1, bytes: 1 }] })),
    undefined,
  );
  assert.equal(
    parseSnapshot(snapshot({ totals: { files: -1, bytes: 1, github_kb: 1 } })),
    undefined,
  );
});

test('the latest and previous snapshots, and the change between them', () => {
  const day = (date: string) => parseSnapshot(snapshot({ taken_at: date }))!;
  const sizes = buildSizes([
    day('2026-10-15T06:45:00Z'),
    day('2026-10-13T06:45:00Z'),
    day('2026-10-14T06:45:00Z'),
  ]);
  assert.equal(sizes.latest?.takenAt, '2026-10-15T06:45:00.000Z');
  assert.equal(sizes.previous?.takenAt, '2026-10-14T06:45:00.000Z');
  assert.equal(change(10, 4), 6);
  assert.equal(change(10, null), null);
  assert.equal(change(undefined, 4), null);
  assert.equal(buildSizes([]).latest, null);
});

test('changes compare with the day before only, and only figures measured in full', () => {
  const complete = (date: string, bytes: number) =>
    parseSnapshot(
      snapshot({
        taken_at: date,
        repos: [{ repo: 'wiki', files: 1, bytes, github_kb: 1, error: null }],
        totals: { files: 1, bytes, github_kb: 1, complete: true },
      }),
    )!;
  // 10-14 is missing: 10-13 is not "the day before" 10-15.
  const gap = buildSizes([
    complete('2026-10-13T06:45:00Z', 5),
    complete('2026-10-15T06:45:00Z', 9),
  ]);
  assert.equal(gap.previous, null);
  assert.equal(totalsChange(gap.latest, gap.previous, 'bytes'), null);

  const next = buildSizes([
    complete('2026-10-14T23:59:00Z', 5),
    complete('2026-10-15T00:01:00Z', 9),
  ]);
  assert.equal(totalsChange(next.latest, next.previous, 'bytes'), 4);
  assert.equal(repoChange(next.latest!.repos[0], next.previous!.repos[0]), 4);

  // An incomplete day on either side gives no organization change.
  const incomplete = parseSnapshot(
    snapshot({ taken_at: '2026-10-14T06:45:00Z' }),
  )!;
  assert.equal(totalsChange(next.latest, incomplete, 'bytes'), null);
  // A failed or partly measured repository gives no change of its own.
  assert.equal(repoChange(next.latest!.repos[0], incomplete.repos[1]), null);
  assert.equal(
    repoChange(
      { ...next.latest!.repos[0]!, truncated: true },
      next.previous!.repos[0],
    ),
    null,
  );
});

test('a missing GitHub size makes the GitHub total unknown', () => {
  const parsed = parseSnapshot(
    snapshot({
      totals: {
        files: 1,
        bytes: 1,
        github_kb: 1,
        github_complete: false,
        complete: true,
      },
    }),
  );
  assert.equal(parsed?.totals.githubBytes, null);
});
