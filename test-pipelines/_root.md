<!-- quirq-wiki-generated repo=test-pipelines dir=. -->

# test-pipelines / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/test-pipelines/tree/main) in [test-pipelines](https://github.com/quirq-ai/test-pipelines).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 8 pattern(s)
including `__pycache__/`, `*.pyc`, `*.egg-info/`, `build/`, `dist/`, `.venv/`, `.qq/`,
`/out/`. Generated and secret files matching these patterns are not in the clone the wiki
summarizes.

[`.gitignore`](https://github.com/quirq-ai/test-pipelines/blob/main/.gitignore) · other · 62 bytes

### AGENTS.md

The agent/workspace instructions (“Agent guide”). How an agent changes this repo safely.
Read README.md first.

[`AGENTS.md`](https://github.com/quirq-ai/test-pipelines/blob/main/AGENTS.md) · code · 1158 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/test-pipelines/blob/main/LICENSE) · other · 11358 bytes

### README.md

The project README (“test-pipelines”). Part of quirq infra ("qq"), quirq-ai's CI/CD system
for repos in any language. This repo turns test output into stored results and mechanical
verdicts.

[`README.md`](https://github.com/quirq-ai/test-pipelines/blob/main/README.md) · code · 35158 bytes

### pins.toml

TOML config `pins.toml`. Other qq repos this one reads, by pinned commit (never copied).
TODO(expert): let rollers move these pins. Sections: `gate`.

[`pins.toml`](https://github.com/quirq-ai/test-pipelines/blob/main/pins.toml) · code · 282 bytes

### pyproject.toml

TOML config `pyproject.toml`. Sections: `build-system`, `project`, `project.optional-
dependencies`, `project.scripts`, `tool.setuptools.packages.find`,
`tool.pytest.ini_options`. Python project metadata and tool configuration.

[`pyproject.toml`](https://github.com/quirq-ai/test-pipelines/blob/main/pyproject.toml) · code · 560 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
