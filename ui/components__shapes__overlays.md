<!-- quirq-wiki-generated repo=ui dir=components/shapes/overlays -->

# ui / components/shapes/overlays

Source: [components/shapes/overlays](https://github.com/quirq-ai/ui/tree/main/components/shapes/overlays) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### command-palette-demo.tsx

import { Activity, Box, ChartColumn, Copy, FileText, FolderOpen, Inbox, KeyRound,
LayoutDashboard, Link, LogOut, MessageSquare, MessageSquarePlus, Network, Play, Plug, Plus,
RefreshCw, Search, Share2, SunMoon, Wrench, } from "lucide-react"; const GLYPHS: Record = {
Box: , Play: , Copy: , MessageSquarePlus: , MessageSquare: , FolderOpen: , Search: ,
ChartColu Notable exports: `CommandPaletteDemo`.

[`components/shapes/overlays/command-palette-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/command-palette-demo.tsx) · code · 6612 bytes

### command-palette.tsx

Command palette: a combobox over a grouped listbox. Every typed word must appear in an
item's label or keywords; prefix hits rank first, then word starts, then any match. ArrowUp
and ArrowDown move, Enter runs, Escape closes (or clears when inline). A page search row
hands the query to the current page's own search. CommandPaletteDialog puts the panel in a
blurred top layer; the demo opens it with Cmd+K or Ctrl+K.

[`components/shapes/overlays/command-palette.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/command-palette.tsx) · code · 10947 bytes

### confirm-demo.tsx

const SPACE_STATE: Record = { Creating: "creating", Starting: "starting", Running:
"running", Stopping: "stopping", Stopped: "stopped", } Notable exports: `ConfirmDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/overlays/confirm-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/confirm-demo.tsx) · code · 22484 bytes

### confirm-dialog.tsx

ConfirmDialog: ConfirmPanel in a real alertdialog layer. Cancel is focused first, the
backdrop does not dismiss, Escape cancels unless a check is running, and focus goes back to
the button that asked. Notable exports: `ConfirmDialog`, `ConfirmDialogProps`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/overlays/confirm-dialog.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/confirm-dialog.tsx) · code · 1122 bytes

### confirm.tsx

Destructive confirms: ConfirmPanel (alert dialog surface with checking and blocked states),
InlineConfirm (row and pill forms), DangerZone (bordered red panel with action rows),
TypeToConfirm (type the name to enable delete) and RemovalPanel (project removal with an
access review). Hook-free and controlled; ConfirmDialog in confirm-dialog.tsx puts
ConfirmPanel in a real alertdialog layer.

[`components/shapes/overlays/confirm.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/confirm.tsx) · code · 13814 bytes

### connect-provider.tsx

ConnectProviderBody: the "Connect GitHub" dialog body. Two sign-in methods in one dialog
(token, device code) and every phase: idle, busy, awaiting a device approval, error and
success. Controlled and hook-free; the caller owns the flow. Notable exports:
`ConnectProviderBody`, `ConnectMethod`, `ConnectPhase`, `ConnectProviderBodyProps`.

[`components/shapes/overlays/connect-provider.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/connect-provider.tsx) · code · 7055 bytes

### demo-hooks.ts

Demo-only hooks: scheduled steps that simulate slow work (connecting, deleting, saving) and
are cleared when the demo unmounts. Timers only start from event handlers, never during
render, so the first paint is identical on the server and in the browser. Notable exports:
`useTimers`. Marked `'use client'` so it runs in the browser.

[`components/shapes/overlays/demo-hooks.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/demo-hooks.ts) · code · 762 bytes

### demo-kit.tsx

Demo scaffolding for the overlays category: mono captions, labelled examples, and a Stage
that paints a dimmed product screen behind a static overlay so each surface reads in
context. Hook-free and server-safe; nothing here is part of the reusable shapes. Notable
exports: `Caption`, `Example`, `DemoSection`, `Stage`, `FauxApp`, `FauxSpace`, `DemoStatus`,
`StageAlign`.

[`components/shapes/overlays/demo-kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/demo-kit.tsx) · code · 6395 bytes

### demo-reopen.tsx

Demo helpers for inline examples. Reopenable lets an inline example be dismissed like the
real thing: closing it shows a "Reopen" button in its place (focused, so keyboard users keep
their spot) and reopening mounts a fresh copy in its starting state. FocusScope keeps
keyboard focus inside an inline example when the control that had it goes away (a busy
button, a confirm that replaces its trigger), the same way a real dialog layer does.

[`components/shapes/overlays/demo-reopen.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/demo-reopen.tsx) · code · 2101 bytes

### design-editor.tsx

DesignEditorPanel: telescope's design editor dialog. A live preview of the galileo bar on
the left, the design controls on the right (accent, position, parts), a save status and a
reset. Stacks to one column when narrow. Controlled and hook-free. Notable exports:
`DesignEditorPanel`, `BarPreview`, `DesignAccent`, `BarPosition`, `DESIGN_ACCENTS`,
`DesignPart`, `DesignEditorPanelProps`.

[`components/shapes/overlays/design-editor.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/design-editor.tsx) · code · 11095 bytes

### drawer-demo.tsx

import { BILLING, JOBS, JOB_RUNS, ORBIT_CATEGORIES, PROJECTS, PROJECT_BY_ID, PROJECT_STAGES,
SESSIONS, SPACES, TODOS, TODO_STATUS_META, type JobRun, type Project, type ToneToken, } from
"@/lib/fixtures"; /*
----------------------------------------------------------------------------- shared */
Notable exports: `DrawerDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/overlays/drawer-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/drawer-demo.tsx) · code · 25131 bytes

### drawer-layer.tsx

Drawer: DrawerPanel in a modal layer that slides in from the right. Escape, the close button
or a backdrop click closes it, and focus goes back to the row that opened it. Notable
exports: `Drawer`, `DrawerProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/overlays/drawer-layer.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/drawer-layer.tsx) · code · 845 bytes

### drawer.tsx

Side sheet and detail drawer pieces: DrawerPanel (right sheet with a plain header or a
tinted poster header, scrolling sections, footer, and a loading state), DrawerSection,
DrawerFacts, DrawerRow and RunResult. Hook-free; Drawer in drawer-layer.tsx puts the panel
in a real modal layer that slides in from the right.

[`components/shapes/overlays/drawer.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/drawer.tsx) · code · 8911 bytes

