<!-- quirq-wiki-generated repo=euler dir=app/innernet/components/wiki/article -->

# euler / app/innernet/components/wiki/article

Source: [app/innernet/components/wiki/article](https://github.com/quirq-ai/euler/tree/main/app/innernet/components/wiki/article) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### contents-nav.tsx

The contents list. On wide screens it sits sticky beside the article and follows the reader
with an IntersectionObserver; elsewhere it folds into a details box. Notable exports:
`ContentsNav`, `ContentsBox`, `ContentsItem`. Marked `'use client'` so it runs in the
browser.

[`app/innernet/components/wiki/article/contents-nav.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/article/contents-nav.tsx) · code · 4534 bytes

### history.tsx

A repository's life: the headline numbers, commits per month as a quiet bar chart, who wrote
it, and the last ten commits as a timeline. Notable exports: `History`.

[`app/innernet/components/wiki/article/history.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/article/history.tsx) · code · 6929 bytes

### infobox.tsx

The infobox: a sigil on a wash of its own colours, then the facts in label/value rows,
grouped the way Wikipedia groups them. Notable exports: `Infobox`. Wired into a Next.js app
(App Router or Next APIs).

[`app/innernet/components/wiki/article/infobox.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/article/infobox.tsx) · code · 7361 bytes

### lead.ts

The encyclopedia voice. Turns index metadata into sentences ("linear-clone is a TypeScript
Next.js application in the experiments collection of the XO workspace.") as a list of
segments, so the view can render links and bold without any HTML. Notable exports:
`authorTotal`, `article`, `codeLanguages`, `descriptor`, `typeLabel`, `shortKind`,
`placeSegs`, `placeText`, and 12 more.

[`app/innernet/components/wiki/article/lead.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/article/lead.ts) · code · 21019 bytes

### parts.tsx

Small building blocks shared by articles, stubs and disambiguation pages. Notable exports:
`PathText`, `Segs`, `Breadcrumb`, `Title`, `PageHeader`, `Tool`, `Section`, `Sub`, and 5
more. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/wiki/article/parts.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/article/parts.tsx) · code · 9680 bytes

### readme.tsx

README rendering for the Overview section. The markdown is tidied first (the h1 that repeats
the page name and the paragraph already shown as the summary are dropped), then rendered
with raw HTML skipped, images hidden, headings demoted below the section heading, outside
links opened in a new tab and relative links left inert. Notable exports: `prepareReadme`,
`Readme`, `ReadmeHeading`, `PreparedReadme`.

[`app/innernet/components/wiki/article/readme.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/article/readme.tsx) · code · 8158 bytes

### related.tsx

"See also" and "External links", the two lists that close an article. Notable exports:
`gloss`, `SeeAlso`, `ExternalLinks`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/wiki/article/related.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/article/related.tsx) · code · 4094 bytes

### structure.tsx

A folder's insides as a tidy tree: subfolders with their share of the files, what was left
out of the index, and the files that sit at the top. Notable exports: `FolderTree`,
`FileList`, `Excluded`, `Deeper`, `Structure`, `More`. Wired into a Next.js app (App Router
or Next APIs).

[`app/innernet/components/wiki/article/structure.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/article/structure.tsx) · code · 6845 bytes

### technology.tsx

Languages as one stacked bar, then frameworks, scripts and dependencies. Notable exports:
`hasTechnology`, `Technology`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/wiki/article/technology.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wiki/article/technology.tsx) · code · 5900 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
