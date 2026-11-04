<!-- quirq-wiki-generated repo=space-hub dir=app/src/ui -->

# space-hub / app/src/ui

Source: [app/src/ui](https://github.com/quirq-ai/space-hub/tree/main/app/src/ui) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### app-icon.tsx

A four-point spark, like the ones on xo-swarm's icons. Notable exports: `AppIcon`.

[`app/src/ui/app-icon.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/ui/app-icon.tsx) · code · 4947 bytes

### cards.tsx

/** * Every list of places in the app (spaces, projects, sections, folders, * channels,
agents, people) is drawn the same way: groups with a title, a * count and one line on what
belongs there, each holding cards.

[`app/src/ui/cards.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/ui/cards.tsx) · code · 9127 bytes

### home-screen.tsx

/** * xo-swarm's liquid glass, as layers under whatever sits on it: the * backdrop blurred
(and, with distort, bent through the shell's * GlassFilter), a frosted tint, and a shine
along the edge. */ export function Glass({ distort = false }: { distort?: boolean }) {
return ; } Notable exports: `Glass`, `HomeScreen`, `Widgets`, `Widget`, `Launchpad`,
`WidgetSize`, `HomeApp`, `AppGroup`.

[`app/src/ui/home-screen.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/ui/home-screen.tsx) · code · 4116 bytes

### primitives.tsx

/** A person, org or agent. The hub serves a picture for every name (GitHub's, or initials).
*/ export function Avatar({ name, size = 24, kind, title }: { name: string; size?: number;
kind?: string; title?: string }) { if (name === "quirqy") return ; const square = kind ===
"org" || kind === "agent"; return ; } Notable exports: `Avatar`, `AvatarStack`,
`PersonLink`, `Ago`, `Skeleton`, `SkeletonRows`, `SkeletonText`, `CopyButton`, and 5 more.

[`app/src/ui/primitives.tsx`](https://github.com/quirq-ai/space-hub/blob/main/app/src/ui/primitives.tsx) · code · 6662 bytes

_Generated 2026-11-04 13:22 UTC from `main`._
