<!-- quirq-wiki-generated repo=ui dir=components/shapes/cards -->

# ui / components/shapes/cards

Source: [components/shapes/cards](https://github.com/quirq-ai/ui/tree/main/components/shapes/cards) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### _demo.tsx

Demo scaffolding for the cards category: mono captions, labelled specimens and section
heads. Server-safe. Not exported from the category index. Notable exports: `Caption`,
`Specimen`, `DemoSection`, `DemoStack`, `CAPTION`.

[`components/shapes/cards/_demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/_demo.tsx) · code · 1833 bytes

### _hooks.ts

Client hooks shared by the cards demos. Import only from "use client" files. Notable
exports: `useLater`. Marked `'use client'` so it runs in the browser.

[`components/shapes/cards/_hooks.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/_hooks.ts) · code · 580 bytes

### bento-demo.tsx

type TileSpec = { key: string; caption: string; wide: boolean; title: string; copy: string;
vizAlign: "bottom" | "center"; viz: ReactNode } Notable exports: `BentoGridDemo`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/cards/bento-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/bento-demo.tsx) · code · 3606 bytes

### bento.tsx

Bento grid: BentoGrid (3 columns, wide tiles span 2) and BentoTile (glass tile with title,
copy and a bottom visualization), plus the tile visualizations from the landing bento,
redrawn as inline SVG in neutral greys with green kept for success. Server-safe. Notable
exports: `BentoGrid`, `BentoTile`, `ScalingViz`, `DeployStepsViz`, `ContextViz`, `CostViz`,
`RuntimeViz`, `RadarViz`, and 3 more.

[`components/shapes/cards/bento.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/bento.tsx) · code · 10675 bytes

### billing-demo.tsx

const dmy = (iso: string) => formatDate(iso, { withYear: true, weekday: false }); const
PERIOD = ${dmy("2026-10-02T00:00:00Z")} to ${dmy(BILLING.nextInvoiceAt)} Notable exports:
`BillingDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/cards/billing-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/billing-demo.tsx) · code · 11692 bytes

### billing.tsx

Billing summary cards: SubscriptionSummary (key and value rows with the subscription state
chip), BillingNotice (org-managed, redundant plan and billing issue notices), UpgradeSummary
(proration lines, subtotal and total with one confirm), PaymentMethodCard (card row with a
kebab menu) and PaymentMethodsEmpty. Server-safe; CardMenu brings its own client boundary.

[`components/shapes/cards/billing.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/billing.tsx) · code · 12856 bytes

### card-menu.tsx

CardMenu: a small action menu for card corners and header controls (kebab, "Space apps",
"Connections"). Button with aria-haspopup, a role=menu list, arrow keys and Home/End move
focus, Escape and outside clicks close it and return focus to the trigger. Notable exports:
`CardMenu`, `CardMenuItem`, `CardMenuProps`. Marked `'use client'` so it runs in the
browser.

[`components/shapes/cards/card-menu.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/card-menu.tsx) · code · 6221 bytes

### connector-cards.tsx

Connector cards: ConnectorCard (app tile, name and auth, status chip and account, one
primary action, Actions and Polling drawers), NativeConnectorCard (built-in connectors with
their own sign-in body: device code, remotes) and TelemetrySourceCard (a telemetry source,
not a connector: collect switch, stats band, editable path band).

[`components/shapes/cards/connector-cards.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/connector-cards.tsx) · code · 17191 bytes

### connector-demo.tsx

const LOGO: Record = { github: "github", linear: "linear", slack: "slack", gmail: "gmail",
notion: "notion", googledrive: "google-drive", whatsapp: "whatsapp", vercel: "vercel", }
Notable exports: `ConnectorCardDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/cards/connector-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/connector-demo.tsx) · code · 11719 bytes

### control-cards.tsx

Space control cards: SpaceControlCard (runtime banner, name and type, auto-stop timer, trial
notice, status pill, Start, Stop, Open space, update), SpaceHeaderControls (status and API
pills, Start or Stop, Space apps and Connections menus), RemoteSessionControl,
ServerUpdateCard (check, update, restart) and WatcherPanel (live watcher pulse).

