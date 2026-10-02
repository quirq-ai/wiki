<!-- quirq-wiki-generated repo=quirq_ai dir=components/research -->

# quirq_ai / components/research

Source: [components/research](https://github.com/quirq-ai/quirq_ai/tree/main/components/research) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### banner.tsx

/** * The framed banner for one research note. * A single 16:9 master serves every surface:
the caller owns the aspect box * and the sizes hint, so the optimiser only ever ships the
width that * surface actually paints. The art is lit from inside against pure black, so *
the frame adds no scrim of its own; it only sinks the bottom edge into the * page so a b
Notable exports: `PostBanner`. Wired into a Next.js app (App Router or Next APIs).

[`components/research/banner.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/research/banner.tsx) · code · 1966 bytes

### card.tsx

const pad = (n: number) => String(n).padStart(2, "0") Notable exports: `PostCard`,
`LeadCard`. Wired into a Next.js app (App Router or Next APIs).

[`components/research/card.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/research/card.tsx) · code · 4395 bytes

### index-view.tsx

import { POSTS, TOPICS, postsInTopic, totalReadingMinutes, type IndexView, } from
"@/lib/research"; /** * The one listing surface. The front page, every numbered page, and
every * topic archive render through here from a resolved IndexView, so the three * routes
above it stay thin and cannot drift apart. */ Notable exports: `ResearchIndexView`. Wired
into a Next.js app (App Router or Next APIs).

[`components/research/index-view.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/research/index-view.tsx) · code · 11326 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
