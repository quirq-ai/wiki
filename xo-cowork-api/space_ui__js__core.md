<!-- quirq-wiki-generated repo=xo-cowork-api dir=space_ui/js/core -->

# xo-cowork-api / space_ui/js/core

Source: [space_ui/js/core](https://github.com/quirq-ai/xo-cowork-api/tree/main/space_ui/js/core) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### api.js

One fetch layer for the whole UI. Notable exports: `withPageQuery`, `apiFetch`, `API_BASE`.

[`space_ui/js/core/api.js`](https://github.com/quirq-ai/xo-cowork-api/blob/main/space_ui/js/core/api.js) · code · 2876 bytes

### markdown.js

Mini-markdown for agent output — escape-first so nothing in the source can Notable exports:
`mdToHtml`.

[`space_ui/js/core/markdown.js`](https://github.com/quirq-ai/xo-cowork-api/blob/main/space_ui/js/core/markdown.js) · code · 4933 bytes

### registry.js

View registry: builds the tab nav from registered views, assigns hotkeys Notable exports:
`registerView`, `switchTo`, `startRegistry`.

[`space_ui/js/core/registry.js`](https://github.com/quirq-ai/xo-cowork-api/blob/main/space_ui/js/core/registry.js) · code · 4073 bytes

### server-widget.js

Footer server pill: polls /space/server/status; when the API is offline it Notable exports:
`initServerWidget`.

[`space_ui/js/core/server-widget.js`](https://github.com/quirq-ai/xo-cowork-api/blob/main/space_ui/js/core/server-widget.js) · code · 1534 bytes

### store.js

Shared idempotency helpers. Not a data model — just the guards that make Notable exports:
`singleFlight`, `setSlottedInterval`, `clearSlottedInterval`.

[`space_ui/js/core/store.js`](https://github.com/quirq-ai/xo-cowork-api/blob/main/space_ui/js/core/store.js) · code · 1073 bytes

### ui.js

Shared UI helpers. Notable exports: `toast`.

[`space_ui/js/core/ui.js`](https://github.com/quirq-ai/xo-cowork-api/blob/main/space_ui/js/core/ui.js) · code · 246 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
