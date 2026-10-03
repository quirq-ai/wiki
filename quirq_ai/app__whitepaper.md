<!-- quirq-wiki-generated repo=quirq_ai dir=app/whitepaper -->

# quirq_ai / app/whitepaper

Source: [app/whitepaper](https://github.com/quirq-ai/quirq_ai/tree/main/app/whitepaper) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### layout.tsx

/** * The paper is a reading surface, so it takes the research treatment rather * than the
3D stage: the same void black, grain, and vignette, with the fixed * CSS glow standing in
for the light burst. Eight pages of argument should * cost nothing to read, and the text has
to stay legible with no JavaScript * and no WebGL. * The PDF at /whitepaper/pdf is a r
Notable exports: `WhitepaperLayout`.

[`app/whitepaper/layout.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/whitepaper/layout.tsx) · code · 962 bytes

### page.tsx

export const metadata: Metadata = { title: "Whitepaper", description: WHITEPAPER.dek,
openGraph: { type: "article", title: WHITEPAPER.title, description: WHITEPAPER.dek, url:
"/whitepaper", }, } Notable exports: `Whitepaper`, `metadata`. Wired into a Next.js app (App
Router or Next APIs).

[`app/whitepaper/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/whitepaper/page.tsx) · code · 9608 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
