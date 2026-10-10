<!-- quirq-wiki-generated repo=monitoring dir=app/repos/[repo] -->

# monitoring / app/repos/[repo]

Source: [app/repos/[repo]](https://github.com/quirq-ai/monitoring/tree/main/app/repos/[repo]) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### page.tsx

export default async function RepoPage({ params }: PageProps) { const { repo } = await
params; const view = await buildRepoView(repo); if (!view) notFound(); if ("unavailable" in
view) { Not a 404: the registries that would name the repo could not be read, so nothing is
known. return ( Notable exports: `RepoPage`. Wired into a Next.js app (App Router or Next
APIs).

[`app/repos/[repo]/page.tsx`](https://github.com/quirq-ai/monitoring/blob/main/app/repos/[repo]/page.tsx) · code · 9967 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
