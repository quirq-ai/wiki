import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { buildArticle, parseArticle } from '../src/lib/article.js';
import {
  getWiki,
  renderMarkdown,
  type Wiki,
  type WikiPage,
  type WikiRepo,
} from '../src/lib/wiki.js';

function directory(folder: string, body = '', repo = 'demo') {
  return `<!-- quirq-wiki-generated repo=${repo} dir=${folder} -->\n\n# ${repo} / ${folder}\n\nSource: [${folder}](https://github.com/quirq-ai/${repo}/tree/main/${folder}) in [${repo}](https://github.com/quirq-ai/${repo}).\n\nEach heading is a file that lives **directly** in this folder. Nested folders have their own pages.\n\n${body}`;
}

function fixturePage(folder: string, body = ''): WikiPage {
  const sourcePath = `demo/${folder === '.' ? '_root' : folder.replaceAll('/', '__')}.md`;
  return {
    sourcePath,
    raw: directory(folder, body),
    slug: sourcePath.slice(0, -3),
    href: `/wiki/${sourcePath.slice(0, -3)}/`,
    title: folder,
    description: '',
    repo: 'demo',
    headings: [],
    html: '',
    fileCount: 0,
  };
}

const repo: WikiRepo = {
  name: 'demo',
  description: 'A documented project.',
  language: 'TypeScript',
  fork: false,
  defaultBranch: 'main',
  htmlUrl: 'https://github.com/quirq-ai/demo',
  pushedAt: null,
  sha: null,
  pageCount: 0,
  fileCount: 0,
  href: '/wiki/demo/_index/',
};
const fixtureWiki = (pages: WikiPage[]): Wiki => ({
  pages,
  repos: [repo],
  generatedAt: '2026-10-13T13:01:00Z',
  org: 'quirq-ai',
  totalFiles: 0,
});

test('generated files preserve complete multiline prose and Markdown structure', () => {
  const prose =
    'First **important** paragraph spanning\ntwo lines.\n\nSecond paragraph with [a reference](../guide.md).\n\n- A real list\n- Another item\n\n```ts\n// ### not-a-file.ts\nconst value = 1;\n```';
  const raw = directory(
    'src',
    `### item.ts\n\n${prose}\n\n[\`src/item.ts\`](https://github.com/quirq-ai/demo/blob/main/src/item.ts) · code · 123 bytes\n\n_Generated 2026-10-13 13:01 UTC from \`main\`._`,
  );
  const article = parseArticle(raw, 'demo/src.md');
  assert.equal(article.kind, 'directory');
  assert.equal(article.files.length, 1);
  assert.equal(article.files[0].summaryMarkdown, prose);
  assert.equal(article.files[0].bodyMarkdown, prose);
  assert.equal(article.files[0].bytes, 123);
  assert.equal(article.files[0].language, 'TypeScript');
  assert.equal(article.generatedAt, '2026-10-13 13:01 UTC');
  assert.equal(article.descriptionMarkdown, '');
});

test('file metadata recovers literal filenames while anchors retain original Markdown semantics', async () => {
  const raw = directory(
    'src',
    [
      '### __init__.py',
      '',
      'First module.',
      '',
      '[`src/__init__.py`](https://github.com/quirq-ai/demo/blob/main/src/__init__.py) · code · 0 bytes',
      '',
      '### `[...slug].tsx`',
      '',
      'Second module.',
      '',
      '[`src/[...slug].tsx`](https://github.com/quirq-ai/demo/blob/main/src/%5B...slug%5D.tsx) · code · 20 bytes',
      '',
      '### __init__.py',
      '',
      'A duplicate heading.',
    ].join('\n'),
  );
  const parsed = parseArticle(raw, 'demo/src.md');
  const rendered = await renderMarkdown(raw, 'demo/src.md');
  assert.deepEqual(
    parsed.files.map((file) => file.id),
    rendered.headings
      .filter((heading) => heading.depth === 3)
      .map((heading) => heading.id),
  );
  assert.deepEqual(
    parsed.files.slice(0, 2).map((file) => file.name),
    ['__init__.py', '[...slug].tsx'],
  );
  assert.equal(parsed.files[0].bytes, 0);
});

