<!-- quirq-wiki-generated repo=innernet dir=lib -->

# innernet / lib

Source: [lib](https://github.com/quirq-ai/innernet/tree/main/lib) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### data.ts

Loads data/index.json once and reloads it when the file changes, so `pnpm index` takes
effect without restarting the server. Notable exports: `getIndex`, `getPage`, `getPages`,
`ancestors`, `resolveSlug`, `randomArticle`, `Loaded`, `Resolved`.

[`lib/data.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/data.ts) · code · 5369 bytes

### format.ts

Formatting helpers shared by server and client components. Notable exports: `longDate`,
`monthYear`, `shortMonth`, `timeAgo`, `bytes`, `plural`, `num`.

[`lib/format.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/format.ts) · code · 2075 bytes

### lang-colors.ts

Language colours, close to GitHub's so they read instantly. Used for result dots, the
article language bar and statistics. Notable exports: `langColor`.

[`lib/lang-colors.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/lang-colors.ts) · code · 913 bytes

### links.ts

URL builders. Slugs can hold spaces, parentheses, commas and other characters, so every link
goes through here. Notable exports: `wikiHref`, `categoryHref`, `searchHref`, `vscodeHref`.

[`lib/links.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/links.ts) · code · 818 bytes

### normalize.ts

One pass that brings an index up to the current rules, shared by the indexer (before it
writes) and the server (when it loads an index written by an older indexer). It only does
what needs no disk: credentials redacted, text in house style, summaries re-picked, dates in
UTC and rolled up the tree, categories completed. Idempotent. No imports beyond lib/text, so
the indexer can use it outside Next.

[`lib/normalize.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/normalize.ts) · code · 5455 bytes

### search.ts

Server-side full-text search over the index. The engine is rebuilt only when the index file
changes. Notable exports: `pageSummary`, `parseQuery`, `search`, `suggest`, `displayPath`,
`fallbackDescription`, `Tab`, `TABS`, and 5 more.

[`lib/search.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/search.ts) · code · 16589 bytes

### text.ts

Text clean-up shared by the indexer (scripts/build-index.ts) and the server. Plain functions
with no imports, so the indexer can use them outside Next. Notable exports: `tidyGaps`,
`undash`, `markdownToText`, `isLinkRow`, `clip`, `dropLeadIn`, `firstParagraph`,
`readsAsInstructions`, and 3 more.

[`lib/text.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/text.ts) · code · 9358 bytes

### types.ts

The index contract. Written by scripts/build-index.ts, read by lib/data.ts. Everything here
is plain JSON so the index can be inspected by hand. Notable exports: `PageKind`, `Commit`,
`GitInfo`, `Manifest`, `Page`, `IndexMeta`, `SiteIndex`.

[`lib/types.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/types.ts) · code · 4444 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
