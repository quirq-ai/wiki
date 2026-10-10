<!-- quirq-wiki-generated repo=euler dir=app/innernet/lib -->

# euler / app/innernet/lib

Source: [app/innernet/lib](https://github.com/quirq-ai/euler/tree/main/app/innernet/lib) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### activity.ts

The activity history: plain folders and JSON Lines files, no index. The folders are the
record and the format every app shares; the database keeps a copy of their lines, read in as
they change (lib/db/ingest.ts).

[`app/innernet/lib/activity.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/activity.ts) · code · 6889 bytes

### base-path.ts

Next Link, router navigation and redirect() add basePath themselves. Browser fetches, native
forms, media and raw Location headers need it explicitly. Notable exports: `appPath`,
`BASE_PATH`.

[`app/innernet/lib/base-path.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/base-path.ts) · code · 575 bytes

### data.ts

Loads data/index.json once and reloads it when the file changes, so `pnpm index` takes
effect without restarting the server. The demo (lib/mode.ts) reads the committed
data/demo/index.json instead; next.config.ts ships that one file with every server function,
and never the local index. The database (lib/db) keeps a copy, and the file stays the
source.

[`app/innernet/lib/data.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/data.ts) · code · 7667 bytes

### demo-check.ts

Is this index fit for the public demo? The same leak checks scripts/build-demo-index.ts
applies before it writes data/demo/index.json, for an index that arrives another way: `pnpm
db:store --demo` runs them before anything reaches Neon, `pnpm db:load --demo` before Neon's
copy is written to the committed file, and the demo's server before it serves an index read
from Neon.

[`app/innernet/lib/demo-check.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/demo-check.ts) · code · 4519 bytes

### format.ts

Formatting helpers shared by server and client components. Notable exports: `longDate`,
`monthYear`, `shortMonth`, `timeAgo`, `bytes`, `plural`, `num`.

[`app/innernet/lib/format.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/format.ts) · code · 2075 bytes

### lang-colors.ts

Language colours, close to GitHub's so they read instantly. Used for result dots, the
article language bar and statistics. Notable exports: `langColor`.

[`app/innernet/lib/lang-colors.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/lang-colors.ts) · code · 913 bytes

### links.ts

URL builders. Slugs can hold spaces, parentheses, commas and other characters, so every link
goes through here. Notable exports: `wikiHref`, `categoryHref`, `searchHref`, `vscodeHref`,
`isRemote`, `sourceHref`, `sourceLabel`.

[`app/innernet/lib/links.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/links.ts) · code · 1257 bytes

### logo.ts

Where a page's logo is drawn from. The index keeps each logo as a data URI (Page.logo), but
inlining it would put every logo in a page twice, once in the HTML and once in React's
payload, and a globe of ninety tiles carries a lot of them. So pages point at /api/logo/<id>
instead (app/api/logo/[id]/route.ts): the id is a hash of the logo itself, so the same logo
has one address however many projects share it, and the browser can keep it for good.

[`app/innernet/lib/logo.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/logo.ts) · code · 2602 bytes

### mode.ts

Two ways to run Innernet. Local (the default): the index of this machine's folders, served
only to localhost. Demo: a public index of the open-source repositories of github.com/quirq-
ai, built by `pnpm index:demo` into data/demo/index.json and committed, so it can run
anywhere. Vercel always runs the demo (it sets VERCEL=1); INNERNET_DEMO=1 previews it
locally.

[`app/innernet/lib/mode.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/mode.ts) · code · 1410 bytes

### normalize.ts

One pass that brings an index up to the current rules, shared by the indexer (before it
writes) and the server (when it loads an index written by an older indexer). It only does
what needs no disk: credentials redacted, text in house style, summaries re-picked, logos
checked, dates in UTC and rolled up the tree, categories completed. Idempotent. No imports
beyond lib/text, so the indexer can use it outside Next.

[`app/innernet/lib/normalize.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/normalize.ts) · code · 6222 bytes

### project-root.ts

A host such as Quirq may serve multiple apps from one process. It sets this runtime-only
path instead of changing the working directory for every request. Notable exports:
`PROJECT_ROOT`.

[`app/innernet/lib/project-root.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/project-root.ts) · code · 335 bytes

### same-origin.ts

The two checks every route a page of Innernet's own calls makes before it reads a body: the
request came from one of this app's pages, and it is small. Same origin means the Origin
header names the very host the request was sent to, and Sec-Fetch-Site, which browsers set
and pages cannot, says "same-origin" whenever it is there. On this machine the host must
also be localhost (proxy.ts refuses the rest before this runs).

[`app/innernet/lib/same-origin.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/same-origin.ts) · code · 2293 bytes

### search.ts

Server-side full-text search over the index. The engine is rebuilt only when the index file
changes. Notable exports: `pageSummary`, `parseQuery`, `search`, `suggest`, `displayPath`,
`fallbackDescription`, `Tab`, `TABS`, and 5 more.

[`app/innernet/lib/search.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/search.ts) · code · 16816 bytes

### text.ts

Text clean-up shared by the indexer (scripts/build-index.ts) and the server. Plain functions
with no imports, so the indexer can use them outside Next. Notable exports: `tidyGaps`,
`undash`, `markdownToText`, `isLinkRow`, `clip`, `dropLeadIn`, `firstParagraph`,
`readsAsInstructions`, and 3 more.

[`app/innernet/lib/text.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/text.ts) · code · 9358 bytes

### types.ts

The index contract. Written by scripts/build-index.ts, read by lib/data.ts. Everything here
is plain JSON so the index can be inspected by hand. Notable exports: `PageKind`, `Commit`,
`GitInfo`, `Manifest`, `Page`, `LogoSurface`, `IndexMeta`, `SiteIndex`.

[`app/innernet/lib/types.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/lib/types.ts) · code · 5471 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
