<!-- quirq-wiki-generated repo=research dir=packages/theme -->

# research / packages/theme

Source: [packages/theme](https://github.com/quirq-ai/research/tree/main/packages/theme) in [research](https://github.com/quirq-ai/research).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### index.mjs

Shared quirq look for the research hub and topic pages. The CSS in quirq.css holds the
tokens and components. The helpers below return small HTML strings (a page shell, header,
footer, badge, card), so the hub and any topic build can compose the same pieces without a
framework. Pages inline the CSS, so they work from any path and offline.

[`packages/theme/index.mjs`](https://github.com/quirq-ai/research/blob/main/packages/theme/index.mjs) · code · 3900 bytes

### package.json

npm package manifest for `@research/theme` v1.0.0. Shared quirq look for the research hub
and topic pages: CSS tokens, base styles and small HTML partials.

[`packages/theme/package.json`](https://github.com/quirq-ai/research/blob/main/packages/theme/package.json) · code · 362 bytes

### quirq.css

quirq research theme: tokens, base styles and shared components. Leading class selectors
include `container`, `icon`, `site-header`, `brand`, `brand-mark`, `brand-sub`, `site-nav`,
`site-footer`, and 66 more. Defines or consumes CSS custom properties (design tokens).

[`packages/theme/quirq.css`](https://github.com/quirq-ai/research/blob/main/packages/theme/quirq.css) · code · 32239 bytes

### visuals.mjs

Visual partials: cover art, icons and the topic map. All are inline SVG strings, generated
from data, so they need no image files and stay sharp. Notable exports: `cover`, `icon`,
`topicMap`.

[`packages/theme/visuals.mjs`](https://github.com/quirq-ai/research/blob/main/packages/theme/visuals.mjs) · code · 6152 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
