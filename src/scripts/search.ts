/** Pagefind loads only when a reader searches; regular article pages stay lightweight. */
interface ArticleSummary {
  href: string;
  title: string;
  description?: string;
}

interface SearchData {
  url: string;
  excerpt?: string;
  meta?: { title?: string; description?: string };
}

interface SearchResult {
  data: () => Promise<SearchData>;
}

interface Pagefind {
  search: (query: string) => Promise<{ results: SearchResult[] } | null>;
}

const resultsElement = document.getElementById('search-results');
const statusElement = document.getElementById('search-status');
const moreButton = document.getElementById('search-more');
const pageSize = 10;
let searchVersion = 0;
let allResults: SearchResult[] = [];
let shown = 0;
let currentQuery = '';
let fallbackMode = false;
let loading = false;
let pagefindPromise: Promise<Pagefind | null> | undefined;
let directoryPromise: Promise<ArticleSummary[]> | undefined;

function setStatus(message: string) {
  if (statusElement) statusElement.textContent = message;
}

function setBusy(busy: boolean) {
  loading = busy;
  resultsElement?.setAttribute('aria-busy', String(busy));
  if (moreButton instanceof HTMLButtonElement) moreButton.disabled = busy;
}

async function loadPagefind(): Promise<Pagefind | null> {
  pagefindPromise ??= (async () => {
    try {
      // Pagefind is generated after Astro's build and intentionally absent from Vite's graph.
      const path = '/pagefind/pagefind.js';
      const pagefind = (await import(/* @vite-ignore */ path)) as Pagefind;
      return typeof pagefind.search === 'function' ? pagefind : null;
    } catch {
      return null;
    }
  })();
  return pagefindPromise;
}

async function loadDirectory(): Promise<ArticleSummary[]> {
  directoryPromise ??= fetch('/articles.json')
    .then(async (response) => {
      if (!response.ok) throw new Error('Article directory unavailable');
      const data: unknown = await response.json();
      if (!Array.isArray(data)) throw new Error('Invalid article directory');
      return data.filter((item): item is ArticleSummary =>
        Boolean(
          item &&
          typeof item === 'object' &&
          typeof item.href === 'string' &&
          typeof item.title === 'string',
        ),
      );
    })
    .catch((error: unknown) => {
      directoryPromise = undefined;
      throw error;
    });
  return directoryPromise;
}

function normalize(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase();
}

async function searchDirectory(query: string): Promise<SearchResult[]> {
  const directory = await loadDirectory();
  const normalizedQuery = normalize(query);
  const terms = normalizedQuery.match(/[\p{L}\p{N}_-]+/gu) ?? [normalizedQuery];
  return directory
    .map((article) => {
      const title = normalize(article.title);
      const description =
        typeof article.description === 'string' ? article.description : '';
      const text = `${title} ${normalize(description)}`;
      if (!terms.every((term) => text.includes(term))) return null;
      const score =
        (title === normalizedQuery
          ? 100
          : title.startsWith(normalizedQuery)
            ? 60
            : title.includes(normalizedQuery)
              ? 40
              : 0) +
        terms.filter((term) => title.includes(term)).length * 8;
      return { article, description, score };
    })
    .filter((match): match is NonNullable<typeof match> => match !== null)
    .sort(
      (a, b) =>
        b.score - a.score || a.article.title.localeCompare(b.article.title),
    )
    .map(({ article, description }) => ({
      data: async () => ({
        url: article.href,
        meta: { title: article.title, description },
      }),
    }));
}

/** Retain Pagefind's match highlighting while allowing no other HTML into the page. */
function excerptFragment(excerpt: string): DocumentFragment {
  const template = document.createElement('template');
  template.innerHTML = excerpt;
  const fragment = document.createDocumentFragment();
  const appendSafe = (source: Node, target: Node) => {
    if (source.nodeType === Node.TEXT_NODE) {
      target.appendChild(document.createTextNode(source.textContent ?? ''));
      return;
    }
    if (!(source instanceof Element)) return;
    if (['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT'].includes(source.tagName))
      return;
    const parent =
      source.tagName === 'MARK' ? document.createElement('mark') : target;
    source.childNodes.forEach((child) => appendSafe(child, parent));
    if (parent !== target) target.appendChild(parent);
  };
  template.content.childNodes.forEach((node) => appendSafe(node, fragment));
  return fragment;
}

