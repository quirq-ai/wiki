<!-- quirq-wiki-generated repo=remote-build dir=. -->

# remote-build / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/remote-build/tree/main) in [remote-build](https://github.com/quirq-ai/remote-build).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 8 pattern(s)
including `__pycache__/`, `*.pyc`, `*.egg-info/`, `build/`, `dist/`, `.venv/`, `.qq/`,
`/out/`. Generated and secret files matching these patterns are not in the clone the wiki
summarizes.

[`.gitignore`](https://github.com/quirq-ai/remote-build/blob/main/.gitignore) · other · 62 bytes

### AGENTS.md

The agent/workspace instructions (“Agent guide”). How an agent changes this repo safely.
Read README.md first.

[`AGENTS.md`](https://github.com/quirq-ai/remote-build/blob/main/AGENTS.md) · code · 882 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/remote-build/blob/main/LICENSE) · other · 11358 bytes

### README.md

The project README (“remote-build”). Part of quirq infra ("qq"), quirq-ai's CI/CD system for
repos in any language. This repo is where actions run and how their results are reused: the
executor interface and the action cache.

[`README.md`](https://github.com/quirq-ai/remote-build/blob/main/README.md) · code · 4812 bytes

### pyproject.toml

TOML config `pyproject.toml`. Sections: `build-system`, `project`, `project.optional-
dependencies`, `project.scripts`, `tool.setuptools.packages.find`,
`tool.pytest.ini_options`. Python project metadata and tool configuration.

[`pyproject.toml`](https://github.com/quirq-ai/remote-build/blob/main/pyproject.toml) · code · 796 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
