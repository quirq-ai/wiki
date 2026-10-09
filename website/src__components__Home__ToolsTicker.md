<!-- quirq-wiki-generated repo=website dir=src/components/Home/ToolsTicker -->

# website / src/components/Home/ToolsTicker

Source: [src/components/Home/ToolsTicker](https://github.com/quirq-ai/website/tree/main/src/components/Home/ToolsTicker) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“ToolsTicker”). A one-line, infinitely rolling marquee of PostHog
products: a static label ("Built-in tools for your agents:") followed by a horizontally
scrolling strip of product icons + names, each linking to its product page.

[`src/components/Home/ToolsTicker/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/Home/ToolsTicker/README.md) · code · 3624 bytes

### ToolsTickerStrip.tsx

import React from 'react' import Link from 'components/Link' Notable exports:
`ToolsTickerStrip`, `ToolsTickerProduct`.

[`src/components/Home/ToolsTicker/ToolsTickerStrip.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/ToolsTicker/ToolsTickerStrip.tsx) · code · 2877 bytes

### index.tsx

Seconds each item takes to cross one loop; total duration scales with item count so the
apparent speed stays constant when handles are added or removed. Notable exports:
`useToolsProducts`, `ToolsTicker`, `DEFAULT_HANDLES`.

[`src/components/Home/ToolsTicker/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Home/ToolsTicker/index.tsx) · code · 3775 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
