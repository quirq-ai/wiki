import path from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import type { Node, Parent } from 'unist';
import type { Heading, Link, Paragraph, Root, RootContent, Table } from 'mdast';
import type { Wiki, WikiPage, WikiRepo } from './wiki.js';
import { headingSlugger } from './presentation.js';

export interface ArticleFile {
  name: string;
  /** The original GitHub-compatible heading anchor, including duplicate suffixes. */
  id: string;
  displayTitle: string;
  /** Original Markdown, including all prose, lists, and code blocks. */
  summaryMarkdown: string;
  /** Reading prose with only the generator's known symbol sentences extracted. */
  bodyMarkdown: string;
  symbols: { label: string; names: string[]; additionalCount?: number }[];
  isCodeExcerpt: boolean;
  codeExcerpt: string | null;
  /** An existing code block, retaining its original fence, language, and metadata. */
  codeMarkdown: string | null;
  notesMarkdown: string;
  synopsis: string;
  sourceUrl: string | null;
  sourcePath: string;
  kind: string | null;
  bytes: number | null;
  exports: string[];
  hasDefaultExport: boolean;
  language: string | null;
}

export interface ArticleDirectory {
  sourceFolder: string;
  fileCount: number;
  href: string | null;
  wikiSourcePath: string | null;
}

export interface ParsedArticle {
  kind: 'directory' | 'repository' | 'document';
  repo: string | null;
  directory: string | null;
  title: string;
  descriptionMarkdown: string;
  sourceUrl: string | null;
  files: ArticleFile[];
  directories: ArticleDirectory[];
  generatedAt: string | null;
}

export interface ArticleLink {
  label: string;
  href: string;
  directory: string;
  fileCount: number;
}

export interface ArticleModel extends ParsedArticle {
  displayTitle: string;
  lead: string;
  repository: WikiRepo | null;
  breadcrumbs: { label: string; href: string | null }[];
  parent: ArticleLink | null;
  children: ArticleLink[];
  siblings: ArticleLink[];
  context: {
    title: string;
    summaryMarkdown: string;
    bodyMarkdown: string;
    href: string;
  } | null;
  stats: {
    fileCount: number;
    totalBytes: number;
    knownSizeFiles: number;
    languages: { name: string; count: number }[];
    kinds: { name: string; count: number }[];
  };
}

const markdown = unified().use(remarkParse).use(remarkGfm);
const sentences = new Intl.Segmenter('en', { granularity: 'sentence' });

function textOf(node: Node): string {
  if ('value' in node && typeof node.value === 'string') {
    return node.type === 'html'
      ? node.value.replace(/<[^>]*>/g, '')
      : node.value;
  }
  if ('alt' in node && typeof node.alt === 'string') return node.alt;
  if ('children' in node) return (node as Parent).children.map(textOf).join('');
  return '';
}

const normalize = (text: string) => text.replace(/\s+/g, ' ').trim();

function sourceOf(raw: string, node: Node): string {
  return raw.slice(node.position?.start.offset, node.position?.end.offset);
}

/** Parse only the generator's standalone first-node marker, never prose/code examples. */
function generatedMarker(
  tree: Root,
): { repo: string; directory: string } | null {
  const first = tree.children[0];
  if (first?.type !== 'html') return null;
  const match = first.value.match(
    /^<!--\s+quirq-wiki-generated repo=([\w.-]+) dir=([^\r\n]+?)\s+-->$/,
  );
  if (!match || match[1] === '.' || match[1] === '..') return null;
  const directory = match[2].trim();
  if (
    !directory ||
    directory.startsWith('/') ||
    directory.includes('\\') ||
    directory.split('/').includes('..')
  )
    return null;
  return { repo: match[1], directory };
}

function safeWebUrl(value: string): string | null {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? value : null;
  } catch {
    return null;
  }
}

function firstLink(node: Node): Link | null {
  if (node.type === 'link') return node as Link;
  if ('children' in node) {
    for (const child of (node as Parent).children) {
      const link = firstLink(child);
      if (link) return link;
    }
  }
  return null;
}

function generatedDate(node: RootContent): string | null {
  if (
    node.type !== 'paragraph' ||
    node.children.length !== 1 ||
    node.children[0].type !== 'emphasis'
  )
    return null;
  return (
    normalize(textOf(node)).match(
      /^Generated (\d{4}-\d{2}-\d{2} \d{2}:\d{2} UTC)(?: from .+)?\.$/,
    )?.[1] ?? null
  );
}

