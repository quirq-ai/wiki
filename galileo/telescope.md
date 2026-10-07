<!-- quirq-wiki-generated repo=galileo dir=telescope -->

# galileo / telescope

Source: [telescope](https://github.com/quirq-ai/galileo/tree/main/telescope) in [galileo](https://github.com/quirq-ai/galileo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“telescope”). telescope is galileo's whole page: the bar along the top,
and the router for the view under it. galileo serves it on its own host, localhost:4100; the
view is either the Sources page or one source, framed at its own address.

[`telescope/README.md`](https://github.com/quirq-ai/galileo/blob/main/telescope/README.md) · code · 5280 bytes

### bridge.js

! telescope's bridge: the one script galileo adds to each HTML page a source serves. When
telescope shows the page in its frame, the bridge tells it where the page is (its address
and title) whenever that changes, so the bar and telescope's own address follow the page.
Outside a frame it does nothing.

[`telescope/bridge.js`](https://github.com/quirq-ai/galileo/blob/main/telescope/bridge.js) · code · 2821 bytes

### icon.svg

SVG graphic `icon.svg` (580 bytes). Vector artwork used by the UI, docs, or brand; not
executable source.

[`telescope/icon.svg`](https://github.com/quirq-ai/galileo/blob/main/telescope/icon.svg) · code · 580 bytes

### index.html

HTML document `index.html` titled “galileo”. galileo.

[`telescope/index.html`](https://github.com/quirq-ai/galileo/blob/main/telescope/index.html) · code · 3666 bytes

### telescope.css

telescope: galileo's bar along the top, and the view under it. Leading class selectors
include `bar`, `brand`, `where`, `switcher`, `switcher-name`, `chevron`, `dot`, `path-form`,
and 29 more. Defines or consumes CSS custom properties (design tokens).

[`telescope/telescope.css`](https://github.com/quirq-ai/galileo/blob/main/telescope/telescope.css) · code · 8725 bytes

### telescope.js

! telescope: galileo's bar along the top, and the router for the view under it.

[`telescope/telescope.js`](https://github.com/quirq-ai/galileo/blob/main/telescope/telescope.js) · code · 20207 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
