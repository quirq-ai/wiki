<!-- quirq-wiki-generated repo=quirq_ai dir=app/journey -->

# quirq_ai / app/journey

Source: [app/journey](https://github.com/quirq-ai/quirq_ai/tree/main/app/journey) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### defs.tsx

/** * Journey definitions: the whole tree journey and its rules as one plain * document,
storable in the local .quirq folder and loadable at runtime. * A definition is JSON: nodes
carry their story beat, a pose (a named preset * plus optional channel tweaks), a prompt and
choices; rules carry the start * node and what the walk permits.

[`app/journey/defs.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/journey/defs.tsx) · code · 13389 bytes

### journey.tsx

import { DEFAULT_DEFINITION, isValidPathIn, resolveDefinition, validateDefinition, type
JourneyDefinition, type JourneyRecording, type JourneyRecordingEvent, type ResolvedJourney,
} from "./defs" Notable exports: `Journey`. Marked `'use client'` so it runs in the browser.

[`app/journey/journey.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/journey/journey.tsx) · code · 32075 bytes

### page.tsx

export const metadata: Metadata = { title: "The journey", description: "A branching walk:
the page's content is generated from your previous choices, the glass follows the path you
take, and the trail rewinds to explore the other branches of the tree.", } Notable exports:
`Page`, `metadata`.

[`app/journey/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/journey/page.tsx) · code · 956 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