test('known symbol grammar becomes structured facts without losing trailing meaningful prose', () => {
  const summary =
    "Manage the request queue. Classes: `Queue`, `QueueError`. Functions:\n`enqueue`, `flush`, and 12 more. Built with FastAPI.\nContains tests. Notable exports: `app`, `serve`.\nProvides a default export as the module's public\nentry. Wired into a Next.js app (App Router or Next APIs).";
  const file = parseArticle(
    directory('src', `### queue.py\n\n${summary}`),
    'demo/src.md',
  ).files[0];
  assert.equal(file.summaryMarkdown, summary);
  assert.deepEqual(file.symbols, [
    { label: 'Classes', names: ['Queue', 'QueueError'] },
    { label: 'Functions', names: ['enqueue', 'flush'], additionalCount: 12 },
    { label: 'Exports', names: ['app', 'serve'] },
  ]);
  assert.deepEqual(file.exports, ['app', 'serve']);
  assert.equal(file.hasDefaultExport, true);
  assert.match(file.bodyMarkdown, /Manage the request queue\./);
  assert.match(file.bodyMarkdown, /Built with FastAPI\./);
  assert.match(file.bodyMarkdown, /Contains tests\./);
  assert.match(file.bodyMarkdown, /Wired into a Next\.js app/);
  assert.doesNotMatch(
    file.bodyMarkdown,
    /Functions:|Classes:|Notable exports:|default export/,
  );
});

test('ordinary discussion of functions and exports, code examples, and malformed lists stay intact', () => {
  const summary =
    "Functions: **not a generated symbol list**.\n\nNotable exports: `unfinished` without a terminator.\n\n```text\nFunctions: `example`.\nProvides a default export as the module's public entry.\n```";
  const file = parseArticle(
    directory('src', `### notes.md\n\n${summary}`),
    'demo/src.md',
  ).files[0];
  assert.equal(file.bodyMarkdown, summary);
  assert.deepEqual(file.symbols, []);
  assert.equal(file.hasDefaultExport, false);
});

test('code excerpts are identified conservatively and never reformatted as complete source', () => {
  const file = parseArticle(
    directory(
      'src',
      '### config.ts\n\nconst config = { output: "static" }; Provides a default export as the module\'s public entry.\n\n[`src/config.ts`](https://github.com/quirq-ai/demo/blob/main/src/config.ts) · code · 100 bytes',
    ),
    'demo/src.md',
  ).files[0];
  assert.equal(file.isCodeExcerpt, true);
  assert.equal(file.bodyMarkdown, 'const config = { output: "static" };');
  const prose = parseArticle(
    directory('src', '### readme.md\n\nImport the module to start the server.'),
    'demo/src.md',
  ).files[0];
  assert.equal(prose.isCodeExcerpt, false);
});

test('missing metadata remains unknown and unsafe source links never become active URLs', () => {
  const article = parseArticle(
    directory(
      'src',
      '### plain.ts\n\nUseful prose.\n\n### unsafe.ts\n\nSafe description.\n\n[`src/unsafe.ts`](javascript:alert) · code · 999999999999999999999999 bytes',
    ),
    'demo/src.md',
  );
  assert.equal(article.files[0].sourcePath, 'src/plain.ts');
  assert.equal(article.files[0].sourceUrl, null);
  assert.equal(article.files[0].kind, null);
  assert.equal(article.files[0].bytes, null);
  assert.equal(article.files[1].sourceUrl, null);
  assert.equal(article.files[1].bytes, null);
});

test('only the actual generator marker opts an article into generated interpretation', () => {
  for (const raw of [
    '# Ordinary article\n\n<!-- quirq-wiki-generated repo=demo dir=src -->\n\n### prose heading',
    '<!-- another-generator repo=demo dir=src -->\n\n### prose heading',
    '```html\n<!-- quirq-wiki-generated repo=demo dir=src -->\n```\n\n### prose heading',
    '<!-- quirq-wiki-generated repo=demo dir=../escape -->\n\n### prose heading',
    '<!-- Example: quirq-wiki-generated repo=demo dir=src -->\n\n### prose heading',
  ]) {
    const article = parseArticle(raw, 'demo/src.md');
    assert.equal(article.kind, 'document');
    assert.deepEqual(article.files, []);
  }
});

