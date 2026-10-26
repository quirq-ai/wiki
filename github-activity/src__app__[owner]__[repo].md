<!-- quirq-wiki-generated repo=github-activity dir=src/app/[owner]/[repo] -->

# github-activity / src/app/[owner]/[repo]

Source: [src/app/[owner]/[repo]](https://github.com/quirq-ai/github-activity/tree/main/src/app/[owner]/[repo]) in [github-activity](https://github.com/quirq-ai/github-activity).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### page.tsx

export async function generateStaticParams() { const d = await getDashboard(); const params
= d.repos.map((r) => ({ owner: r.owner, repo: r.name })); Cache Components needs at least
one param at build time; the placeholder 404s. return params.length > 0 ? params : [{ owner:
"_", repo: "_" }]; } Notable exports: `generateStaticParams`, `RepoPage`. Wired into a
Next.js app (App Router or Next APIs).

[`src/app/[owner]/[repo]/page.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/app/[owner]/[repo]/page.tsx) · code · 6816 bytes

_Generated 2026-10-26 11:39 UTC from `main`._
