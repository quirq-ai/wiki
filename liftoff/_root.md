<!-- quirq-wiki-generated repo=liftoff dir=. -->

# liftoff / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/liftoff/tree/main) in [liftoff](https://github.com/quirq-ai/liftoff).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 2 pattern(s)
including `node_modules/`, `hub/`. Generated and secret files matching these patterns are
not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/liftoff/blob/main/.gitignore) · other · 90 bytes

### LICENSE

License text (MIT License). Governs use, modification, and distribution of this repository.
Read the full file in the source tree before depending on the project in a product or
redistribution.

[`LICENSE`](https://github.com/quirq-ai/liftoff/blob/main/LICENSE) · other · 1062 bytes

### README.md

The project README (“Liftoff”). A local deploy console for XO Launchpad docker apps. It
stores each app's push password encrypted on your computer and runs the whole sequence for
you: login, build, push, then a check that the registry really holds the image you pushed.
Every deploy is kept in a history with its output.

[`README.md`](https://github.com/quirq-ai/liftoff/blob/main/README.md) · code · 14838 bytes

### hub-sync.cmd

Cmd file `hub-sync.cmd`. @echo off node "%~dp0scripts\hub-sync.mjs" %*.

[`hub-sync.cmd`](https://github.com/quirq-ai/liftoff/blob/main/hub-sync.cmd) · code · 46 bytes

### liftoff.cmd

Cmd file `liftoff.cmd`. @echo off node "%~dp0bin\liftoff.js" %*.

[`liftoff.cmd`](https://github.com/quirq-ai/liftoff/blob/main/liftoff.cmd) · code · 40 bytes

### package.json

npm package manifest for `liftoff` v0.1.0. Local deploy console for XO Launchpad docker
apps: stores each app's push password encrypted, then runs login, build, push and verify in
one go, and keeps the history. CLI bins: `liftoff`. Scripts: `start`, `test`, `test:e2e`.

[`package.json`](https://github.com/quirq-ai/liftoff/blob/main/package.json) · code · 507 bytes

### queue.json

JSON array `queue.json` with 0 items.

[`queue.json`](https://github.com/quirq-ai/liftoff/blob/main/queue.json) · code · 4 bytes

_Generated 2026-11-14 12:36 UTC from `main`._
