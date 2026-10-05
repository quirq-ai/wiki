<!-- quirq-wiki-generated repo=quirq_ai dir=app -->

# quirq_ai / app

Source: [app](https://github.com/quirq-ai/quirq_ai/tree/main/app) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### globals.css

Stylesheet `globals.css` for layout and visual treatment in this folder. Leading class
selectors include `lenis`, `focus-on-ink`, `label`, `spectrum-text`, `glass-text`, `dot-
aperture`, `spectrum-rule`, `display`, and 13 more. Defines or consumes CSS custom
properties (design tokens).

[`app/globals.css`](https://github.com/quirq-ai/quirq_ai/blob/main/app/globals.css) · code · 10621 bytes

### layout.tsx

/* Geometric for the mark, grotesque for reading, mono for anything metered. */ const
poppins = Poppins({ variable: "--font-poppins", weight: ["500", "600"], subsets: ["latin"],
display: "swap", }) Notable exports: `RootLayout`, `metadata`, `viewport`. Wired into a
Next.js app (App Router or Next APIs).

[`app/layout.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/layout.tsx) · code · 3017 bytes

### page.tsx

/** Assembled from two strings the page itself says out loud. */ const DESCRIPTION = "Secure
environments for agentic workforces. Any model. Any harness. Any cloud. Deploy, manage and
meter the agents your team already runs." Notable exports: `Page`, `metadata`.

[`app/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/page.tsx) · code · 754 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
