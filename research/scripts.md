<!-- quirq-wiki-generated repo=research dir=scripts -->

# research / scripts

Source: [scripts](https://github.com/quirq-ai/research/tree/main/scripts) in [research](https://github.com/quirq-ai/research).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build-hub.mjs

Assemble the research hub: one static site with every topic under /<topic>/ and an index
page listing the topics. Usage, from the repo root, after `turbo run build`: node
scripts/build-hub.mjs write the site to dist/ node scripts/build-hub.mjs serve then serve
dist/ on $PORT (default 3000) A topic is a top-level folder with a package.json, except
_template/ and packages/.

[`scripts/build-hub.mjs`](https://github.com/quirq-ai/research/blob/main/scripts/build-hub.mjs) · code · 6387 bytes

### check.mjs

Check that every topic follows the repo rules in AGENTS.md.

[`scripts/check.mjs`](https://github.com/quirq-ai/research/blob/main/scripts/check.mjs) · code · 4670 bytes

### new-topic.sh

Create a new research topic folder from _template/. Shebang `#!/usr/bin/env bash`.
Functions: `usage`, `cleanup`. Fails fast (`set -e`).

[`scripts/new-topic.sh`](https://github.com/quirq-ai/research/blob/main/scripts/new-topic.sh) · code · 2515 bytes

### topics-table.mjs

Write the Topics table in the root README.md from each topic's README.md: its status, first
paragraph and the formats it has published. The table sits between the <!-- topics:start -->
and <!-- topics:end --> markers.

[`scripts/topics-table.mjs`](https://github.com/quirq-ai/research/blob/main/scripts/topics-table.mjs) · code · 2056 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
