<!-- quirq-wiki-generated repo=ui dir=registry/astryx/nextjs-setup -->

# ui / registry/astryx/nextjs-setup

Source: [registry/astryx/nextjs-setup](https://github.com/quirq-ai/ui/tree/main/registry/astryx/nextjs-setup) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### astryx-providers.tsx

/** * Supplies the Astryx theme tokens every component reads. Theme uses React context, * so
this is a client component — wrap {children} with it in app/layout.tsx. */ export function
AstryxProviders({ children }: Readonly) { return {children}; } Notable exports:
`AstryxProviders`. Marked `'use client'` so it runs in the browser.

[`registry/astryx/nextjs-setup/astryx-providers.tsx`](https://github.com/quirq-ai/ui/blob/main/registry/astryx/nextjs-setup/astryx-providers.tsx) · code · 521 bytes

### globals.css

Astryx + Tailwind v4 layer order.

[`registry/astryx/nextjs-setup/globals.css`](https://github.com/quirq-ai/ui/blob/main/registry/astryx/nextjs-setup/globals.css) · code · 884 bytes

_Generated 2026-10-26 11:39 UTC from `main`._
