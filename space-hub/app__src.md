<!-- quirq-wiki-generated repo=space-hub dir=app/src -->

# space-hub / app/src

Source: [app/src](https://github.com/quirq-ai/space-hub/tree/main/app/src) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### api.ts

/** Where the page is: the hub (no space), a space, or a project. */ export type Place = {
space: string; project: string } Notable exports: `viewUrl`, `codeUrl`, `activityUrl`,
`fetchActivity`, `placeUrl`, `avatarUrl`, `setSpacePicture`, `startChat`, and 40 more.

[`app/src/api.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/api.ts) · code · 14257 bytes

### app.css

The hub's app. Its palette and frame (sidebar, inset header) are in shell.css. Leading class
selectors include `quiet`, `small`, `strong`, `main-scroll`, `page`, `inspector`,
`inspector-head`, `inspector-note`, and 285 more. Defines or consumes CSS custom properties
(design tokens).

[`app/src/app.css`](https://github.com/quirq-ai/space-hub/blob/main/app/src/app.css) · code · 67777 bytes

### app.tsx

const HUB: Place = { space: "", project: "" }; const SEEN = "spacehub:seen:v1"; const RAIL =
"spacehub:rail:v1"; const ACTIVITY = "spacehub:activity:v1" Notable exports: `App`.

[`app/src/app.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/app.tsx) · code · 17007 bytes

### content.css

Stylesheet `content.css` for layout and visual treatment in this folder. Leading class
selectors include `app-shell`, `app-header`, `brand`, `brand-name`, `quirqy-avatar`, `round-
button`, `header-left`, `header-right`, and 105 more. Defines or consumes CSS custom
properties (design tokens).

[`app/src/content.css`](https://github.com/quirq-ai/space-hub/blob/main/app/src/content.css) · code · 30701 bytes

### feed.css

An Instants library's feed and post pages (pages/feed.tsx) and slides
(components/slides.tsx). Leading class selectors include `instants`, `feed-head`, `feed-
bar`, `feed-order`, `feed-search`, `instants-kind`, `feed-topics`, `feed-list`, and 54 more.
Defines or consumes CSS custom properties (design tokens).

[`app/src/feed.css`](https://github.com/quirq-ai/space-hub/blob/main/app/src/feed.css) · code · 14573 bytes

### main.tsx

The hub's app: a desktop-style interface for every space and project on the hub.

[`app/src/main.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/main.tsx) · code · 429 bytes

### router.ts

/** * The app owns three paths (/, /, //); everything * inside a space or project lives in
the hash, as "/?", so the * server and its proxy only ever see those three paths. */ export
type Route = | { page: "home"; tab: "home" | "orgs" | "agents" | "builders" | "settings" } A
connected sub-hub's storage, read live (/subhub/, #/backup?id= one backup). | { page Notable
exports: `parseRoute`, `hashOf`, `navigate`, `useRoute`, `onLink`, `Route`.

[`app/src/router.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/router.ts) · code · 4969 bytes

### shell.css

The frame every page of the hub shares, after shadcn's sidebar-07: the Leading class
selectors include `shell`, `progress`, `inset-header`, `side-trigger`, `inset-sep`, `inset-
crumbs`, `path-ruler`, `toolbar-spacer`, and 64 more. Defines or consumes CSS custom
properties (design tokens).

[`app/src/shell.css`](https://github.com/quirq-ai/space-hub/blob/main/app/src/shell.css) · code · 25465 bytes

_Generated 2026-11-11 13:02 UTC from `main`._