function fileMetadata(node: RootContent) {
  if (node.type !== 'paragraph') return null;
  const link = node.children[0];
  if (
    link?.type !== 'link' ||
    link.children.length !== 1 ||
    link.children[0].type !== 'inlineCode'
  )
    return null;
  const suffix = normalize(node.children.slice(1).map(textOf).join(''));
  const fields = suffix.match(/^·\s*([\w-]+)\s*·\s*(\d+) bytes$/);
  if (!fields) return null;
  const bytes = Number(fields[2]);
  return {
    sourcePath: link.children[0].value,
    sourceUrl: safeWebUrl(link.url),
    kind: fields[1],
    bytes: Number.isSafeInteger(bytes) ? bytes : null,
  };
}

const languages: Record<string, string> = {
  js: 'JavaScript',
  mjs: 'JavaScript',
  cjs: 'JavaScript',
  jsx: 'JavaScript',
  ts: 'TypeScript',
  tsx: 'TypeScript',
  mts: 'TypeScript',
  cts: 'TypeScript',
  py: 'Python',
  pyi: 'Python',
  rs: 'Rust',
  go: 'Go',
  swift: 'Swift',
  c: 'C',
  h: 'C',
  cc: 'C++',
  cpp: 'C++',
  hpp: 'C++',
  java: 'Java',
  kt: 'Kotlin',
  kts: 'Kotlin',
  rb: 'Ruby',
  php: 'PHP',
  sh: 'Shell',
  bash: 'Shell',
  zsh: 'Shell',
  ps1: 'PowerShell',
  sql: 'SQL',
  css: 'CSS',
  scss: 'SCSS',
  html: 'HTML',
  htm: 'HTML',
  astro: 'Astro',
  vue: 'Vue',
  svelte: 'Svelte',
  md: 'Markdown',
  mdx: 'MDX',
  rst: 'reStructuredText',
  json: 'JSON',
  jsonc: 'JSON',
  yaml: 'YAML',
  yml: 'YAML',
  toml: 'TOML',
  xml: 'XML',
  svg: 'SVG',
  proto: 'Protocol Buffers',
  graphql: 'GraphQL',
};

function languageFor(name: string): string | null {
  if (/^Dockerfile(?:\.|$)/i.test(name)) return 'Dockerfile';
  if (/^(?:Makefile|GNUmakefile)$/i.test(name)) return 'Makefile';
  return languages[path.posix.extname(name).slice(1).toLowerCase()] ?? null;
}

