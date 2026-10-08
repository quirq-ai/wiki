<!-- quirq-wiki-generated repo=ui dir=components/shapes/brand-marks -->

# ui / components/shapes/brand-marks

Source: [components/shapes/brand-marks](https://github.com/quirq-ai/ui/tree/main/components/shapes/brand-marks) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### art-demo.tsx

const STUDIES = [ { id: "pilot", label: "Pilot" }, { id: "incurious", label: "Incurious" },
{ id: "self", label: "Self-sufficient" }, { id: "point", label: "Point and call" }, { id:
"rtfm", label: "RTFM" }, ] Notable exports: `ArtPlatesDemo`. Marked `'use client'` so it
runs in the browser.

[`components/shapes/brand-marks/art-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/art-demo.tsx) · code · 6445 bytes

### art.tsx

Art systems that feel and prove the thesis. Dream plates (night register: a lone figure,
fractured light, heavy grain), instrument plates (dark chart with a finding headline),
signal plates (one claim, a number pair), motion glyphs (one simple motion, plays once),
prism art, deterministic generative thumbs, and the Shift Report caption that always ends in
a quirq number.

[`components/shapes/brand-marks/art.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/art.tsx) · code · 26737 bytes

### daylight-demo.tsx

/* The three writings variants; captions come from DAYLIGHT_CAPTION. */ const PLATES:
DaylightSceneId[] = ["trailhead", "morning", "hammock"] Notable exports:
`DaylightPlateDemo`.

[`components/shapes/brand-marks/daylight-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/daylight-demo.tsx) · code · 2483 bytes

### daylight.tsx

Daylight register: calm people at rest in honest light, warm neutrals, soft haze, gentle 4%
grain, a faint spectrum where the light splits. Drawn as inline SVG so the catalog ships no
photographs; the real plates are photographs of real people. No chart or headline sits on a
daylight plate; a mono caption runs beneath it. Server-safe.

[`components/shapes/brand-marks/daylight.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/daylight.tsx) · code · 20222 bytes

### icons-demo.tsx

type SizeOpt = "12" | "15" | "18" | "24"; type StrokeOpt = "family" | "1.6" | "1.75"; type
ToneOpt = "ink" | "dim" | "grn" | "blu" Notable exports: `IconSetDemo`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/brand-marks/icons-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/icons-demo.tsx) · code · 8858 bytes

### icons.tsx

Line icon set: stroked 24px icons, round caps, currentColor. Three families from the real
products: the projects visualizer (1.7 stroke), the Space Drift sprite (1.75) and galileo's
bar controls (1.6, redrawn from its 16 grid). Decorative by default (aria-hidden); the
control that holds an icon carries the accessible name. Server-safe.

[`components/shapes/brand-marks/icons.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/icons.tsx) · code · 6383 bytes

### index.tsx

export const shapes: Shape[] = [ { id: "quirq-wordmark", name: "quirq wordmark and q mark",
purpose: "Identify quirq in hero, nav, footer and favicon.", seenIn: ["landing:quirq-
wordmark-and-mark"], variants: ["hero 280px", "footer 130px", "nav lockup", "standalone
72px", "ghost q at 21% in viz", "spectrum gradient text", "favicon tile"], states:
["static"] Notable exports: `shapes`.

[`components/shapes/brand-marks/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/index.tsx) · code · 4023 bytes

### kit.tsx

Server-safe helpers shared by the brand-marks demos: the mono caption, a captioned specimen
tile with a choice of ground, the provenance note, the film grain overlay, and KeepCase for
"quirq" inside uppercase lines. Notable exports: `Grain`, `Caption`, `Specimen`,
`DemoSection`, `ProvenanceNote`, `ActionLog`, `KeepCase`, `NOISE_URI`, and 1 more.

[`components/shapes/brand-marks/kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/kit.tsx) · code · 5882 bytes

### lockups-demo.tsx

import { AttributionRow, IntegrationIconRow, MSBars, PartnerLockup, PartnerStrip,
RuntimeWordmark, SPACE_TYPE_LABEL, SpaceTypeMark, type IntegrationItem, type PartnerWord,
type SpaceType, } from "./lockups" Notable exports: `BrandLockupsDemo`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/brand-marks/lockups-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/lockups-demo.tsx) · code · 10626 bytes

### lockups.tsx

Secondary identities: the Machine Speed bars, space-type mini marks (the runtime a space was
launched with), runtime wordmarks on dark and light, integration icon rows with tooltips,
the monochrome partner strip, quirq x Partner, and the "A product by quirq.ai" attribution
row. Third-party marks stay monochrome so their color never enters the palette. Glyphs drawn
here are simple stand-ins, not reproductions. Server-safe.

[`components/shapes/brand-marks/lockups.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/lockups.tsx) · code · 12985 bytes