test('repository tables use GFM cells and source-relative page links', () => {
  const raw =
    '<!-- quirq-wiki-generated repo=demo dir=__index__ -->\n\n# demo\n\nA useful **project**.\n\n| Wiki page | Files | Source folder |\n| --- | ---: | --- |\n| [Root](_root.md) | 2 | (repository root) |\n| [Source](./src.md) | 0 | `src` |\n| [Nested](src__a.md#one) | 4 | `src/a` |\n| [Unsafe](javascript:alert) | 1 | `bad` |';
  const article = parseArticle(raw, 'demo/_index.md');
  assert.equal(article.kind, 'repository');
  assert.equal(article.descriptionMarkdown, 'A useful **project**.');
  assert.deepEqual(article.directories[0], {
    sourceFolder: '.',
    fileCount: 2,
    href: '_root.md',
    wikiSourcePath: 'demo/_root.md',
  });
  assert.equal(article.directories[2].wikiSourcePath, 'demo/src__a.md');
  assert.equal(article.directories[3].href, null);
});

test('nested navigation follows real ancestry, direct children, and siblings rather than prefix matches', () => {
  const pages = [
    '.',
    'skills',
    'skills/film',
    'skills/film/scenes',
    'skills/film/assets',
    'skills/film/scenes/nested',
    'skills/filming',
    'skills/other/scenes',
  ].map((folder) => fixturePage(folder));
  const wiki = fixtureWiki(pages);
  const article = buildArticle(pages[3], wiki);
  assert.equal(article.parent?.directory, 'skills/film');
  assert.deepEqual(
    article.children.map((child) => child.directory),
    ['skills/film/scenes/nested'],
  );
  assert.deepEqual(
    article.siblings.map((sibling) => sibling.directory),
    ['skills/film/assets'],
  );
  assert.deepEqual(
    article.breadcrumbs.map((crumb) => crumb.label),
    ['Main page', 'demo', 'skills', 'film', 'scenes'],
  );
  assert.equal(article.breadcrumbs[2].href, pages[1].href);
  assert.equal(article.breadcrumbs.at(-1)?.href, null);
  assert.equal(article.displayTitle, 'Scenes');
  assert.match(article.lead, /has no files directly inside it/);
  assert.match(article.lead, /1 subdirectory has its own article/);
});

test('nearest documented README provides grounded context, and file facts aggregate correctly', () => {
  const root = fixturePage(
    '.',
    '### README.md\n\nThe project README. General instructions.',
  );
  const parent = fixturePage(
    'src',
    '### README.md\n\nHow to run the rendering module.\n\n[`src/README.md`](https://github.com/quirq-ai/demo/blob/main/src/README.md) · code · 55 bytes',
  );
  const child = fixturePage(
    'src/scenes',
    '### 02-opening.mjs\n\n02 · Opening. A wordmark appears.\n\n[`src/scenes/02-opening.mjs`](https://github.com/quirq-ai/demo/blob/main/src/scenes/02-opening.mjs) · code · 125 bytes\n\n### unknown.ts\n\nAnother file.',
  );
  const article = buildArticle(child, fixtureWiki([root, parent, child]));
  assert.equal(article.files[0].displayTitle, 'Opening');
  assert.equal(article.files[1].displayTitle, 'unknown.ts');
  assert.equal(
    article.context?.summaryMarkdown,
    'How to run the rendering module.',
  );
  assert.equal(article.context?.href, `${parent.href}#readmemd`);
  assert.equal(article.stats.totalBytes, 125);
  assert.equal(article.stats.knownSizeFiles, 1);
  assert.equal(article.stats.fileCount, 2);
  assert.deepEqual(article.stats.languages, [
    { name: 'JavaScript', count: 1 },
    { name: 'TypeScript', count: 1 },
  ]);
});

test('the reported scenes article retains every source record and presents source-derived titles', async () => {
  const source =
    'agent-skills/skills__explainer-film__references__examples__quirq-infra__scenes.md';
  const article = parseArticle(await readFile(source, 'utf8'), source);
  assert.equal(article.files.length, 6);
  assert.equal(article.files[0].displayTitle, 'Thirteen repos');
  assert.equal(article.files[0].hasDefaultExport, true);
  assert.equal(article.files.at(-1)?.displayTitle, '_plate.mjs');
  assert.deepEqual(article.files.at(-1)?.exports, ['PLATE_CSS', 'plateHtml']);
  assert.equal(
    article.files.reduce((total, file) => total + (file.bytes ?? 0), 0),
    13623,
  );
});

