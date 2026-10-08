<!-- quirq-wiki-generated repo=ui dir=components/shapes/app-frames -->

# ui / components/shapes/app-frames

Source: [components/shapes/app-frames](https://github.com/quirq-ai/ui/tree/main/components/shapes/app-frames) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### _kit.tsx

Demo scaffolding for the app-frames category: mono captions, labelled specimens, section
heads and keyboard hints. Server-safe. Not exported from the category index. Notable
exports: `Caption`, `Specimen`, `DemoSection`, `DemoStack`, `Hint`, `isTypingTarget`,
`CAPTION`, `GRAIN_STYLE`, and 1 more.

[`components/shapes/app-frames/_kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/_kit.tsx) · code · 3273 bytes

### auth-screen-demo.tsx

const ORG = ORGANIZATIONS.find((o) => o.kind === "Org spaces")?.name ?? "Acme Robotics";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; const noop = () => {} Notable exports:
`AuthScreenDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/app-frames/auth-screen-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/auth-screen-demo.tsx) · code · 6441 bytes

### auth-screen.tsx

Sign-in screen: the account step before a hosted space loads. Black ground with grain, the
XO mark, a centered card (title, provider button, email field) and a theme toggle top right,
with the footnote that local Space use needs no account. Variants: sign in, sign up and the
org join request that is pending. States: idle, submitting, error, redirecting.

[`components/shapes/app-frames/auth-screen.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/auth-screen.tsx) · code · 11392 bytes

### console-shell-demo.tsx

import { CONNECTORS, COMMANDS, CURRENT_SPACE, INBOX, INBOX_NEW_COUNT, PEOPLE, PROJECTS,
RUNTIMES, SESSIONS, TODAY_LABEL, type ConnectorStatus, } from "@/lib/fixtures"; import {
CommandPalette, ConnectionPill, ConsoleFooter, ConsoleShell, ConsoleToast, ConsoleTopbar,
ServerStatusPill, SpaceMockTopbar, VisualizerTopbar, type ConnectionState, type ConsoleTab,
t Notable exports: `ConsoleShellDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/app-frames/console-shell-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/console-shell-demo.tsx) · code · 18838 bytes

### console-shell.tsx

Space console shell: the XO Space dashboard chrome. A 58px top bar (XO mark, primary tabs,
search trigger and resource links), the active view, and a 42px footer with the server pill
and map stats. Also the two sibling top bars that share the pattern: the projects visualizer
bar (lens tabs, connection pill, refresh) and the landing Space mock bar. Every piece is
prop driven; the demo feeds fixtures.

[`components/shapes/app-frames/console-shell.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/console-shell.tsx) · code · 31135 bytes

### docking-workspace-demo.tsx

const SPACE = SPACE_BY_ID["ws_7f3a9c21e4b0"] Notable exports: `DockingWorkspaceDemo`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/app-frames/docking-workspace-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/docking-workspace-demo.tsx) · code · 5025 bytes

### docking-workspace.tsx

Docking workspace: panes side by side, tmux style. The chat is a pinned column that is never
closed or dropped into; views open from the one Views menu and dock to its right as tabsets.
Tabs drag between tabsets (or onto a "Split right" zone), 6px splitters resize the columns
by pointer or arrow keys, and the layout persists per browser, coming back as "Layout
restored". On a phone the same panes take turns in one tabset behind a strip.

[`components/shapes/app-frames/docking-workspace.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/docking-workspace.tsx) · code · 25414 bytes

### embedded-frame-demo.tsx

import { AppIframePane, BridgeReadout, BrowserNewTab, BrowserTabStrip, BrowserToolbar,
SourceFrame, TelescopeBar, type AppPaneState, type BrowserTabInfo, } from "./embedded-
frame"; const noop = () => {} Notable exports: `EmbeddedFrameDemo`. Marked `'use client'` so
it runs in the browser.

[`components/shapes/app-frames/embedded-frame-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/embedded-frame-demo.tsx) · code · 25795 bytes

### embedded-frame.tsx

Embedded app frame: one app at its own origin under a bar. TelescopeBar is galileo's bar
(brand, source switcher with up or down dots, path field, reload, open in a tab, Sources);
SourceFrame is the full-bleed, white-backed area a source renders in, kept alive while
hidden; BridgeReadout shows what the in-frame bridge reports.

[`components/shapes/app-frames/embedded-frame.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/embedded-frame.tsx) · code · 18335 bytes

### glyphs.tsx

Lucide glyph lookup for fixture records that name an icon by string (PHONE_APPS, COMMANDS,
INBOX). Server-safe. Unknown names fall back to a neutral app glyph. Notable exports:
`glyphFor`, `Glyph`.

[`components/shapes/app-frames/glyphs.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/glyphs.tsx) · code · 1485 bytes

### hud-cockpit-demo.tsx

const SPACE_PROJECTS = PROJECTS.filter((p) => p.spaceId === CURRENT_SPACE.id); const
SAMPLE_PROJECTS = PROJECTS.filter((p) => p.category === "Engineering").slice(0, 4) Notable
exports: `HudCockpitDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/app-frames/hud-cockpit-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/hud-cockpit-demo.tsx) · code · 8482 bytes

### hud-cockpit.tsx

HUD cockpit frame: Space Drift's full-bleed canvas between a HUD header (88px, 70px on
narrow frames, with the brand, connection, Connect folder, source link and help) and a 54px
footer (coordinates, scan note, Atlas with its M key, pause). M opens the atlas while focus
is in the cockpit and Escape pauses the flight. The starfield is seeded, so render is
deterministic.

