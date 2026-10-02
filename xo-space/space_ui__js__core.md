<!-- quirq-wiki-generated repo=xo-space dir=space_ui/js/core -->

# xo-space / space_ui/js/core

Source: [space_ui/js/core](https://github.com/quirq-ai/xo-space/tree/main/space_ui/js/core) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### api.js

One fetch layer for the whole UI. Notable exports: `withPageQuery`, `failText`, `apiFetch`,
`API_BASE`.

[`space_ui/js/core/api.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/api.js) · code · 4535 bytes

### branding.js

Workspace branding is shared by the shell and Setup. A late read must Notable exports:
`brandingLogoURL`, `defaultBrandMark`, `loadBranding`, `saveBranding`, `DEFAULT_BRANDING`.

[`space_ui/js/core/branding.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/branding.js) · code · 2133 bytes

### chart.js

shadcn Chart for Space: SVG, zero deps. Notable exports: `legendHtml`, `areaChart`,
`sparkline`, `barChartHorizontal`, `barChartStacked`, `donutChart`, `radialChart`,
`heatmapChart`.

[`space_ui/js/core/chart.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/chart.js) · code · 18394 bytes

### command-palette.js

Cmd+K command palette: a global, searchable overlay for jumping to any Notable exports:
`initCommandPalette`.

[`space_ui/js/core/command-palette.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/command-palette.js) · code · 11784 bytes

### command-results.js

One results drawer for Setup's command Inbox and the Inbox Jobs section. Notable exports:
`openCommandResults`.

[`space_ui/js/core/command-results.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/command-results.js) · code · 5614 bytes

### connections.js

Pure formatters over one entry of GET /api/connections (a polled Notable exports:
`accountLabel`, `accountLine`, `every`, `collectorLabels`, `pollLine`.

[`space_ui/js/core/connections.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/connections.js) · code · 2088 bytes

### data-views.js

Data representations share one native-link control in each local toolbar. Notable exports:
`dataViewControls`.

[`space_ui/js/core/data-views.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/data-views.js) · code · 430 bytes

### jobs.js

Plain-language jobs over the scheduler's own fields. A job is Manual when Notable exports:
`utcOffset`, `toOffsetIso`, `durationText`, `splitDuration`, `parseDay`, `scheduleToFields`,
`onceToFields`, `jobToOnce`, and 13 more.

[`space_ui/js/core/jobs.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/jobs.js) · code · 11221 bytes

### markdown.js

Mini-markdown for agent output — escape-first so nothing in the source can Notable exports:
`mdToHtml`.

[`space_ui/js/core/markdown.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/markdown.js) · code · 4933 bytes

### navigation.js

Primary sections and their pages are separate concepts. This is the shared Notable exports:
`projectPage`, `isProjectRoute`, `PROJECT_PAGES`, `DATA_VIEWS`, `PROJECT_SECTIONS`,
`AGENT_PAGES`, `INBOX_PAGES`, `PRIMARY_TABS`.

[`space_ui/js/core/navigation.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/navigation.js) · code · 2786 bytes

### page-refresh.js

One explicit full-page refresh for the header and command palette. The Notable exports:
`refreshPage`, `initPageRefresh`.

[`space_ui/js/core/page-refresh.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/page-refresh.js) · code · 492 bytes

### preview.js

/* File previewer — a floating window that renders one file from a project. Notable exports:
`initPreview`.

[`space_ui/js/core/preview.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/preview.js) · code · 14063 bytes

### project-actions.js

Cross-page actions go through the registry. Only a completed, still-current Notable exports:
`openProjectAdd`, `initProjectActions`, `openProjectActivity`.

[`space_ui/js/core/project-actions.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/project-actions.js) · code · 1006 bytes

### project-issues.js

A project's GitHub mirror. Each mounted card keeps its own filter and DOM; Notable exports:
`createProjectIssues`.

[`space_ui/js/core/project-issues.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/project-issues.js) · code · 9324 bytes

### project-pins.js

Browser-local project preferences shared by Data and Manage. Notable exports:
`isProjectPinned`, `toggleProjectPin`, `subscribeProjectPins`.

[`space_ui/js/core/project-pins.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/project-pins.js) · code · 1706 bytes

### project-root.js

The root picker reads graph metadata independently of the canvas engine. Notable exports:
`rootRecords`, `rootMatches`, `createProjectRootPicker`.

[`space_ui/js/core/project-root.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/project-root.js) · code · 7174 bytes

### project-share.js

Inline project sharing. Forms stay mounted in their rows; a shared lock Notable exports:
`createProjectShare`, `isProjectSharing`.

[`space_ui/js/core/project-share.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/project-share.js) · code · 5291 bytes

### project-ui.js

Small, shared controls for project cards. Clipboard actions never toggle a Notable exports:
`copyButton`, `bindProjectUi`, `icon`.

[`space_ui/js/core/project-ui.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/project-ui.js) · code · 5835 bytes

### registry.js

View registry: maps primary sections to their default pages, assigns hotkeys Notable
exports: `registerView`, `switchTo`, `refreshCurrentView`, `startRegistry`.

[`space_ui/js/core/registry.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/registry.js) · code · 9211 bytes

### section-nav.js

Section navigation is shell chrome. Native links keep history, deep links Notable exports:
`setSectionActions`, `initSectionNav`.

[`space_ui/js/core/section-nav.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/section-nav.js) · code · 5348 bytes

### server-widget.js

Footer server pill: polls /space/server/status; when the API is offline it Notable exports:
`pollServer`, `initServerWidget`.

[`space_ui/js/core/server-widget.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/server-widget.js) · code · 1707 bytes

### setup-sections.js

One vocabulary for Setup navigation, status and URLs. The old agent and Notable exports:
`resolveSetupSection`, `setupSectionRoute`, `SETUP_STEPS`, `SETUP_MANAGE`, `SETUP_SECTIONS`.

[`space_ui/js/core/setup-sections.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/setup-sections.js) · code · 1302 bytes

### setup-state.js

Factual Setup summaries from /api/runtime-config. These describe settings, Notable exports:
`setupSteps`.

[`space_ui/js/core/setup-state.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/setup-state.js) · code · 3264 bytes

### shadcn.js

shadcn/ui markup builders for Space. Each function returns the HTML Notable exports:
`button`, `badge`, `card`, `table`, `sortHead`, `checkbox`, `label`, `toggleGroup`, and 19
more.

[`space_ui/js/core/shadcn.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/shadcn.js) · code · 21510 bytes

### store.js

Shared idempotency helpers. Not a data model — just the guards that make Notable exports:
`singleFlight`, `setSlottedInterval`, `clearSlottedInterval`.

[`space_ui/js/core/store.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/store.js) · code · 1073 bytes

### theme.js

Workspace preference, independent of branding and browser-local storage. Notable exports:
`loadTheme`, `saveTheme`, `DEFAULT_THEME`, `THEMES`.

[`space_ui/js/core/theme.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/theme.js) · code · 1130 bytes

### timeline-summary.js

Totals describe the mapped data in the selected lanes and date window. Notable exports:
`timelineSummary`.

[`space_ui/js/core/timeline-summary.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/timeline-summary.js) · code · 2179 bytes

### toolbar.js

The shell owns the input; views own their queries and filtering behavior. Notable exports:
`initToolbar`.

[`space_ui/js/core/toolbar.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/toolbar.js) · code · 4064 bytes

### ui.js

Shared UI helpers: the toast, the escape and relative-time helpers every Notable exports:
`toast`, `rel`, `pills`, `esc`.

[`space_ui/js/core/ui.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/ui.js) · code · 2255 bytes

### workspace.js

Workspace-wide rollups, in one request. Notable exports: `workspaceCounts`.

[`space_ui/js/core/workspace.js`](https://github.com/quirq-ai/xo-space/blob/main/space_ui/js/core/workspace.js) · code · 2968 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
