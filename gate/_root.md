<!-- quirq-wiki-generated repo=gate dir=. -->

# gate / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/gate/tree/main) in [gate](https://github.com/quirq-ai/gate).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 5 pattern(s)
including `__pycache__/`, `*.egg-info/`, `.venv/`, `build/`, `.qq/`. Generated and secret
files matching these patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/gate/blob/main/.gitignore) · other · 44 bytes

### AGENTS.md

The agent/workspace instructions (“Agent guide”). How an agent changes this repo safely.
Read README.md first.

[`AGENTS.md`](https://github.com/quirq-ai/gate/blob/main/AGENTS.md) · code · 1086 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/gate/blob/main/LICENSE) · other · 11358 bytes

### README.md

The project README (“gate”). Part of quirq infra ("qq"), quirq-ai's CI/CD system for repos
in any language. This repo decides what must pass before a change lands: the required
checks, computed from [infra-config](https://github.com/quirq-ai/infra-config) and each
repo's manifest, and the merge queue that verifies the exact merge result before it reaches
main.

[`README.md`](https://github.com/quirq-ai/gate/blob/main/README.md) · code · 8205 bytes

### apply-requirements.txt

Txt file `apply-requirements.txt`. Hashed, fully pinned dependencies for the admin's apply
environment (audit S8). Install with pip install --require-hashes --only-binary :all: -r
apply-requirements.txt pip install --no-deps --no-build-isolation -e . qqsync is not needed
to apply settings (it only reads manifests) and is not installed here. Regenerate when
pyproject.toml's pins change: every file PyPI has for each version is listed.

[`apply-requirements.txt`](https://github.com/quirq-ai/gate/blob/main/apply-requirements.txt) · code · 17668 bytes

### pins.toml

TOML config `pins.toml`. Other qq repos this one reads, by pinned commit (never copied).
Policy comes from infra-config; manifests are read only through sync. TODO(expert): let
rollers move these pins. Sections: `infra-config`, `sync`.

[`pins.toml`](https://github.com/quirq-ai/gate/blob/main/pins.toml) · code · 517 bytes

### pyproject.toml

TOML config `pyproject.toml`. Sections: `build-system`, `project`, `project.optional-
dependencies`, `project.scripts`, `tool.setuptools.packages.find`,
`tool.pytest.ini_options`. Python project metadata and tool configuration.

[`pyproject.toml`](https://github.com/quirq-ai/gate/blob/main/pyproject.toml) · code · 837 bytes

_Generated 2026-10-09 12:09 UTC from `main`._
