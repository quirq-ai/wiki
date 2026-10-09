<!-- quirq-wiki-generated repo=quirq_ai dir=app/api/journeys -->

# quirq_ai / app/api/journeys

Source: [app/api/journeys](https://github.com/quirq-ai/quirq_ai/tree/main/app/api/journeys) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### guards.ts

/** * Shared guards for the .quirq write routes. Both writers are development * only; these
keep even the dev server honest. */ Notable exports: `crossOrigin`, `writeAtomic`.

[`app/api/journeys/guards.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/api/journeys/guards.ts) · code · 824 bytes

### route.ts

import { validateDefinition, type JourneyDefinition, } from "@/app/journey/defs"; /** * The
.quirq folder: journey definitions as local files, one JSON per * journey, holding the
entire tree and its rules. GET lists what the folder * offers; POST (development only)
stores the active journey back into it. * Journeys derived from research notes are
deliberatel Notable exports: `GET`, `POST`, `dynamic`.

[`app/api/journeys/route.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/api/journeys/route.ts) · code · 3380 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
