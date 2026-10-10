<!-- quirq-wiki-generated repo=quirq_ai dir=app/research/page/[page] -->

# quirq_ai / app/research/page/[page]

Source: [app/research/page/[page]](https://github.com/quirq-ai/quirq_ai/tree/main/app/research/page/[page]) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### page.tsx

/** * Numbered pages of the whole stream, from two upward. Page one is /research * itself
and is deliberately not generated here, so one listing never has two * URLs. * The literal
page segment wins over the sibling [slug] route, which is why * page is a reserved slug in
lib/research.ts. */ export function generateStaticParams() { const pageCount = Math.max(
Notable exports: `generateStaticParams`, `generateMetadata`, `ResearchIndexPage`.

[`app/research/page/[page]/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/research/page/[page]/page.tsx) · code · 1566 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
