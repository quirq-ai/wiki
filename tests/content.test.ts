import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import {
  getPage,
  getWiki,
  renderMarkdown,
  resolveWikiLink,
  validateManifest,
} from '../src/lib/wiki.js';

const routes = new Map([
  ['README.md', '/wiki/readme/'],
  ['INDEX.md', '/wiki/index/'],
  ['galileo/_index.md', '/wiki/galileo/_index/'],
  ['galileo/src.md', '/wiki/galileo/src/'],
  ['xo-space/.agents.md', '/wiki/xo-space/.agents/'],
]);

test('embedded article fragments retain their first heading instead of treating it as a page title', async () => {
  const rendered = await renderMarkdown(
    '# Usage\n\nRead **all** of this section.\n\n[Jump](#usage)',
    'galileo/src.md',
    routes,
    'quirq-ai',
    { extractTitle: false },
  );
  assert.match(rendered.html, /<h1 id="usage">Usage<\/h1>/);
  assert.match(rendered.html, /Read <strong>all<\/strong> of this section\./);
  assert.match(rendered.html, /href="#usage"/);
  assert.equal(rendered.titleId, undefined);
});

test('local links retain their original Markdown context, query, and anchor', () => {
  assert.equal(
    resolveWikiLink('src.md#filesmjs', 'galileo/_index.md', routes),
    '/wiki/galileo/src/#filesmjs',
  );
  assert.equal(
    resolveWikiLink(
      './src.md?view=source#filesmjs',
      'galileo/_index.md',
      routes,
    ),
    '/wiki/galileo/src/?view=source#filesmjs',
  );
  assert.equal(
    resolveWikiLink('../INDEX.md#folder-convention', 'galileo/src.md', routes),
    '/wiki/index/#folder-convention',
  );
  assert.equal(
    resolveWikiLink('./.agents.md', 'xo-space/_index.md', routes),
    '/wiki/xo-space/.agents/',
  );
  assert.equal(
    resolveWikiLink('galileo/%73rc.md', 'README.md', routes),
    '/wiki/galileo/src/',
  );
  assert.equal(
    resolveWikiLink('/INDEX.md', 'galileo/src.md', routes),
    '/wiki/index/',
  );
  assert.equal(resolveWikiLink('#local', 'README.md', routes), '#local');
  assert.equal(
    resolveWikiLink('https://example.com/a.md#b', 'README.md', routes),
    'https://example.com/a.md#b',
  );
});

test('non-page links resolve to the wiki source repository', () => {
  assert.equal(
    resolveWikiLink('quirq_wiki/', 'README.md', routes),
    'https://github.com/quirq-ai/wiki/tree/main/quirq_wiki',
  );
  assert.equal(
    resolveWikiLink('.github/workflows/wiki-sync.yml#L10', 'README.md', routes),
    'https://github.com/quirq-ai/wiki/blob/main/.github/workflows/wiki-sync.yml#L10',
  );
  assert.equal(
    resolveWikiLink('../missing.md', 'galileo/src.md', routes),
    'https://github.com/quirq-ai/wiki/blob/main/missing.md',
  );
});

