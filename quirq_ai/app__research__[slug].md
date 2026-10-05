<!-- quirq-wiki-generated repo=quirq_ai dir=app/research/[slug] -->

# quirq_ai / app/research/[slug]

Source: [app/research/[slug]](https://github.com/quirq-ai/quirq_ai/tree/main/app/research/[slug]) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### page.tsx

import { POSTS, getPost, getTopic, neighbours, noteNumber, relatedPosts, type Post, } from
"@/lib/research"; export function generateStaticParams() { return POSTS.map((post) => ({
slug: post.slug })); } Notable exports: `generateStaticParams`, `generateMetadata`,
`ResearchPost`. Wired into a Next.js app (App Router or Next APIs).

[`app/research/[slug]/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/research/[slug]/page.tsx) · code · 9172 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
