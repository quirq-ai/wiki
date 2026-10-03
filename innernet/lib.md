<!-- quirq-wiki-generated repo=innernet dir=lib -->

# innernet / lib

Source: [lib](https://github.com/quirq-ai/innernet/tree/main/lib) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### activity.ts

The activity history: plain folders and JSON Lines files, no index. The folders are the
record and the format every app shares; the database keeps a copy of their lines, read in as
they change (lib/db/ingest.ts).

[`lib/activity.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/activity.ts) · code · 6889 bytes

### data.ts

Loads data/index.json once and reloads it when the file changes, so `pnpm index` takes
effect without restarting the server. The demo (lib/mode.ts) reads the committed
data/demo/index.json instead; next.config.ts ships that one file with every server function,
and never the local index. The database (lib/db) keeps a copy, and the file stays the
source.

[`lib/data.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/data.ts) · code · 7622 bytes

### demo-check.ts

Is this index fit for the public demo? The same leak checks scripts/build-demo-index.ts
applies before it writes data/demo/index.json, for an index that arrives another way: `pnpm
db:store --demo` runs them before anything reaches Neon, `pnpm db:load --demo` before Neon's
copy is written to the committed file, and the demo's server before it serves an index read
from Neon.

[`lib/demo-check.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/demo-check.ts) · code · 4519 bytes

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
goes through here. Notable exports: `wikiHref`, `categoryHref`, `searchHref`, `vscodeHref`,
`isRemote`, `sourceHref`, `sourceLabel`.

[`lib/links.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/links.ts) · code · 1257 bytes

### logo.ts

Where a page's logo is drawn from. The index keeps each logo as a data URI (Page.logo), but
inlining it would put every logo in a page twice, once in the HTML and once in React's
payload, and a globe of ninety tiles carries a lot of them. So pages point at /api/logo/<id>
instead (app/api/logo/[id]/route.ts): the id is a hash of the logo itself, so the same logo
has one address however many projects share it, and the browser can keep it for good.

[`lib/logo.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/logo.ts) · code · 2554 bytes

### mode.ts

Two ways to run Innernet. Local (the default): the index of this machine's folders, served
only to localhost. Demo: a public index of the open-source repositories of github.com/quirq-
ai, built by `pnpm index:demo` into data/demo/index.json and committed, so it can run
anywhere. Vercel always runs the demo (it sets VERCEL=1); INNERNET_DEMO=1 previews it
locally.

[`lib/mode.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/mode.ts) · code · 1410 bytes

### normalize.ts

One pass that brings an index up to the current rules, shared by the indexer (before it
writes) and the server (when it loads an index written by an older indexer). It only does
what needs no disk: credentials redacted, text in house style, summaries re-picked, logos
checked, dates in UTC and rolled up the tree, categories completed. Idempotent. No imports
beyond lib/text, so the indexer can use it outside Next.

[`lib/normalize.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/normalize.ts) · code · 6222 bytes

### same-origin.ts

The two checks every route a page of Innernet's own calls makes before it reads a body: the
request came from one of this app's pages, and it is small. Same origin means the Origin
header names the very host the request was sent to, and Sec-Fetch-Site, which browsers set
and pages cannot, says "same-origin" whenever it is there. On this machine the host must
also be localhost (proxy.ts refuses the rest before this runs).

[`lib/same-origin.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/same-origin.ts) · code · 2293 bytes

### search.ts

Server-side full-text search over the index. The engine is rebuilt only when the index file
changes. Notable exports: `pageSummary`, `parseQuery`, `search`, `suggest`, `displayPath`,
`fallbackDescription`, `Tab`, `TABS`, and 5 more.

[`lib/search.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/search.ts) · code · 16816 bytes

### text.ts

Text clean-up shared by the indexer (scripts/build-index.ts) and the server. Plain functions
with no imports, so the indexer can use them outside Next. Notable exports: `tidyGaps`,
`undash`, `markdownToText`, `isLinkRow`, `clip`, `dropLeadIn`, `firstParagraph`,
`readsAsInstructions`, and 3 more.

[`lib/text.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/text.ts) · code · 9358 bytes

### types.ts

The index contract. Written by scripts/build-index.ts, read by lib/data.ts. Everything here
is plain JSON so the index can be inspected by hand. Notable exports: `PageKind`, `Commit`,
`GitInfo`, `Manifest`, `Page`, `LogoSurface`, `IndexMeta`, `SiteIndex`.

[`lib/types.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/types.ts) · code · 5471 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
