<!-- quirq-wiki-generated repo=ui dir=components/shapes/layout -->

# ui / components/shapes/layout

Source: [components/shapes/layout](https://github.com/quirq-ai/ui/tree/main/components/shapes/layout) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### a11y.tsx

Accessibility primitives: SkipLink (hidden until focused, then a white pill), VisuallyHidden
(titles that exist for screen readers on canvas pages) and FocusRing (the brand ring shown
statically, for specimens and docs). Server-safe. The live ring comes from globals.css: 2px
solid var(--ink), offset 3px, on every focus-visible control. Reduced motion clamps
animation and transition globally.

[`components/shapes/layout/a11y.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/a11y.tsx) · code · 2149 bytes

### accordion.tsx

Single-open accordions: NumberedAccordion (workflow steps, collapsed rows at .5 opacity) and
LayerAccordion (the three layers with a color rail). Each header is a button inside a
heading with aria-expanded and aria-controls; Up and Down move between headers, Home and End
jump. The open panel stays a separate region so the button never changes identity.

[`components/shapes/layout/accordion.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/accordion.tsx) · code · 7561 bytes

### anchor-scroller.tsx

AnchorScroller: a contained page with a sticky bar of in-page anchors. Clicking an anchor
scrolls smoothly to its section (instantly under reduced motion), honors the 78px scroll
margin under the bar, and moves focus to the section heading so keyboard and screen reader
users land where sighted users do. The current section is marked aria-current. Notable
exports: `AnchorScroller`, `AnchorSection`, `AnchorScrollerProps`.

[`components/shapes/layout/anchor-scroller.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/anchor-scroller.tsx) · code · 4355 bytes

### demo-a11y.tsx

Demo: focus ring, skip link and reduced motion. Client component: a focus readout for Tab
and Shift+Tab, a hidden-title toggle and a simulated reduced-motion switch. Notable exports:
`A11yDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/layout/demo-a11y.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/demo-a11y.tsx) · code · 12732 bytes

### demo-accordion.tsx

Demo: accordion and disclosure. Server component; the accordions are client islands and the
disclosures are native <details>. Notable exports: `AccordionDemo`.

[`components/shapes/layout/demo-accordion.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/demo-accordion.tsx) · code · 11827 bytes

### demo-eyebrow.tsx

Demo: eyebrow kicker and mono meta. Server component with a client replay island. Notable
exports: `EyebrowDemo`.

[`components/shapes/layout/demo-eyebrow.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/demo-eyebrow.tsx) · code · 9205 bytes

### demo-grain.tsx

Demo: grain, glow and reveal motion. Client component: opacity slider, vignette toggle,
scroll reveal inside a contained scroller, replay and simulated reduced motion. Notable
exports: `GrainDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/layout/demo-grain.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/demo-grain.tsx) · code · 10781 bytes

### demo-hero.tsx

Demo: heroes. Client component: replayable reveal, the space-drift intro flow, the wiki deep
link and the third-party trial counter. Notable exports: `HeroDemo`. Marked `'use client'`
so it runs in the browser.

[`components/shapes/layout/demo-hero.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/demo-hero.tsx) · code · 14253 bytes

### demo-kit.tsx

Demo-only scaffolding for the layout category: mono captions and labelled cells. Server-
safe; no hooks. Notable exports: `Caption`, `Specimen`, `SpecimenGrid`, `DemoRule`.

[`components/shapes/layout/demo-kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/demo-kit.tsx) · code · 1677 bytes

### demo-page-header.tsx

Demo: page header and toolbar. Client component: filters, refresh and scope navigation.
Notable exports: `PageHeaderDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/layout/demo-page-header.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/demo-page-header.tsx) · code · 23495 bytes

### demo-section-band.tsx

Demo: section band and dividers. Server component; the anchor scroller is a client island.
Notable exports: `SectionBandDemo`.

[`components/shapes/layout/demo-section-band.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/demo-section-band.tsx) · code · 12360 bytes

### demo-theme.tsx

Demo: light and themed surfaces. Client component: the Light, Dark, System switch, the Space
theme picker with its save states, and the same card under every theme. Notable exports:
`ThemeDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/layout/demo-theme.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/demo-theme.tsx) · code · 8581 bytes

### disclosure.tsx

Native disclosures on <details>/<summary>: keyboard and screen reader support come from the
platform, and the marker flips with Tailwind's group-open. Server-safe.

[`components/shapes/layout/disclosure.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/disclosure.tsx) · code · 5142 bytes

### eyebrow.tsx

Eyebrow kicker and mono meta: the spectrum-chip kicker that opens a section, mono meta lines
(bylines, qualifiers, reassurances, method footnotes), map captions, and relative timestamps
that show the exact UTC date on hover or focus. Server-safe; RelativeTime is a client island
re-exported from relative-time.tsx.

[`components/shapes/layout/eyebrow.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/eyebrow.tsx) · code · 4588 bytes

### hero-client.tsx

Interactive heroes: IntroHero (space-drift welcome over the starfield: choose a folder,
launch, prepare, then hide while flying) and ThirdPartyHero (the fictional Acme Notes page
galileo serves, whose trial counter updates per click). Notable exports: `IntroHero`,
`ThirdPartyHero`, `IntroStage`, `IntroHeroProps`, `ThirdPartyHeroProps`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/layout/hero-client.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/hero-client.tsx) · code · 9188 bytes

### hero.tsx

