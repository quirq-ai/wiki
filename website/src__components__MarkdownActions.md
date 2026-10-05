<!-- quirq-wiki-generated repo=website dir=src/components/MarkdownActions -->

# website / src/components/MarkdownActions

Source: [src/components/MarkdownActions](https://github.com/quirq-ai/website/tree/main/src/components/MarkdownActions) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“MarkdownActions”). A "Copy page" split button that surfaces the raw-
markdown version of the current page — for pasting into an LLM, reading as plain text, or
handing straight to ChatGPT/Claude.

[`src/components/MarkdownActions/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/MarkdownActions/README.md) · code · 4736 bytes

### index.tsx

`location.pathname` carries a trailing slash where `appWindow.path` doesn't, and
`/docs/foo/.md` is not a real file. Normalize the same way seo.tsx does. Notable exports:
`getMarkdownUrl`, `checkMarkdownUrlExists`, `useMarkdownUrlExists`, `MarkdownActions`.

[`src/components/MarkdownActions/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/MarkdownActions/index.tsx) · code · 8998 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
