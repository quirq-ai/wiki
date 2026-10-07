<!-- quirq-wiki-generated repo=ui dir=components/shapes/actions -->

# ui / components/shapes/actions

Source: [components/shapes/actions](https://github.com/quirq-ai/ui/tree/main/components/shapes/actions) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### button-look.ts

Class recipe for the app button set, kept server-safe so any element (anchors, summary,
labels) can borrow the look without the client ActionButton. Hover utilities carry not-
disabled so a disabled button keeps its resting look under the pointer. Notable exports:
`actionButtonClasses`, `ActionVariant`, `ActionSize`, `ActionPreview`,
`ActionButtonLookProps`.

[`components/shapes/actions/button-look.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/button-look.ts) · code · 4186 bytes

### button-set-demo.tsx

Live demo for the button set: every variant in context, sizes 28 to 40, the hover, focus,
disabled and busy states, and three busy flows that prove a second click is swallowed.
Notable exports: `ButtonSetDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/actions/button-set-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/button-set-demo.tsx) · code · 12857 bytes

### button-set.tsx

App button set: primary (ink fill), outline, ghost, danger (red tint, never a solid slab),
warning restart (orange), text, and the 48px iOS pill with its secondary partner. Sizes 28,
32 and 40. Busy swaps the label, shows a spinner, keeps focus on the button and swallows
further clicks so a request cannot be sent twice. useBusyAction wires an async action to
that state with a ref guard that holds even before the next render.

[`components/shapes/actions/button-set.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/button-set.tsx) · code · 3414 bytes

### copy-actions.tsx

Copy actions: one click puts a value on the clipboard and shows the result where the click
happened (Copied for 1.5 s, or Could not copy), then announces it in a polite live region.
CopyAction is the button (icon, labelled, mono pill, accent pill). InstallCommand is the
landing install command (full width pill, inline field with a Copy chip, static display).
CopyId is a labelled mono value such as a space ID.

[`components/shapes/actions/copy-actions.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/copy-actions.tsx) · code · 15310 bytes

### copy-button-demo.tsx

Live demo for copy buttons: the install command in its three landing forms, a space ID with
a toast, the device sign-in code and the invite row, then idle, copied and error for every
variant, and a simulated blocked clipboard that shows the real error path. Notable exports:
`CopyButtonDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/actions/copy-button-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/copy-button-demo.tsx) · code · 9050 bytes

### demo-kit.tsx

Demo scaffolding for the actions category: mono captions, labelled specimens, titled
sections and a quiet stage panel. Server-safe; no hooks. Notable exports: `Caption`,
`Specimen`, `DemoSection`, `Stage`, `Still`, `DemoStack`, `captionCls`.

[`components/shapes/actions/demo-kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/demo-kit.tsx) · code · 3384 bytes

### icon-action.tsx

Icon actions: compact square or circle buttons (24 to 40px) and links, always named by aria-
label and, by default, by a CSS tooltip on hover and focus. Covers pin (aria-pressed fills
the glyph), reload, open external (a real anchor with target _blank), trash (red tint on
hover), close circle and the glass back button that floats over media. Also the galileo
telescope glyphs, drawn from galileo/telescope/index.html. Server-safe: no hooks.

[`components/shapes/actions/icon-action.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/icon-action.tsx) · code · 8088 bytes

### icon-button-demo.tsx

Live demo for icon buttons: the six named variants, sizes 24 to 40 in both shapes, the
hover, pressed, focus and disabled states, and four product contexts (galileo's telescope
bar, a project row, a closable panel and a phone app frame) where every control works.
Toggles keep one name ("Pin xo-space") and report state through aria-pressed only. Notable
exports: `IconButtonDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/actions/icon-button-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/icon-button-demo.tsx) · code · 23141 bytes

### index.tsx

Buttons and actions: pill CTAs, app buttons, icon buttons, copy and shortcuts. Reusable
pieces live beside their demos and are re-exported at the bottom for sample apps. Notable
exports: `shapes`, `PillCta`, `PillCtaLink`, `pillCtaClasses`, `CtaBlock`, `AdvisorCard`,
`ActionButton`, `useBusyAction`, and 21 more.

[`components/shapes/actions/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/index.tsx) · code · 3767 bytes

### kbd-demo.tsx

Live demo for keyboard hints: the ⌘K trigger (platform aware) with a small palette that
answers ↑ ↓ ↵ and Esc, the "/" search hint that fades on focus, the palette footer, the WASD
cluster, keys inside buttons, a controls manual, and a key tester where held keys light up.
Shortcuts are scoped to this demo, never bound on the whole page. Notable exports:
`KbdDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/actions/kbd-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/kbd-demo.tsx) · code · 14969 bytes

### keyboard-hints.tsx

Keyboard hints that teach shortcuts inline: ShortcutTrigger (the ⌘K search trigger, Ctrl K
off Mac), HintBar (palette footer: ↑↓ navigate, ↵ open, Esc close), Keycap and KeyCluster
(the WASD block with a pressed state), KbdButton (Open file [E], Atlas [M], action pills)
and ControlsGrid (a manual of keys and what they do). Built on the shared Kbd and KeyCombo.
Server-safe: no hooks; pass the platform in, never sniff it during render.

[`components/shapes/actions/keyboard-hints.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/keyboard-hints.tsx) · code · 12044 bytes

### pill-cta-demo.tsx

Live demo for the pill CTA shape: every variant in its product context, the hover, focus and
disabled states, galileo's Add with its in-flight state, and a click log. Notable exports:
`PillCtaDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/actions/pill-cta-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/pill-cta-demo.tsx) · code · 12298 bytes

### pill-cta.tsx

Pill CTAs: the white ink pill and its ghost partner (one primary per page, worded "Get
started" for the deploy rung), the green mono "Create agent" pill, the mono nav pill,
galileo's lime Add button and the Machine Speed square mono button. Also the Machine Speed
CTA block and advisor card that carry the square button. Server-safe: no hooks.

[`components/shapes/actions/pill-cta.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/actions/pill-cta.tsx) · code · 12568 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
