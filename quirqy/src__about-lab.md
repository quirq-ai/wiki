<!-- quirq-wiki-generated repo=quirqy dir=src/about-lab -->

# quirqy / src/about-lab

Source: [src/about-lab](https://github.com/quirq-ai/quirqy/tree/quirq/src/about-lab) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### app.js

const READING_SIZE_KEY = 'quirqy.about-reading-size.v1'; const decodeFragment = value => {
try { return decodeURIComponent(value); } catch { return value; } } Notable exports:
`mountAboutLab`.

[`src/about-lab/app.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/app.js) · code · 25148 bytes

### cache.js

export const README_CACHE_KEY = 'quirqy.about-readme.v1' Notable exports:
`readCachedReadme`, `README_CACHE_KEY`.

[`src/about-lab/cache.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/cache.js) · code · 2348 bytes

### cache.test.js

const url = 'https://github.com/example/repo'; const document = { repository: { url,
defaultBranch: 'main', description: 'A repository' }, markdown: '# Hello', path:
'docs/README.md', fetchedAt: '2026-10-23T12:00:00Z', htmlUrl: 'https://evil.example/' };
const storage = value => ({ getItem: () => JSON.stringify(value) }); test('saved README URLs
and reposito Automated test file.

[`src/about-lab/cache.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/cache.test.js) · code · 5398 bytes

### examples.js

Actual public README snapshots. Refresh in GitHub controls for the latest text. Notable
exports: `getReadmeExample`, `DEFAULT_ABOUT_REPOSITORY`, `ABOUT_EXAMPLES`.

[`src/about-lab/examples.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/examples.js) · code · 690 bytes

### markdown.js

const TAGS = ['a', 'abbr', 'b', 'blockquote', 'br', 'caption', 'code', 'dd', 'del',
'details', 'div', 'dl', 'dt', 'em', 'figcaption', 'figure', 'h1', 'h2', 'h3', 'h4', 'h5',
'h6', 'hr', 'i', 'img', 'input', 'kbd', 'li', 'ol', 'p', 'pre', 's', 'samp', 'small',
'span', 'strong', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'th', 'thead', 'tr',
'ul', 'var'] Notable exports: `resolveReadmeUrl`, `renderReadme`.

[`src/about-lab/markdown.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/markdown.js) · code · 8344 bytes

### markdown.test.js

const dom = new JSDOM('Load', { url: 'http://localhost:5174/about' }); const document =
dom.window.document; const metadata = { repository: { url: 'https://github.com/owner/repo',
defaultBranch: 'docs/v2' }, path: 'docs/README.md' }; const render = markdown =>
renderReadme(markdown, metadata, { document }) Automated test file.

[`src/about-lab/markdown.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/markdown.test.js) · code · 8154 bytes

### readme.js

export const MAX_README_BYTES = 1024 * 1024; const MAX_JSON_BYTES = MAX_README_BYTES * 2;
const API = 'https://api.github.com'; const abortError = () => new DOMException('README
loading was cancelled.', 'AbortError'); const checkAbort = signal => { if (signal?.aborted)
throw abortError(); } Notable exports: `encodeRepositoryPath`, `loadRepositoryDetails`,
`loadReadme`, `MAX_README_BYTES`.

[`src/about-lab/readme.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/readme.js) · code · 7913 bytes

### readme.test.js

const repository = { full_name: 'owner/repo', name: 'repo', default_branch: 'feature/docs',
description: 'Repository description' }; const content = (text = '# Read me', extra = {}) =>
({ type: 'file', path: 'docs/README.md', sha: 'blob123', encoding: 'base64', content:
Buffer.from(text).toString('base64'), size: Buffer.byteLength(text), ...extra }); const r
Automated test file.

[`src/about-lab/readme.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/readme.test.js) · code · 10379 bytes

### repository-sculptures.js

const PALETTES = { stars: { face: '#c8a373', edge: '#f1cf9d' }, forks: { face: '#6c9bb6',
edge: '#b2d7ec' } } Notable exports: `createRepositorySculptures`.

[`src/about-lab/repository-sculptures.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/repository-sculptures.js) · code · 5527 bytes

### repository-stats.js

const exactFormatter = new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }); const
compactFormatter = new Intl.NumberFormat(undefined, { notation: 'compact',
maximumFractionDigits: 1 }) Notable exports: `normalizeRepositoryCount`,
`formatRepositoryCount`.

[`src/about-lab/repository-stats.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/repository-stats.js) · code · 647 bytes

### repository-stats.test.js

test('repository counts preserve real zero and exact nonnegative safe integers', () => { for
(const count of [0, 1, 26, 1234567, Number.MAX_SAFE_INTEGER]) {
assert.equal(normalizeRepositoryCount(count), count); }
assert.equal(Object.is(normalizeRepositoryCount(-0), -0), false); }) Automated test file.

[`src/about-lab/repository-stats.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/repository-stats.test.js) · code · 1581 bytes

### repository-website.js

Normalize GitHub's optional website field without accepting executable links. Notable
exports: `normalizeRepositoryWebsite`.

[`src/about-lab/repository-website.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/repository-website.js) · code · 1420 bytes

### repository-website.test.js

test('repository websites preserve HTTP(S) links and infer HTTPS for bare domains', () => {
const cases = [ ['https://xo.quirq.dev', 'https://xo.quirq.dev/'], ['
HTTP://Example.COM/docs?q=hello#start ', 'http://example.com/docs?q=hello#start'],
['example.com', 'https://example.com/'], ['www.example.com/docs?q=hello#start',
'https://www.example.com/docs?q=hel Automated test file.

[`src/about-lab/repository-website.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/repository-website.test.js) · code · 2463 bytes

### scene.js

const GOLD = new THREE.Color('#e9c595'); const SILVER = new THREE.Color('#a7b8cc'); const
clamp = (value, min, max) => Math.max(min, Math.min(max, value)); const ease = value =>
value * value * (3 - 2 * value); const pageHeightAt = (x, width, z, height) => .12 * (x /
width) ** 2 + .035 * Math.sin(z / height * Math.PI) Notable exports: `ReadmeScene`.

[`src/about-lab/scene.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/scene.js) · code · 20621 bytes

### style.css

About keeps the repository's own writing flat and readable beside its 3D folio. Leading
class selectors include `about-introduction`, `about-eyebrow`, `about-folio-caption`,
`about-section-number`, `about-frame`, `about-empty-index`, `about-reader-toolbar`, `about-
document-label`, and 15 more. Defines or consumes CSS custom properties (design tokens).

[`src/about-lab/style.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/about-lab/style.css) · code · 16582 bytes

_Generated 2026-10-30 11:44 UTC from `quirq`._
