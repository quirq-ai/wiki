<!-- quirq-wiki-generated repo=xo-space dir=space_ui/js/views -->

# xo-space / space_ui/js/views

Source: [space_ui/js/views](https://github.com/quirq-ai/xo-space/tree/main/space_ui/js/views) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### atlas.js

The atlas views (Dashboard, Graph, Timeline): lenses over one selected Notable exports:
`initProjectRootPicker`, `dashboardView`, `graphView`, `timeView`.

[`space_ui/js/views/atlas.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/atlas.js) · code · 92684 bytes

### chat.js

Chat tab — talks to the Plane-B chat endpoints (chat exclusion reversed by Provides a
default export as the module's public entry.

[`space_ui/js/views/chat.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/chat.js) · code · 12361 bytes

### connectors.js

Connectors section: workspace integrations and account apps inside Setup. Provides a default
export as the module's public entry.

[`space_ui/js/views/connectors.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/connectors.js) · code · 41687 bytes

### inbox-activity.js

Read-only activity streams. Workspace history and the relay's volatile Notable exports:
`buildProjectTodos`, `buildWorkspaceEvents`, `buildSharingEvents`, `filterActivityEvents`,
`createActivityViews`.

[`space_ui/js/views/inbox-activity.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/inbox-activity.js) · code · 21201 bytes

### inbox.js

Inbox tab: what arrived in the workspace, and whether anyone has dealt Notable exports:
`refreshInboxBadge`, `initInboxBadge`, `createInboxViews`.

[`space_ui/js/views/inbox.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/inbox.js) · code · 32324 bytes

### native-connectors.js

Workspace connectors use their existing local APIs, independently of the XO Notable exports:
`mountNativeConnectors`.

[`space_ui/js/views/native-connectors.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/native-connectors.js) · code · 21124 bytes

### project-manage.js

Project management owns one persistent controller. Navigation and catalog Provides a default
export as the module's public entry.

[`space_ui/js/views/project-manage.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/project-manage.js) · code · 1689 bytes

### project-management.js

Project creation and local removal. The server is the authority for every Notable exports:
`githubBrowserUrl`, `mountProjectManagement`.

[`space_ui/js/views/project-management.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/project-management.js) · code · 33378 bytes

### projects.js

Projects catalog and on-demand file browsing. Provides a default export as the module's
public entry.

[`space_ui/js/views/projects.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/projects.js) · code · 29479 bytes

### quirq.js

Machine-local Quirq state explorer. Provides a default export as the module's public entry.

[`space_ui/js/views/quirq.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/quirq.js) · code · 24175 bytes

### sessions.js

Agents tab — multi-runtime telemetry dashboard (data: GET Notable exports:
`createAgentViews`.

[`space_ui/js/views/sessions.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/sessions.js) · code · 52475 bytes

### setup-branding.js

const MAX_LOGO_BYTES=2*1024*1024; const LOGO_TYPES=new
Set(['image/png','image/jpeg','image/webp']) Notable exports: `mountBranding`.

[`space_ui/js/views/setup-branding.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/setup-branding.js) · code · 7473 bytes

### setup-commands.js

Setup's Jobs panel uses the scheduler's definitions, executor and history. Notable exports:
`mountCommands`.

[`space_ui/js/views/setup-commands.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/setup-commands.js) · code · 29169 bytes

### setup-identity.js

Setup identity is read-only. A stored credential is not a verified account; Notable exports:
`mountIdentity`.

[`space_ui/js/views/setup-identity.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/setup-identity.js) · code · 3252 bytes

### setup-search.js

/* Search setting names, never form values or credentials. Results navigate to the existing
controls without rebuilding forms or changing their drafts. */ const SETTINGS=[
['workspace','Theme','Workspace colors and typography','appearance theme green grove nature
neon midnight graphite linen light white orange grey blue black cyberpunk space quirq fonts
colo Notable exports: `mountSetupSearch`.

[`space_ui/js/views/setup-search.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/setup-search.js) · code · 3872 bytes

### setup-shell.js

Setup layout only. Section IDs and labels are shared with navigation. Notable exports:
`renderSetupShell`.

[`space_ui/js/views/setup-shell.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/setup-shell.js) · code · 11156 bytes

### setup-theme.js

export function mountTheme(el,onDraftChange=()=>{}){ el.innerHTML=`ThemeLoading… Notable
exports: `mountTheme`.

[`space_ui/js/views/setup-theme.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/setup-theme.js) · code · 4047 bytes

### setup.js

Setup controller. Notable exports: `createSetupViews`.

[`space_ui/js/views/setup.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/setup.js) · code · 37617 bytes

### sharing.js

/* Sharing: the project-sharing page in the Space UI (issue #83). Designed around the loop,
not a layout: share once, then commits flow and each side applies. Provides a default export
as the module's public entry.

[`space_ui/js/views/sharing.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/sharing.js) · code · 38063 bytes

### sharing_data.js

Project sharing: the data half of the Sharing pane (views/sharing.js is Notable exports:
`shortId`, `sharingStatus`, `sharingStatusRes`, `refreshSharingStatus`, `startSharingPoll`,
`refreshSoon`, `anyCloning`, `consumeNewClone`, and 20 more.

[`space_ui/js/views/sharing_data.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/sharing_data.js) · code · 8543 bytes

### tree.js

/* Tree — the third Data view, beside List and Graph. Provides a default export as the
module's public entry.

[`space_ui/js/views/tree.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/tree.js) · code · 19746 bytes

### wiki.js

A compact local starting page. Full guides live in xo-docs. Provides a default export as the
module's public entry.

[`space_ui/js/views/wiki.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/views/wiki.js) · code · 8250 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
