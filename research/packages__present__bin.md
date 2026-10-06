<!-- quirq-wiki-generated repo=research dir=packages/present/bin -->

# research / packages/present/bin

Source: [packages/present/bin](https://github.com/quirq-ai/research/tree/main/packages/present/bin) in [research](https://github.com/quirq-ai/research).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### present.js

Default presentation for a research topic. Run from a topic folder: present build render
README.md, GOAL.md and output/{onepager,slide,report} into a static site in dist/ present
dev build, then serve dist/ on $PORT (default 3000) Markdown files become .html pages; any
other file under those output folders (a PDF, an image, an HTML deck) is copied as-is. The
README.md in each output folder only describes the format, so it is skipped.

[`packages/present/bin/present.js`](https://github.com/quirq-ai/research/blob/main/packages/present/bin/present.js) · code · 6684 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
