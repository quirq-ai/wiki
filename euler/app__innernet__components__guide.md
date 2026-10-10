<!-- quirq-wiki-generated repo=euler dir=app/innernet/components/guide -->

# euler / app/innernet/components/guide

Source: [app/innernet/components/guide](https://github.com/quirq-ai/euler/tree/main/app/innernet/components/guide) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### add-site.tsx

Chapter II: what a folder needs to become an article, the five steps, roots, names, and the
folders most in need of a README. Notable exports: `AddSite`. Wired into a Next.js app (App
Router or Next APIs).

[`app/innernet/components/guide/add-site.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/add-site.tsx) · code · 20798 bytes

### chapters.ts

The guide's table of contents, shared by the page (headings, the hero's index) and the
progress ruler (a client component), so the two can never disagree. Notable exports:
`GuideSection`, `GuideChapter`, `CHAPTERS`.

[`app/innernet/components/guide/chapters.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/chapters.ts) · code · 2531 bytes

### contribute.tsx

Chapter IV: a map of the code, four recipes quoted from the code itself, the loop, the
conventions, and the checklist from CONTRIBUTING.md. Notable exports: `Contribute`.

[`app/innernet/components/guide/contribute.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/contribute.tsx) · code · 24104 bytes

### copy-button.tsx

Copies a command (or a prompt) to the clipboard. localhost is a secure context, so the async
clipboard works; if it is refused, the button says so and the text stays selectable. `quiet`
drops the box, for a button that sits in a line of text. Notable exports: `CopyButton`.
Marked `'use client'` so it runs in the browser.

[`app/innernet/components/guide/copy-button.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/copy-button.tsx) · code · 2204 bytes

### data.ts

Every live number in the guide, computed from the index the rest of the site reads. Each
helper copes with an empty index, so the guide still renders before the first `pnpm index`.
Notable exports: `depthCounts`, `kindCounts`, `indexFacts`, `matches`, `specimenPage`,
`mostWanted`, `nameExamples`, `NameGroup`.

[`app/innernet/components/guide/data.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/data.ts) · code · 4736 bytes

### field-guide.tsx

The Innernet Field Guide, bound in one piece: the title page with its film and contents,
then the five chapters beside their rail, then whatever the page adds at the end (`end`),
then the colophon. It lives on the home page under the search box, at /#guide. Every number
is read from the live index and every code excerpt from the code itself, so the guide never
drifts from the app. Notable exports: `FieldGuide`.

[`app/innernet/components/guide/field-guide.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/field-guide.tsx) · code · 3903 bytes

### folder-recipe.tsx

A folder recipe: pick what a folder holds and see what the indexer would make of it. Nothing
is fetched. The rules below mirror scripts/build-index.ts (kind, article, summary, names,
categories), lib/normalize.ts (summary) and lib/search.ts (tabs, operators, prior) line for
line for the folders this recipe can describe; the small print under the card names the
lines. Change those rules, change these. Notable exports: `FolderRecipe`.

[`app/innernet/components/guide/folder-recipe.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/folder-recipe.tsx) · code · 31718 bytes

### guide-motion.tsx

The guide's calm motion, in one observer pair: blocks rise in as they reach the reader, and
each plate draws itself on, layer by layer, the first time it is seen. Construction lines
first, then the main strokes, the detail, the blue accent, and last the labels. Nothing
moves for readers who ask for less motion, and without JavaScript everything is simply
there. Notable exports: `GuideMotion`. Marked `'use client'` so it runs in the browser.

[`app/innernet/components/guide/guide-motion.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/guide-motion.tsx) · code · 3734 bytes

### guide-ruler.tsx

The progress ruler: one segment per chapter, filling as the reader moves through it. On wide
screens a sticky rail beside the text, with the open chapter's sections; on narrow ones a
compact bar pinned to the top of the window that unfolds into the contents. The guide sits
under the home page's search, which has no sticky header, so both hold to the top of the
window itself. Notable exports: `GuideRail`, `GuideBar`.

[`app/innernet/components/guide/guide-ruler.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/guide-ruler.tsx) · code · 8405 bytes

### guide.css

The Innernet Field Guide: Innernet's paper, ink and one blue, set in the grammar of Defines
or consumes CSS custom properties (design tokens).

[`app/innernet/components/guide/guide.css`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/guide.css) · code · 15154 bytes

### hero.tsx

The title page: the aurora, the promise, the live counts, the explainer film as a
frontispiece, and the contents. It opens the guide's half of the home page, so it is
revealed as the reader scrolls down to it rather than on first paint. Notable exports:
`Hero`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/guide/hero.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/hero.tsx) · code · 9018 bytes

### how-it-works.tsx

Chapter I: the pipeline, then its three stations, each with its plate and the live numbers
of this machine's index. Notable exports: `HowItWorks`. Wired into a Next.js app (App Router
or Next APIs).

[`app/innernet/components/guide/how-it-works.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/how-it-works.tsx) · code · 21113 bytes

### parts.tsx

The guide's typographic pieces: chapter openings, section heads, figures of numbers,
commands with a copy button, and excerpts quoted from the code itself. Notable exports:
`ChapterHead`, `SectionHead`, `Prose`, `Figures`, `C`, `Command`, `Excerpt`, `Fine`.

[`app/innernet/components/guide/parts.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/parts.tsx) · code · 6841 bytes

### plate.tsx

The guide's figures. Every one sits in the same frame: printer's crop marks at the corners,
a hairline border, a head line with its figure number and title, and a caption below, the
way a plate is bound into a field atlas. <Plate> fills the frame with an engraved line
drawing from public/guide/plates/<id>.svg.

[`app/innernet/components/guide/plate.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/plate.tsx) · code · 11222 bytes

### privacy.tsx

Chapter V: what is read, what is only counted, what is blacked out, who may ask, and what
the database keeps, here and on the public demo. Notable exports: `Privacy`.

[`app/innernet/components/guide/privacy.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/privacy.tsx) · code · 12512 bytes

### recipe-shared.ts

Shared by the folder recipe (a client component) and the server code that feeds it: the
names the recipe offers, and the shape of what the server tells it about them. Notable
exports: `RECIPE_NAMES`, `RecipeName`, `Namesakes`, `RecipeCite`, `RecipeProps`.

[`app/innernet/components/guide/recipe-shared.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/recipe-shared.ts) · code · 1129 bytes

### search-pro.tsx

Chapter III: the operators with live counts, how results are ranked, and what the engine
does with typos. Notable exports: `SearchPro`. Wired into a Next.js app (App Router or Next
APIs).

[`app/innernet/components/guide/search-pro.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/search-pro.tsx) · code · 12754 bytes

### source.ts

Innernet's own files, read at request time so the guide quotes the code as it is today:
excerpts, line numbers for the small print, line counts for the file map. Only files inside
this project are read, never anything from the index. The paths are hidden from the
bundler's tracer, which would otherwise ship the whole project with the server;
next.config.ts names the files a deployment needs.

[`app/innernet/components/guide/source.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/guide/source.ts) · code · 3884 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
