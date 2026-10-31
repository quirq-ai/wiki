<!-- quirq-wiki-generated repo=instants dir=components/library -->

# instants / components/library

Source: [components/library](https://github.com/quirq-ai/instants/tree/main/components/library) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### highlight.tsx

Wraps case-insensitive matches of `query` in <mark>. Notable exports: `Highlight`.

[`components/library/highlight.tsx`](https://github.com/quirq-ai/instants/blob/main/components/library/highlight.tsx) · code · 597 bytes

### library-browser.tsx

const SORTS = [ { id: "newest", label: "Newest research" }, { id: "oldest", label: "Oldest
research" }, { id: "generated", label: "Recently generated" }, { id: "commits", label: "Most
commits" }, { id: "title", label: "Title A to Z" }, ] Notable exports: `LibraryBrowser`.
Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the
browser.

[`components/library/library-browser.tsx`](https://github.com/quirq-ai/instants/blob/main/components/library/library-browser.tsx) · code · 11030 bytes

### post-card.tsx

Library / topic grid card and compact row. No client state; works in server and client
trees. Notable exports: `PostCard`, `PostRow`. Wired into a Next.js app (App Router or Next
APIs).

[`components/library/post-card.tsx`](https://github.com/quirq-ai/instants/blob/main/components/library/post-card.tsx) · code · 3637 bytes

### state.ts

Library URL state, shared by the server page and the client browser. Notable exports:
`LibraryState`, `LIBRARY_KEYS`.

[`components/library/state.ts`](https://github.com/quirq-ai/instants/blob/main/components/library/state.ts) · code · 430 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
