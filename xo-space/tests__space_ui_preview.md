<!-- quirq-wiki-generated repo=xo-space dir=tests/space_ui_preview -->

# xo-space / tests/space_ui_preview

Source: [tests/space_ui_preview](https://github.com/quirq-ai/xo-space/tree/main/tests/space_ui_preview) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Space UI browser review”). The server serves the actual space_ui/
assets from this checkout and supplies deterministic, fictional API data. It does not start
an agent, read private workspace files, call upstream services, or support writes. The ten
projects and all activity, people, paths and repository names are invented review fixtures.

[`tests/space_ui_preview/README.md`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/README.md) · code · 12660 bytes

### capture.mjs

Real-browser issue #100 verification against server.py's fictional data.

[`tests/space_ui_preview/capture.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/capture.mjs) · code · 19575 bytes

### command-results-races.mjs

Actual drawer/API modules with delayed browser-only responses. No commands,.

[`tests/space_ui_preview/command-results-races.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/command-results-races.mjs) · code · 7766 bytes

### commands-live.mjs

Real browser → scheduler API → executor → history, on commands_server.py only.

[`tests/space_ui_preview/commands-live.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/commands-live.mjs) · code · 6546 bytes

### commands-restart.mjs

Browser-only API fixtures: never executes a command or restarts a server.

[`tests/space_ui_preview/commands-restart.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/commands-restart.mjs) · code · 17797 bytes

### commands_server.py

Real scheduler API with disposable state and a read-only fictional UI upstream. Runnable as
a script via `if __name__ == '__main__'`. HTTP routes: `GET /__fixture__/runtime`, `GET
/space/server/status`, `GET /{path:path}`. Functions: `main`. Built with FastAPI.

[`tests/space_ui_preview/commands_server.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/commands_server.py) · code · 2820 bytes

### contextual-toolbar.mjs

Real Space assets on the fictional fixture server. Connector/account and.

[`tests/space_ui_preview/contextual-toolbar.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/contextual-toolbar.mjs) · code · 20358 bytes

### fixtures.py

Synthetic, deterministic API payloads for reviewing the real Space UI. Functions: `stamp`,
`native_connectors`, `catalog`, `project_removal`, `paths_for`, `graph`, `dashboard`,
`activity`, and 7 more.

[`tests/space_ui_preview/fixtures.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/fixtures.py) · code · 16953 bytes

### global-refresh.mjs

One page-level refresh, exercised against actual Space assets and fictional.

[`tests/space_ui_preview/global-refresh.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/global-refresh.mjs) · code · 9802 bytes

### inbox-activity.mjs

Separate workspace and relay activity over intercepted fictional reads.

[`tests/space_ui_preview/inbox-activity.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/inbox-activity.mjs) · code · 14203 bytes

### inbox-jobs.mjs

Inbox Jobs and the shared results drawer, using read-only browser fixtures.

[`tests/space_ui_preview/inbox-jobs.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/inbox-jobs.mjs) · code · 16002 bytes

### inline-sharing.mjs

Actual UI with in-memory share responses. No service mutation may pass.

[`tests/space_ui_preview/inline-sharing.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/inline-sharing.mjs) · code · 9392 bytes

### manage-details.mjs

Collapsible Manage details and migrated Issues use fictional reads only.

[`tests/space_ui_preview/manage-details.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/manage-details.mjs) · code · 31655 bytes

### manage-refresh-races.mjs

Manage re-entry must invalidate catalog and access reads. Fictional GETs only.

[`tests/space_ui_preview/manage-refresh-races.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/manage-refresh-races.mjs) · code · 5663 bytes

### native-connectors.mjs

Native connector flow checks. Every provider/session request and mutation is.

[`tests/space_ui_preview/native-connectors.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/native-connectors.mjs) · code · 18527 bytes

### project-actions.mjs

Internal Projects data-loading lifecycle over actual UI assets. Fictional GET payloads are.

[`tests/space_ui_preview/project-actions.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/project-actions.mjs) · code · 13325 bytes

### projects-experience.mjs

The real Projects UI against fictional, browser-owned API fixtures. No.

[`tests/space_ui_preview/projects-experience.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/projects-experience.mjs) · code · 22029 bytes

### projects-root.mjs

Projects root selection on real UI assets and fictional preview data.

[`tests/space_ui_preview/projects-root.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/projects-root.mjs) · code · 6845 bytes

### refresh-helpers.mjs

Exercise retained data-loading races independently of the user-facing Refresh Notable
exports: `installRefreshProbes`, `startDataRefresh`, `waitForDataRefresh`, `refreshData`,
`waitForSetup`.

[`tests/space_ui_preview/refresh-helpers.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/refresh-helpers.mjs) · code · 2013 bytes

### routes.mjs

Intent names used by the older feature fixtures. "projects" here means Notable exports:
`openProjectPage`, `openProjectList`, `PAGE_ROUTES`, `routeFor`, `projectPageId`,
`projectPageSelector`.

[`tests/space_ui_preview/routes.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/routes.mjs) · code · 2062 bytes

### search-sessions-inbox.mjs

Run with the local fixture server from this directory. API responses below.

[`tests/space_ui_preview/search-sessions-inbox.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/search-sessions-inbox.mjs) · code · 10302 bytes

### section-navigation.mjs

Canonical section navigation over actual Space assets and fictional data.

[`tests/space_ui_preview/section-navigation.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/section-navigation.mjs) · code · 23639 bytes

### server.py

Serve actual Space assets with fictional APIs, bound only to localhost. Runnable as a script
via `if __name__ == '__main__'`. Classes: `Handler`.

[`tests/space_ui_preview/server.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/server.py) · code · 5904 bytes

### setup-branding.mjs

Workspace branding uses fictional, browser-owned settings and image bytes.

[`tests/space_ui_preview/setup-branding.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/setup-branding.mjs) · code · 19284 bytes

### setup-connectors.mjs

Connectors inside guided Setup. Every connector/session response and write.

[`tests/space_ui_preview/setup-connectors.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/setup-connectors.mjs) · code · 19113 bytes

### setup-identity.mjs

Setup identity statuses use fictional browser responses. No environment.

[`tests/space_ui_preview/setup-identity.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/setup-identity.mjs) · code · 11762 bytes

### setup-journey.mjs

Guided Setup regression. All setting/credential/restart writes are handled.

[`tests/space_ui_preview/setup-journey.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/setup-journey.mjs) · code · 28541 bytes

### setup-projects.mjs

Project management uses fictional browser fixtures exclusively. Every clone,.

[`tests/space_ui_preview/setup-projects.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/setup-projects.mjs) · code · 23651 bytes

### setup-state.mjs

Pure Setup guidance checks: no DOM, network, credentials, or state writes.

[`tests/space_ui_preview/setup-state.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/setup-state.mjs) · code · 8367 bytes

### setup-theme.mjs

Theme preferences are fictional and browser-owned. Every mutation is.

[`tests/space_ui_preview/setup-theme.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/setup-theme.mjs) · code · 21402 bytes

### timeline-experience.mjs

Timeline over an explicit fictional graph: all service writes are blocked.

[`tests/space_ui_preview/timeline-experience.mjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/space_ui_preview/timeline-experience.mjs) · code · 15311 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
