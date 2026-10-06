<!-- quirq-wiki-generated repo=gardener dir=. -->

# gardener / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/gardener/tree/main) in [gardener](https://github.com/quirq-ai/gardener).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 5 pattern(s)
including `__pycache__/`, `*.egg-info/`, `.qq/`, `.venv/`, `build/`. Generated and secret
files matching these patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/gardener/blob/main/.gitignore) · other · 44 bytes

### AGENTS.md

The agent/workspace instructions (“Agent guide”). How an agent changes this repo safely.
Read README.md first.

[`AGENTS.md`](https://github.com/quirq-ai/gardener/blob/main/AGENTS.md) · code · 1138 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/gardener/blob/main/LICENSE) · other · 11358 bytes

### README.md

The project README (“gardener”). Part of quirq infra ("qq"), quirq-ai's CI/CD system for
repos in any language. This repo keeps main green in every onboarded repo, as an agent plus
a small service: it watches the post-submit run on every main commit, publishes a tree
status, groups failures by regression range, bisects them to a culprit and opens clean
reverts within the caps in infra-config's auto_revert.toml.

[`README.md`](https://github.com/quirq-ai/gardener/blob/main/README.md) · code · 16273 bytes

### pins.toml

TOML config `pins.toml`. Other qq repos this one reads, by pinned commit (never copied).
Policy comes from infra-config. TODO(expert): let rollers move these pins. Sections: `infra-
config`, `test-pipelines`, `gate`.

[`pins.toml`](https://github.com/quirq-ai/gardener/blob/main/pins.toml) · code · 699 bytes

### pyproject.toml

TOML config `pyproject.toml`. Sections: `build-system`, `project`, `project.optional-
dependencies`, `project.scripts`, `tool.setuptools.packages.find`,
`tool.pytest.ini_options`. Python project metadata and tool configuration.

[`pyproject.toml`](https://github.com/quirq-ai/gardener/blob/main/pyproject.toml) · code · 880 bytes

_Generated 2026-10-06 12:17 UTC from `main`._
