<!-- quirq-wiki-generated repo=instants dir=scripts -->

# instants / scripts

Source: [scripts](https://github.com/quirq-ai/instants/tree/main/scripts) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### migrate-store.mjs

Move generated content from the old layout (public/research, .research-
cache/posts|uploads|videos) into the content store. Safe to run any number of times.

[`scripts/migrate-store.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/migrate-store.mjs) · code · 409 bytes

### research.mjs

Turn local research folders into Instants posts. npm run research every folder under the
default roots (cached) npm run research -- --force regenerate everything npm run research --
<path...> only these folders or files npm run research -- --concurrency 2.

[`scripts/research.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/research.mjs) · code · 1804 bytes

### vendor-spacehub.mjs

Copy the globally installed spacehub CLI into .spacehub-cli/ so `docker build` can install
it. The folder is gitignored: the CLI is private to quirq.

[`scripts/vendor-spacehub.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/vendor-spacehub.mjs) · code · 744 bytes

### video.mjs

Make a video for one Instants post. npm run video -- <slug> [--aspect 9:16|1:1|16:9]
[--length 45] [--sound full|music|off] INSTANTS_VIDEO_DRY=1 npm run video -- <slug>
simulated agent, tiny test mp4.

[`scripts/video.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/video.mjs) · code · 1284 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
