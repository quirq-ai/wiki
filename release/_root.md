<!-- quirq-wiki-generated repo=release dir=. -->

# release / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/release/tree/main) in [release](https://github.com/quirq-ai/release).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 4 pattern(s)
including `__pycache__/`, `*.egg-info/`, `.qq/`, `.venv/`. Generated and secret files
matching these patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/release/blob/main/.gitignore) · other · 37 bytes

### AGENTS.md

The agent/workspace instructions (“Agent guide”). How an agent changes this repo safely.
Read README.md first.

[`AGENTS.md`](https://github.com/quirq-ai/release/blob/main/AGENTS.md) · code · 1254 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/release/blob/main/LICENSE) · other · 11358 bytes

### README.md

The project README (“release”). Part of quirq infra ("qq"), quirq-ai's CI/CD system for
repos in any language. This repo moves builds through channels. A channel is a pointer:
channels/ names a commit and an artifact digest, and only the release executor moves it,
recording an operation key before it does.

[`README.md`](https://github.com/quirq-ai/release/blob/main/README.md) · code · 16407 bytes

### pins.toml

TOML config `pins.toml`. Other qq repos this one reads, by pinned commit (never copied).
Policy comes from infra-config. TODO(expert): let rollers move these pins. Sections: `infra-
config`, `gate`.

[`pins.toml`](https://github.com/quirq-ai/release/blob/main/pins.toml) · code · 438 bytes

### pyproject.toml

TOML config `pyproject.toml`. Sections: `build-system`, `project`, `project.optional-
dependencies`, `project.scripts`, `project.entry-points."qq.commands"`,
`tool.setuptools.packages.find`, `tool.pytest.ini_options`. Python project metadata and tool
configuration.

[`pyproject.toml`](https://github.com/quirq-ai/release/blob/main/pyproject.toml) · code · 1344 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
