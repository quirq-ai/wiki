import assert from 'node:assert/strict';
import test from 'node:test';
import { buildSizes, change, parseSnapshot } from '../src/lib/sizes';

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