### drift-dialogs.tsx

Bodies for the space-drift flight dialogs, set inside a deep-tone ModalPanel: AtlasBody
(bodies or files to land on or fly by, search, survey and queue states), ToursBody (saved
routes, stops with current and missing, controls, JSON fallback) and ManualBody (the pilot's
key guide). Controlled and hook-free.

[`components/shapes/overlays/drift-dialogs.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/drift-dialogs.tsx) · code · 12250 bytes

### glass-alert-demo.tsx

/** Obviously fake values for the demo; the fixtures only hold masked placeholders. */ const
DEMO_VALUES: Record = { ANTHROPIC_API_KEY: "sk-example-not-a-real-key-f3a9", OPENAI_API_KEY:
"sk-example-not-a-real-key-7b2e", GITHUB_TOKEN: "ghp_example0000000000c41d", LINEAR_API_KEY:
"lin_example_09fa", SLACK_BOT_TOKEN: "xoxb-example-5e10", DATABASE_URL: "postgres Notable
exports: `GlassAlertDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/overlays/glass-alert-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/glass-alert-demo.tsx) · code · 10288 bytes

### glass-alert-layer.tsx

GlassAlertLayer puts a glass alert over a phone screen: a scrim that closes on tap, Escape,
a Tab trap, focus kept inside when a step swaps its buttons, and focus back to the row that
opened it. It is contained (absolute inside its phone frame), not portalled. SecretAlert is
the secret detail sheet with its masked, revealed and editing modes.

[`components/shapes/overlays/glass-alert-layer.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/glass-alert-layer.tsx) · code · 6799 bytes

### glass-alert.tsx

Glass alert sheet: the phone-native modal used for a secret or a connect flow. GlassAlert is
the 300px glass card (radius 34, 17px title, value well, 48px pills); GlassButton and
GlassWell are its parts; MagicPathAlert is the connect flow in every state. Hook-free.
Notable exports: `GlassAlert`, `GlassButton`, `GlassWell`, `MagicPathAlert`,
`GlassAlertProps`, `GlassButtonProps`, `MagicPathState`, `MagicPathAlertProps`.

[`components/shapes/overlays/glass-alert.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/glass-alert.tsx) · code · 9829 bytes

### index.tsx

Reusable pieces, exported for apps built from the catalog. Notable exports: `shapes`,
`Overlay`, `useFocusReturn`, `useFocusRescue`, `useOutsidePointer`, `useScrollLock`,
`trapTab`, `focusables`, and 50 more.

