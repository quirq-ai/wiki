<!-- quirq-wiki-generated repo=space-hub dir=app/src/ui -->

# space-hub / app/src/ui

Source: [app/src/ui](https://github.com/quirq-ai/space-hub/tree/main/app/src/ui) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### cards.tsx

/** * Every list of places in the app (spaces, projects, sections, folders, * channels,
agents, people) is drawn the same way: groups with a title, a * count and one line on what
belongs there, each holding cards.

[`app/src/ui/cards.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/ui/cards.tsx) · code · 8927 bytes

### primitives.tsx

/** A person, org or agent. The hub serves a picture for every name (GitHub's, or initials).
*/ export function Avatar({ name, size = 24, kind, title }: { name: string; size?: number;
kind?: string; title?: string }) { if (name === "quirqy") return ; const square = kind ===
"org" || kind === "agent"; return ; } Notable exports: `Avatar`, `AvatarStack`,
`PersonLink`, `Ago`, `Skeleton`, `SkeletonRows`, `SkeletonText`, `CopyButton`, and 5 more.

[`app/src/ui/primitives.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/ui/primitives.tsx) · code · 6662 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
