<!-- quirq-wiki-generated repo=euler dir=app/innernet/components/search -->

# euler / app/innernet/components/search

Source: [app/innernet/components/search](https://github.com/quirq-ai/euler/tree/main/app/innernet/components/search) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### empty-tab.tsx

The query found things, just none of this kind. Saying "nothing matches" would be untrue, so
point at the tabs that do have results instead. Notable exports: `EmptyTab`. Wired into a
Next.js app (App Router or Next APIs).

[`app/innernet/components/search/empty-tab.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/empty-tab.tsx) · code · 1813 bytes

### knowledge-panel.tsx

The card beside the results when one article clearly answers the query: who it is, what it
is made of, and where it lives, with the way into Innerpedia. Notable exports:
`KnowledgePanel`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/search/knowledge-panel.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/knowledge-panel.tsx) · code · 6682 bytes

### no-results.tsx

When nothing matches: say so kindly, offer a spelling if there is one, and three ways
forward. Notable exports: `NoResults`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/search/no-results.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/no-results.tsx) · code · 4000 bytes

### operator-chips.tsx

Operators in the query (lang:rust, in:experiments...) shown as removable chips. Each chip is
a link to the same search without it; removing the last one with no words left goes home.
Notable exports: `OperatorChips`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/search/operator-chips.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/operator-chips.tsx) · code · 2229 bytes

### pagination.tsx

"I n n n e r n e t": the wordmark stretched by one n per page, the way a certain other
search engine grows its o's. Current page in ink, the rest in link blue. Notable exports:
`Pagination`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/search/pagination.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/pagination.tsx) · code · 3841 bytes

### query-text.tsx

/** A query as typed, with operators such as lang:rust set in mono. */ export function
QueryText({ q, opClassName = "font-mono text-[0.82em] not-italic" }: { q: string;
opClassName?: string }) { return ( {tokens(q).map((t, i) => t.op ? ( Notable exports:
`QueryText`.

[`app/innernet/components/search/query-text.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/query-text.tsx) · code · 479 bytes

### query-tools.ts

Small server-side helpers for the results page: operator editing, the kind line, breadcrumbs
and related searches. Spelling suggestions and the knowledge-panel pick live in lib/search,
so every consumer of search() gets them. Notable exports: `withoutOperator`,
`withoutOperators`, `tokens`, `primaryLanguage`, `kindLabel`, `kindLine`, `crumbs`,
`tailCrumbs`, and 6 more.

[`app/innernet/components/search/query-tools.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/query-tools.ts) · code · 7585 bytes

### related-searches.tsx

"Searches related to linear": narrower searches built from what the top hits are made of,
with the part we added in bold and how many results each would find. Notable exports:
`RelatedSearches`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/search/related-searches.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/related-searches.tsx) · code · 2104 bytes

### result-item.tsx

One result, laid out the way the web taught us to read them: the source (sigil, what it is,
where it lives) over a blue title, a snippet with the matched words marked, then a quiet
line of facts. The source line names the kind rather than the folder, so the name is not
said twice in a row. Notable exports: `ResultItem`. Wired into a Next.js app (App Router or
Next APIs).

[`app/innernet/components/search/result-item.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/result-item.tsx) · code · 5331 bytes

### result-tabs.tsx

All · Projects · Repositories · Documents · Folders. Switching tabs keeps the query and
starts again at page one. Notable exports: `ResultTabs`. Wired into a Next.js app (App
Router or Next APIs).

[`app/innernet/components/search/result-tabs.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/result-tabs.tsx) · code · 1687 bytes

### snippet.tsx

/** Snippet text with the matched runs wrapped in . Plain React text, never HTML. */ export
function Snippet({ segments }: { segments: Segment[] }) { return <>{segments.map((s, i) =>
(s.hit ? {s.text} : {s.text}))}; } Notable exports: `Snippet`.

[`app/innernet/components/search/snippet.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search/snippet.tsx) · code · 317 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