[`components/shapes/cards/control-cards.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/control-cards.tsx) · code · 26108 bytes

### control-demo.tsx

import { RemoteSessionControl, ServerUpdateCard, SpaceControlCard, SpaceControlMessage,
SpaceHeaderControls, WatcherPanel, type ApiState, type SpaceLifecycle, type UpdateState, }
from "./control-cards"; const OPS = SPACE_BY_ID["ws_7f3a9c21e4b0"]; const PILOT =
SPACE_BY_ID["ws_e5d7b302"]; const SANDBOX = SPACE_BY_ID["ws_c40e19aa"]; const logo = (id:
string) = Notable exports: `ControlCardDemo`.

[`components/shapes/cards/control-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/control-demo.tsx) · code · 12915 bytes

### editorial-demo.tsx

const d = (iso: string) => formatDate(iso, { withYear: true, weekday: false }) Notable
exports: `EditorialCardDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/cards/editorial-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/editorial-demo.tsx) · code · 9250 bytes

### editorial.tsx

Editorial and topic cards: Thumb (generated prism art, no remote images), EditorialCard
(static article card, or a whole-card link with an optional CTA footer), FeaturedStory
(banner plus lead copy), ToolLinkCard (whitepaper cover or calculator viz) and WikiTopicCard
(docs topic with two actions). Server-safe.

[`components/shapes/cards/editorial.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/editorial.tsx) · code · 14299 bytes

### feature-cards-client.tsx

Interactive feature cards: InstallCard (glass card with a copyable install command and non-
interactive launcher tiles) and the org gate trio OrgCreateCard, OrgJoinCard and
OrgPendingCard. Busy and error states are props so the parent owns the flow.

[`components/shapes/cards/feature-cards-client.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/feature-cards-client.tsx) · code · 9919 bytes

### feature-cards.tsx

Feature, launcher and route cards: FeatureCard (icon, title, one line, one CTA),
LauncherTile (app launcher tile with Open), StepRow and BenefitCard (org onboarding) and
PaperFeatureCard (light cards inside a galileo-served sample app). Server-safe; every card
carries exactly one action and is never itself a link.

[`components/shapes/cards/feature-cards.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/feature-cards.tsx) · code · 6687 bytes

### feature-demo.tsx

import { ArrowRight, Bot, Brain, Building2, Cpu, FolderGit2, FolderOpen, Hash, HardDrive,
Laptop, Network, RadioTower, Rocket, ShieldCheck, UserPlus, Workflow, } from "lucide-react";
type Route = { key: string; icon: ReactNode; kicker: string; tone: "blu" | "grn" | "org";
title: string; description: string; cta: string } Notable exports: `FeatureCardsDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/cards/feature-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/feature-demo.tsx) · code · 14032 bytes

### hud-demo.tsx

/* seeded starfield: same dots on server and client */ const STARS = (() => { const r =
mulberry32(2026); return Array.from({ length: 90 }, () => ({ x: r() * 1000, y: r() * 560, s:
r() f.node) .filter((n) => n.type === "file" && n.size > 0) .slice(0, 8) Notable exports:
`HudPanelsDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/cards/hud-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/hud-demo.tsx) · code · 11926 bytes

### hud-panels.tsx

HUD instrument panels for the space-drift visualizer: HudPanel (glass instrument shell),
MissionPanel (expedition counter, ring and progress), DemoMissionHud (objectives with
playing, celebrating and complete phases), WorldSignaturePanel, FileSignalPanel, HudNote
(tour note and activity line) and CourseChip. Server-safe; keys and state live in the
parent.

[`components/shapes/cards/hud-panels.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/hud-panels.tsx) · code · 15057 bytes

### index.tsx

export const shapes: Shape[] = [ { id: "panel-surface", name: "Glass card and soft panel",
purpose: "Base containers: glass for featured, soft for default.", seenIn: ["landing:glass-
card", "landing:soft-panel", "space-ui:card-surface", "client:section-card", "viz:category-
info-panel"], variants: ["glass", "soft", "setup card", "section card", "info panel"]
Notable exports: `shapes`.

[`components/shapes/cards/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/index.tsx) · code · 6413 bytes

### pricing-demo.tsx

type PlanSpec = { id: "basic" | "pro" | "business"; name: string; subtitle: string; monthly:
number; annual: number; features: PlanFeature[] } Notable exports: `PricingDemo`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/cards/pricing-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/pricing-demo.tsx) · code · 11041 bytes

### pricing.tsx

Pricing plan cards: PricingTierCard (marketing tier: name and tier tag, amount /mo, arrow
bullets, one CTA, free note) and PlanCard (billing app plan with a trial badge, billed
annually switch, feature checks and a CTA that follows the subscription state), plus
PlanCardSkeleton. Server-safe; handlers come from the parent.

