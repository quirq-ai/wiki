<!-- quirq-wiki-generated repo=docs dir=scripts/journeys -->

# docs / scripts/journeys

Source: [scripts/journeys](https://github.com/quirq-ai/docs/tree/main/scripts/journeys) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Journeys”). A journey page (such as content/docs/try-first-build.mdx)
puts a guide's steps beside a terminal that replays a real run. The run is recorded with the
video recorder, from a spec here.

[`scripts/journeys/README.md`](https://github.com/quirq-ai/docs/blob/main/scripts/journeys/README.md) · code · 4158 bytes

### first-build.json

JSON document `first-build.json` whose top-level keys are `title`, `home`, `cwd`, `path`,
`steps`. Structured data consumed by the surrounding app or tooling.

[`scripts/journeys/first-build.json`](https://github.com/quirq-ai/docs/blob/main/scripts/journeys/first-build.json) · code · 975 bytes

### home-qq.json

JSON document `home-qq.json` whose top-level keys are `title`, `home`, `cwd`, `path`,
`steps`. Structured data consumed by the surrounding app or tooling.

[`scripts/journeys/home-qq.json`](https://github.com/quirq-ai/docs/blob/main/scripts/journeys/home-qq.json) · code · 1933 bytes

### home-xo.json

JSON document `home-xo.json` whose top-level keys are `title`, `home`, `cwd`, `path`, `env`,
`replace`, `steps`. Structured data consumed by the surrounding app or tooling.

[`scripts/journeys/home-xo.json`](https://github.com/quirq-ai/docs/blob/main/scripts/journeys/home-xo.json) · code · 1744 bytes

### record-home-xo.sh

Record the home page's xo commands against xo-standin.py: the real xo CLI and the real xo
serve, with made-up users and data, and nothing sent to Clerk, XO or xo.quirq.dev. Usage:
record-home-xo.sh XO_VENV OUT.json (XO_VENV: a venv with xo installed, e.g. ~/.xo) The
recording home is /home/xo-demo (the spec's "home"); it must not exist yet. Shebang
`#!/usr/bin/env bash`. Functions: `pick`. Fails fast (`set -e`).

[`scripts/journeys/record-home-xo.sh`](https://github.com/quirq-ai/docs/blob/main/scripts/journeys/record-home-xo.sh) · code · 2189 bytes

### xo-standin.py

A stand-in for the services behind the xo server, on 127.0.0.1 only, for recording the docs
home page's xo commands. Runnable as a script via `if __name__ == '__main__'`. Classes:
`Handler`. Functions: `main`.

[`scripts/journeys/xo-standin.py`](https://github.com/quirq-ai/docs/blob/main/scripts/journeys/xo-standin.py) · code · 6457 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
