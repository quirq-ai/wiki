<!-- quirq-wiki-generated repo=space-hub dir=app/src -->

# space-hub / app/src

Source: [app/src](https://github.com/quirq-ai/space-hub/tree/main/app/src) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### api.ts

/** Where the page is: the hub (no space), a space, or a project. */ export type Place = {
space: string; project: string } Notable exports: `viewUrl`, `codeUrl`, `placeUrl`,
`avatarUrl`, `setSpacePicture`, `startChat`, `rawUrl`, `count`, and 37 more.

[`app/src/api.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/api.ts) · code · 13046 bytes

### app.css

The hub's app: one neutral palette, one accent, an 4px spacing grid. Light and dark follow
data-theme (theme.js). Leading class selectors include `quiet`, `small`, `strong`, `shell`,
`progress`, `inset-header`, `side-trigger`, `inset-sep`, and 274 more. Defines or consumes
CSS custom properties (design tokens).

[`app/src/app.css`](https://github.com/quirq-ai/space-hub/blob/main/app/src/app.css) · code · 84211 bytes

### app.tsx

const HUB: Place = { space: "", project: "" }; const SEEN = "spacehub:seen:v1"; const RAIL =
"spacehub:rail:v1"; const ACTIVITY = "spacehub:activity:v1" Notable exports: `App`.

[`app/src/app.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/app.tsx) · code · 16907 bytes

### content.css

Stylesheet `content.css` for layout and visual treatment in this folder. Leading class
selectors include `app-shell`, `app-header`, `brand`, `brand-name`, `quirqy-avatar`, `round-
button`, `header-left`, `header-right`, and 99 more. Defines or consumes CSS custom
properties (design tokens).

[`app/src/content.css`](https://github.com/quirq-ai/space-hub/blob/main/app/src/content.css) · code · 29876 bytes

### main.tsx

The hub's app: a desktop-style interface for every space and project on the hub.

[`app/src/main.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/main.tsx) · code · 386 bytes

### router.ts

/** * The app owns three paths (/, /, //); everything * inside a space or project lives in
the hash, as "/?", so the * server and its proxy only ever see those three paths. */ export
type Route = | { page: "home"; tab: "home" | "agents" | "builders" | "settings" } A
connected sub-hub's storage, read live (/subhub/, #/backup?id= one backup). | { page:
"subhub Notable exports: `parseRoute`, `hashOf`, `navigate`, `useRoute`, `onLink`, `Route`.

[`app/src/router.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/router.ts) · code · 4942 bytes

_Generated 2026-11-06 13:20 UTC from `main`._
