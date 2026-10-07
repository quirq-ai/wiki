<!-- quirq-wiki-generated repo=euler dir=app/innernet/components/wiki/main -->

# euler / app/innernet/components/wiki/main

Source: [app/innernet/components/wiki/main](https://github.com/quirq-ai/euler/tree/main/app/innernet/components/wiki/main) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### browse.tsx

/** A category link with its count set against a dotted leader, like a book's index. */
export function IndexEntry({ c, label }: { c: CategoryInfo; label?: string }) { return (
Notable exports: `IndexEntry`, `BrowseByCategory`, `OtherAreas`. Wired into a Next.js app
(App Router or Next APIs).

[`app/innernet/components/wiki/main/browse.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/browse.tsx) · code · 3772 bytes

### did-you-know.tsx

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
"nine", "ten", "eleven", "twelve"]; const word = (n: number) => WORDS[n] ?? num(n) Notable
exports: `DidYouKnow`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/wiki/main/did-you-know.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/did-you-know.tsx) · code · 4431 bytes

### featured.tsx

const WORDS = 80 Notable exports: `FeaturedArticle`. Wired into a Next.js app (App Router or
Next APIs).

[`app/innernet/components/wiki/main/featured.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/featured.tsx) · code · 2777 bytes

### globe.tsx

The Innerpedia globe: one tile per project, laid out on a Fibonacci sphere and turning
slowly in 3D. Everything it shows arrives in its props from the server; it fetches nothing.
Each frame writes only transforms, opacity and stacking order, and the loop sleeps while the
globe is off screen, while the tab is hidden, and (unless someone is turning it by hand)
whenever the reader prefers reduced motion.

[`app/innernet/components/wiki/main/globe.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/globe.tsx) · code · 25992 bytes

### in-the-news.tsx

const DAY = 86_400_000; const clip = (s: string, n = 64) => (s.length was started
{timeAgo(page.created)}. Notable exports: `InTheNews`.

[`app/innernet/components/wiki/main/in-the-news.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/in-the-news.tsx) · code · 3027 bytes

### insights.ts

Everything the Main page, Category pages and Special pages compute from the index. Results
are memoised per index version, so a rebuilt index refreshes them. Notable exports:
`indexTime`, `gloss`, `splitTitle`, `containers`, `workspaces`, `categoryInfo`,
`allCategories`, `subcollections`, and 24 more.

[`app/innernet/components/wiki/main/insights.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/insights.ts) · code · 23399 bytes

### letter-columns.tsx

Pages under letter headings, set in balanced columns the way a printed index is. The split
is worked out here rather than by CSS columns, so a letter that runs over into the next
column can carry a "continued" heading. Roomy (three columns) for Category pages, dense
(four) for Special:AllPages. On a phone it is one column and the continuations simply flow
on. Notable exports: `LetterColumns`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/wiki/main/letter-columns.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/letter-columns.tsx) · code · 6105 bytes

### on-this-day.tsx

const ago = (n: number) => (n === 1 ? "a year ago" : ${plural(n, "year")} ago); const clip =
(s: string, n = 70) => (s.length {otd.type === "commits" && ( Notable exports: `OnThisDay`.

[`app/innernet/components/wiki/main/on-this-day.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/on-this-day.tsx) · code · 3561 bytes

### reveal.tsx

Main page boxes below the globe ease in as they scroll into view. The server renders them
visible; only once this script runs, and only for a box still below the window, is it hidden
to be revealed, so nothing is lost without JavaScript and nothing in view ever blinks.
Reduced motion: everything simply stays put. Notable exports: `Reveal`. Marked `'use
client'` so it runs in the browser.

[`app/innernet/components/wiki/main/reveal.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/reveal.tsx) · code · 1497 bytes

### section.tsx

Small building blocks shared by the Main page, Category pages and Special pages. Notable
exports: `Box`, `PageTitle`, `SectionHeading`, `Title`, `Lead`, `PageLink`, `joinNodes`,
`Dotted`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/wiki/main/section.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/section.tsx) · code · 4058 bytes

### statistics.tsx

Special:Statistics. A small, handsome table page: the headline counts, what the files are
written in, when the work happened, and the biggest and busiest things. Notable exports:
`StatisticsView`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/wiki/main/statistics.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/statistics.tsx) · code · 15973 bytes

### welcome.tsx

The Main page's first screen: the Innerpedia globe, every project a tile you can reach from
here, beside the greeting, the live counts and the portals. The rest of the Main page waits
below the scroll cue. Notable exports: `Welcome`. Wired into a Next.js app (App Router or
Next APIs).

[`app/innernet/components/wiki/main/welcome.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/main/welcome.tsx) · code · 7386 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
