<!-- quirq-wiki-generated repo=remote-build dir=infra -->

# remote-build / infra

Source: [infra](https://github.com/quirq-ai/remote-build/tree/main/infra) in [remote-build](https://github.com/quirq-ai/remote-build).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### repo.toml

TOML config `repo.toml`. Compatibility only, not onboarded. quirq-ai/test-pipelines' daily
compat check validates this manifest, runs qq sync and the kind's commands from infra-
config, and shows the result on the scorecard. This repo is not in infra-config's
repos.toml, so no generated workflow, builder or roller reads this file. Nothing rolls its
pins: toolchains move only with qqsync pin, and [qq] only by hand.

[`infra/repo.toml`](https://github.com/quirq-ai/remote-build/blob/main/infra/repo.toml) · code · 1514 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
