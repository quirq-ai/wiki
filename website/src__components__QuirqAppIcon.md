<!-- quirq-wiki-generated repo=website dir=src/components/QuirqAppIcon -->

# website / src/components/QuirqAppIcon

Source: [src/components/QuirqAppIcon](https://github.com/quirq-ai/website/tree/main/src/components/QuirqAppIcon) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Quirq app icons”). QuirqAppIcon is a small adapter for the existing
OSIcons/GlassIcon. It keeps the desktop's beveled silhouettes, glass, hover motion, and soft
hover glow while giving each repository a distinct glyph and color.

[`src/components/QuirqAppIcon/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqAppIcon/README.md) · code · 3704 bytes

### glyphs.ts

import { DOCS_SILHOUETTE, DOWNLOAD_SILHOUETTE, HANDBOOK_SILHOUETTE, HOME_SILHOUETTE,
SKILLS_SILHOUETTE, } from 'components/OSIcons/glyphs' Notable exports: `QUIRQ_GLYPHS`,
`QuirqIcon`.

[`src/components/QuirqAppIcon/glyphs.ts`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqAppIcon/glyphs.ts) · code · 22189 bytes

### index.tsx

import React from 'react' import GlassIcon from 'components/OSIcons/GlassIcon' import {
QUIRQ_GLYPHS, type QuirqIcon } from './glyphs' Notable exports: `QuirqAppIcon`, `QuirqTile`,
`QuirqAppTile`.

[`src/components/QuirqAppIcon/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/QuirqAppIcon/index.tsx) · code · 2217 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