test('Markdown is sanitized while GFM tables, code, and generated heading IDs remain usable', async () => {
  const rendered = await renderMarkdown(
    [
      '# Article title',
      '',
      'Useful **description**.',
      '',
      '## A `file.ts`',
      '## A `file.ts`',
      '',
      '[Local](galileo/src.md#filesmjs)',
      '[unsafe](javascript:alert(1))',
      '<a href="javascript:alert(1)" onclick="alert(2)">unsafe HTML</a>',
      '<a href="INDEX.md#folder-convention">Safe HTML link</a>',
      '<script>alert("unsafe script")</script>',
      '<iframe src="https://example.com"></iframe>',
      '<img src="assets/diagram.png" onerror="alert(3)">',
      '',
      '| File | Purpose |',
      '| --- | --- |',
      '| a.ts | First<br>Second |',
      '',
      '```js',
      'const value = "<script>safe code</script>";',
      '```',
    ].join('\n'),
    'README.md',
    routes,
  );

  assert.equal(rendered.title, 'Article title');
  assert.equal(rendered.description, 'Useful description.');
  assert.deepEqual(rendered.headings, [
    { id: 'a-filets', text: 'A file.ts', depth: 2 },
    { id: 'a-filets-1', text: 'A file.ts', depth: 2 },
  ]);
  assert.doesNotMatch(
    rendered.html,
    /<h1|<script|<iframe|javascript:|onerror|onclick/,
  );
  assert.match(rendered.html, /<h2 id="a-filets">/);
  assert.match(rendered.html, /href="\/wiki\/galileo\/src\/#filesmjs"/);
  assert.match(rendered.html, /href="\/wiki\/index\/#folder-convention"/);
  assert.match(rendered.html, /<table>/);
  assert.match(rendered.html, /First<br>Second/);
  assert.match(rendered.html, /&#x3C;script>safe code&#x3C;\/script>/);
  assert.match(
    rendered.html,
    /src="https:\/\/raw\.githubusercontent\.com\/quirq-ai\/wiki\/main\/assets\/diagram.png"/,
  );
});

test('generated comments stay invisible and reference links retain GitHub and local anchors', async () => {
  const rendered = await renderMarkdown(
    [
      '<!-- quirq-wiki-generated repo=galileo dir=src -->',
      '',
      '# galileo / src',
      '',
      'Source: [GitHub source][source].',
      '',
      '<!-- Internal metadata: [not an article](missing.md) -->',
      '',
      '### files.mjs',
      '',
      '[Read the index][index] or [this file](#filesmjs).',
      '',
      '[source]: https://github.com/quirq-ai/galileo/blob/main/src/files.mjs#L20-L25',
      '[index]: _index.md?view=read#source-folder',
    ].join('\n'),
    'galileo/src.md',
    routes,
  );

  assert.equal(rendered.title, 'galileo / src');
  assert.equal(rendered.description, 'Source: GitHub source.');
  assert.equal(rendered.fileCount, 1);
  assert.doesNotMatch(
    rendered.html,
    /<!--|quirq-wiki-generated|Internal metadata|missing\.md/,
  );
  assert.match(
    rendered.html,
    /href="https:\/\/github\.com\/quirq-ai\/galileo\/blob\/main\/src\/files\.mjs#L20-L25"/,
  );
  assert.match(
    rendered.html,
    /href="\/wiki\/galileo\/_index\/\?view=read#source-folder"/,
  );
  assert.match(rendered.html, /href="#filesmjs"/);
  assert.deepEqual(rendered.headings, [
    { id: 'filesmjs', text: 'files.mjs', depth: 3 },
  ]);
});

test('heading IDs preserve the removed title in the original duplicate sequence', async () => {
  const rendered = await renderMarkdown(
    '# Example\n\n## Example\n\n## Other\n\n[Jump](#example-1)',
    'README.md',
  );
  assert.equal(rendered.titleId, 'example');
  assert.deepEqual(
    rendered.headings.map((heading) => heading.id),
    ['example-1', 'other'],
  );
  assert.match(rendered.html, /<h2 id="example-1">/);
  assert.match(rendered.html, /href="#example-1"/);
  assert.doesNotMatch(rendered.html, /<h1/);

  const laterTitle = await renderMarkdown(
    '## Example\n\n# Example\n\n## Example',
    'README.md',
  );
  assert.equal(laterTitle.titleId, 'example-1');
  assert.deepEqual(
    laterTitle.headings.map((heading) => heading.id),
    ['example', 'example-2'],
  );
});

test('safe custom HTML anchors stay protected and their local fragments still resolve', async () => {
  const rendered = await renderMarkdown(
    [
      '# Article',
      '',
      '[Forward](#custom) [Same page](README.md?read=1#custom) [Encoded](#caf%C3%A9)',
      '[Other page](INDEX.md#custom) [External](https://example.com/#custom)',
      '',
      '<a id="custom"></a><a name="legacy"></a><span id="café"></span>',
      '',
      '[Legacy](#legacy)',
      '',
      '<h2 id="special">A section</h2>',
      '',
      '[HTML heading](#special)',
    ].join('\n'),
    'README.md',
    routes,
  );
  assert.match(rendered.html, /id="user-content-custom"/);
  assert.match(rendered.html, /href="#user-content-custom"/);
  assert.match(
    rendered.html,
    /href="\/wiki\/readme\/\?read=1#user-content-custom"/,
  );
  assert.match(rendered.html, /href="#user-content-caf%C3%A9"/);
  assert.match(rendered.html, /name="user-content-legacy"/);
  assert.match(rendered.html, /href="#user-content-legacy"/);
  assert.match(rendered.html, /id="a-section"/);
  assert.match(rendered.html, /href="#a-section"/);
  assert.match(rendered.html, /href="\/wiki\/index\/#custom"/);
  assert.match(rendered.html, /href="https:\/\/example.com\/#custom"/);
});

test('manifest metadata is validated before becoming paths, links, dates, or UI facts', () => {
  const valid = {
    org: 'quirq-ai',
    generated_at: '2026-10-13T13:02:15.884207+00:00',
    repos: [
      {
        name: '.github',
        fork: false,
        default_branch: 'main',
        html_url: 'https://github.com/quirq-ai/.github',
        pushed_at: '2026-10-07T18:18:08Z',
        sha: 'd63b49057607cf0a54b48800b9ed63e1414589c8',
      },
    ],
  };
  assert.doesNotThrow(() => validateManifest(valid));
  assert.doesNotThrow(() =>
    validateManifest({
      ...valid,
      repos: [{ ...valid.repos[0], pushed_at: null, sha: null }],
    }),
  );
  assert.throws(() => validateManifest(null), /must be an object/);
  assert.throws(
    () => validateManifest({ ...valid, org: undefined }),
    /organization/,
  );
  assert.throws(
    () => validateManifest({ ...valid, generated_at: 'invalid' }),
    /snapshot date/,
  );
  assert.throws(
    () =>
      validateManifest({ ...valid, repos: [valid.repos[0], valid.repos[0]] }),
    /duplicate repository name/,
  );
  const invalidRepositories: Array<[Record<string, unknown>, RegExp]> = [
    [{ name: '../outside' }, /repository name/],
    [{ fork: 'false' }, /fork must be a boolean/],
    [{ default_branch: '' }, /default_branch/],
    [{ default_branch: 123 }, /default_branch/],
    [{ html_url: 'javascript:alert(1)' }, /html_url/],
    [
      { html_url: 'https://github.com.attacker.test/quirq-ai/.github' },
      /html_url/,
    ],
    [{ html_url: 'https://user@github.com/quirq-ai/.github' }, /html_url/],
    [{ html_url: 'https://github.com/another-org/.github' }, /html_url/],
    [
      { html_url: 'https://github.com/quirq-ai/another-repository' },
      /html_url/,
    ],
    [{ pushed_at: 'not-a-date' }, /pushed_at/],
    [{ pushed_at: 123 }, /pushed_at/],
    [{ sha: '<script>unsafe</script>' }, /sha must/],
    [{ sha: 123 }, /sha must/],
  ];
  for (const [change, message] of invalidRepositories) {
    assert.throws(
      () =>
        validateManifest({
          ...valid,
          repos: [{ ...valid.repos[0], ...change }],
        }),
      message,
    );
  }
});

test('all manifest repositories and all their Markdown pages are published, including dotfiles', async () => {
  const manifest = JSON.parse(
    await readFile('.quirq-wiki-manifest.json', 'utf8'),
  ) as {
    org: string;
    generated_at: string;
    repos: Array<{ name: string }>;
  };
  const wiki = await getWiki();
  const expectedSources = ['README.md', 'INDEX.md'];
  for (const repo of manifest.repos) {
    const entries = await readdir(repo.name, { withFileTypes: true });
    expectedSources.push(
      ...entries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
        .map((entry) => `${repo.name}/${entry.name}`),
    );
  }
  assert.deepEqual(
    wiki.repos.map((repo) => repo.name).sort(),
    manifest.repos.map((repo) => repo.name).sort(),
  );
  assert.deepEqual(
    wiki.pages.map((page) => page.sourcePath).sort(),
    expectedSources.sort(),
  );
  assert.equal(wiki.org, manifest.org);
  assert.equal(wiki.generatedAt, manifest.generated_at);
  assert.ok(
    wiki.pages.every((page) => !page.sourcePath.startsWith('node_modules/')),
  );
  assert.equal(
    new Set(wiki.pages.map((page) => page.slug)).size,
    wiki.pages.length,
  );
  assert.equal(
    await getWiki(),
    wiki,
    'the expensive build-time load is memoized',
  );
  const samplePage = wiki.pages[0]!;
  assert.equal(await getPage(samplePage.slug), samplePage);
  assert.equal(await getPage('not-a-real-page'), undefined);
});

test('file totals match the source repository index tables without counting indexes twice', async () => {
  const wiki = await getWiki();
  let expectedTotal = 0;
  for (const repo of wiki.repos) {
    const raw = await readFile(path.join(repo.name, '_index.md'), 'utf8');
    const tableCounts = [
      ...raw.matchAll(
        /^\|[^\r\n|]+\|\s*(\d+)\s*\|\s*\[.*\]\((.*\.md)\)\s*\|/gm,
      ),
    ];
    const expected = tableCounts.reduce(
      (sum, match) => sum + Number(match[1]),
      0,
    );
    assert.equal(repo.fileCount, expected, `${repo.name} file total`);
    assert.equal(
      repo.pageCount,
      wiki.pages.filter((page) => page.repo === repo.name).length,
    );
    assert.equal((await getPage(`${repo.name}/_index`))?.fileCount, expected);
    for (const [, count, filename] of tableCounts) {
      assert.equal(
        (await getPage(`${repo.name}/${filename!.replace(/\.md$/, '')}`))
          ?.fileCount,
        Number(count),
        `${repo.name}/${filename} file count`,
      );
    }
    expectedTotal += expected;
  }
  assert.equal(wiki.totalFiles, expectedTotal);
});

test('every internal link generated from current content names a published page', async () => {
  const wiki = await getWiki();
  const publishedRoutes = new Set(wiki.pages.map((page) => page.href));
  for (const page of wiki.pages) {
    for (const match of page.html.matchAll(
      /href="(\/wiki\/[^"?#]+)(?:[?#][^"]*)?"/g,
    )) {
      assert.ok(
        publishedRoutes.has(match[1]!),
        `${page.sourcePath} links to missing route ${match[1]}`,
      );
    }
  }
});
