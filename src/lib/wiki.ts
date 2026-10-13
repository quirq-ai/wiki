import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import GithubSlugger from 'github-slugger';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import type { Root as MarkdownRoot, RootContent as MarkdownNode } from 'mdast';
import type { Element, Root as HtmlRoot } from 'hast';
import { richMarkdown } from './rich-markdown';

export interface WikiHeading {
  id: string;
  text: string;
  depth: number;
}

export interface WikiPage {
  slug: string;
  href: string;
  title: string;
  titleId?: string;
  repo: string | null;
  /** Markdown path relative to the wiki repository, including its extension. */
  sourcePath: string;
  raw: string;
  description: string;
  headings: WikiHeading[];
  html: string;
  /** Files documented directly on this page; repository indexes contain the repository total. */
  fileCount: number;
}

export interface WikiRepo {
  name: string;
  description: string;
  language: string | null;
  fork: boolean;
  defaultBranch: string;
  htmlUrl: string;
  pushedAt: string | null;
  sha: string | null;
  pageCount: number;
  fileCount: number;
  href: string;
}

export interface Wiki {
  repos: WikiRepo[];
  pages: WikiPage[];
  generatedAt: string;
  org: string;
  totalFiles: number;
}

interface ManifestRepository {
  name: string;
  fork: boolean;
  default_branch: string;
  html_url: string;
  pushed_at?: string | null;
  sha?: string | null;
}

interface Manifest {
  org: string;
  generated_at: string;
  repos: ManifestRepository[];
}

interface TextNode {
  type?: string;
  value?: string;
  alt?: string | null;
  children?: TextNode[];
}

function plainText(node: TextNode): string {
  if (node.type === 'html') return (node.value ?? '').replace(/<[^>]*>/g, '');
  if (typeof node.value === 'string') return node.value;
  if (typeof node.alt === 'string') return node.alt;
  return node.children?.map(plainText).join('') ?? '';
}

function normalizeText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function slugForSource(sourcePath: string): string {
  if (sourcePath === 'README.md') return 'readme';
  if (sourcePath === 'INDEX.md') return 'index';
  return sourcePath.replace(/\.md$/i, '');
}

function hrefForSlug(slug: string): string {
  return `/wiki/${slug.split('/').map(encodeURIComponent).join('/')}/`;
}

function splitLocalLink(
  href: string,
  sourcePath: string,
): { pathname: string; suffix: string } {
  const suffixStart = href.search(/[?#]/);
  const suffix = suffixStart < 0 ? '' : href.slice(suffixStart);
  let pathname = suffixStart < 0 ? href : href.slice(0, suffixStart);
  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    // Malformed percent escapes remain literal filenames rather than failing the build.
  }
  const resolved = pathname
    ? path.posix.resolve('/', path.posix.dirname(sourcePath), pathname)
    : `/${sourcePath}`;
  return { pathname: resolved.slice(1), suffix };
}

function isExternalOrFragment(href: string): boolean {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href);
}