[`components/shapes/cards/pricing.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/pricing.tsx) · code · 11342 bytes

### project-card-demo.tsx

import { GALILEO_SOURCES, ORBIT_CATEGORIES, PEOPLE, PROJECTS, PROJECT_STAGES, SESSIONS,
TODOS, ACTIVITY, USAGE_DAILY, USAGE_SUMMARY, seededSeries, type Project, } from
"@/lib/fixtures"; const CAT_COLOR = Object.fromEntries(ORBIT_CATEGORIES.map((c) => [c.id,
var(--${c.color})])) as Record; const P = (id: string) => PROJECTS.find((p) => p.id ===
id)!; const na Notable exports: `ProjectCardDemo`.

[`components/shapes/cards/project-card-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/project-card-demo.tsx) · code · 17602 bytes

### project-cards.tsx

Project and app cards: ProjectCard (org board grid card that opens a project), its skeleton,
ManageProjectCard (pin, expand, copy, activity, share, GitHub, remove), CommandCard
(visualizer carousel card with metrics and a sparkline), RolloutCard (stage segments,
expandable), RepoLinkCard and GatewayAppCard (galileo app with versions). Server-safe; state
lives in the parent.

[`components/shapes/cards/project-cards.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/project-cards.tsx) · code · 21803 bytes

### project-detail-demo.tsx

const galileo = PROJECT_BY_ID["galileo"]; const owner = PEOPLE[galileo.owner].name; const
peers = galileo.peers.map((id) => PEOPLE[id].name); const created = formatDate(minutesAgo(25
* 1440), { withYear: true, weekday: false }) Notable exports: `ProjectDetailDemo`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/cards/project-detail-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/project-detail-demo.tsx) · code · 6989 bytes

### project-detail.tsx

Project detail header: identity (folder tile, title, badge, description), Owner, Shared with
and Created tiles, and a manifest list. Pane and phone block layouts; loading, gone and
error states. Share opens a panel the parent renders. Server-safe. Notable exports:
`ProjectDetailHeader`, `ProjectDetailState`, `ProjectDetailHeaderProps`.

[`components/shapes/cards/project-detail.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/project-detail.tsx) · code · 7309 bytes

### reveal.tsx

Scroll-reveal stand-ins for the catalog: RevealItem rises 24px over 1s on the quirq ease
with a per-item stagger, and useReplay hides then reveals a group so the motion can be seen
on demand. Reduced motion is honored by the global transition clamp. Notable exports:
`useReplay`, `RevealItem`, `ReplayButton`, `RevealItemProps`. Marked `'use client'` so it
runs in the browser.

[`components/shapes/cards/reveal.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/reveal.tsx) · code · 1964 bytes

### runtime-cards.tsx

Agent runtime cards: RuntimeMarketCard (logo banner, name and tag, powered by, setup level,
features, Create space), RuntimePickerCard (Overview and Details tabs), TemplateCard
(available or coming soon) and RuntimeSetupRow (selectable row with an agent details
disclosure). SkillLevel and RuntimeBanner are exported for reuse.

[`components/shapes/cards/runtime-cards.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/runtime-cards.tsx) · code · 16959 bytes

### runtime-demo.tsx

const logoFor = (id: FixtureRuntimeId): LogoId => (id === "gemini_cli" ? "gemini" : id)
Notable exports: `AgentRuntimeDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/cards/runtime-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/runtime-demo.tsx) · code · 13468 bytes

### surfaces-demo.tsx

import { ACTIVITY, CURRENT_SPACE, ORBIT_CATEGORIES, PROJECTS, QUIRQ_READINGS, RUNTIME_BY_ID,
SECRETS, SPACES, } from "@/lib/fixtures"; const reading = QUIRQ_READINGS[0] Notable exports:
`PanelSurfaceDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/cards/surfaces-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/surfaces-demo.tsx) · code · 16145 bytes

### surfaces.tsx

Base containers for the cards category: GlassCard (featured surfaces), SoftPanel (the
default flat panel), SetupCard (app card with a head band), SectionCard (client section
card) and CategoryInfoPanel (visualizer side panel). Server-safe; none of them is a link.
Notable exports: `GlassCard`, `SoftPanel`, `SetupCard`, `SectionCard`, `CategoryInfoPanel`,
`GlassCardProps`, `SoftPanelProps`, `SurfaceStatusTone`, and 4 more.

[`components/shapes/cards/surfaces.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/cards/surfaces.tsx) · code · 9812 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
