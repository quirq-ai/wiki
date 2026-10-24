<!-- quirq-wiki-generated repo=docs dir=src/journeys -->

# docs / src/journeys

Source: [src/journeys](https://github.com/quirq-ai/docs/tree/main/src/journeys) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### first-build.json

JSON document `first-build.json` whose top-level keys are `title`, `events`. Structured data
consumed by the surrounding app or tooling.

[`src/journeys/first-build.json`](https://github.com/quirq-ai/docs/blob/main/src/journeys/first-build.json) · code · 3947 bytes

### home-commands.ts

The docs home page's terminal: every command it knows, grouped the way a reader meets them,
with one line on what it did and where to read more. Where the output comes from (`src`
below): - "recorded": a real run, recorded by scripts/videos/recorder.py from
scripts/journeys/home-qq.json into home-qq.json.

[`src/journeys/home-commands.ts`](https://github.com/quirq-ai/docs/blob/main/src/journeys/home-commands.ts) · code · 20339 bytes

### home-qq.json

JSON document `home-qq.json` whose top-level keys are `title`, `events`. Structured data
consumed by the surrounding app or tooling.

[`src/journeys/home-qq.json`](https://github.com/quirq-ai/docs/blob/main/src/journeys/home-qq.json) · code · 22827 bytes

### home-use-cases.ts

The docs home's use cases (each plays a few replayed commands in the terminal) and its
command builder (fill in your own names, get the commands to copy). Every command here is
one the terminal replays, in home-commands.ts; the builder only swaps in your names, checked
first, so what it prints can be pasted into a shell as it is. Notable exports: `UseCase`,
`useCases`, `Field`, `Recipe`, `recipes`.

[`src/journeys/home-use-cases.ts`](https://github.com/quirq-ai/docs/blob/main/src/journeys/home-use-cases.ts) · code · 8573 bytes

### home-xo.json

JSON document `home-xo.json` whose top-level keys are `title`, `events`. Structured data
consumed by the surrounding app or tooling.

[`src/journeys/home-xo.json`](https://github.com/quirq-ai/docs/blob/main/src/journeys/home-xo.json) · code · 11700 bytes

_Generated 2026-10-24 09:53 UTC from `main`._
