<!-- quirq-wiki-generated repo=euler dir=app/innernet/app -->

# euler / app/innernet/app

Source: [app/innernet/app](https://github.com/quirq-ai/euler/tree/main/app/innernet/app) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### globals.css

Stylesheet `globals.css` for layout and visual treatment in this folder. Leading class
selectors include `aurora`, `grain`, `ix-entry`, `ix-dense`, `prose-wiki`, `rise`. Defines
or consumes CSS custom properties (design tokens).

[`app/innernet/app/globals.css`](https://github.com/quirq-ai/euler/blob/main/app/innernet/app/globals.css) · code · 11610 bytes

### icon.svg

SVG graphic `icon.svg` (971 bytes). Vector artwork used by the UI, docs, or brand; not
executable source.

[`app/innernet/app/icon.svg`](https://github.com/quirq-ai/euler/blob/main/app/innernet/app/icon.svg) · code · 971 bytes

### layout.tsx

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal",
"italic"], variable: "--font-instrument" }); const newsreader = Newsreader({ subsets:
["latin"], style: ["normal", "italic"], variable: "--font-newsreader", axes: ["opsz"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }); const mono =
JetBrains Notable exports: `RootLayout`, `metadata`, `viewport`.

[`app/innernet/app/layout.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/app/layout.tsx) · code · 2643 bytes

### not-found.tsx

export default async function NotFound() { Rendered per request, so the footer's "Indexed N
ago" stays true. await connection(); return ( Notable exports: `NotFound`. Wired into a
Next.js app (App Router or Next APIs).

[`app/innernet/app/not-found.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/app/not-found.tsx) · code · 1105 bytes

### page.tsx

export const metadata: Metadata = DEMO ? { title: { absolute: "Innernet · a demo of your
personal internet" }, description: A demo of Innernet: the open-source repositories of
github.com/${DEMO_ORG}, searchable like the web and readable in Innerpedia, with the
Innernet Field Guide to how it works and how to run it on your own folders., } : { title: {
absolut Notable exports: `Home`, `metadata`, `dynamic`.

[`app/innernet/app/page.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/app/page.tsx) · code · 6544 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