/** Resolve against the original Markdown location, never against the output route. */
export function resolveWikiLink(
  href: string,
  sourcePath: string,
  pageRoutes: ReadonlyMap<string, string>,
  org = 'quirq-ai',
): string {
  if (!href || isExternalOrFragment(href) || href.startsWith('/wiki/'))
    return href;
  const { pathname, suffix } = splitLocalLink(href, sourcePath);
  const pageRoute = pageRoutes.get(pathname);
  if (pageRoute) return `${pageRoute}${suffix}`;
  const kind = href.split(/[?#]/, 1)[0]?.endsWith('/') ? 'tree' : 'blob';
  const githubPath = pathname.split('/').map(encodeURIComponent).join('/');
  return `https://github.com/${encodeURIComponent(org)}/wiki/${kind}/main/${githubPath}${suffix}`;
}

function resolveImageSource(
  src: string,
  sourcePath: string,
  org: string,
): string {
  if (!src || isExternalOrFragment(src)) return src;
  const { pathname, suffix } = splitLocalLink(src, sourcePath);
  return `https://raw.githubusercontent.com/${encodeURIComponent(org)}/wiki/main/${pathname.split('/').map(encodeURIComponent).join('/')}${suffix}`;
}

function walkElements(
  node: HtmlRoot | Element,
  visitor: (element: Element) => void,
): void {
  for (const child of node.children) {
    if (child.type !== 'element') continue;
    visitor(child);
    walkElements(child, visitor);
  }
}

export interface RenderedMarkdown {
  title: string;
  titleId?: string;
  description: string;
  headings: WikiHeading[];
  html: string;
  fileCount: number;
}

/** Raw HTML is parsed, then sanitized before our own IDs and local URLs are added. */
export async function renderMarkdown(
  raw: string,
  sourcePath: string,
  pageRoutes: ReadonlyMap<string, string> = new Map(),
  org = 'quirq-ai',
  options: { extractTitle?: boolean } = {},
): Promise<RenderedMarkdown> {
  const headings: WikiHeading[] = [];
  let title = slugForSource(sourcePath);
  let titleId: string | undefined;
  let description = '';
  let fileCount = 0;
  let removedTitleOffset: number | undefined;
  let titleSlugReserved = false;
  const slugger = new GithubSlugger();
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(() => (tree: MarkdownRoot) => {
      const titleIndex = tree.children.findIndex(
        (node) => node.type === 'heading' && node.depth === 1,
      );
      if (titleIndex >= 0 && options.extractTitle !== false) {
        const titleNode = tree.children[titleIndex] as MarkdownNode;
        title = normalizeText(plainText(titleNode));
        removedTitleOffset = titleNode.position?.start.offset ?? 0;
        tree.children.splice(titleIndex, 1);
      }
      const intro = tree.children.find((node) => node.type === 'paragraph');
      description = intro ? normalizeText(plainText(intro)) : '';
      // Generated directory pages use one level-three heading per documented source file.
      if (
        /<!-- quirq-wiki-generated repo=\S+ dir=(?!__index__)[^>]+-->/.test(raw)
      ) {
        fileCount = tree.children.filter(
          (node) => node.type === 'heading' && node.depth === 3,
        ).length;
      }
    })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(() => (tree: HtmlRoot) => {
      const anchorTargets = new Map<string, string>();
      walkElements(tree, (element) => {
        const originalId =
          typeof element.properties.id === 'string'
            ? element.properties.id
            : undefined;
        if (/^h[1-6]$/.test(element.tagName)) {
          // The title is displayed by the page layout, but still occupies its original
          // place in GitHub's duplicate-heading sequence, even after earlier headings.
          if (
            !titleSlugReserved &&
            removedTitleOffset !== undefined &&
            (element.position?.start.offset ?? Infinity) > removedTitleOffset
          ) {
            titleId = slugger.slug(title || 'section');
            titleSlugReserved = true;
          }
          const text = normalizeText(plainText(element));
          const id = slugger.slug(text || 'section');
          element.properties.id = id;
          headings.push({ id, text, depth: Number(element.tagName.slice(1)) });
        }
        // Keep the sanitizer's protection against DOM clobbering. Translate local
        // fragments instead of stripping its prefix from user-supplied HTML anchors.
        if (originalId?.startsWith('user-content-')) {
          anchorTargets.set(
            originalId.slice('user-content-'.length),
            String(element.properties.id),
          );
        }
        if (
          typeof element.properties.name === 'string' &&
          element.properties.name.startsWith('user-content-')
        ) {
          anchorTargets.set(
            element.properties.name.slice('user-content-'.length),
            element.properties.name,
          );
        }
      });
      if (!titleSlugReserved && removedTitleOffset !== undefined) {
        titleId = slugger.slug(title || 'section');
        titleSlugReserved = true;
      }
      walkElements(tree, (element) => {
        if (
          element.tagName === 'a' &&
          typeof element.properties.href === 'string'
        ) {
          let href = resolveWikiLink(
            element.properties.href,
            sourcePath,
            pageRoutes,
            org,
          );
          const hashIndex = href.indexOf('#');
          const beforeHash = hashIndex >= 0 ? href.slice(0, hashIndex) : '';
          const currentRoute =
            pageRoutes.get(sourcePath) ??
            hrefForSlug(slugForSource(sourcePath));
          if (
            hashIndex >= 0 &&
            (!beforeHash || beforeHash.split('?')[0] === currentRoute)
          ) {
            let fragment = href.slice(hashIndex + 1);
            try {
              fragment = decodeURIComponent(fragment);
            } catch {
              /* Keep malformed fragments literal. */
            }
            const target = anchorTargets.get(fragment);
            if (target) href = `${beforeHash}#${encodeURIComponent(target)}`;
          }
          element.properties.href = href;
        }
        if (
          element.tagName === 'img' &&
          typeof element.properties.src === 'string'
        ) {
          element.properties.src = resolveImageSource(
            element.properties.src,
            sourcePath,
            org,
          );
          element.properties.loading = 'lazy';
          element.properties.decoding = 'async';
        }
      });
    })
    .use(richMarkdown)
    .use(rehypeStringify);

  const result = await processor.process(raw);
  return {
    title,
    titleId,
    description,
    headings,
    html: String(result),
    fileCount,
  };
}

/** Validate JSON before any metadata is used as a filesystem path, URL, or date. */
export function validateManifest(
  manifest: unknown,
): asserts manifest is Manifest {
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    throw new Error('The wiki manifest must be an object.');
  }
  const value = manifest as Record<string, unknown>;
  if (
    typeof value.org !== 'string' ||
    !/^[a-z\d](?:[a-z\d-]*[a-z\d])?$/i.test(value.org) ||
    !Array.isArray(value.repos)
  ) {
    throw new Error(
      'The wiki manifest must provide an organization and repository list.',
    );
  }
  if (
    typeof value.generated_at !== 'string' ||
    !Number.isFinite(Date.parse(value.generated_at))
  ) {
    throw new Error('The wiki manifest has an invalid snapshot date.');
  }
  const names = new Set<string>();
  for (const item of value.repos) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      throw new Error(
        'The wiki manifest contains an invalid repository entry.',
      );
    }
    const repo = item as Record<string, unknown>;
    if (
      typeof repo.name !== 'string' ||
      !/^[\w.-]+$/.test(repo.name) ||
      repo.name === '.' ||
      repo.name === '..' ||
      names.has(repo.name.toLowerCase())
    ) {
      throw new Error(
        'The wiki manifest contains an invalid or duplicate repository name.',
      );
    }
    names.add(repo.name.toLowerCase());
    const context = `Repository ${repo.name}`;
    if (typeof repo.fork !== 'boolean')
      throw new Error(`${context}: fork must be a boolean.`);
    if (
      typeof repo.default_branch !== 'string' ||
      !repo.default_branch.trim() ||
      /\s/.test(repo.default_branch)
    ) {
      throw new Error(
        `${context}: default_branch must be a nonempty branch name.`,
      );
    }
    let githubUrl: URL;
    try {
      if (typeof repo.html_url !== 'string') throw new Error('Not a string');
      githubUrl = new URL(repo.html_url);
    } catch {
      throw new Error(
        `${context}: html_url must be its HTTPS GitHub repository URL.`,
      );
    }
    if (
      githubUrl.protocol !== 'https:' ||
      githubUrl.hostname !== 'github.com' ||
      githubUrl.port ||
      githubUrl.username ||
      githubUrl.password ||
      githubUrl.search ||
      githubUrl.hash ||
      githubUrl.pathname !== `/${value.org}/${repo.name}`
    ) {
      throw new Error(
        `${context}: html_url must match https://github.com/${value.org}/${repo.name}.`,
      );
    }
    if (
      repo.pushed_at !== undefined &&
      repo.pushed_at !== null &&
      (typeof repo.pushed_at !== 'string' ||
        !Number.isFinite(Date.parse(repo.pushed_at)))
    ) {
      throw new Error(`${context}: pushed_at must be a valid date or null.`);
    }
    if (
      repo.sha !== undefined &&
      repo.sha !== null &&
      (typeof repo.sha !== 'string' ||
        !/^(?:[a-f\d]{40}|[a-f\d]{64})$/i.test(repo.sha))
    ) {
      throw new Error(
        `${context}: sha must be a full hexadecimal commit SHA or null.`,
      );
    }
  }
}

