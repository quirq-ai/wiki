<!-- quirq-wiki-generated repo=quirq_ai dir=app/whitepaper/pdf -->

# quirq_ai / app/whitepaper/pdf

Source: [app/whitepaper/pdf](https://github.com/quirq-ai/quirq_ai/tree/main/app/whitepaper/pdf) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### quirq-whitepaper.pdf

Binary PDF asset (519.2 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`app/whitepaper/pdf/quirq-whitepaper.pdf`](https://github.com/quirq-ai/quirq_ai/blob/main/app/whitepaper/pdf/quirq-whitepaper.pdf) · binary · 531710 bytes

### route.ts

/** * The typeset paper, served at /whitepaper/pdf. * The file sits next to this route
rather than in public/ so the URL is the * canonical one everywhere (nav, footer, both calls
to action) and the bare * asset path is not a second address for the same document. Read
from disk * at request time and cached: a route handler is the only way to serve a * static
Notable exports: `GET`, `dynamic`.

[`app/whitepaper/pdf/route.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/whitepaper/pdf/route.ts) · code · 1020 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
