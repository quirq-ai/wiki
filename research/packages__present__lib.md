<!-- quirq-wiki-generated repo=research dir=packages/present/lib -->

# research / packages/present/lib

Source: [packages/present/lib](https://github.com/quirq-ai/research/tree/main/packages/present/lib) in [research](https://github.com/quirq-ai/research).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### output-icons.js

Overview tiles and format navigation share one output link. Notable exports:
`outputIconLink`.

[`packages/present/lib/output-icons.js`](https://github.com/quirq-ai/research/blob/main/packages/present/lib/output-icons.js) · code · 768 bytes

### outputs.js

Published output navigation comes from the README table, rather than the files beside a
report (figures, deck sources and other supporting assets). Notable exports: `readOutputs`,
`outputSwitcher`, `outputResource`, `formatLabels`.

[`packages/present/lib/outputs.js`](https://github.com/quirq-ai/research/blob/main/packages/present/lib/outputs.js) · code · 5168 bytes

### overview.js

The topic overview page: README.md shown as a visual landing page. The README's fixed parts
(title, summary, the Status/Owner/dates table, the "Status and progress" checklist and the
"Published outputs" table) become a title block, stage tag and output icons. Everything else
in the README renders as prose below them, unchanged. Notable exports: `overview`.

[`packages/present/lib/overview.js`](https://github.com/quirq-ai/research/blob/main/packages/present/lib/overview.js) · code · 5117 bytes

### pdf-reader.js

import { cpSync, mkdirSync } from "node:fs" import { createRequire } from "node:module"
import { dirname, join } from "node:path" import { fileURLToPath } from "node:url" import {
escapeHtml, icon } from "@research/theme" Notable exports: `copyPdfReader`, `pdfReader`.

[`packages/present/lib/pdf-reader.js`](https://github.com/quirq-ai/research/blob/main/packages/present/lib/pdf-reader.js) · code · 2423 bytes

### reading.js

Reading aids for long pages, laid out like a journal article: numbered headings with
anchors, front and back matter, a table of contents, a reading-time estimate and a scroll
progress bar. Notable exports: `readingLayout`.

[`packages/present/lib/reading.js`](https://github.com/quirq-ai/research/blob/main/packages/present/lib/reading.js) · code · 5800 bytes

_Generated 2026-10-21 10:42 UTC from `main`._
