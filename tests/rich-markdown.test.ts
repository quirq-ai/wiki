import assert from 'node:assert/strict';
import test from 'node:test';
import type { Element, Root, RootContent } from 'hast';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import { richMarkdown } from '../src/lib/rich-markdown.js';

async function render(markdown: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(richMarkdown)
    .use(rehypeStringify);
  const tree = await processor.run(processor.parse(markdown));
  return { tree: tree as Root, html: processor.stringify(tree) };
}

function findElements(node: Root | Element, tagName: string): Element[] {
  return node.children.flatMap((child) =>
    child.type !== 'element'
      ? []
      : [
          ...(child.tagName === tagName ? [child] : []),
          ...findElements(child, tagName),
        ],
  );
}

function textContent(node: RootContent): string {
  if (node.type === 'text') return node.value;
  if (node.type === 'element') return node.children.map(textContent).join('');
  return '';
}

test('highlighting preserves exact code text and uses the light theme only', async () => {
  const source = 'const message = "<script> & \\"";\n\nconsole.log(message);\n';
  const { tree, html } = await render(`\`\`\`ts\n${source}\`\`\``);
  assert.equal(textContent(findElements(tree, 'code')[0]!), source);
  assert.match(html, /class="code-block"/);
  assert.match(html, /class="code-language">TypeScript<\/span>/);
  assert.match(html, /class="shiki github-light"/);
  assert.doesNotMatch(html, /--shiki-dark/);
  assert.equal(html.match(/tabindex=/gi)?.length, 1);
  assert.match(html, /data-copy-code/);
  assert.equal(findElements(tree, 'button')[0]?.properties.hidden, true);
  assert.equal(findElements(tree, 'script').length, 0);
});

test('unknown language fences stay readable and inline code is not turned into a block', async () => {
  const source = '<widget data-event="alert(1)">Hello & goodbye</widget>\n';
  const { tree, html } = await render(
    `An inline \`example\`.\n\n\`\`\`made-up-grammar\n${source}\`\`\``,
  );
  const code = findElements(tree, 'code');
  assert.equal(textContent(code[0]!), 'example');
  assert.equal(textContent(code[1]!), source);
  assert.equal(findElements(tree, 'widget').length, 0);
  assert.equal(findElements(tree, 'button').length, 1);
  assert.match(html, /made-up-grammar/);
});

test('Shell language names from generated excerpts use a real shell grammar', async () => {
  const source = 'echo "$HOME" # This stays a code example\n';
  const { tree, html } = await render(`\`\`\`shell\n${source}\`\`\``);
  assert.equal(textContent(findElements(tree, 'code')[0]!), source);
  assert.match(html, /class="code-language">Shell<\/span>/);
  const colors = new Set(
    findElements(tree, 'span')
      .map((span) => span.properties.style)
      .filter(Boolean),
  );
  assert.ok(
    colors.size > 1,
    'shell syntax should receive distinct token colors',
  );
});

test('Mermaid becomes a lazy figure with an accessible caption and exact source fallback', async () => {
  const source =
    'flowchart LR\n  accTitle: Reading flow\n  A[Article] --> B[Source]\n';
  const { tree, html } = await render(`\`\`\`mermaid\n${source}\`\`\``);
  assert.equal(
    textContent(findElements(tree, 'figcaption')[0]!),
    'Figure 1. Reading flow',
  );
  assert.equal(textContent(findElements(tree, 'code')[0]!), source);
  assert.match(html, /data-mermaid/);
  assert.match(html, /class="diagram-canvas"[^>]*hidden/);
  assert.match(html, /role="status"/);
  assert.match(html, /<details class="diagram-source">/);
  assert.match(html, /<noscript>/);
  assert.equal(findElements(tree, 'script').length, 0);
});

test('hostile HTML inside diagram definitions remains source text', async () => {
  const source =
    'graph LR\nA["</code></pre><img src=x onerror=alert(1)>"] --> B[Safe]\n';
  const { tree, html } = await render(`\`\`\`mermaid\n${source}\`\`\``);
  assert.equal(textContent(findElements(tree, 'code')[0]!), source);
  assert.equal(findElements(tree, 'img').length, 0);
  assert.match(html, /&#x3C;img/);
});

test('wide tables retain native markup, header scope, inline formatting and a scroll region', async () => {
  const { tree } = await render(
    '| File | Purpose |\n| --- | --- |\n| `src/main.ts` | **Entry point** |',
  );
  const region = findElements(tree, 'div').find(
    (node) => node.properties.role === 'region',
  );
  assert.equal(region?.properties.tabIndex, 0);
  assert.equal(region?.properties.ariaLabel, 'Table: File, Purpose');
  assert.equal(findElements(tree, 'table').length, 1);
  assert.equal(
    findElements(tree, 'th').every((cell) => cell.properties.scope === 'col'),
    true,
  );
  assert.equal(textContent(findElements(tree, 'strong')[0]!), 'Entry point');
  assert.equal(textContent(findElements(tree, 'code')[0]!), 'src/main.ts');
});

test('rich markup does not restore scripts or unsafe attributes removed by sanitation', async () => {
  const { tree, html } = await render(
    '<script>alert(1)</script>\n\n<table onclick="alert(1)"><caption>Supported modules</caption><thead><tr><th>Module</th></tr></thead><tbody><tr><td><a href="javascript:alert(1)">Run</a></td></tr></tbody></table>',
  );
  assert.equal(findElements(tree, 'script').length, 0);
  assert.doesNotMatch(html, /onclick|javascript:/);
  assert.equal(
    findElements(tree, 'div')[0]?.properties.ariaLabel,
    'Table: Module',
  );
  assert.equal(findElements(tree, 'th')[0]?.properties.scope, 'col');
});
