<!-- quirq-wiki-generated repo=quirq_ai dir=app/writing -->

# quirq_ai / app/writing

Source: [app/writing](https://github.com/quirq-ai/quirq_ai/tree/main/app/writing) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### data.ts

The Writings page content, transcribed from the ANN, PARTNERS, RNOTES, FOW and QUIRQ arrays
in quirq-package/site/quirq-research-writings-mock.html. Notable exports: `Card`, `TabKey`,
`CATEGORIES`, `FEATURED`, `NEWS`, `Partner`, `PARTNERS`, `THOUGHTS`, and 4 more.

[`app/writing/data.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/writing/data.ts) · code · 14135 bytes

### essays.ts

The Thoughts essays. Notable exports: `Essay`, `ESSAYS`, `getEssay`.

[`app/writing/essays.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/writing/essays.ts) · code · 22397 bytes

### page.tsx

/** * Writings, ported from the page-writings section of * quirq-package/site/quirq-
research-writings-mock.html. * Everything the route needs lives in this folder: its content
(data.ts), its * styles (writing.module.css) and its one client boundary (view.tsx). Nothing
* shared is touched, and /research keeps its own separate catalogue. * The mock's own nav a
Notable exports: `Writing`, `metadata`, `viewport`.

[`app/writing/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/writing/page.tsx) · code · 1271 bytes

### view.tsx

import { CATEGORIES, COUNTS, FEATURED, FUTURE_OF_WORK, GUIDES, NEWS, NEWS_COLLAPSED,
PARTNERS, THOUGHTS, type Card, type TabKey, } from "./data"; /** The documentation index,
which carries the changelog pointer. */ const DOCS_URL = "/docs" Notable exports:
`WritingView`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so
it runs in the browser.

[`app/writing/view.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/writing/view.tsx) · code · 10195 bytes

### writing.module.css

The Writings page, ported from quirq-package/site/quirq-research-writings-mock.html. Leading
class selectors include `page`, `wrap`, `header`, `tabs`, `tab`, `tabOn`, `tabCount`,
`card`, and 22 more. Defines or consumes CSS custom properties (design tokens).

[`app/writing/writing.module.css`](https://github.com/quirq-ai/quirq_ai/blob/main/app/writing/writing.module.css) · code · 9852 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
