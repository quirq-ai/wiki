<!-- quirq-wiki-generated repo=ui dir=components/shapes/status-feedback -->

# ui / components/shapes/status-feedback

Source: [components/shapes/status-feedback](https://github.com/quirq-ai/ui/tree/main/components/shapes/status-feedback) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### badges-demo.tsx

import { AccountChip, ActionTag, ChipRow, FactChip, HttpChip, IntegrationChip, LabelPill,
MarkerTag, RuntimeChip, TierTag, } from "./badges" Notable exports: `BadgesDemo`.

[`components/shapes/status-feedback/badges-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/badges-demo.tsx) · code · 10959 bytes

### badges.tsx

Badges, tags and mono chips: small static labels for type, tier, role and count. Built on
the ui Badge and Count. Adds the product-specific chips: TierTag, MarkerTag, HttpChip,
IntegrationChip, ChipRow, LabelPill, FactChip, AccountChip, ActionTag and RuntimeChip. None
of these are interactive. Server-safe. Notable exports: `TierTag`, `MarkerTag`, `httpTone`,
`HttpChip`, `IntegrationChip`, `ChipRow`, `LabelPill`, `FactChip`, and 7 more.

[`components/shapes/status-feedback/badges.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/badges.tsx) · code · 8772 bytes

### dismissed-slot.tsx

Demo helper: stands in for a dismissed specimen so it can be brought back. It takes focus
when it appears, because the close button that was focused has just left the page. Notable
exports: `DismissedSlot`. Marked `'use client'` so it runs in the browser.

[`components/shapes/status-feedback/dismissed-slot.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/dismissed-slot.tsx) · code · 1234 bytes

### empty-state-demo.tsx

import { ArrowLeft, ChartNoAxesColumn, FilterX, FolderGit2, Inbox, MessageCircleDashed,
Network, Pin, Plus, Radio, ScrollText, ServerOff, TriangleAlert, Unplug, Users, Wrench, }
from "lucide-react"; type Pane = "empty" | "manage" | "start" Notable exports:
`EmptyStateDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/status-feedback/empty-state-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/empty-state-demo.tsx) · code · 15548 bytes

### empty-state.tsx

Empty states: explain the absence and offer the next step. EmptyState (dashed card or
placeholder well, icon tile, title, description, actions; default and sm; error tone),
EmptyLine (inline muted sentence), TwoUpEmpty (side-by-side onboarding cards that stack) and
OfflineState (the visualizer's full-view offline notice). Server-safe. Notable exports:
`EmptyState`, `EmptyLine`, `TwoUpEmpty`, `OfflineState`, `EmptyStateProps`, `TwoUpItem`.

[`components/shapes/status-feedback/empty-state.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/empty-state.tsx) · code · 6079 bytes

### error-boundary.tsx

ViewBoundary: a crash boundary around one view (a bulkhead). When the view throws while
rendering, the rest of the app keeps working and the view shows an ErrorPanel that names it,
reassures, and offers "Start <view> again". Notable exports: `ViewBoundary`,
`ViewBoundaryProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/status-feedback/error-boundary.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/error-boundary.tsx) · code · 2359 bytes

### error-state-demo.tsx

const LOAD_DETAIL = "GET /api/xo-projects → 500 Internal Server Error\nrequest_id
req_7f3a9c21\nat 09:29:58 UTC · space research-lab" Notable exports: `ErrorStateDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/status-feedback/error-state-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/error-state-demo.tsx) · code · 12251 bytes

### error-state.tsx

Error panel: say what failed, reassure that data is intact, offer one recovery action.
ErrorPanel covers load errors, crash fallbacks, failed maps and previews, a down space and
unsupported features, in error, retrying and recovered states, with an optional mono
"Technical details" disclosure and copy. The crash boundary is ViewBoundary in error-
boundary.tsx. Server-safe (CopyButton carries its own client boundary).

[`components/shapes/status-feedback/error-state.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/error-state.tsx) · code · 5408 bytes

### full-page-notice-demo.tsx

const host = (name: string) => http://${name}.localhost:${GALILEO.port}/ Notable exports:
`FullPageNoticeDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/status-feedback/full-page-notice-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/full-page-notice-demo.tsx) · code · 15733 bytes

### full-page-notice-live.tsx

Timers for full-page notices: useCountdown (result redirects), useAutoRefresh (galileo's
waiting page tries again every 2 s) and AutoRefreshLine (the visible "trying again" line).
Notable exports: `useCountdown`, `useAutoRefresh`, `AutoRefreshLine`. Marked `'use client'`
so it runs in the browser.

[`components/shapes/status-feedback/full-page-notice-live.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/full-page-notice-live.tsx) · code · 2655 bytes

### full-page-notice.tsx

Full-page notices and results: cover a whole view for 404, waiting, no data or a checkout
result. FullPageNotice (eyebrow, large title, explanation, command, actions), ResultCard
(icon well, title, body, countdown line, actions) and PageFrame (a mock browser viewport for
demos). Server-safe; the live countdown and auto-refresh are in full-page-notice-live.

[`components/shapes/status-feedback/full-page-notice.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/full-page-notice.tsx) · code · 6026 bytes

### index.tsx

export const shapes: Shape[] = [ { id: "status-dot", name: "Status dot and pill", purpose:
"One saturated mark for live, down or pending.", seenIn: [ "landing:status-dot",
"landing:dot-meter", "space-ui:status-dot-pip", "swarm:status-dot-pill", "galileo:status-
dot", "client:status-dot", "viz:connection-status-pill", ], variants: ["up/down/idle/busy",
"pulse" Notable exports: `shapes`.

[`components/shapes/status-feedback/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/index.tsx) · code · 5753 bytes

### loaders-demo.tsx

const LOGO: Record = { claude_code: "claude_code", codex: "codex", openclaw: "openclaw",
cursor: "cursor", hermes: "hermes", gemini_cli: "gemini" } Notable exports: `LoadersDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/status-feedback/loaders-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/loaders-demo.tsx) · code · 10614 bytes

### loaders.tsx

Skeletons and spinners matched to the shape they stand in for. RowSkeleton and ListSkeleton
(project rows 52px, inbox rows 44px), CardSkeleton, StatTileSkeleton, PillSkeleton,
OrbitLoader (visualizer ring with a mono caption), IosRing (spoked activity indicator) and
MotionFreeze (renders children as they look under reduced motion). Builds on the ui Skeleton
and Spinner. Server-safe; motion is CSS only.

[`components/shapes/status-feedback/loaders.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/loaders.tsx) · code · 6991 bytes

### parts.tsx

Demo scaffolding shared by the status-feedback demos: mono captions, labelled specimen cells
and titled groups. Server-safe, no hooks. Notable exports: `Caption`, `Specimen`,
`DemoGroup`, `DemoStack`, `captionCls`.

[`components/shapes/status-feedback/parts.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/parts.tsx) · code · 2440 bytes

### progress-demo.tsx

/* fixed step sizes so the run looks organic but plays the same every time */ const STEPS =
[6, 11, 4, 9, 13, 7, 3, 10, 8, 12, 5, 9, 3] Notable exports: `ProgressDemo`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/status-feedback/progress-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/progress-demo.tsx) · code · 9706 bytes

### progress.tsx

Progress: determinate or indeterminate completion. Linear bars come from the ui ProgressBar
(determinate, indeterminate sweep, segmented). This file adds ProgressRing (32px arc),
StageBar (per-stage colored segments with labels), StageDots (stage header strip) and Sliver
(the 3px by 120px clone sweep). Server-safe. Notable exports: `ProgressRing`, `StageBar`,
`StageDots`, `Sliver`, `ProgressRingProps`, `Stage`.

[`components/shapes/status-feedback/progress.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/progress.tsx) · code · 6952 bytes

### state-chips-demo.tsx

import { CONNECTORS, PROVENANCE_META, QUIRQ_UNAVAILABLE_NOTE, SPACE_START_FAILURE,
SPACE_STATUS_META, SPACES, SUBSCRIPTION_STATE_META, TODOS, type ConnectorStatus, type
SpaceStatus, } from "@/lib/fixtures"; import { SHARING_STATES, SharingChip, TODO_ORDER,
TONE_GROUP, TONE_GROUP_META, TodoStatusRow, ToneChip, WithDetail, type SharingState, type
ToneGroup, } Notable exports: `StateChipsDemo`.

[`components/shapes/status-feedback/state-chips-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/state-chips-demo.tsx) · code · 11671 bytes

### state-chips.tsx

Object state chips: the specific state word for each object, never a universal "Active".
StateChip and STATE_MAPS come from the ui kit (space, todo, connector, measurement,
subscription, membership, result...). This file adds ToneChip for words outside those maps,
SharingChip with the sharing states, WithDetail (hover or focus to read why) and
TodoStatusRow. Server-safe.

[`components/shapes/status-feedback/state-chips.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/state-chips.tsx) · code · 8585 bytes

### status-dot-demo.tsx

import { ConnectionPill, DotMeter, DotTip, LivePip, PresenceLine, SPACE_LIFECYCLE,
SpaceStatusPill, StepDot, type SpaceApiState, type SpaceLifecycle, type StepState, } from
"./status-dot" Notable exports: `StatusDotDemo`. Marked `'use client'` so it runs in the
browser.

[`components/shapes/status-feedback/status-dot-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/status-dot-demo.tsx) · code · 13971 bytes

### status-dot.tsx

Status dot family: the single saturated mark with a 3px halo, and the pills built on it.
StatusDot and StatusPill come from the ui kit; this file adds the product-specific shapes:
SpaceStatusPill (lifecycle | API split pill), ConnectionPill (visualizer LIVE / PARTIAL),
DotMeter (difficulty ●○○), StepDot (deploy steps), LivePip, PresenceLine and DotTip. Server-
safe: no hooks. Tooltips are CSS only.

[`components/shapes/status-feedback/status-dot.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/status-dot.tsx) · code · 10924 bytes

### status-strip-demo.tsx

const PARTNERS = [ { pair: "quirq × Nevermined", what: "settlement rails for verified agent
work" }, { pair: "quirq × Shodai", what: "agents transacting under a signed agreement,
settled in quirqs, disputes included" }, { pair: "quirq × Nirvana", what: "agent task
management on bare metal" }, ] Notable exports: `StatusStripDemo`. Marked `'use client'` so
it runs in the browser.

[`components/shapes/status-feedback/status-strip-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/status-strip-demo.tsx) · code · 14608 bytes

### status-strip.tsx

Alert banners and status strips: inline notices with a next action. AlertBanner (tinted box,
icon, title, body, actions, optional dismiss), AnnouncementBar, DevBuildBanner, StatusLine
(one-line space status strip), UsageReportingStatus, ProvingGroundsStrip and InlineAlert
(galileo's red form line). Presentational and hook-free; callers own state.

[`components/shapes/status-feedback/status-strip.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/status-strip.tsx) · code · 10357 bytes

### toast-demo.tsx

const PILL_MESSAGES = ["Project cloned", "Access revoked", "Log path copied", "3 new from
Gmail", "Downloaded agents-tools-7d-2026-10-02.csv"] Notable exports: `ToastDemo`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/status-feedback/toast-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/toast-demo.tsx) · code · 10724 bytes

### toast.tsx

Toasts: brief feedback that never takes focus. Toast (typed card with icon, title,
description, optional action), Toaster plus useToasts (stack, auto-dismiss that pauses on
hover or focus, promise chains), PillToast plus usePillToast (the space dashboard's 1.9 s
uppercase pill), HudPrompt, FloatingNotice and AmbientToast.

[`components/shapes/status-feedback/toast.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/status-feedback/toast.tsx) · code · 15547 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
