<!-- quirq-wiki-generated repo=innernet dir=components/wiki/main -->

# innernet / components/wiki/main

Source: [components/wiki/main](https://github.com/quirq-ai/innernet/tree/main/components/wiki/main) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### browse.tsx

/** A category link with its count set against a dotted leader, like a book's index. */
export function IndexEntry({ c, label }: { c: CategoryInfo; label?: string }) { return (
Notable exports: `IndexEntry`, `BrowseByCategory`, `OtherAreas`. Wired into a Next.js app
(App Router or Next APIs).

[`components/wiki/main/browse.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wiki/main/browse.tsx) · code · 3772 bytes

### did-you-know.tsx

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
"nine", "ten", "eleven", "twelve"]; const word = (n: number) => WORDS[n] ?? num(n) Notable
exports: `DidYouKnow`. Wired into a Next.js app (App Router or Next APIs).

[`components/wiki/main/did-you-know.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wiki/main/did-you-know.tsx) · code · 4244 bytes

### featured.tsx

const WORDS = 80 Notable exports: `FeaturedArticle`. Wired into a Next.js app (App Router or
Next APIs).

[`components/wiki/main/featured.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wiki/main/featured.tsx) · code · 2471 bytes

### in-the-news.tsx

const DAY = 86_400_000; const clip = (s: string, n = 64) => (s.length was started
{timeAgo(page.created)}. Notable exports: `InTheNews`.

[`components/wiki/main/in-the-news.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wiki/main/in-the-news.tsx) · code · 3039 bytes

### insights.ts

Everything the Main page, Category pages and Special pages compute from the index. Results
are memoised per index version, so a rebuilt index refreshes them. Notable exports:
`indexTime`, `gloss`, `splitTitle`, `containers`, `workspaces`, `categoryInfo`,
`allCategories`, `subcollections`, and 24 more.

[`components/wiki/main/insights.ts`](https://github.com/quirq-ai/innernet/blob/main/components/wiki/main/insights.ts) · code · 22343 bytes

### letter-columns.tsx

Pages under letter headings, set in balanced columns the way a printed index is. The split
is worked out here rather than by CSS columns, so a letter that runs over into the next
column can carry a "continued" heading. Roomy (three columns) for Category pages, dense
(four) for Special:AllPages. On a phone it is one column and the continuations simply flow
on. Notable exports: `LetterColumns`. Wired into a Next.js app (App Router or Next APIs).

[`components/wiki/main/letter-columns.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wiki/main/letter-columns.tsx) · code · 6105 bytes

### on-this-day.tsx

const ago = (n: number) => (n === 1 ? "a year ago" : ${plural(n, "year")} ago); const clip =
(s: string, n = 70) => (s.length {otd.type === "commits" && ( Notable exports: `OnThisDay`.

[`components/wiki/main/on-this-day.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wiki/main/on-this-day.tsx) · code · 3561 bytes

### section.tsx

Small building blocks shared by the Main page, Category pages and Special pages. Notable
exports: `Box`, `PageTitle`, `SectionHeading`, `Title`, `Lead`, `PageLink`, `joinNodes`,
`Dotted`. Wired into a Next.js app (App Router or Next APIs).

[`components/wiki/main/section.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wiki/main/section.tsx) · code · 4058 bytes

### statistics.tsx

Special:Statistics. A small, handsome table page: the headline counts, what the files are
written in, when the work happened, and the biggest and busiest things. Notable exports:
`StatisticsView`. Wired into a Next.js app (App Router or Next APIs).

[`components/wiki/main/statistics.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wiki/main/statistics.tsx) · code · 15880 bytes

### welcome.tsx

The welcome banner: the Innerpedia globe, the greeting, live counts, and portals into the
largest collections and languages. Notable exports: `Welcome`. Wired into a Next.js app (App
Router or Next APIs).

[`components/wiki/main/welcome.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wiki/main/welcome.tsx) · code · 7681 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
