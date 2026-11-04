<!-- quirq-wiki-generated repo=space-hub dir=app/src -->

# space-hub / app/src

Source: [app/src](https://github.com/quirq-ai/space-hub/tree/main/app/src) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### api.ts

/** Where the page is: the hub (no space), a space, or a project. */ export type Place = {
space: string; project: string } Notable exports: `viewUrl`, `codeUrl`, `placeUrl`,
`avatarUrl`, `setSpacePicture`, `startChat`, `rawUrl`, `count`, and 35 more.

[`app/src/api.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/api.ts) · code · 12583 bytes

### app.css

The hub's app, in xo-swarm's iPhone look: Apple's system colors (apple-colors.css), a still
space wallpaper (deep blue Leading class selectors include `quiet`, `small`, `strong`,
`glass`, `glass-effect`, `glass-tint`, `glass-shine`, `glass-filter`, and 275 more. Defines
or consumes CSS custom properties (design tokens).

[`app/src/app.css`](https://github.com/quirq-ai/space-hub/blob/main/app/src/app.css) · code · 94818 bytes

### app.tsx

const HUB: Place = { space: "", project: "" }; const SEEN = "spacehub:seen:v1" Notable
exports: `App`.

[`app/src/app.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/app.tsx) · code · 14661 bytes

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

/** A space's sections, in the order its bar and the dock show them. */ export type SpaceTab
= "chat" | "projects" | "outcomes" | "people" | "activity" Notable exports: `parseRoute`,
`hashOf`, `navigate`, `useRoute`, `onLink`, `SpaceTab`, `Route`.

[`app/src/router.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/router.ts) · code · 5176 bytes

_Generated 2026-11-04 13:22 UTC from `main`._
