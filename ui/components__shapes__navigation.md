<!-- quirq-wiki-generated repo=ui dir=components/shapes/navigation -->

# ui / components/shapes/navigation

Source: [components/shapes/navigation](https://github.com/quirq-ai/ui/tree/main/components/shapes/navigation) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### account-menu-demo.tsx

const USER = { name: CURRENT_USER.name, email: CURRENT_USER.email }; const ACTION_WORDS:
Record = { account: "Opened Your account", billing: "Opened Billing", "sign-out": "Signed
out" } Notable exports: `AccountMenuDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/navigation/account-menu-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/account-menu-demo.tsx) · code · 6687 bytes

### account-menu.tsx

Account menu: who is signed in, plus Your account, Billing, a Theme item that cycles Light,
Dark and System without closing, and Sign out. Three triggers: the sidebar footer row, the
collapsed sidebar avatar and the top-right avatar. Signed out shows Sign in; loading shows a
skeleton matched to the trigger.

[`components/shapes/navigation/account-menu.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/account-menu.tsx) · code · 6468 bytes

### address-bar-demo.tsx

/* ------------------------------------------------------------------ telescope */ Notable
exports: `AddressBarDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/navigation/address-bar-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/address-bar-demo.tsx) · code · 10281 bytes

### address-bar.tsx

Where a framed app is, and how to move it: PathField mono path or address input: focus
selects, Enter navigates, Esc reverts, typing is never overwritten by updates while focused,
invalid state TelescopeBar galileo's 48px bar: brand, source switcher, path, reload, open ↗,
Sources BrowserToolbar back, forward, reload, address and open in a real tab BrowserTabStrip
tabs with a 3/8 count, unloaded and loading tabs, close and new tab Notable exports

[`components/shapes/navigation/address-bar.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/address-bar.tsx) · code · 15733 bytes

### breadcrumb-demo.tsx

const SESSION = SESSION_BY_ID["df1a1a5b"]; const ORG = ORGANIZATIONS[1]; const OPS =
SPACE_BY_ID["ws_7f3a9c21e4b0"] Notable exports: `BreadcrumbDemo`. Marked `'use client'` so
it runs in the browser.

[`components/shapes/navigation/breadcrumb-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/breadcrumb-demo.tsx) · code · 10345 bytes

### breadcrumb.tsx

Breadcrumbs: path context from space to section to item.

[`components/shapes/navigation/breadcrumb.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/breadcrumb.tsx) · code · 10964 bytes

### carousel-demo.tsx

import { ArrowRight, ChartColumn, Folder, FolderKanban, GitPullRequest, Hash, Inbox,
MessageSquare, NotebookPen, Settings2, SquareKanban, SquareTerminal, Telescope, } from
"lucide-react"; /* ------------------------------------------------------------------ rail
cards */ Notable exports: `CarouselDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/navigation/carousel-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/carousel-demo.tsx) · code · 12540 bytes

### carousel.tsx

Carousels for browsing cards sideways: SnapRail scroll-snap rail with ← → buttons that
disable at the start and end Coverflow 3D command center carousel: wraparound, front card
glow, dimmed side cards, arrows, dots, arrow keys and swipe PageDots page indicator buttons
(phone home screen, onboarding) SwipePages pages that slide under the dots, with swipe and
arrow keys Motion is transform-only and the global reduced-motion rule collapses it.

[`components/shapes/navigation/carousel.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/carousel.tsx) · code · 13467 bytes

### demo-data.ts

Demo-only data derived from the shared fixtures. Components never import this file. Notable
exports: `logoFor`, `ROOT_OPTIONS`, `ResearchCategory`, `RESEARCH_POSTS`.

[`components/shapes/navigation/demo-data.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/demo-data.ts) · code · 3071 bytes

### demo-kit.tsx

Layout helpers shared by the navigation demos: mono captions, labelled cells and responsive
grids. Server-safe; no hooks. Notable exports: `Caption`, `DemoCell`, `DemoGrid`,
`DemoStack`, `Surface`, `Readout`, `DemoCellProps`.

[`components/shapes/navigation/demo-kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/demo-kit.tsx) · code · 2986 bytes

### dock-demo.tsx

import { ArrowDown, ArrowDownToLine, ArrowLeft, ArrowRight, ArrowUp, ArrowUpToLine,
ChartColumn, Crosshair, Folder, FolderKanban, Globe, KeyRound, Layers, LayoutDashboard,
OctagonPause, PlaneLanding, Route, Satellite, Settings2, SlidersHorizontal, SquareKanban, }
from "lucide-react"; const APPS: DockApp[] = [ { id: "overview", label: "Overview", href:
"/setu Notable exports: `DockDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/navigation/dock-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/dock-demo.tsx) · code · 9066 bytes

### dock.tsx

Docks and action bars: GlassDock liquid glass dock of app tiles (Overview, Files, Secrets,
Usage); springy hover; disabled as a whole when the space API is down (links stop working)
NavigatorDock floating dock: the space crumb, pinned module tabs, then closable project
tabs; arrow keys move between tabs, middle-click closes an opened tab ActionBar HUD action
pills with key badges (Land L, Overlay G, Tours T, Details) TouchPad round touch controls

[`components/shapes/navigation/dock.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/dock.tsx) · code · 13708 bytes

### index.tsx

Navigation: nav bars, tabs, sidebars, crumbs, pagers, docks and switchers. Reusable pieces
live beside their demos and are re-exported at the bottom for sample apps. Notable exports:
`shapes`, `TopNav`, `MachineSpeedHead`, `ThirdPartyHeader`, `SiteFooter`,
`MachineSpeedFooter`, `MachineSpeedBars`, `SOCIAL_GLYPHS`, and 68 more.

[`components/shapes/navigation/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/index.tsx) · code · 10041 bytes

### inline-links-demo.tsx

const LADDER: Rung[] = [ { num: "01", title: "Managed environment", desc: "We host and run
it. Deploy in a click.", href: "#env", tone: "grn" }, { num: "02", title: "Self-hosted
install", desc: "One command. Open source. Your hardware.", href: "#cli", tone: "blu" }, {
num: "03", title: "Licensed", desc: "The managed product on your estate, your brand.", href
Notable exports: `InlineLinksDemo`.

[`components/shapes/navigation/inline-links-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/inline-links-demo.tsx) · code · 5315 bytes

### inline-links.tsx

Quiet secondary navigation with arrows. Server-safe; every hover is CSS.

[`components/shapes/navigation/inline-links.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/inline-links.tsx) · code · 7301 bytes

### load-more-demo.tsx

const PAGE = 8 Notable exports: `LoadMoreDemo`. Marked `'use client'` so it runs in the
browser.

[`components/shapes/navigation/load-more-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/load-more-demo.tsx) · code · 7420 bytes

### load-more.tsx

Extending a list in place, without paging: LoadMoreRow full-width quiet row: "Load older
activity · 22 more ↓", "Loading…", end of list ExpandToggle chip that shows more or fewer:
"Read more news ↓" / "Show fewer news ↑" Disclosure "Other agents (2)" row that reveals
hidden items Callers append rows and move focus to the first new one (see useFocusOnChange).

[`components/shapes/navigation/load-more.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/load-more.tsx) · code · 5099 bytes

### menu.tsx

Menu primitives for the navigation shapes: DropdownMenu (a button that opens a role=menu
panel; arrow keys, Home and End move, Escape closes and returns focus, Tab and outside
clicks close), MenuItem, MenuGroup, MenuSeparator, and useDismiss for disclosure popovers
that are not menus (nav dropdowns, pickers with a search field).

[`components/shapes/navigation/menu.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/menu.tsx) · code · 12239 bytes

### pagination-demo.tsx

const post = (slug: string): PagerLink => { const p = RESEARCH_POSTS.find((x) => x.slug ===
slug) ?? RESEARCH_POSTS[0]; return { title: p.title, href: /research/${p.slug} }; } Notable
exports: `PaginationDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/navigation/pagination-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/pagination-demo.tsx) · code · 6081 bytes

### pagination.tsx

Pagination for tables and articles: Pagination ‹ Previous 1 … 3 [4] 5 … 12 Next › with an
optional PAGE 4 OF 12 summary; labels hide under 640px; disabled ends use aria-disabled
TablePager Rows per page [10] · Page 1 of 3 · first, previous, next, last PrevNextPager
previous and next article cards with a nudging chevron pageRange the numbers and ellipses to
show for a page Paging is client state: callers slice data they already hold, nothing

[`components/shapes/navigation/pagination.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/pagination.tsx) · code · 9777 bytes

### scope-switcher-demo.tsx

const FOOTER = { label: "Add or remove sources", href: "/sources" }; const PORTS_ONLY =
GALILEO_SOURCES.filter((s) => s.type === "port").slice(0, 3) Notable exports:
`ScopeSwitcherDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/navigation/scope-switcher-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/scope-switcher-demo.tsx) · code · 5365 bytes

### scope-switcher.tsx

Source and root switchers: SourceSwitcher galileo's "● acme ▾" button and its grouped menu
(Ports, then Files), with loading, empty and single-group states and an "Add or remove
sources" footer SourceMenu the menu panel on its own, so states can be shown inline
GraphRootPicker the space dashboard's "GRAPH ROOT Categories ▾" picker: a combobox with
search, match highlighting, loading, error and no-match states, and a reset Arrow keys move

[`components/shapes/navigation/scope-switcher.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/scope-switcher.tsx) · code · 17689 bytes

### segmented-demo.tsx

type Section = "projects" | "agents" | "inbox" | "setup" Notable exports: `SegmentedDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/navigation/segmented-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/segmented-demo.tsx) · code · 11466 bytes

### segmented.tsx

Segmented controls and tabs that switch a view in place: PillTabs primary section tabs with
count badges, 1 to 9 keys, scrollable strip SubNav underline sub-nav with an actions slot;
wraps to two rows on narrow frames LensSwitch tinted segment links for data views (List |
Graph | Tree, By file | By project) ToggleGroup joined outline toggles (Today | 7 days | 30
days | All), optional counts ViewTabs uppercase visualizer tabs with a bone active segment

[`components/shapes/navigation/segmented.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/segmented.tsx) · code · 17153 bytes

### sidebar-nav-demo.tsx

import { BookOpen, Bug, Building2, ChartPie, CreditCard, House, KeyRound, PanelLeftClose,
PanelLeftOpen, Plug, Settings2, TriangleAlert, UserRound, Users, } from "lucide-react";
import { SettingsNav, SetupStepper, Sidebar, SidebarCreateButton, SidebarEmptyRow,
SidebarGroup, SidebarItem, SidebarScopeSwitcher, SidebarSkeleton, SidebarSpaceItem,
SidebarThemeBut Notable exports: `SidebarNavDemo`.

[`components/shapes/navigation/sidebar-nav-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/sidebar-nav-demo.tsx) · code · 13826 bytes

### sidebar-nav.tsx

Sidebar and section nav: Sidebar aside shell with header, scrolling nav and footer;
collapses to a 56px icon rail SidebarScopeSwitcher Personal spaces / Org spaces tile with a
radio menu SidebarGroup labelled group; the label hides in the icon rail SidebarItem link
row: lime bar and gradient when current, tooltip when collapsed SidebarSpaceItem space row
with its runtime logo and a kebab (Copy space ID, Delete space) SidebarCreateButton "+ New

[`components/shapes/navigation/sidebar-nav.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/sidebar-nav.tsx) · code · 24719 bytes

### site-footer-demo.tsx

const COLUMNS: FooterColumn[] = [ { title: "Site", links: [ { label: "Products", href:
"/products" }, { label: "Research", href: "/research" }, { label: "Writings", href:
"/writings" }, ], }, { title: "Product", links: [ { label: "Get started", href: "/get-
started" }, { label: "Whitepaper", href: "/whitepaper" }, { label: "Hours-back calculator",
href: "/cal Notable exports: `SiteFooterDemo`.

[`components/shapes/navigation/site-footer-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/site-footer-demo.tsx) · code · 3574 bytes

### site-footer.tsx

Site footer: closes every page with the wordmark, a mono tagline, link columns, the spectrum
hairline (the only color in the footer) and a copyright row. Also the Machine Speed sub-
brand footer. Server-safe; hover states are CSS only. Notable exports: `SiteFooter`,
`MachineSpeedBars`, `MachineSpeedFooter`, `FooterLink`, `FooterColumn`, `FooterSocial`,
`SiteFooterProps`, `MachineSpeedFooterProps`, and 1 more.

[`components/shapes/navigation/site-footer.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/site-footer.tsx) · code · 7358 bytes

### tab-chips-demo.tsx

const NOTES = RESEARCH_POSTS; const TOPICS: ResearchCategory[] = ["foundations",
"accounting", "evidence", "experiments"]; const count = (t: ResearchCategory) =>
NOTES.filter((n) => n.category === t).length Notable exports: `TabChipsDemo`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/navigation/tab-chips-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/tab-chips-demo.tsx) · code · 8679 bytes

### tab-chips.tsx

Filter chips that narrow a list in place, with counts: FilterChips mono uppercase chips;
"pill" (ink fill when on, the quirq site filter), "source" (separate pills, ink border when
on), "year" (radius 6 chips) StatusTrack joined OPEN | DONE | ALL track with a filled active
segment CategoryTabs underline tabs tinted by each category's color NavPill galileo's lime
"Sources" pill link with aria-current Single select.

[`components/shapes/navigation/tab-chips.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/tab-chips.tsx) · code · 10800 bytes

### top-nav-demo.tsx

const PRODUCTS: TopNavMenuItem[] = [ { label: "XO Space", description: "Open-source
environment software that runs a space on your machine.", href: "#xo-space", tone: "blu" },
{ label: "XO Swarm", description: "Hosted management that launches and runs many spaces.",
href: "#xo-swarm", tone: "grn" }, { label: "Space Drift", description: "A visualizer that
dri Notable exports: `TopNavDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/navigation/top-nav-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/top-nav-demo.tsx) · code · 7373 bytes

### top-nav.tsx

Top nav: the fixed 64px glass bar from the quirq site (lockup, mono uppercase links, one
white pill CTA), with a Products disclosure menu, a collapsed mobile menu, the scrolled
style, the Machine Speed sub-brand head and the deliberately off-brand third-party header
that galileo frames. Container queries decide desktop vs mobile, so the bar works inside any
frame width, not just the viewport.

[`components/shapes/navigation/top-nav.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/navigation/top-nav.tsx) · code · 16807 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
