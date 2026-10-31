<!-- quirq-wiki-generated repo=instants dir=lib/research -->

# instants / lib/research

Source: [lib/research](https://github.com/quirq-ai/instants/tree/main/lib/research) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### format.ts

Small formatting helpers shared by server and client components. Notable exports:
`relativeDate`, `dateRange`, `compactNumber`, `bytes`, `onAccent`, `topicSlug`.

[`lib/research/format.ts`](https://github.com/quirq-ai/instants/blob/main/lib/research/format.ts) · code · 2178 bytes

### library.ts

Server-only data layer: research records live as JSON files in the content store's posts/
(lib/research/store.ts), per-user activity in .research-cache/activity.json. Notable
exports: `getRecord`, `relatedTo`, `getActivity`, `updateActivity`, `getSourceStatus`,
`writeSourceStatus`, `getVideoStatus`, `getVideoStatuses`, and 2 more.

[`lib/research/library.ts`](https://github.com/quirq-ai/instants/blob/main/lib/research/library.ts) · code · 7708 bytes

### store.ts

Typed entry to the content store shared with research/*.mjs (research/store.mjs). Notable
exports: `CACHE_DIR`, `LOCAL_STORE`, `SPACE_ROOT`, `SPACE_CONFIG`, `VIDEOS_WORK`,
`PROJECT_RE`, `MANIFEST`, `readSpaceConfig`, and 13 more.

[`lib/research/store.ts`](https://github.com/quirq-ai/instants/blob/main/lib/research/store.ts) · code · 497 bytes

### types.ts

The research post contract shared by the generator (research/*.mjs), the server data layer
(lib/research/library.ts) and every UI surface. Notable exports: `Source`, `ChartSeries`,
`Slide`, `SlideType`, `TOPICS`, `Topic`, `PostStatus`, `GeneratedPost`, and 6 more.

[`lib/research/types.ts`](https://github.com/quirq-ai/instants/blob/main/lib/research/types.ts) · code · 6137 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