async function loadWiki(): Promise<Wiki> {
  const root = process.cwd();
  const manifest: unknown = JSON.parse(
    await readFile(path.join(root, '.quirq-wiki-manifest.json'), 'utf8'),
  );
  validateManifest(manifest);

  // The generator writes a flat directory of Markdown files. readdir includes dotfiles,
  // unlike typical globs; limiting discovery to the manifest also excludes application code.
  const sourceGroups = await Promise.all(
    manifest.repos.map(async (repo) => {
      const entries = await readdir(path.join(root, repo.name), {
        withFileTypes: true,
      });
      return entries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
        .map((entry) => ({
          sourcePath: `${repo.name}/${entry.name}`,
          repo: repo.name,
        }))
        .sort((a, b) => a.sourcePath.localeCompare(b.sourcePath, 'en'));
    }),
  );
  const sources = [
    { sourcePath: 'README.md', repo: null },
    { sourcePath: 'INDEX.md', repo: null },
    ...sourceGroups.flat(),
  ];
  const pageRoutes = new Map(
    sources.map(({ sourcePath }) => [
      sourcePath,
      hrefForSlug(slugForSource(sourcePath)),
    ]),
  );
  const pages = await Promise.all(
    sources.map(async ({ sourcePath, repo }): Promise<WikiPage> => {
      const raw = await readFile(path.join(root, sourcePath), 'utf8');
      const content = await renderMarkdown(
        raw,
        sourcePath,
        pageRoutes,
        manifest.org,
      );
      const slug = slugForSource(sourcePath);
      return {
        ...content,
        slug,
        href: hrefForSlug(slug),
        repo,
        sourcePath,
        raw,
      };
    }),
  );

  const repos = manifest.repos.map((repository): WikiRepo => {
    const repoPages = pages.filter((page) => page.repo === repository.name);
    const index = repoPages.find(
      (page) => page.sourcePath === `${repository.name}/_index.md`,
    );
    if (!index)
      throw new Error(`Missing repository index: ${repository.name}/_index.md`);
    const fileCount = repoPages.reduce((sum, page) => sum + page.fileCount, 0);
    index.fileCount = fileCount;
    return {
      name: repository.name,
      description: index.description,
      language:
        index.raw
          .match(/^- Primary language \(GitHub\):\s*(.+)$/m)?.[1]
          ?.trim() ?? null,
      fork: repository.fork,
      defaultBranch: repository.default_branch,
      htmlUrl: repository.html_url,
      pushedAt: repository.pushed_at ?? null,
      sha: repository.sha ?? null,
      pageCount: repoPages.length,
      fileCount,
      href: index.href,
    };
  });

  return {
    repos,
    pages,
    generatedAt: manifest.generated_at,
    org: manifest.org,
    totalFiles: repos.reduce((sum, repo) => sum + repo.fileCount, 0),
  };
}

let wikiPromise: Promise<Wiki> | undefined;

/** A single build-time read/render pass is shared by every statically generated route. */
export function getWiki(): Promise<Wiki> {
  wikiPromise ??= loadWiki();
  return wikiPromise;
}

export async function getPage(slug: string): Promise<WikiPage | undefined> {
  return (await getWiki()).pages.find(
    (page) => page.slug === slug.replace(/^\/+|\/+$/g, ''),
  );
}