function readingSummary(nodes: RootContent[], raw: string) {
  const symbols: ArticleFile['symbols'] = [];
  let hasDefaultExport = false;
  const body = nodes
    .map((node) => {
      const original = sourceOf(raw, node);
      if (node.type !== 'paragraph') return original;
      const removals: { start: number; end: number }[] = [];
      const origin = node.position!.start.offset!;
      for (const [position, child] of node.children.entries()) {
        // Restrict extraction to actual prose and inline-code AST nodes, never code blocks.
        if (
          child.type !== 'text' ||
          child.position?.start.offset === undefined ||
          child.position.end.offset === undefined
        )
          continue;
        const source = sourceOf(raw, child);
        const childOffset = child.position!.start.offset!;
        for (const match of source.matchAll(
          /\bProvides\s+a\s+default\s+export\s+as\s+the\s+module's\s+public\s+entry\.(?=\s|$)/g,
        )) {
          hasDefaultExport = true;
          removals.push({
            start: childOffset - origin + match.index!,
            end: childOffset - origin + match.index! + match[0].length,
          });
        }
        const marker = source.match(
          /\b(Notable exports|Functions|Classes):\s*$/,
        );
        if (!marker) continue;
        const names: string[] = [];
        let end: number | null = null;
        let additionalCount: number | undefined;
        for (
          let cursor = position + 1;
          cursor < node.children.length;
          cursor += 2
        ) {
          const symbol = node.children[cursor];
          const separator = node.children[cursor + 1];
          if (
            symbol?.type !== 'inlineCode' ||
            separator?.type !== 'text' ||
            separator.position?.start.offset === undefined ||
            separator.position.end.offset === undefined
          )
            break;
          names.push(symbol.value);
          const separatorSource = sourceOf(raw, separator);
          if (/^,\s*$/.test(separatorSource)) continue;
          const extra = separatorSource.match(
            /^,\s*and\s+(\d+)\s+more\.(?=\s|$)/,
          );
          const final = extra ?? separatorSource.match(/^\.(?=\s|$)/);
          if (final) {
            end = separator.position!.start.offset! + final[0].length;
            additionalCount = extra ? Number(extra[1]) : undefined;
          }
          break;
        }
        if (end !== null) {
          symbols.push({
            label: marker[1] === 'Notable exports' ? 'Exports' : marker[1],
            names,
            ...(additionalCount === undefined ? {} : { additionalCount }),
          });
          removals.push({
            start: childOffset - origin + marker.index!,
            end: end - origin,
          });
        }
      }
      return removals
        .sort((a, b) => b.start - a.start)
        .reduce(
          (result, removal) =>
            result.slice(0, removal.start) + result.slice(removal.end),
          original,
        )
        .trim();
    })
    .filter(Boolean);
  const bodyMarkdown = body.join('\n\n');
  const isCodeExcerpt =
    nodes[0]?.type === 'code' ||
    /^(?:(?:export\s+)?(?:const|let|var)\s+(?:\w+\s*(?:=|:)|[\[{])|(?:export\s+)?(?:async\s+)?function\s+\w*\s*\(|(?:async\s+)?def\s+\w+\s*\(|import\s+(?:\{|\*|\w+\s+from\s)|(?:export\s+)?class\s+\w+\s*(?:\{|extends\s)|module\.exports\s*=)/.test(
      bodyMarkdown.trim(),
    );
  let codeExcerpt: string | null = null;
  let codeMarkdown: string | null = null;
  let notesMarkdown = '';
  if (isCodeExcerpt) {
    if (nodes[0]?.type === 'code') {
      codeExcerpt = nodes[0].value;
      codeMarkdown = sourceOf(raw, nodes[0]);
      notesMarkdown = body.slice(1).join('\n\n');
    } else {
      // Only the generator's exact trailing framework/test notes are separated from
      // a recorded source excerpt. No attempt is made to reconstruct missing code.
      const note = [
        String.raw`Wired\s+into\s+a\s+Next\.js\s+app\s+\(App\s+Router\s+or\s+Next\s+APIs\)\.`,
        String.raw`Built\s+with\s+FastAPI\.`,
        String.raw`Contains\s+tests\.`,
        String.raw`Automated\s+test\s+file\.`,
        "Marked\\s+`'use client'`\\s+so\\s+it\\s+runs\\s+in\\s+the\\s+browser\\.",
        "Contains\\s+server\\s+actions\\s+\\(`'use server'`\\)\\.",
      ].join('|');
      const trailing = body[0]?.match(
        new RegExp(`(?:^|\\s)((?:${note})(?:\\s+(?:${note}))*)\\s*$`),
      );
      codeExcerpt = trailing
        ? body[0].slice(0, trailing.index).trimEnd()
        : body[0];
      notesMarkdown = [trailing?.[1], ...body.slice(1)]
        .filter(Boolean)
        .join('\n\n');
    }
  }
  return {
    bodyMarkdown,
    symbols,
    hasDefaultExport,
    isCodeExcerpt,
    codeExcerpt,
    codeMarkdown,
    notesMarkdown,
  };
}

function synopsisFor(bodyMarkdown: string): string {
  const firstParagraph = markdown
    .parse(bodyMarkdown)
    .children.find((node) => node.type === 'paragraph');
  const prose = firstParagraph
    ? normalize(textOf(firstParagraph))
        .replace(/^\d+\s*·\s*[^.!?]+[.!?](?:\s|$)/, '')
        .trim()
    : '';
  const firstSentence =
    sentences.segment(prose)[Symbol.iterator]().next().value?.segment.trim() ??
    '';
  return firstSentence.length > 150
    ? `${firstSentence.slice(0, 149).replace(/\s+\S*$/, '')}…`
    : firstSentence;
}

/** A heading's anchor must reflect Markdown semantics, even when its filename uses emphasis. */
function headingIds(tree: Root): Map<Heading, string> {
  const slugger = headingSlugger();
  const ids = new Map<Heading, string>();
  const walk = (node: Node) => {
    if (node.type === 'heading')
      ids.set(
        node as Heading,
        slugger.slug(normalize(textOf(node)) || 'section'),
      );
    if ('children' in node) (node as Parent).children.forEach(walk);
  };
  walk(tree);
  return ids;
}

function parseFiles(tree: Root, raw: string, directory: string): ArticleFile[] {
  const ids = headingIds(tree);
  const files: ArticleFile[] = [];
  const starts = tree.children.flatMap((node, index) =>
    node.type === 'heading' && node.depth === 3 ? [index] : [],
  );
  for (const [position, start] of starts.entries()) {
    const heading = tree.children[start] as Heading;
    const body = tree.children.slice(
      start + 1,
      starts[position + 1] ?? tree.children.length,
    );
    const metadataNode = body.find((node) => fileMetadata(node));
    const metadata = metadataNode ? fileMetadata(metadataNode) : null;
    const summaryNodes = body.filter(
      (node) => node !== metadataNode && !generatedDate(node),
    );
    const summaryMarkdown = summaryNodes
      .map((node) => sourceOf(raw, node))
      .join('\n\n');
    const reading = readingSummary(summaryNodes, raw);
    const firstParagraph = summaryNodes.find(
      (node) => node.type === 'paragraph',
    );
    const prose = firstParagraph ? normalize(textOf(firstParagraph)) : '';
    const sourcePath =
      metadata?.sourcePath ??
      [directory === '.' ? '' : directory, normalize(textOf(heading))]
        .filter(Boolean)
        .join('/');
    const name = path.posix.basename(sourcePath);
    // Scene names are explicit source prose. Other names are retained without inferring purpose.
    const explicitTitle = prose
      .match(/^\d+\s*·\s*([^.!?]+)[.!?](?:\s|$)/)?.[1]
      ?.trim();
    const synopsis = synopsisFor(reading.bodyMarkdown);
    files.push({
      name,
      id: ids.get(heading)!,
      displayTitle: explicitTitle ?? name,
      summaryMarkdown,
      ...reading,
      synopsis,
      sourceUrl: metadata?.sourceUrl ?? null,
      sourcePath,
      kind: metadata?.kind ?? null,
      bytes: metadata?.bytes ?? null,
      exports: reading.symbols
        .filter((group) => group.label === 'Exports')
        .flatMap((group) => group.names),
      language: languageFor(name),
    });
  }
  return files;
}

function localWikiPath(href: string, sourcePath: string): string | null {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) return null;
  let pathname = href.split(/[?#]/)[0];
  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    /* Keep literal malformed escapes. */
  }
  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(sourcePath), pathname),
  );
  return resolved.startsWith('../') || path.posix.isAbsolute(resolved)
    ? null
    : resolved;
}

function directoryTable(
  node: RootContent,
  sourcePath: string,
): ArticleDirectory[] {
  if (node.type !== 'table') return [];
  const table = node as Table;
  const headers =
    table.children[0]?.children.map((cell) =>
      normalize(textOf(cell)).toLowerCase(),
    ) ?? [];
  const folderColumn = headers.indexOf('source folder');
  const filesColumn = headers.indexOf('files');
  const pageColumn = headers.indexOf('wiki page');
  if (folderColumn < 0 || filesColumn < 0 || pageColumn < 0) return [];
  return table.children.slice(1).flatMap((row) => {
    const folderCell = row.children[folderColumn];
    const countCell = row.children[filesColumn];
    const pageCell = row.children[pageColumn];
    if (!folderCell || !countCell || !pageCell) return [];
    const folder = normalize(textOf(folderCell));
    const count = normalize(textOf(countCell));
    const link = firstLink(pageCell);
    if (!folder || !/^\d+$/.test(count) || !Number.isSafeInteger(Number(count)))
      return [];
    const wikiSourcePath = link ? localWikiPath(link.url, sourcePath) : null;
    return [
      {
        sourceFolder: folder === '(repository root)' ? '.' : folder,
        fileCount: Number(count),
        href: wikiSourcePath ? link!.url : link ? safeWebUrl(link.url) : null,
        wikiSourcePath,
      },
    ];
  });
}

export function parseArticle(raw: string, sourcePath: string): ParsedArticle {
  const tree = markdown.parse(raw);
  const marker = generatedMarker(tree);
  const titleNode = tree.children.find(
    (node) => node.type === 'heading' && node.depth === 1,
  );
  const title = titleNode
    ? normalize(textOf(titleNode))
    : path.posix.basename(sourcePath, '.md');
  const paragraphs = tree.children.filter(
    (node): node is Paragraph => node.type === 'paragraph',
  );
  const kind = !marker
    ? 'document'
    : marker.directory === '__index__'
      ? 'repository'
      : 'directory';
  const firstFile = tree.children.findIndex(
    (node) => node.type === 'heading' && node.depth === 3,
  );
  const introduction = tree.children.slice(
    0,
    firstFile < 0 ? tree.children.length : firstFile,
  );
  const source = paragraphs.find((node) =>
    normalize(textOf(node)).startsWith('Source: '),
  );
  const sourceLink = source ? firstLink(source) : null;
  const directoryIntro = introduction.filter(
    (node) =>
      node.type === 'paragraph' &&
      node !== source &&
      !generatedDate(node) &&
      ![
        'Each heading is a file that lives directly in this folder. Nested folders have their own pages.',
        'This directory exists in the source repository but has no files of its own. Nested folders are documented in their own wiki pages, not here.',
      ].includes(normalize(textOf(node))),
  );
  const firstProse = paragraphs.find((node) => !generatedDate(node));
  return {
    kind,
    repo: marker?.repo ?? null,
    directory: kind === 'directory' ? marker!.directory : null,
    title,
    descriptionMarkdown:
      kind === 'directory'
        ? directoryIntro.map((node) => sourceOf(raw, node)).join('\n\n')
        : firstProse
          ? sourceOf(raw, firstProse)
          : '',
    sourceUrl: sourceLink ? safeWebUrl(sourceLink.url) : null,
    files: kind === 'directory' ? parseFiles(tree, raw, marker!.directory) : [],
    directories:
      kind === 'repository'
        ? tree.children.flatMap((node) => directoryTable(node, sourcePath))
        : [],
    generatedAt: marker
      ? (tree.children.map(generatedDate).find(Boolean) ?? null)
      : null,
  };
}

interface IndexedPage {
  page: WikiPage;
  parsed: ParsedArticle;
}
interface ArticleIndex {
  pages: Map<string, IndexedPage>;
  directories: Map<string, Map<string, IndexedPage>>;
}

const indexes = new WeakMap<Wiki, ArticleIndex>();

function indexWiki(wiki: Wiki): ArticleIndex {
  const existing = indexes.get(wiki);
  if (existing) return existing;
  const index: ArticleIndex = { pages: new Map(), directories: new Map() };
  for (const page of wiki.pages) {
    const parsed = parseArticle(page.raw, page.sourcePath);
    const entry = { page, parsed };
    index.pages.set(page.sourcePath, entry);
    if (parsed.kind === 'directory' && parsed.repo && parsed.directory) {
      const repo =
        index.directories.get(parsed.repo) ?? new Map<string, IndexedPage>();
      repo.set(parsed.directory, entry);
      index.directories.set(parsed.repo, repo);
    }
  }
  indexes.set(wiki, index);
  return index;
}

function directoryParent(directory: string): string | null {
  return directory === '.' ? null : path.posix.dirname(directory);
}

function articleLink(entry: IndexedPage): ArticleLink {
  const directory = entry.parsed.directory!;
  return {
    label:
      directory === '.' ? 'Repository files' : path.posix.basename(directory),
    href: entry.page.href,
    directory,
    fileCount: entry.parsed.files.length,
  };
}

function displayDirectory(directory: string): string {
  if (directory === '.') return 'Repository files';
  const basename = path.posix.basename(directory);
  if (basename === 'src') return 'Source';
  if (basename.startsWith('.')) return basename;
  const words = basename.replace(/[-_]/g, ' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function countBy(files: ArticleFile[], key: 'language' | 'kind') {
  const counts = new Map<string, number>();
  for (const file of files) {
    const name = file[key];
    if (name) counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  return [...counts]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/** Build the reading model once from parsed source facts, using only existing pages for navigation. */
export function buildArticle(page: WikiPage, wiki: Wiki): ArticleModel {
  const index = indexWiki(wiki);
  const parsed =
    index.pages.get(page.sourcePath)?.parsed ??
    parseArticle(page.raw, page.sourcePath);
  const repository =
    wiki.repos.find((repo) => repo.name === parsed.repo) ?? null;
  const folders =
    index.directories.get(parsed.repo ?? '') ?? new Map<string, IndexedPage>();
  const directory = parsed.directory;
  const parentDirectory = directory ? directoryParent(directory) : null;
  const parentEntry = parentDirectory
    ? folders.get(parentDirectory)
    : undefined;
  const sortedFolders = [...folders.values()].sort((a, b) =>
    a.parsed.directory!.localeCompare(b.parsed.directory!, 'en'),
  );
  const children = sortedFolders
    .filter((entry) =>
      parsed.kind === 'repository'
        ? entry.parsed.directory === '.' ||
          directoryParent(entry.parsed.directory!) === '.'
        : directoryParent(entry.parsed.directory!) === directory,
    )
    .map(articleLink);
  const siblings = directory
    ? sortedFolders
        .filter(
          (entry) =>
            entry.parsed.directory !== directory &&
            directoryParent(entry.parsed.directory!) === parentDirectory,
        )
        .map(articleLink)
    : [];
  const breadcrumbs: ArticleModel['breadcrumbs'] = [
    { label: 'Main page', href: '/' },
  ];
  if (repository)
    breadcrumbs.push({
      label: repository.name,
      href: parsed.kind === 'repository' ? null : repository.href,
    });
  if (directory === '.')
    breadcrumbs.push({ label: 'Repository files', href: null });
  else if (directory) {
    const parts = directory.split('/');
    for (let position = 0; position < parts.length; position++) {
      const folder = parts.slice(0, position + 1).join('/');
      const ancestor = folders.get(folder);
      breadcrumbs.push({
        label: parts[position],
        href: folder === directory ? null : (ancestor?.page.href ?? null),
      });
    }
  }
  const allFiles =
    parsed.kind === 'repository'
      ? sortedFolders.flatMap((entry) => entry.parsed.files)
      : parsed.files;
  const stats = {
    fileCount: allFiles.length,
    totalBytes: allFiles.reduce((sum, file) => sum + (file.bytes ?? 0), 0),
    knownSizeFiles: allFiles.filter((file) => file.bytes !== null).length,
    languages: countBy(allFiles, 'language'),
    kinds: countBy(allFiles, 'kind'),
  };
  let context: ArticleModel['context'] = null;
  let contextDirectory = directory;
  while (contextDirectory) {
    const entry = folders.get(contextDirectory);
    const readme = entry?.parsed.files.find(
      (file) =>
        /^readme(?:\.(?:md|mdx|rst|txt))?$/i.test(file.name) &&
        file.summaryMarkdown,
    );
    if (entry && readme) {
      const label = readme.summaryMarkdown.match(
        /^The project README(?:\s+\(“([^”]+)”\))?\.\s*/,
      );
      context = {
        title: label?.[1] ?? readme.sourcePath,
        summaryMarkdown: readme.summaryMarkdown,
        bodyMarkdown: label
          ? readme.summaryMarkdown.slice(label[0].length)
          : readme.summaryMarkdown,
        href: `${entry.page.href}#${readme.id}`,
      };
      break;
    }
    contextDirectory = directoryParent(contextDirectory);
  }
  const fileNoun = stats.fileCount === 1 ? 'file' : 'files';
  const directoryLabel =
    directory === '.' ? 'repository root' : `${directory} directory`;
  const lead =
    parsed.kind === 'directory'
      ? `The ${directoryLabel} in ${parsed.repo} ${stats.fileCount ? `contains ${stats.fileCount} documented ${fileNoun}` : 'has no files directly inside it'}.${children.length ? ` ${children.length} ${children.length === 1 ? 'subdirectory has its' : 'subdirectories have their'} own ${children.length === 1 ? 'article' : 'articles'}.` : ''}`
      : parsed.kind === 'repository'
        ? (repository?.description ??
          normalize(textOf(markdown.parse(parsed.descriptionMarkdown))))
        : page.description;
  return {
    ...parsed,
    directories: parsed.directories.map((row) => ({
      ...row,
      href: row.wikiSourcePath
        ? (index.pages.get(row.wikiSourcePath)?.page.href ?? null)
        : row.href,
    })),
    displayTitle: directory ? displayDirectory(directory) : parsed.title,
    sourceUrl:
      parsed.sourceUrl ??
      (parsed.kind === 'repository' ? (repository?.htmlUrl ?? null) : null),
    lead,
    repository,
    breadcrumbs,
    parent: parentEntry ? articleLink(parentEntry) : null,
    children,
    siblings,
    context,
    stats,
  };
}
