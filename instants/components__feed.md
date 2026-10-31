<!-- quirq-wiki-generated repo=instants dir=components/feed -->

# instants / components/feed

Source: [components/feed](https://github.com/quirq-ai/instants/tree/main/components/feed) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### feed-card.tsx

export function useCardFlags(slug: string, saved: boolean, pinned: boolean) { const save =
useActivityFlag(slug, saved, "save", "unsave", { on: "Saved", off: "Removed from saved" });
const pin = useActivityFlag(slug, pinned, "pin", "unpin", { on: "Pinned to the top of
Latest", off: "Unpinned" }); return { save, pin }; } Notable exports: `useCardFlags`,
`ActionButton`, `FeedCard`. Wired into a Next.js app (App Router or Next APIs).

[`components/feed/feed-card.tsx`](https://github.com/quirq-ai/instants/blob/main/components/feed/feed-card.tsx) · code · 8741 bytes

### feed-list.tsx

/** The feed column with j/k/s/o keyboard navigation. */ export function FeedList({ records,
saved, pinned, read, videos = {}, }: { records: ResearchRecord[]; saved: string[]; pinned:
string[]; read: string[]; videos?: Record; }) { const router = useRouter(); const refs =
useRef([]); const [active, setActive] = useState(-1); const savedSet = new Set(saved)
Notable exports: `FeedList`. Wired into a Next.js app (App Router or Next APIs).

[`components/feed/feed-list.tsx`](https://github.com/quirq-ai/instants/blob/main/components/feed/feed-list.tsx) · code · 2996 bytes

### order.ts

Feed ordering. Pure functions, used by the server page. Notable exports: `parseTab`,
`spreadSameTitles`, `orderFeed`, `FeedTab`, `FEED_TABS`.

[`components/feed/order.ts`](https://github.com/quirq-ai/instants/blob/main/components/feed/order.ts) · code · 2626 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
