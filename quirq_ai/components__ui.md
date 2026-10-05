<!-- quirq-wiki-generated repo=quirq_ai dir=components/ui -->

# quirq_ai / components/ui

Source: [components/ui](https://github.com/quirq-ai/quirq_ai/tree/main/components/ui) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### brand-icons.tsx

/** * Brand marks, copied path-for-path from quirq/icons. * Only the fifteen actually
rendered are inlined, so the bundle carries those * rather than the whole folder, and they
are inlined rather than served as * files so a mark can take the surrounding text colour:
dim in a lattice, * ink on hover, no second request.

[`components/ui/brand-icons.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/brand-icons.tsx) · code · 47078 bytes

### footer.tsx

type FooterLink = { href: string; label: string; newTab?: boolean; } Notable exports:
`SiteFooter`.

[`components/ui/footer.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/footer.tsx) · code · 2698 bytes

### glass.tsx

import { createContext, useCallback, useContext, useEffect, useRef, type CSSProperties, type
ReactNode, } from "react"; /** * Glass over open sky. * A GlassPool owns one TextScrim (the
eclipse pool of darkness behind a block * of copy) and cuts real holes in it wherever its
GlassText / GlassHole * children sit, so the burst's live light passes through the le
Notable exports: `GlassPool`, `GlassText`, `GlassHole`.

[`components/ui/glass.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/glass.tsx) · code · 7572 bytes

### install-command.tsx

/** The whole install. One line, and it is the same line on every machine. */ export const
INSTALL_COMMAND = "curl -fsSL quirq.ai/install | sh" Notable exports: `InstallCommand`,
`INSTALL_COMMAND`. Marked `'use client'` so it runs in the browser.

[`components/ui/install-command.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/install-command.tsx) · code · 2569 bytes

### loop-cta.tsx

/** * The home page opens and closes on one action: install the environment, then * hand the
closed-loop setup to whichever agent the visitor already uses. */ export function LoopCta()
{ return ( Notable exports: `LoopCta`.

[`components/ui/loop-cta.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/loop-cta.tsx) · code · 683 bytes

### nav.module.css

Stylesheet `nav.module.css` for layout and visual treatment in this folder. Leading class
selectors include `shell`, `nav`, `brand`, `logo`, `links`, `offsite`, `offsiteMark`,
`drawerLinks`, and 6 more. Defines or consumes CSS custom properties (design tokens).

[`components/ui/nav.module.css`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/nav.module.css) · code · 6700 bytes

### nav.tsx

const EASE = [0.22, 1, 0.36, 1] as const; const DESKTOP_NAV = "(min-width: 700px)" Notable
exports: `Nav`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so
it runs in the browser.

[`components/ui/nav.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/nav.tsx) · code · 8802 bytes

### open-in.tsx

import { AnthropicIcon, ClaudeCodeIcon, CodexIcon, CursorIcon, OpenaiIcon, } from "./brand-
icons" Notable exports: `OpenIn`. Marked `'use client'` so it runs in the browser.

[`components/ui/open-in.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/open-in.tsx) · code · 11936 bytes

### primitives.tsx

export const cn = (...parts: Array) => parts.filter(Boolean).join(" ") Notable exports:
`Beat`, `Reveal`, `Rise`, `TextScrim`, `Marker`, `ActionLink`, `Mark`, `cn`, and 1 more.
Marked `'use client'` so it runs in the browser.

[`components/ui/primitives.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/primitives.tsx) · code · 8142 bytes

### quirq-logo.tsx

const LOGO_WIDTH = 296; const LOGO_HEIGHT = 119 Notable exports: `QuirqLogo`,
`QuirqLogoProps`. Wired into a Next.js app (App Router or Next APIs).

[`components/ui/quirq-logo.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/quirq-logo.tsx) · code · 620 bytes

### social-links.tsx

export const SOCIAL_LINKS = [ { label: "X", href: "https://x.com/quirq_ai" }, { label:
"LinkedIn", href: "https://www.linkedin.com/company/quirqai" }, { label: "GitHub", href:
"https://github.com/quirq-ai" }, { label: "Instagram", href: "https://github.com/quirq-ai"
}, ] as const Notable exports: `SocialLinks`, `SOCIAL_LINKS`.

[`components/ui/social-links.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/ui/social-links.tsx) · code · 2714 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
