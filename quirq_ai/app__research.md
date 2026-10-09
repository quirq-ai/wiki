<!-- quirq-wiki-generated repo=quirq_ai dir=app/research -->

# quirq_ai / app/research

Source: [app/research](https://github.com/quirq-ai/quirq_ai/tree/main/app/research) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### layout.tsx

/** * Research pages share the home page's atmosphere (void black, grain, * vignette) but
not its 3D stage: text pages should cost nothing to read. * A fixed CSS glow stands in for
the light burst so the family resemblance * holds without shipping three.js here. */ export
default function ResearchLayout({ children }: { children: ReactNode }) { return ( Notable
exports: `ResearchLayout`.

[`app/research/layout.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/research/layout.tsx) · code · 771 bytes

### page.tsx

export const metadata: Metadata = { title: "Research", description: "Experiments,
frameworks, and field notes from the research program behind quirq. Every claim ships with
its falsifier.", } Notable exports: `ResearchIndex`, `metadata`. Wired into a Next.js app
(App Router or Next APIs).

[`app/research/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/research/page.tsx) · code · 873 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