[`components/shapes/overlays/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/index.tsx) · code · 5024 bytes

### menu-demo.tsx

import { ArrowDown, ArrowUp, ArrowUpDown, ArrowUpRight, ChevronDown, Copy, Ellipsis, EyeOff,
FileCode2, LayoutGrid, RotateCcw, Settings2, Square, Trash2, } from "lucide-react"; const
iconTrigger = "inline-grid size-8 place-items-center rounded-[8px]! border border-hair bg-s2
text-ink-dim transition-colors hover:border-hair-strong hover:bg-s3 hover:text-ink a Notable
exports: `MenuDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/overlays/menu-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/menu-demo.tsx) · code · 13941 bytes

### menu.tsx

Dropdown and context menus. Menu is a trigger button plus a role=menu list: Enter, Space,
ArrowDown or ArrowUp opens it, arrows move, Home and End jump, a letter jumps to the next
item that starts with it, Escape closes and returns focus to the trigger, Tab or an outside
click closes. Checkbox items stay open on select.

[`components/shapes/overlays/menu.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/menu.tsx) · code · 15850 bytes

### modal-demo.tsx

/* ============================================================================ data */
Notable exports: `ModalDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/overlays/modal-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/modal-demo.tsx) · code · 34604 bytes

### modal-panel.tsx

ModalPanel: the dialog surface (kicker, title, description, body, footer, close) in two
tones: default soft panel and "deep" for the space-drift flight dialogs. Hook-free, so it
renders inline in static examples and inside the Modal layer alike. Notable exports:
`ModalPanel`, `ModalFooter`, `ModalNotice`, `ModalSize`, `ModalTone`, `MODAL_WIDTHS`,
`ModalPanelProps`.

[`components/shapes/overlays/modal-panel.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/modal-panel.tsx) · code · 6019 bytes

### modal.tsx

Modal: ModalPanel inside the Overlay layer. Escape and the close button call onClose, focus
returns to the opener, and a busy dialog can hide its close and ignore Escape. Notable
exports: `Modal`, `ModalProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/overlays/modal.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/modal.tsx) · code · 1539 bytes

### overlay-core.tsx

Overlay core for the overlays category. Overlay is a portalled layer with a dim backdrop: it
moves focus in, keeps Tab inside, closes on Escape (handled on the layer itself, so a nested
layer stops the event before its parent sees it) and gives focus back to whatever opened it.
When the focused control vanishes or turns disabled mid-task, focus is put back inside. The
hooks below are shared by menus, popovers, hover cards and sheets.

[`components/shapes/overlays/overlay-core.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/overlay-core.tsx) · code · 10467 bytes

### settings-dialog.tsx

SettingsPanel: a dialog with a side nav (organization settings). The nav is a column beside
the content when the panel is wide and becomes a row of top tabs when it is narrow (a
container query, so it adapts inside any column). MemberRow and SettingsGroup build the
Members section. Hook-free. Notable exports: `SettingsPanel`, `SettingsGroup`, `MemberRow`,
`SettingsNavItem`, `SettingsPanelProps`, `MemberRowProps`.

[`components/shapes/overlays/settings-dialog.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/settings-dialog.tsx) · code · 6058 bytes

### tip-demo.tsx

const surface = "relative rounded-[14px] border border-hair-soft bg-[#0f0f11] p-4"; const XO
= PROJECT_BY_ID["xo-space"] Notable exports: `TipDemo`. Marked `'use client'` so it runs in
the browser.

[`components/shapes/overlays/tip-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/tip-demo.tsx) · code · 21164 bytes

### tip.tsx

Tooltip, hover card and popover. Tip names an icon (hover or focus, a short delay, Escape
hides it, its text can change while shown). HoverCard previews an item with a rich card that
stays open while the pointer moves onto it. Both reposition when they would leave their
boundary (the nearest [data-tip-boundary] or the viewport below a 64px top bar): they flip
below and align to the near edge.

[`components/shapes/overlays/tip.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/tip.tsx) · code · 11954 bytes

### tour-demo.tsx

import { ChartColumn, Folder, FolderKanban, GitPullRequest, Hash, Inbox, KeyRound,
LayoutGrid, NotebookPen, RotateCcw, SquareKanban, SquareTerminal, Telescope, } from "lucide-
react"; /* -----------------------------------------------------------------------------
phone tour */ Notable exports: `TourDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/overlays/tour-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/tour-demo.tsx) · code · 14056 bytes

### tour.tsx

Guided tour and target marker pieces. TourCard is the coachmark (title, text, "1 of 6", Back
and Next, close to skip) with an optional arrow; Spotlight cuts a lit window in a dim scrim
around the target; TargetMarker is the space-drift objective marker (a 3D diamond on screen,
an edge arrow off screen, a mint chip when cleared). Hook-free.

[`components/shapes/overlays/tour.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/overlays/tour.tsx) · code · 7730 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