[`components/shapes/app-frames/hud-cockpit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/hud-cockpit.tsx) · code · 17054 bytes

### index.tsx

App frames: composite shells that hold everything else. Reusable frames live beside their
demos and are re-exported at the bottom so a sample app can import them from one place.
Notable exports: `shapes`, `CommandPalette`, `ConnectionPill`, `ConsoleBrand`,
`ConsoleFooter`, `ConsoleShell`, `ConsoleTabs`, `ConsoleToast`, and 76 more.

[`components/shapes/app-frames/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/index.tsx) · code · 5080 bytes

### menu.tsx

Menu: a small accessible dropdown used by the frames (Views menu, theme toggle, server
popover triggers). The trigger is a button with aria-haspopup and aria-expanded; the list is
role="menu". Arrow keys move, Home and End jump, Escape closes and returns focus, Tab and a
click outside close it. Notable exports: `Menu`, `MenuEntry`, `MenuProps`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/app-frames/menu.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/menu.tsx) · code · 7511 bytes

### mini-apps.tsx

Small app bodies that the frames host: chat, files, galileo sources, usage, inbox, terminal,
projects, issue board and a compact Space dashboard. Each is prop driven with fixture
defaults so the demos can drop them into a phone, a docked pane or an embedded frame.
Server-safe: no hooks. Notable exports: `MiniChat`, `MiniFiles`, `MiniSources`, `MiniUsage`,
`MiniInbox`, `MiniTerminal`, `MiniProjects`, `MiniIssueBoard`, and 2 more.

[`components/shapes/app-frames/mini-apps.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/mini-apps.tsx) · code · 14759 bytes

### phone-frame-demo.tsx

import { PhoneAppFrame, PhoneBody, PhoneHomeScreen, ResizablePhone, TABLET_WIDTH, type
PhoneAppState, } from "./phone-frame"; const TIME = "09:41" Notable exports: `phoneAppBody`,
`PhoneFrameDemo`, `PHONE_APP_TITLE`. Marked `'use client'` so it runs in the browser.

[`components/shapes/app-frames/phone-frame-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/phone-frame-demo.tsx) · code · 7571 bytes

### phone-frame.tsx

Phone frame: a space shown as a phone. A rounded body with an iOS status bar, a wallpaper, a
home screen of apps with a dock, and the in-phone app frame (back, title, reload, new tab)
that loads an app inside the phone. ResizablePhone adds the drag edges (pointer and
keyboard), the expand toggle and the "370 px · phone" readout while dragging. Past 448 px
the screen's container query swaps in the tablet wallpaper and a wider grid.

[`components/shapes/app-frames/phone-frame.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/phone-frame.tsx) · code · 20144 bytes

### sidebar-app-shell-demo.tsx

import { CURRENT_USER, ORGANIZATIONS, PEOPLE, PHONE_APPS, PRICING_NOTE, PRICING_PLANS,
SPACES, SPACE_BY_ID, type Space, type SpaceStatus, } from "@/lib/fixtures"; import {
AppSidebarNav, PaywallGate, ScopeSwitcher, ShellBreadcrumb, SidebarAppShell, SpaceSplitView,
type SidebarNavGroup, type SidebarRenderState, } from "./sidebar-app-shell" Notable exports:
`SidebarAppShellDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/app-frames/sidebar-app-shell-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/sidebar-app-shell-demo.tsx) · code · 11860 bytes

### sidebar-app-shell.tsx

Sidebar app shell: the XO Swarm frame. A collapsible sidebar (full, icon rail, or an off-
canvas sheet on narrow frames), a 64px header with the toggle, breadcrumb and Share space,
and the content area. SpaceSplitView divides a running space into its info column and the
app panel with a draggable, keyboard operable handle; when both minimum widths no longer fit
(measured, not a media query) it becomes an Open apps / Exit apps toggle.

[`components/shapes/app-frames/sidebar-app-shell.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/app-frames/sidebar-app-shell.tsx) · code · 19825 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
