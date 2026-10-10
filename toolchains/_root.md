<!-- quirq-wiki-generated repo=toolchains dir=. -->

# toolchains / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/toolchains/tree/main) in [toolchains](https://github.com/quirq-ai/toolchains).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 3 pattern(s)
including `__pycache__/`, `*.pyc`, `/out/`. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/toolchains/blob/main/.gitignore) · other · 25 bytes

### AGENTS.md

The agent/workspace instructions (“Agent guide”). How an agent changes this repo safely.
Read README.md first.

[`AGENTS.md`](https://github.com/quirq-ai/toolchains/blob/main/AGENTS.md) · code · 1508 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/toolchains/blob/main/LICENSE) · other · 11358 bytes

### README.md

The project README (“toolchains”). Part of quirq infra ("qq"), quirq-ai's CI/CD system for
repos in any language. This repo builds the toolchains every qq build uses, publishes them,
pins them by digest, and promotes them from staging by reviewed pull request.

[`README.md`](https://github.com/quirq-ai/toolchains/blob/main/README.md) · code · 5912 bytes

### promoted.toml

TOML config `promoted.toml`. Promoted toolchains: one pin per toolchain, by digest. Written
by qqtc promote in a reviewed PR; read by the toolchain roller (quirq-ai/rollers,
V0-ROL-01). Do not edit by hand. Sections: `[toolchain`.

[`promoted.toml`](https://github.com/quirq-ai/toolchains/blob/main/promoted.toml) · code · 1072 bytes

### requirements-dev.txt

Txt file `requirements-dev.txt`. pytest==9.1.1 pyyaml==6.0.3.

[`requirements-dev.txt`](https://github.com/quirq-ai/toolchains/blob/main/requirements-dev.txt) · code · 28 bytes

### toolchains.toml

TOML config `toolchains.toml`. Repo-wide settings for quirq-ai/toolchains. Read by
tools/qqtc.py. Sections: `github`.

[`toolchains.toml`](https://github.com/quirq-ai/toolchains/blob/main/toolchains.toml) · code · 309 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
