<!-- quirq-wiki-generated repo=instants dir=lib/research -->

# instants / lib/research

Source: [lib/research](https://github.com/quirq-ai/instants/tree/main/lib/research) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### format.ts

Small formatting helpers shared by server and client components. Notable exports:
`relativeDate`, `dateRange`, `compactNumber`, `bytes`, `onAccent`, `topicSlug`.

[`lib/research/format.ts`](https://github.com/quirq-ai/instants/blob/main/lib/research/format.ts) · code · 2178 bytes

### library.ts

Server-only data layer: research records live as JSON files in .research-cache/posts, per-
user activity in .research-cache/activity.json. Notable exports: `getRecord`, `relatedTo`,
`getActivity`, `updateActivity`, `getSourceStatus`, `writeSourceStatus`, `getVideoStatus`,
`getVideoStatuses`, and 3 more.

[`lib/research/library.ts`](https://github.com/quirq-ai/instants/blob/main/lib/research/library.ts) · code · 6825 bytes

### types.ts

The research post contract shared by the generator (research/*.mjs), the server data layer
(lib/research/library.ts) and every UI surface. Notable exports: `Source`, `ChartSeries`,
`Slide`, `SlideType`, `TOPICS`, `Topic`, `PostStatus`, `GeneratedPost`, and 6 more.

[`lib/research/types.ts`](https://github.com/quirq-ai/instants/blob/main/lib/research/types.ts) · code · 5780 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
