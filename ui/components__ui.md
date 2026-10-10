<!-- quirq-wiki-generated repo=ui dir=components/ui -->

# ui / components/ui

Source: [components/ui](https://github.com/quirq-ai/ui/tree/main/components/ui) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### avatar.tsx

Avatars: Avatar (initials from a name on a tint picked deterministically from the spectrum,
optional status dot, optional runtime logo or custom glyph for agents, no remote images) and
AvatarGroup (overlapping stack with a +N overflow chip). Server-safe and hydration stable:
the hue comes from a string hash, never from randomness. Notable exports: `initialsFor`,
`Avatar`, `AvatarGroup`, `AvatarSize`, `AvatarProps`, `AvatarGroupProps`.

[`components/ui/avatar.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/avatar.tsx) · code · 6405 bytes

### badge.tsx

Badges: Badge (type, tier, role, runtime and HTTP chips in soft, outline or solid tone,
optional mono uppercase and dot) and Count (tabular count pill). Server-safe. Radius 3px for
badges, full pill for counts. Color is semantic: green live or managed, blue open source or
computed, orange enterprise, sample or proving. Notable exports: `Badge`, `Count`,
`BadgeStyle`, `BadgeProps`, `CountProps`.

[`components/ui/badge.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/badge.tsx) · code · 4001 bytes

### button.tsx

Buttons: Button (pill CTA, ghost pill, app buttons, danger, link), ButtonLink (same looks on
an anchor), IconButton (icon only, aria-label required) and ButtonGroup (spaced or joined).
Server-safe. Radius classes carry "!" because the global focus-visible rule sets a 6px
radius on focused controls and would otherwise square off pills.

[`components/ui/button.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/button.tsx) · code · 10708 bytes

### copy-button.tsx

Copy: CopyButton (icon, labelled or mono pill; copies with navigator.clipboard and falls
back to a hidden textarea; shows "Copied" for 1.6 s; announces the result in a polite live
region) and CopyField (a mono value such as an install command or space ID with a copy chip;
the value scrolls sideways and never wraps). Notable exports: `copyText`, `CopyButton`,
`CopyField`, `CopyButtonProps`, `CopyFieldProps`.

[`components/ui/copy-button.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/copy-button.tsx) · code · 6246 bytes

### field.tsx

Forms: Field (label, hint, error, required; wires id, aria-describedby and aria-invalid into
its single control), Fieldset (legend for a group of checkboxes or radios), Input, Textarea,
Select (styled native select), SearchInput (glyph plus optional kbd hint that fades on
focus), Checkbox and Radio (native inputs, optional card layout). Switch lives in ./switch
(client) and is re-exported here. Everything else is server-safe.

[`components/ui/field.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/field.tsx) · code · 14410 bytes

### index.ts

Shared UI primitives. Import from "@/components/ui". Client components (CopyButton,
CopyField, Segmented, TabChips, Switch) carry their own "use client" boundary and are re-
exported by name, so this barrel is safe to import from server components. Notable exports:
`Field`, `Fieldset`, `Input`, `Textarea`, `Select`, `SearchInput`, `Checkbox`, `Radio`, and
22 more. Marked `'use client'` so it runs in the browser.

[`components/ui/index.ts`](https://github.com/quirq-ai/ui/blob/main/components/ui/index.ts) · code · 1157 bytes

### kbd.tsx

Keyboard hints: Kbd (one mono keycap) and KeyCombo (keys pressed together or in sequence,
marked up as nested <kbd> per HTML). Named keys map to glyphs (mod and cmd to ⌘, enter to ↵)
and to spoken names for screen readers. Server-safe; deterministic (no platform sniffing,
pass "Ctrl" yourself for non-Mac copy). Notable exports: `Kbd`, `KeyCombo`, `KEY_GLYPHS`,
`KbdSize`, `KbdProps`, `KeyComboProps`.

[`components/ui/kbd.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/kbd.tsx) · code · 4539 bytes

### loaders.tsx

Loaders: Spinner (busy indicator), Skeleton (shape-matched shimmer, uses .skeleton) and
ProgressBar (determinate, indeterminate, segmented). Server-safe; motion is CSS only and the
global reduced-motion rule clamps it. Notable exports: `Spinner`, `LoadingLine`, `Skeleton`,
`ProgressBar`, `SpinnerSize`, `SpinnerProps`, `SkeletonProps`, `ProgressBarProps`.

[`components/ui/loaders.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/loaders.tsx) · code · 7277 bytes

### panel.tsx

Panels: Panel (glass for featured surfaces, soft panel for everything else, plus card,
inset, outline and dashed) and PanelHeader (mono kicker, title, description, actions).
Server-safe. Radii: glass 20, soft 18, card 14, inset 12, dashed 12. Notable exports:
`Panel`, `PanelHeader`, `PanelVariant`, `PanelPadding`, `PanelElement`, `PanelProps`,
`PanelHeaderProps`.

[`components/ui/panel.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/panel.tsx) · code · 3843 bytes

### runtime-logo.tsx

Logos: RuntimeLogo (agent runtimes and integrations; shipped SVGs from /logos rendered with
<img>, simple monochrome inline glyphs for the rest), RuntimeTag (logo plus name chip) and
XOMark (two pairs of chevrons: the X pair white, the O pair XO lime #83d63a). Server-safe.
Runtime ids use the raw UI form (claude_code); "claude-code" is accepted as an alias.

[`components/ui/runtime-logo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/runtime-logo.tsx) · code · 9684 bytes

### segmented.tsx

Choice rows: Segmented (a radiogroup with roving tabindex; arrow keys move and select, Home
and End jump; sizes; optional icons) and TabChips (mono uppercase filter chips with a count
suffix; toggle buttons with aria-pressed; single or multiple selection). Both work
controlled (value + onChange) or uncontrolled (defaultValue). Notable exports: `Segmented`,
`TabChips`, `SegmentedOption`, `SegmentedProps`, `TabChipItem`, `TabChipsProps`.

[`components/ui/segmented.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/segmented.tsx) · code · 7751 bytes

### status.tsx

Status: StatusDot (one saturated dot with a 3px halo, optional pulse), StatusPill (dot plus
mono label, optional split detail such as "API: Up") and StateChip (the specific state word
per object, never a universal "Active"). STATE_MAPS holds every mapping so tables and cards
can reuse the same words and tones through stateMeta(). Server-safe.

[`components/ui/status.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/status.tsx) · code · 10086 bytes

### switch.tsx

Switch: a button with role="switch" and aria-checked. Controlled (checked + onCheckedChange)
or uncontrolled (defaultChecked). Optional label and description make it a settings row;
busy shows a spinner in the thumb and blocks toggling. With a name it submits like a
checkbox through a hidden input. Notable exports: `Switch`, `SwitchProps`. Marked `'use
client'` so it runs in the browser.

[`components/ui/switch.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/switch.tsx) · code · 4137 bytes

### tones.ts

Shared tone vocabulary for the ui primitives. Every class string is written out in full so
Tailwind can see it at build time; never build these names dynamically. Notable exports:
`hashString`, `toneFor`, `Tone`, `SPECTRUM_TONES`, `toneText`, `toneBg`, `toneSoft`,
`toneOutline`, and 1 more.

[`components/ui/tones.ts`](https://github.com/quirq-ai/ui/blob/main/components/ui/tones.ts) · code · 3002 bytes

### tooltip.tsx

Tooltip: CSS only (hover and focus-within), no JS. Placement top or bottom, aligned center,
start or end. The bubble is display:none until shown so it never widens the page at 390px.
Use for short names of icon actions; never put essential content in a tooltip. Notable
exports: `Tooltip`, `TooltipProps`.

[`components/ui/tooltip.tsx`](https://github.com/quirq-ai/ui/blob/main/components/ui/tooltip.tsx) · code · 2278 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
