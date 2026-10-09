<!-- quirq-wiki-generated repo=quirq_ai dir=app/research/topic/[topic] -->

# quirq_ai / app/research/topic/[topic]

Source: [app/research/topic/[topic]](https://github.com/quirq-ai/quirq_ai/tree/main/app/research/topic/[topic]) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### page.tsx

/** * One archive per topic. Every topic is smaller than a page, so an archive is * one page
by construction; see resolveIndex for what to add if that changes. * The literal topic
segment wins over the sibling [slug] route, which is why * topic is a reserved slug in
lib/research.ts. */ export function generateStaticParams() { return TOPICS.map((topic) => ({
Notable exports: `generateStaticParams`, `generateMetadata`, `ResearchTopic`.

[`app/research/topic/[topic]/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/research/topic/[topic]/page.tsx) · code · 1136 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
