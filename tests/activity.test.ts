import assert from 'node:assert/strict';
import test from 'node:test';
import { activityRoute, buildActivity, parseRecord } from '../src/lib/activity';

const record = (fields: Record<string, unknown>) =>
  JSON.stringify({
    id: 'quirq-ai/demo:pull_request:2:2026-10-07T12:00:00Z:abc',
    kind: 'pull_request',
    repo: 'quirq-ai/demo',
    title: 'Add <b>things</b>',
    url: 'https://github.com/quirq-ai/demo/pull/2',
    actor: 'a',
    occurred_at: '2026-10-07T12:00:00Z',
    details: {
      number: 2,
      merged_at: '2026-10-07T12:00:00Z',
      created_at: '2026-10-06T12:00:00Z',
      updated_at: '2026-10-07T12:00:00Z',
    },
    ...fields,
  });

test('activity records parse into what happened, and only GitHub links render', () => {
  const pull = parseRecord(record({}));
  assert.equal(pull?.action, 'merged');
  assert.equal(pull?.title, 'Add <b>things</b>');
  assert.equal(parseRecord(record({ url: 'javascript:alert(1)' })), undefined);
  assert.equal(parseRecord(record({ kind: 'push' })), undefined);
  assert.equal(parseRecord('not json'), undefined);
  assert.equal(
    parseRecord(record({ repo: 'quirq-ai/depot' }))?.repo,
    'qq',
    'renamed repositories keep their history',
  );
  const run = parseRecord(
    record({
      id: 'quirq-ai/demo:workflow:9:2026-10-07T12:00:00Z:abc',
      kind: 'workflow',
      details: { conclusion: 'failure' },
    }),
  );
  assert.equal(run?.failed, true);
});

test('each pull request, issue and run appears once, at its newest revision', () => {
  const older = parseRecord(
    record({
      id: 'quirq-ai/demo:pull_request:2:2026-10-06T12:00:00Z:abc',
      occurred_at: '2026-10-06T12:00:00Z',
      details: {
        number: 2,
        created_at: '2026-10-06T12:00:00Z',
        updated_at: '2026-10-06T12:00:00Z',
      },
    }),
  )!;
  const newer = parseRecord(record({}))!;
  const runs = ['2026-10-07T10:00:00Z', '2026-10-07T11:00:00Z'].map((at) =>
    parseRecord(
      record({
        id: `quirq-ai/demo:workflow:9:${at}:x`,
        kind: 'workflow',
        occurred_at: at,
        details: {},
      }),
    )!,
  );
  const activity = buildActivity([older, newer, ...runs], null);
  assert.deepEqual(
    activity.items.map((item) => `${item.kind}:${item.action}`),
    ['pull_request:merged', 'workflow:ran'],
  );
  assert.equal(activity.items[1]?.occurredAt, '2026-10-07T11:00:00.000Z');
});

test('wiki links into _activity become site routes', () => {
  assert.equal(activityRoute('_activity/INDEX.md'), '/activity/');
  assert.equal(activityRoute('_activity/repos/depot.md'), '/activity/qq/');
  assert.equal(
    activityRoute('_activity/2026/10/08/README.md'),
    '/activity/#day-2026-10-08',
  );
  assert.equal(activityRoute('_activity/state.json'), undefined);
});

test('bad repository names and bot state commits are left out', () => {
  assert.equal(parseRecord(record({ repo: 'quirq-ai/..' })), undefined);
  assert.equal(parseRecord(record({ repo: 'quirq-ai/a b' })), undefined);
  const commit = (title: string, branches: string[]) =>
    parseRecord(
      record({
        id: 'quirq-ai/demo:commit:abc',
        kind: 'commit',
        title,
        details: { branches },
      }),
    );
  assert.equal(commit('[wiki-bot] regenerate org wiki', ['main']), undefined);
  assert.equal(commit('tree-status: open', ['tree-status']), undefined);
  assert.equal(commit('record advance', ['release-state']), undefined);
  assert.equal(commit('Fix the build', ['main'])?.kind, 'commit');
  assert.equal(commit('Fix the build', ['results', 'main'])?.kind, 'commit');
});

test('runs recorded before and after a rename are one entry', () => {
  const run = (repo: string, updated: string) =>
    parseRecord(
      record({
        id: `${repo}:workflow:9:${updated}:abc`,
        kind: 'workflow',
        repo,
        occurred_at: updated,
        details: { conclusion: 'success' },
      }),
    )!;
  const { items } = buildActivity(
    [
      run('quirq-ai/depot', '2026-10-07T12:00:00Z'),
      run('quirq-ai/qq', '2026-10-07T13:00:00Z'),
    ],
    null,
  );
  assert.equal(items.length, 1);
  assert.equal(items[0]?.repo, 'qq');
});
