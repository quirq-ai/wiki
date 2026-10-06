<!-- quirq-wiki-generated repo=euler dir=app/home/public -->

# euler / app/home/public

Source: [app/home/public](https://github.com/quirq-ai/euler/tree/main/app/home/public) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### euler-avatar-editor.js

import { AVATAR_STORAGE_KEY, defaultAvatarConfig, normalizeAvatarConfig, avatarUri,
loadAvatarConfig, saveAvatarConfig, resolveAvatarTraits, avatarShapes, avatarExpressions,
avatarBackgrounds, avatarTraits, } from './euler-avatar.js'.

[`app/home/public/euler-avatar-editor.js`](https://github.com/quirq-ai/euler/blob/main/app/home/public/euler-avatar-editor.js) · code · 10791 bytes

### euler-avatar.js

export const AVATAR_STORAGE_KEY = 'euler.avatar.v1'; const options = (values) =>
Object.freeze(values.map(([value, label]) => Object.freeze({ value, label }))) Notable
exports: `normalizeAvatarConfig`, `resolveAvatarTraits`, `avatarSvg`, `avatarUri`,
`loadAvatarConfig`, `saveAvatarConfig`, `AVATAR_STORAGE_KEY`, `avatarShapes`, and 4 more.

[`app/home/public/euler-avatar.js`](https://github.com/quirq-ai/euler/blob/main/app/home/public/euler-avatar.js) · code · 5428 bytes

### euler-dock-extension.js

const appIdPattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/ Notable exports: `parseDockConfig`,
`dockSnapshot`, `createDockSubscription`, `dockClearance`.

[`app/home/public/euler-dock-extension.js`](https://github.com/quirq-ai/euler/blob/main/app/home/public/euler-dock-extension.js) · code · 3596 bytes

### euler-dock-host.css

Shared placement for app-defined docks. App styles may refine :host. Defines or consumes CSS
custom properties (design tokens).

[`app/home/public/euler-dock-host.css`](https://github.com/quirq-ai/euler/blob/main/app/home/public/euler-dock-host.css) · code · 1036 bytes

### euler-dock-ui.css

Stylesheet `euler-dock-ui.css` for layout and visual treatment in this folder. Leading class
selectors include `dock-surface`, `dock`, `dock-apps`, `dock-item`, `running-dot`,
`utility`, `divider`, `fallback-icon`, and 7 more. Defines or consumes CSS custom properties
(design tokens).

[`app/home/public/euler-dock-ui.css`](https://github.com/quirq-ai/euler/blob/main/app/home/public/euler-dock-ui.css) · code · 7088 bytes

### euler-dock.css

Shared document transitions. Dock controls are styled in their shadow tree. Defines or
consumes CSS custom properties (design tokens).

[`app/home/public/euler-dock.css`](https://github.com/quirq-ai/euler/blob/main/app/home/public/euler-dock.css) · code · 3429 bytes

### euler-dock.js

const STATE_KEY = 'euler.dock.state.v1'; const ROUTES_KEY = 'euler.dock.routes.v1'; const
OPACITY_KEY = 'euler.dock.opacity.v1'; const RESUME_KEY = 'euler.dock.resume.v1'; const
iconIds = new Set(['innernet', 'quitter', 'instants']); const validId = (id) => typeof id
=== 'string' && /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(id) Notable exports: `safeAppRoute`,
`dockOpacity`, `runningApps`.

[`app/home/public/euler-dock.js`](https://github.com/quirq-ai/euler/blob/main/app/home/public/euler-dock.js) · code · 23947 bytes

### euler-home.js

const $ = (selector, context = document) => context.querySelector(selector); const byId =
(id) => document.getElementById(id); const state = { projects: [], dashboard: {}, loaded:
false }; const cards = new Map(); const pending = new Set(); const pendingEnabled = new
Map(); const knownIcons = new Set(['innernet', 'quitter', 'instants']); const statusLabels
=.

[`app/home/public/euler-home.js`](https://github.com/quirq-ai/euler/blob/main/app/home/public/euler-home.js) · code · 23492 bytes

### euler.css

Stylesheet `euler.css` for layout and visual treatment in this folder. Leading class
selectors include `icon-library`, `icon`, `skip-link`, `wallpaper`, `wallpaper-fold`, `fold-
one`, `fold-two`, `fold-three`, and 113 more. Defines or consumes CSS custom properties
(design tokens).

[`app/home/public/euler.css`](https://github.com/quirq-ai/euler/blob/main/app/home/public/euler.css) · code · 37444 bytes

### euler.html

HTML document `euler.html` titled “Home &middot; Euler”. Home &middot; Euler.

[`app/home/public/euler.html`](https://github.com/quirq-ai/euler/blob/main/app/home/public/euler.html) · code · 14563 bytes

_Generated 2026-10-06 12:17 UTC from `main`._
