<!-- quirq-wiki-generated repo=website dir=src/pages/startups -->

# website / src/pages/startups

Source: [src/pages/startups](https://github.com/quirq-ai/website/tree/main/src/pages/startups) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### [...slug].tsx

Client-only route for co-branded partner variants (e.g. /startups/stripe, /startups/yc). The
canonical /startups page is prerendered from ./index.tsx for SEO. Notable exports:
`StartupsPartner`.

[`src/pages/startups/[...slug].tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/startups/[...slug].tsx) · code · 594 bytes

### index.tsx

Canonical, prerendered /startups page. This is what search engines crawl, so it must be a
real static page (not the client-only [...slug] route) with a crawlable text H1. Notable
exports: `Startups`.

[`src/pages/startups/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/pages/startups/index.tsx) · code · 369 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