function renderResult(data: SearchData): HTMLElement | null {
  let url: URL;
  try {
    url = new URL(data.url, window.location.origin);
  } catch {
    return null;
  }
  if (url.origin !== window.location.origin) return null;
  const article = document.createElement('article');
  article.className = 'search-result';
  const heading = document.createElement('h2');
  heading.className = 'search-result-title';
  const link = document.createElement('a');
  link.href = url.pathname + url.search + url.hash;
  link.textContent = data.meta?.title || url.pathname;
  heading.append(link);
  const path = document.createElement('div');
  path.className = 'search-result-path';
  try {
    path.textContent = decodeURIComponent(url.pathname)
      .split('/')
      .filter(Boolean)
      .join(' › ');
  } catch {
    path.textContent = url.pathname;
  }
  const excerpt = document.createElement('p');
  excerpt.className = 'search-result-excerpt';
  if (data.excerpt) excerpt.append(excerptFragment(data.excerpt));
  else excerpt.textContent = data.meta?.description ?? '';
  article.append(heading, path, excerpt);
  return article;
}

function resultStatus(): string {
  const count = allResults.length;
  const preview = fallbackMode
    ? ' Preview search: article titles and summaries only. The full-text index is unavailable.'
    : '';
  if (!count)
    return `No results for “${currentQuery}”. Try a different word or a shorter phrase.${preview}`;
  return `Showing ${Math.min(shown, count)} of ${count.toLocaleString()} ${count === 1 ? 'result' : 'results'} for “${currentQuery}”.${preview}`;
}

async function showMore(version: number, focusNewResults = false) {
  if (!resultsElement || loading || version !== searchVersion) return;
  setBusy(true);
  const batch = allResults.slice(shown, shown + pageSize);
  try {
    const data = await Promise.allSettled(batch.map((result) => result.data()));
    if (version !== searchVersion) return;
    const fragment = document.createDocumentFragment();
    let failures = 0;
    data.forEach((result) => {
      if (result.status === 'fulfilled') {
        const item = renderResult(result.value);
        if (item) fragment.append(item);
        else failures++;
      } else failures++;
    });
    const firstNewLink = fragment.querySelector<HTMLAnchorElement>('a');
    resultsElement.append(fragment);
    shown += batch.length;
    if (moreButton) moreButton.hidden = shown >= allResults.length;
    setStatus(
      resultStatus() +
        (failures
          ? ' Some results could not load. Please try searching again.'
          : ''),
    );
    if (focusNewResults) firstNewLink?.focus();
  } finally {
    if (version === searchVersion) setBusy(false);
  }
}

async function performSearch(query: string) {
  if (!resultsElement) return;
  const version = ++searchVersion;
  currentQuery = query.trim().slice(0, 500);
  shown = 0;
  allResults = [];
  resultsElement.replaceChildren();
  if (moreButton) moreButton.hidden = true;
  document
    .querySelectorAll<HTMLInputElement>(
      'form[data-search-form] input[name="q"], #wiki-search',
    )
    .forEach((input) => {
      input.value = currentQuery;
    });
  if (!currentQuery) {
    setBusy(false);
    setStatus('Enter a word or phrase to search the wiki.');
    return;
  }
  setBusy(true);
  setStatus(`Searching for “${currentQuery}”…`);
  const term = currentQuery;
  try {
    const pagefind = await loadPagefind();
    if (version !== searchVersion) return;
    fallbackMode = !pagefind;
    const results = pagefind
      ? ((await pagefind.search(term))?.results ?? [])
      : await searchDirectory(term);
    if (version !== searchVersion) return;
    allResults = results;
    setBusy(false);
    if (!allResults.length) setStatus(resultStatus());
    else await showMore(version);
  } catch {
    if (version !== searchVersion) return;
    setStatus(
      'Search could not load. Please check your connection and try again.',
    );
    setBusy(false);
  }
}

document
  .querySelectorAll<HTMLFormElement>('form[data-search-form]')
  .forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = String(new FormData(form).get('q') ?? '').trim();
      const url = new URL(window.location.href);
      if (query) url.searchParams.set('q', query);
      else url.searchParams.delete('q');
      url.hash = '';
      if (url.href !== window.location.href) history.pushState({}, '', url);
      void performSearch(query);
    });
  });

moreButton?.addEventListener('click', () => {
  void showMore(searchVersion, true);
});
window.addEventListener('popstate', () => {
  void performSearch(
    new URLSearchParams(window.location.search).get('q') ?? '',
  );
});
void performSearch(new URLSearchParams(window.location.search).get('q') ?? '');

export {};
