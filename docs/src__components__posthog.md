<!-- quirq-wiki-generated repo=docs dir=src/components/posthog -->

# docs / src/components/posthog

Source: [src/components/posthog](https://github.com/quirq-ai/docs/tree/main/src/components/posthog) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### index.ts

export { PostHogPageView } from "./pageview"; export { PostHogProvider } from "./provider"
Notable exports: `PostHogPageView`, `PostHogProvider`.

[`src/components/posthog/index.ts`](https://github.com/quirq-ai/docs/blob/main/src/components/posthog/index.ts) · code · 92 bytes

### pageview.tsx

function PageViewTracker() { const pathname = usePathname(); const searchParams =
useSearchParams(); const posthog = usePostHog() Notable exports: `PostHogPageView`. Wired
into a Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the
browser.

[`src/components/posthog/pageview.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/posthog/pageview.tsx) · code · 720 bytes

### provider.tsx

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN Notable exports:
`PostHogProvider`. Marked `'use client'` so it runs in the browser.

[`src/components/posthog/provider.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/posthog/provider.tsx) · code · 756 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
