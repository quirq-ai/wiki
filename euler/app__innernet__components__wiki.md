<!-- quirq-wiki-generated repo=euler dir=app/innernet/components/wiki -->

# euler / app/innernet/components/wiki

Source: [app/innernet/components/wiki](https://github.com/quirq-ai/euler/tree/main/app/innernet/components/wiki) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### article-view.tsx

A full Innerpedia article: contents on the left, the article with its infobox in the middle,
sections only where there is something to say. Notable exports: `ArticleView`. Wired into a
Next.js app (App Router or Next APIs).

[`app/innernet/components/wiki/article-view.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/article-view.tsx) · code · 5984 bytes

### category-view.tsx

Category:Name. What the category means, what its pages have in common, then every page A to
Z in balanced columns. Notable exports: `CategoryView`. Wired into a Next.js app (App Router
or Next APIs).

[`app/innernet/components/wiki/category-view.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/category-view.tsx) · code · 12111 bytes

### disambiguation-view.tsx

"src may refer to:", the list of every folder sharing a name, grouped by the project (or
top-level folder) that holds it, in Wikipedia's manner. Notable exports:
`DisambiguationView`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/wiki/disambiguation-view.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/disambiguation-view.tsx) · code · 10058 bytes

### special-view.tsx

Special: pages, the ones Innerpedia writes about itself. Special:Random is handled by the
route (it redirects before rendering). Notable exports: `SpecialView`. Wired into a Next.js
app (App Router or Next APIs).

[`app/innernet/components/wiki/special-view.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/special-view.tsx) · code · 7631 bytes

### stub-view.tsx

A stub: a folder with no README or manifest of its own. Same chrome as an article, much
shorter: what it is, what is in it, and a polite request for a README. Notable exports:
`StubView`.

[`app/innernet/components/wiki/stub-view.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/stub-view.tsx) · code · 3055 bytes

### wiki-shell.tsx

Chrome shared by every Innerpedia page: header, a centred column, and the footer with the
special pages, held to the bottom of the window on short pages. Each view renders its own
<main>. Notable exports: `WikiShell`.

[`app/innernet/components/wiki/wiki-shell.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/wiki-shell.tsx) · code · 1228 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
