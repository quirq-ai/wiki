import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const manifest = JSON.parse(
  readFileSync(path.join(root, '.quirq-wiki-manifest.json'), 'utf8'),
);
assert.ok(
  existsSync(path.join(dist, 'index.html')),
  'Run npm run build before npm run test:site.',
);

const articlePaths = ['wiki/readme/index.html', 'wiki/index/index.html'];
for (const repository of manifest.repos) {
  // readdir includes dotfiles, unlike a default glob. The org .github repository
  // shares its directory with this website's workflows and must remain visible.
  for (const entry of readdirSync(path.join(root, repository.name), {
    withFileTypes: true,
  })) {
    if (entry.isFile() && entry.name.endsWith('.md')) {
      articlePaths.push(
        `wiki/${repository.name}/${entry.name.slice(0, -3)}/index.html`,
      );
    }
  }
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(filename) : [filename];
  });
}

const files = walk(dist);
const htmlFiles = files.filter((filename) => filename.endsWith('.html'));
const documents = new Map(
  htmlFiles.map((filename) => [filename, readFileSync(filename, 'utf8')]),
);

function decodeAttribute(value) {
  return value.replace(
    /&(?:amp|quot|apos|lt|gt|#(\d+)|#x([\da-f]+));/gi,
    (entity, decimal, hexadecimal) => {
      if (decimal) return String.fromCodePoint(Number(decimal));
      if (hexadecimal)
        return String.fromCodePoint(Number.parseInt(hexadecimal, 16));
      return {
        '&amp;': '&',
        '&quot;': '"',
        '&apos;': "'",
        '&lt;': '<',
        '&gt;': '>',
      }[entity.toLowerCase()];
    },
  );
}

function localTarget(value, currentFile) {
  const relative = path.relative(dist, currentFile).split(path.sep).join('/');
  const base = `https://wiki.test/${relative.replace(/index\.html$/, '')}`;
  const url = new URL(decodeAttribute(value), base);
  if (url.origin !== 'https://wiki.test') return undefined;
  const pathname = decodeURIComponent(url.pathname);
  let filename = path.join(dist, pathname);
  if (existsSync(filename) && statSync(filename).isDirectory())
    filename = path.join(filename, 'index.html');
  return { filename, hash: decodeURIComponent(url.hash.slice(1)) };
}

test('publishes the entire manifest corpus, including hidden repository pages', () => {
  const actualArticles = htmlFiles.filter((filename) =>
    path.relative(dist, filename).startsWith(`wiki${path.sep}`),
  );
  assert.equal(
    actualArticles.length,
    articlePaths.length,
    'Article output must match the current snapshot exactly.',
  );
  for (const relative of articlePaths) {
    const filename = path.join(dist, relative);
    assert.ok(documents.has(filename), `Missing snapshot article: ${relative}`);
    assert.match(
      documents.get(filename),
      /\bdata-pagefind-body(?:[\s=>])/,
      `${relative} must be searchable.`,
    );
  }
});

test('builds the public navigation pages and client search index', () => {
  for (const route of ['', 'repositories', 'recent-changes', 'search']) {
    assert.ok(
      existsSync(path.join(dist, route, 'index.html')),
      `Missing /${route}${route ? '/' : ''}`,
    );
  }
  assert.ok(
    existsSync(path.join(dist, 'pagefind', 'pagefind.js')),
    'Pagefind must run after Astro builds.',
  );
  assert.ok(
    files.some((filename) => filename.endsWith('.pf_index')),
    'Search requires a generated Pagefind index.',
  );
  assert.ok(
    existsSync(path.join(dist, '404.html')),
    'The deployment needs a static not-found page.',
  );
});

test('random article and fallback search directory covers the published corpus', () => {
  const directory = JSON.parse(
    readFileSync(path.join(dist, 'articles.json'), 'utf8'),
  );
  assert.equal(directory.length, articlePaths.length);
  assert.equal(
    new Set(directory.map((article) => article.href)).size,
    directory.length,
    'Article URLs must be unique.',
  );
  for (const article of directory) {
    assert.equal(typeof article.title, 'string');
    assert.ok(article.title.trim(), `Missing title for ${article.href}`);
    assert.equal(typeof article.description, 'string');
    const target = localTarget(article.href, path.join(dist, 'index.html'));
    assert.ok(
      target && documents.has(target.filename),
      `Directory points outside the published corpus: ${article.href}`,
    );
  }
});

test('every generated same-origin link and asset resolves to a build artifact', () => {
  const failures = [];
  for (const [filename, html] of documents) {
    for (const attribute of html.matchAll(
      /\b(?:href|src)\s*=\s*(["'])(.*?)\1/gi,
    )) {
      const value = attribute[2];
      if (!value || /^(?:mailto|tel|data|javascript):/i.test(value)) continue;
      const target = localTarget(value, filename);
      if (target && !existsSync(target.filename))
        failures.push(`${path.relative(dist, filename)} → ${value}`);
    }
  }
  assert.deepEqual(
    failures,
    [],
    `Broken local links/assets:\n${failures.slice(0, 30).join('\n')}`,
  );
});

test('article table-of-contents links target existing, unique headings', () => {
  const failures = [];
  for (const relative of articlePaths) {
    const filename = path.join(dist, relative);
    const html = documents.get(filename) ?? '';
    const ids = Array.from(
      html.matchAll(/\sid\s*=\s*(["'])(.*?)\1/gi),
      (match) => decodeAttribute(match[2]),
    );
    if (new Set(ids).size !== ids.length)
      failures.push(`${relative}: duplicate HTML ids`);
    for (const match of html.matchAll(/\bhref\s*=\s*(["'])(#[^"']+)\1/gi)) {
      const id = decodeURIComponent(decodeAttribute(match[2].slice(1)));
      if (!ids.includes(id)) failures.push(`${relative}: missing ${match[2]}`);
    }
  }
  assert.deepEqual(
    failures,
    [],
    `Broken article anchors:\n${failures.slice(0, 30).join('\n')}`,
  );
});

test('ships rendered pages without exposing source files or development tooling', () => {
  const unexpected = files
    .map((filename) => path.relative(dist, filename).split(path.sep).join('/'))
    .filter(
      (filename) =>
        // A rendered article about a source repository's tests/ directory is valid.
        // Reject the website's own tooling at the deployment root instead.
        /^(?:node_modules|quirq_wiki|tests|\.git|\.cache|\.env)(?:\/|$)/.test(
          filename,
        ) ||
        /\.(?:py|toml)$/.test(filename) ||
        // Markdown ships only as the agent twin of a published article.
        (filename.endsWith('.md') &&
          !(
            filename.startsWith('wiki/') &&
            existsSync(path.join(dist, filename.slice(0, -3), 'index.html'))
          )) ||
        /^(?:package(?:-lock)?\.json|project\.json|WEBSITE\.md)$/.test(
          filename,
        ),
    );
  assert.deepEqual(unexpected, []);
});

test('agents get llms.txt, robots.txt, a sitemap and a Markdown twin of every article', () => {
  const llms = readFileSync(path.join(dist, 'llms.txt'), 'utf8');
  assert.match(llms, /^# Quirq Wiki\n\n> Self evolving knowledge base/);
  assert.match(
    readFileSync(path.join(dist, 'robots.txt'), 'utf8'),
    /^User-agent: \*\nAllow: \/\n/,
  );
  const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
  for (const article of articlePaths) {
    const slug = article.slice(0, -'/index.html'.length);
    const twin = path.join(dist, `${slug}.md`);
    assert.ok(existsSync(twin), `${slug}.md is missing`);
    assert.ok(
      llms.includes(`${encodeURI(slug)}.md)`) || llms.includes(`${slug}.md)`),
      `llms.txt misses ${slug}`,
    );
    assert.ok(
      sitemap.includes(`/${slug}/</loc>`) ||
        sitemap.includes(`/${encodeURI(slug)}/</loc>`),
      `sitemap misses ${slug}`,
    );
  }
  // The twin is the committed Markdown, byte for byte.
  assert.equal(
    readFileSync(path.join(dist, 'wiki/monitoring/_index.md'), 'utf8'),
    readFileSync(path.join(root, 'monitoring/_index.md'), 'utf8'),
  );
});

test('every inline script is allowed by the Content-Security-Policy hash list', () => {
  const vercel = JSON.parse(
    readFileSync(path.join(root, 'vercel.json'), 'utf8'),
  );
  const csp = vercel.headers
    .flatMap((rule) => rule.headers)
    .find((header) => header.key === 'Content-Security-Policy')?.value;
  assert.ok(csp, 'vercel.json must set a Content-Security-Policy');
  const scriptSrc = csp
    .split(';')
    .map((directive) => directive.trim())
    .find((directive) => directive.startsWith('script-src '));
  assert.ok(scriptSrc, 'the policy must name script-src');
  assert.ok(!scriptSrc.includes("'unsafe-inline'"));
  const missing = new Set();
  for (const filename of htmlFiles) {
    const html = readFileSync(filename, 'utf8');
    for (const match of html.matchAll(
      /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi,
    )) {
      const hash = `'sha256-${createHash('sha256').update(match[1]).digest('base64')}'`;
      if (!scriptSrc.includes(hash)) missing.add(hash);
    }
  }
  assert.deepEqual(
    [...missing],
    [],
    'Add these inline script hashes to script-src in vercel.json',
  );
});