Heroes: claim, sub and one primary CTA, with optional art. Server-safe shells; the staggered
reveal is the client Reveal, and the two interactive heroes (space-drift intro and the
galileo sample app) live in hero-client.tsx. Notable exports: `SplitHero`, `StatementHero`,
`AuroraHero`, `GhostWordsHero`, `WelcomeBanner`, `WikiWelcome`, `HeadingTag`,
`SplitHeroProps`, and 6 more.

[`components/shapes/layout/hero.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/hero.tsx) · code · 13675 bytes

### index.tsx

Layout, type and texture: containers, kickers, headers, heroes, grain and disclosure. Every
shape is prop-driven and imports only from components/ui, components/brand and lib. Notable
exports: `shapes`.

[`components/shapes/layout/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/index.tsx) · code · 4690 bytes

### page-header-client.tsx

Stateful page headers: FilterHeader (filter chips whose counts come from data and whose
blurb follows the active tab), ListToolbar (view switch, filter and sort selects, column
heads and a partial-data note), PhoneHeader (22px title with refresh) and ScopeHeader
(dashboard detail head with a time chip and previous and next scope).

[`components/shapes/layout/page-header-client.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/page-header-client.tsx) · code · 11289 bytes

### page-header.tsx

Page header and toolbar pieces that need no state: the two-tone headline with its dim
qualifier clause, the app page header (kicker, title, summary, actions, back pill), the
editorial series head, toolbar summary counts, column heads and the partial-data note.
Server-safe. Stateful headers (filters, refresh, prev and next scope) live in page-header-
client.tsx.

[`components/shapes/layout/page-header.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/page-header.tsx) · code · 7797 bytes

### relative-time.tsx

RelativeTime: "4m ago" measured against a fixed now, with the exact UTC date in a tooltip on
hover and keyboard focus. Escape dismisses the tooltip without moving focus or the pointer.
The tooltip text is always wired through aria-describedby, so screen readers hear the exact
date even while it is hidden. Missing times render a word, never 0. Notable exports:
`RelativeTime`, `RelativeTimeProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/layout/relative-time.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/relative-time.tsx) · code · 3625 bytes

### replay-stage.tsx

ReplayStage: plays a staggered Reveal over its items on mount and on demand. Used by the
demos to show the "revealed" state without waiting for a scroll. Notable exports:
`ReplayStage`, `ReplayStageProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/layout/replay-stage.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/replay-stage.tsx) · code · 2025 bytes

### reveal.tsx

Reveal: the brand's one entrance motion. A 24px rise and fade over 1s on cubic-bezier(0.22,
1, 0.36, 1), staggered with a --d delay. Content renders visible on the server and without
JavaScript; the effect hides it just before it is observed, then reveals it when it scrolls
into view (or right away with trigger="mount"). Reduced motion keeps it visible with no
transition. State lives on data-rv, so React never fights the DOM.

[`components/shapes/layout/reveal.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/reveal.tsx) · code · 2918 bytes

### section.tsx

Section band and dividers: the max-1180 container with section rhythm, plus the hairline
separators that divide everything inside it. Server-safe. Rules from the product: content
max 1180px, gutters clamp(20px, 5vw, 44px), section padding clamp(88px, 12vh, 136px),
scroll-margin-top 78px under the fixed 64px nav, article column 68ch. Lines are never
heavier than 1px, except accent left bars (2px) and failure strips (3px).

[`components/shapes/layout/section.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/section.tsx) · code · 8570 bytes

### texture.tsx

Grain, glow and backdrop textures: fractal-noise film grain, card noise, blurred spectral
glow, the visualizer dot grid, the HUD vignette, a seeded starfield and the prism art. All
inline (SVG data URIs and CSS gradients), all decorative (aria-hidden), all deterministic.
Server-safe. Brand rule: never put a decorative glow behind data.

[`components/shapes/layout/texture.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/texture.tsx) · code · 11987 bytes

### theme-client.tsx

Theme controls: ThemeModeSwitch (Light, Dark, System as a radiogroup) and ThemePicker (Space
theme select with swatches, description and the save states Loading, Saving…, Unsaved
changes and Saved). Notable exports: `useResolvedScheme`, `ThemeModeSwitch`, `ThemePicker`,
`ThemeMode`, `ThemeSaveStatus`, `ThemePickerProps`. Marked `'use client'` so it runs in the
browser.

[`components/shapes/layout/theme-client.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/theme-client.tsx) · code · 5154 bytes

### theme.tsx

Light and themed surfaces: token sets for the quirq dark default and its light variant, the
five Space themes (Grove, Neon, Midnight, Graphite, Linen) and the galileo page shell, plus
a scoped specimen that renders the same shape under any of them. Server-safe. Theme tokens
are written to --t-* custom properties on a wrapper, and --ink is reset too so the global
focus ring stays visible on light surfaces.

[`components/shapes/layout/theme.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/theme.tsx) · code · 16018 bytes

### time.ts

Time helpers for the eyebrow and meta shapes. Server-safe (plain functions, no hooks), so
both server and client components can call them. All formatting is UTC and locale-free.
Notable exports: `exactUtc`, `shortUtc`, `MissingTime`.

[`components/shapes/layout/time.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/time.ts) · code · 739 bytes

### use-motion.ts

Media-query hooks for the layout shapes. useSyncExternalStore keeps the server snapshot
fixed (no preference, dark), so the first client render matches the server HTML and the real
value arrives right after hydration. Notable exports: `useReducedMotion`, `useSystemScheme`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/layout/use-motion.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/layout/use-motion.ts) · code · 1476 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