### machine-speed-calculator.tsx

Hours-back calculator (Machine Speed), full variant with disclosures. The result is hours,
never quirqs. The coefficient is the share of work that can run without a decision,
discounted by the share of each unit still reviewed. Every figure is illustrative. Notable
exports: `MSHoursCalculator`, `MSHoursCalculatorProps`. Marked `'use client'` so it runs in
the browser.

[`components/shapes/brand-marks/machine-speed-calculator.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/machine-speed-calculator.tsx) · code · 9235 bytes

### machine-speed-demo.tsx

import { MSBlueprintBar, MSButton, MSCtaBlock, MSFooter, MSNodeCard, MSNodeDot, MSPageHead,
MSPersonCard, MSPlanList, MSSplitHero, MSSurface, type MSNode, type MSPlanItem, } from
"./machine-speed" Notable exports: `MachineSpeedDemo`. Marked `'use client'` so it runs in
the browser.

[`components/shapes/brand-marks/machine-speed-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/machine-speed-demo.tsx) · code · 10296 bytes

### machine-speed.tsx

Machine Speed: the implementation sub-brand on its own olive ground (#10120f) with one green
(#b4e34a), one blue (#57b6ff) and hairlines for everything else. Faint text is lifted from
the source #6b6e67 (3.6:1) to #808379 (4.9:1) so small copy passes AA; #6b6e67 stays for
underlines and dots. Square mono buttons (radius 3) are its tell against quirq's pills.

[`components/shapes/brand-marks/machine-speed.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/machine-speed.tsx) · code · 12996 bytes

### quirq-wordmark-demo.tsx

const NAV_LINKS = [ { label: "Products", href: "/products" }, { label: "Research", href:
"/research" }, { label: "Writings", href: "/writings" }, { label: "Enterprise", href:
"/enterprise", external: true }, ] Notable exports: `QuirqWordmarkDemo`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/brand-marks/quirq-wordmark-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/quirq-wordmark-demo.tsx) · code · 9811 bytes

### quirq-wordmark.tsx

quirq identity pieces: the wordmark at its fixed sizes, the q mark, the nav lockup that
links home, the favicon tile, the ghost q used behind visualizations, and the word set in
spectrum text. White on black, never recolored except the spectrum word. "quirq" is always
lowercase. Server-safe.

[`components/shapes/brand-marks/quirq-wordmark.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/quirq-wordmark.tsx) · code · 4174 bytes

### spectrum-demo.tsx

export function SpectrumAccentsDemo() { const w = PORTFOLIO_WINDOWS[0]; const minted =
w.potentialB > 0 ? w.mintedQ / w.potentialB : 0; return ( Notable exports:
`SpectrumAccentsDemo`.

[`components/shapes/brand-marks/spectrum-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/spectrum-demo.tsx) · code · 7273 bytes

### spectrum.tsx

Spectrum accents: the seven-hue gradient (#ff453a to #bf5af2, 90deg) in small doses. Color
is delivered value, grey is everything else, so the spectrum marks the minted side only and
never fills a large area in UI. Chip, dash, hairline, quote bar, bullet and text. Server-
safe. Notable exports: `SpectrumChip`, `SpectrumDash`, `SpectrumHairline`, `SpectrumQuote`,
`SpectrumBullets`, `SpectrumText`, `MintRule`.

[`components/shapes/brand-marks/spectrum.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/spectrum.tsx) · code · 4923 bytes

### xo-mark-demo.tsx

/* Six spokes around the root mark, precomputed so render stays free of trig. */ const
SPOKES = [ { x: 295, y: 121, c: "var(--blu)" }, { x: 207, y: 168, c: "var(--ink-faint)" }, {
x: 92, y: 148, c: "var(--blu)" }, { x: 65, y: 79, c: "var(--ink-faint)" }, { x: 153, y: 32,
c: "var(--blu)" }, { x: 268, y: 52, c: "var(--ink-faint)" }, ] Notable exports:
`XOMarkDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/brand-marks/xo-mark-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/xo-mark-demo.tsx) · code · 10591 bytes

### xo-mark.tsx

XO product identity: two chevron pairs, the outer (X) pair in ink and the inner (O) pair in
XO lime #83d63a. Dark, light and themed colorways, the lime glow, the product lockup ("XO
Space · ops-copilot") with a ringed status dot, galileo's heavier favicon tile and bar
lockup, and the muted breadcrumb home mark. Polylines from xo-space/brand/xo-logo.svg.
Server-safe.

[`components/shapes/brand-marks/xo-mark.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/brand-marks/xo-mark.tsx) · code · 9603 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