test('the recorded docs proxy excerpt is preserved while framework notes remain readable prose', async () => {
  const raw = await readFile('docs/_root.md', 'utf8');
  const file = parseArticle(raw, 'docs/_root.md').files.find(
    (entry) => entry.name === 'proxy.ts',
  )!;
  assert.equal(file.isCodeExcerpt, true);
  assert.equal(
    file.codeExcerpt,
    'const { rewrite: rewriteDocs } = rewritePath( ${docsRoute}{/*path},\n${docsContentRoute}{/*path}/content.md, ); const { rewrite: rewriteSuffix } = rewritePath(\n${docsRoute}{/*path}.mdx, ${docsContentRoute}{/*path}/content.md, )',
  );
  assert.equal(
    file.notesMarkdown,
    'Wired into a Next.js app (App Router or Next APIs).',
  );
  assert.deepEqual(file.exports, ['proxy']);
  assert.match(file.summaryMarkdown, /Notable exports:/);
});

test('an existing code fence retains its language, metadata, and accompanying prose', () => {
  const fence = '~~~~python title="example.py" {1}\nprint("hello")\n~~~~';
  const raw = directory(
    'src',
    `### example.ts\n\n${fence}\n\nThis example prints a greeting.\n\nFunctions: \`greet\`\.\n\n[\`src/example.ts\`](https://github.com/quirq-ai/demo/blob/main/src/example.ts) · code · 100 bytes`,
  );
  const file = parseArticle(raw, 'demo/src.md').files[0];
  assert.equal(file.language, 'TypeScript');
  assert.equal(file.codeMarkdown, fence);
  assert.equal(file.codeExcerpt, 'print("hello")');
  assert.equal(file.notesMarkdown, 'This example prints a greeting.');
  assert.deepEqual(file.symbols, [{ label: 'Functions', names: ['greet'] }]);
  assert.ok(file.summaryMarkdown.startsWith(fence));
});

test('overview synopses use the first reading sentence, excluding scene labels and extracted symbols', () => {
  const longSentence = `A scene that ${'keeps its recorded meaning '.repeat(12)}through the final frame.`;
  const raw = directory(
    'scenes',
    `### opening.mjs\n\n02 · Opening. A **wordmark** appears. The credits follow. Notable exports: \`opening\`.\n\n### long.mjs\n\n${longSentence}\n\n### symbols.ts\n\nFunctions: \`run\`.\nProvides a default export as the module's public entry.`,
  );
  const [opening, long, symbols] = parseArticle(raw, 'demo/scenes.md').files;
  assert.equal(opening.synopsis, 'A wordmark appears.');
  assert.match(opening.summaryMarkdown, /^02 · Opening\./);
  assert.match(opening.bodyMarkdown, /The credits follow\./);
  assert.ok(long.synopsis.length <= 150);
  assert.ok(long.synopsis.endsWith('…'));
  assert.ok(longSentence.startsWith(long.synopsis.slice(0, -1)));
  assert.equal(long.summaryMarkdown, longSentence);
  assert.equal(symbols.synopsis, '');
  assert.equal(opening.codeMarkdown, null);
});

test('a quoted README title and its generated label become separate context fields', () => {
  const root = fixturePage(
    '.',
    '### README.md\n\nThe project README (“Demo renderer”). Renders the recorded scenes.\nThe timing is configured in the scene manifest.',
  );
  const child = fixturePage('scenes');
  const context = buildArticle(child, fixtureWiki([root, child])).context!;
  assert.equal(context.title, 'Demo renderer');
  assert.equal(
    context.bodyMarkdown,
    'Renders the recorded scenes.\nThe timing is configured in the scene manifest.',
  );
  assert.match(context.summaryMarkdown, /^The project README/);
});

test('all real generated files retain their original anchors and complete source summaries', async () => {
  const wiki = await getWiki();
  let files = 0;
  for (const page of wiki.pages) {
    const article = parseArticle(page.raw, page.sourcePath);
    if (article.kind !== 'directory') continue;
    assert.equal(article.files.length, page.fileCount, page.sourcePath);
    assert.deepEqual(
      article.files.map((file) => file.id),
      page.headings
        .filter((heading) => heading.depth === 3)
        .map((heading) => heading.id),
      page.sourcePath,
    );
    for (const file of article.files) {
      assert.ok(
        file.sourceUrl?.startsWith('https://github.com/'),
        `${page.sourcePath}: ${file.name}`,
      );
      assert.ok(
        file.summaryMarkdown.length > 0,
        `${page.sourcePath}: ${file.name}`,
      );
      assert.ok(file.bytes !== null, `${page.sourcePath}: ${file.name}`);
    }
    files += article.files.length;
  }
  assert.equal(files, wiki.totalFiles);
  assert.ok(files > 4000);
});
