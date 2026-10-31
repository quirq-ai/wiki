<!-- quirq-wiki-generated repo=quirqy dir=src/ui -->

# quirqy / src/ui

Source: [src/ui](https://github.com/quirq-ai/quirqy/tree/quirq/src/ui) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### apps-launcher.css

Stylesheet `apps-launcher.css` for layout and visual treatment in this folder. Leading class
selectors include `repository-apps-heading`, `repository-apps-grid`. Defines or consumes CSS
custom properties (design tokens).

[`src/ui/apps-launcher.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/apps-launcher.css) · code · 1645 bytes

### apps-launcher.js

const GRID_ICON = ''; const PRESENTATION = { solar: { name: 'Solar system', colors:
['#c99246', '#895321'], icon: '' }, spm: { name: 'SPM mooring', colors: ['#438ca6',
'#24516b'], icon: '' }, math: { name: 'Equation lab', colors: ['#8e7ec0', '#514274'], icon:
'' }, earth: { name: 'Earth lab', colors: ['#489d89', '#245a50'], icon: '' }, light: { name:
'Light Notable exports: `mountAppsLauncher`.

[`src/ui/apps-launcher.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/apps-launcher.js) · code · 8657 bytes

### dock-disclosure.js

Pointer clicks wait briefly so the logo retains the shared double-click reset. Keyboard
activation is immediate; all controls keep their original DOM/state. Notable exports:
`mountDockDisclosure`.

[`src/ui/dock-disclosure.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/dock-disclosure.js) · code · 4819 bytes

### dock-material.css

Dock material contract: one inherited opacity for every painted surface. Scope is automatic
inside .panel-dock; detached menus use data-dock-material. Custom cards use data-dock-
surface and may set --dock-tint (RGB channels). Content, focus indicators and native
disabled/disclosure states stay readable. Defines or consumes CSS custom properties (design
tokens).

[`src/ui/dock-material.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/dock-material.css) · code · 6590 bytes

### dock-motion.js

Animate a decorative copy of the glass, never the live dock's dimensions. Dragging and
refraction both measure the real panel, so its layout stays still until disclosure commits
the final footprint. Notable exports: `createDockMotion`.

[`src/ui/dock-motion.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/dock-motion.js) · code · 2833 bytes

### dragPanel.js

Panels keep their CSS layout until moved. Saved positions are separate for desktop and
mobile so a desktop arrangement does not displace mobile sheets. Notable exports:
`makePanelDraggable`, `createRecDescFloater`.

[`src/ui/dragPanel.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/dragPanel.js) · code · 15072 bytes

### earthPanel.js

Earth Lab panel: interior layer explorer (PREM cutaway). Notable exports: `EarthPanel`.

[`src/ui/earthPanel.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/earthPanel.js) · code · 2907 bytes

### equationPanel.js

Equation Lab editor panel: presets, type switching, live expression editing with inline
errors, parameter sliders that morph the system while it runs, motion controls and a live
state readout. Notable exports: `EquationPanel`.

[`src/ui/equationPanel.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/equationPanel.js) · code · 31683 bytes

### floating-layout.css

Floating glass panels share small, discoverable grab handles.

[`src/ui/floating-layout.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/floating-layout.css) · code · 8721 bytes

### floating-layout.js

/** Attach shared floating behavior without tying it to a lab's scene lifecycle. */ export
function mountFloatingLayout() { const panels = new Map(); const watched = new Map(); const
dockIds = [...REPOSITORY_LABS.map(lab => lab.dockId), 'timebar', 'math-timebar']; let
repositoryControls = null Notable exports: `mountFloatingLayout`.

[`src/ui/floating-layout.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/floating-layout.js) · code · 7219 bytes

### fractalPanel.js

Fractals Lab panel: destinations, live explorer controls, probe, analysis. Notable exports:
`FractalPanel`.

[`src/ui/fractalPanel.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/fractalPanel.js) · code · 20749 bytes

### glass-refraction.js

const SVG_NS = 'http://www.w3.org/2000/svg'; const SURFACES = '.panel, #glass-appearance-
popover'; const MAX_MAP_SIZE = 512; const ROOT_TOKENS = ['--glass-blur', '--glass-
saturation', '--glass-refraction-index', '--glass-reflection']; const ownedSurfaces = new
Map(); const mountedManagers = new Set(); let nextFilterId = 0 Notable exports:
`registerGlassSurface`, `mountGlassRefraction`.

[`src/ui/glass-refraction.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/glass-refraction.js) · code · 9631 bytes

### glass-surfaces.css

Observatory glass surfaces. Opacity changes the material's fill and optical treatment, never
its content. Thin edge reflections remain visible when the glass is completely clear. The
popover ID also keeps this shared treatment above lazily loaded lab CSS. Defines or consumes
CSS custom properties (design tokens).

[`src/ui/glass-surfaces.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/glass-surfaces.css) · code · 11786 bytes

### gravityPanel.js

Gravity Lab panel: classical orbital presets + pedagogical quantum-gravity models, live
force-law controls, and particle-by-particle orbital analysis. Notable exports:
`GravityPanel`.

[`src/ui/gravityPanel.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/gravityPanel.js) · code · 17068 bytes

### lab.js

Physics lab panel: switches between the real ephemeris and the N-body experiment, exposes
the gravitational constant, trails, presets and a log. Notable exports: `LabPanel`.

[`src/ui/lab.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/lab.js) · code · 4645 bytes

### lightPanel.js

Light Lab panel: preset picker, live optical parameters, and a detailed ray-by-ray analysis
table with a per-ray event inspector. Notable exports: `LightPanel`.

[`src/ui/lightPanel.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/lightPanel.js) · code · 12794 bytes

### panel-appearance.css

Shared appearance control, kept beside each instrument's playback controls. Leading class
selectors include `glass-opacity-trigger`, `glass-opacity-value`, `glass-popover-heading`,
`glass-popover-icon`, `glass-popover-close`, `glass-opacity-label`, `glass-opacity-scale`,
`glass-popover-footer`, and 1 more. Defines or consumes CSS custom properties (design
tokens).

[`src/ui/panel-appearance.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/panel-appearance.css) · code · 8014 bytes

### panel-appearance.js

const STORAGE_KEY = 'quirq-observatory.panel-opacity.v1'; const DEFAULT_OPACITY = 62; const
ICON = ''; const OPACITY_APP_ICON = '' Notable exports: `mountPanelAppearance`.

[`src/ui/panel-appearance.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/panel-appearance.js) · code · 18243 bytes

### photoPanel.js

Photo Lab panel: photoelectric effect workbench + photosynthesis explorer. Notable exports:
`PhotoPanel`.

[`src/ui/photoPanel.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/photoPanel.js) · code · 14031 bytes

### repository-dock-apps.css

Small app tiles retain normal anchor behavior inside the shared glass dock. Defines or
consumes CSS custom properties (design tokens).

[`src/ui/repository-dock-apps.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/repository-dock-apps.css) · code · 9298 bytes

### repository-dock-apps.js

const APPS = [ { mode: 'data', label: 'Data Lab', name: 'Data', icon: '' }, { mode:
'activity', label: 'Activity Lab', name: 'Activity', icon: '' }, { mode: 'about', label:
'About · README', name: 'About', icon: '' }, ]; const ATTRIBUTES = ['class', 'aria-label',
'aria-current', 'data-repository-app', 'data-tooltip-dismissed'] Notable exports:
`mountRepositoryDockApps`.

[`src/ui/repository-dock-apps.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/repository-dock-apps.js) · code · 3890 bytes

### repository-github.css

The repository connection lives beside the other apps, using its original form. Defines or
consumes CSS custom properties (design tokens).

[`src/ui/repository-github.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/repository-github.css) · code · 5656 bytes

### repository-github.js

/** Present the lab's original repository connection controls in the dock. */ export
function mountRepositoryGithub(dock, panel, mode) { if (!dock || !panel ||
!REPOSITORY_LABS.some(lab => lab.mode === mode)) return null; const title =
panel.querySelector(#${mode}-source-kind)?.closest('.section-title'); const form =
panel.querySelector(#${mode}-source-form) Notable exports: `mountRepositoryGithub`.

[`src/ui/repository-github.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/repository-github.js) · code · 5667 bytes

### repository-labs.js

Shared controls register each repository page through the same small contract. Notable
exports: `REPOSITORY_LABS`.

[`src/ui/repository-labs.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/repository-labs.js) · code · 516 bytes

### repository-timeline.js

/** Move the existing playback controls into an independent dock disclosure. */ export
function mountRepositoryTimeline(dock, mode) { if (!dock || !REPOSITORY_LABS.some(lab =>
lab.mode === mode && lab.timeline)) return null; const controls = [#${mode}-prev,
#${mode}-play, '.t-mid', #${mode}-next, .${mode}-speed] .map(selector =>
dock.querySelector(:scope > $ Notable exports: `mountRepositoryTimeline`.

[`src/ui/repository-timeline.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/repository-timeline.js) · code · 5826 bytes

### repository-view-connection.js

Draw the view card's connector toward its existing active app link. Notable exports:
`mountRepositoryViewConnection`.

[`src/ui/repository-view-connection.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/repository-view-connection.js) · code · 1688 bytes

### repository-view-nav.css

App icons form the base; their original controls expand in the layer above.

[`src/ui/repository-view-nav.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/repository-view-nav.css) · code · 22240 bytes

### spmPanel.js

Time-Domain SPM-Tanker Mooring Simulator panel (full client spec). Modules: SPM · Tanker ·
Hawser/Tug · Master RK45. Stand-alone or coupled. Viz: 3D / 2D top-down. Export: CSV (Excel-
readable). Notable exports: `SpmPanel`.

[`src/ui/spmPanel.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/spmPanel.js) · code · 27234 bytes

### traceResults.js

Post-recording results panel: expected vs actual per point + download hooks. Notable
exports: `TraceResultsPanel`.

[`src/ui/traceResults.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/traceResults.js) · code · 5132 bytes

### ui.js

HUD: body navigator, info panel with live orbital stats, time controls, display settings and
keyboard shortcuts. Notable exports: `fmtMass`, `fmtExp`, `fmtKm`, `fmtAU`, `fmtRate`, `UI`.

[`src/ui/ui.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/ui/ui.js) · code · 42933 bytes

_Generated 2026-10-31 11:18 UTC from `quirq`._
