<!-- quirq-wiki-generated repo=quirq_ai dir=app/api/journeys/[slug]/recording -->

# quirq_ai / app/api/journeys/[slug]/recording

Source: [app/api/journeys/[slug]/recording](https://github.com/quirq-ai/quirq_ai/tree/main/app/api/journeys/[slug]/recording) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

import { validateDefinition, type JourneyDefinition, } from "@/app/journey/defs"; /** * The
walk recorder: as the visitor progresses, the client posts the * recording so far and it is
written into the journey's own JSON file in * .quirq, so the document grows a recording key
transition by transition. * If the file does not exist yet, the posted definition se Notable
exports: `POST`, `dynamic`.

[`app/api/journeys/[slug]/recording/route.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/api/journeys/[slug]/recording/route.ts) · code · 2881 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
