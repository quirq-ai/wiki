<!-- quirq-wiki-generated repo=argus-code dir=. -->

# argus-code / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/argus-code/tree/main) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 27 pattern(s)
including `node_modules/`, `dist/`, `*.log`, `.env`, `.env.local`, `.argus/`, `.DS_Store`,
`.vitest-cache/`, and 19 more. Generated and secret files matching these patterns are not in
the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/argus-code/blob/main/.gitignore) · other · 540 bytes

### .npmrc

Empty file `.npmrc` in the source tree. It is present (often as a placeholder or `.gitkeep`
stand-in) but contains no content to describe.

[`.npmrc`](https://github.com/quirq-ai/argus-code/blob/main/.npmrc) · empty · 0 bytes

### AGENTS.md

The agent/workspace instructions (“AGENTS.md — Argus (argus-code) root work contract”). This
repository uses the DOX framework: AGENTS.md files are binding work contracts for their
subtree. Before editing any path, read this file and every AGENTS.md on the route from the
repo root down to that path. The nearest doc controls local detail; this root controls repo-
wide rules. No child doc may weaken DOX.

[`AGENTS.md`](https://github.com/quirq-ai/argus-code/blob/main/AGENTS.md) · code · 6800 bytes

### ARCHITECTURE.md

Markdown page “Argus architecture”. A guide to how the pieces fit together, aimed at anyone
about to change the code. Read this before adding a feature so you know where things live
and why. README.md is the user-facing intro; this is the contributor's map.

[`ARCHITECTURE.md`](https://github.com/quirq-ai/argus-code/blob/main/ARCHITECTURE.md) · code · 18444 bytes

### CLAUDE.md

The Claude Code instructions (“CLAUDE.md”). This repository uses the DOX framework — an
AGENTS.md hierarchy of binding work contracts. AGENTS.md (repo root) is the source of truth,
including the full development workflow (branch → PR → squash-merge → release → tag →
publish).

[`CLAUDE.md`](https://github.com/quirq-ai/argus-code/blob/main/CLAUDE.md) · code · 652 bytes

### CONTRIBUTING.md

The contributor guide (“Contributing to Argus”). Thanks for being here. Argus is a one-
person project at this point, so the bar for contributions is "does it make the tool better
for people running it?". Bug fixes, docs improvements, and small features are all welcome —
please skim this file before opening a big PR so we're not working at cross-purposes.

[`CONTRIBUTING.md`](https://github.com/quirq-ai/argus-code/blob/main/CONTRIBUTING.md) · code · 7467 bytes

### LICENSE

License text (MIT License). Governs use, modification, and distribution of this repository.
Read the full file in the source tree before depending on the project in a product or
redistribution.

[`LICENSE`](https://github.com/quirq-ai/argus-code/blob/main/LICENSE) · other · 1070 bytes

### NOTICE

Extensionless file `NOTICE`. Argus bundles project-scaffolding templates derived from Agent
Anatomy (https://github.com/agent-anatomy/claude), used under the MIT License.

[`NOTICE`](https://github.com/quirq-ai/argus-code/blob/main/NOTICE) · other · 1200 bytes

### PRD.md

Markdown page “Argus — Product Requirements Document (v0.2, MVP)”. Historical document. This
is the original planning PRD, kept for the design rationale. It predates several decisions
that went the other way and is not an accurate description of what shipped.

[`PRD.md`](https://github.com/quirq-ai/argus-code/blob/main/PRD.md) · code · 27538 bytes

### README.md

The project README (“🚀 Quick start”). Argus.

[`README.md`](https://github.com/quirq-ai/argus-code/blob/main/README.md) · code · 18207 bytes

### SECURITY.md

The security policy. If you find a security issue in Argus, please **don't open a public
GitHub issue**. Instead, one of.

[`SECURITY.md`](https://github.com/quirq-ai/argus-code/blob/main/SECURITY.md) · code · 6752 bytes

### TESTING.md

Markdown page “Argus testing guide”. A catalog of every test file in the Argus codebase,
what each test verifies, and the conventions tests follow. This doubles as the parity
checklist for the in-flight TypeScript → Python backend migration: every TS test below needs
a Python equivalent with the same assertions before the TS source is deleted.

[`TESTING.md`](https://github.com/quirq-ai/argus-code/blob/main/TESTING.md) · code · 21470 bytes

### pyproject.toml

TOML config `pyproject.toml`. Sections: `project`, `project.urls`, `project.scripts`,
`dependency-groups`, `build-system`, `tool.hatch.build.targets.wheel`,
`tool.hatch.build.targets.wheel.force-include`, `tool.hatch.build.targets.sdist`,
`tool.pytest.ini_options`. Python project metadata and tool configuration.

[`pyproject.toml`](https://github.com/quirq-ai/argus-code/blob/main/pyproject.toml) · code · 2342 bytes

### uv.lock

Package-manager lockfile (uv.lock, 162.2 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`uv.lock`](https://github.com/quirq-ai/argus-code/blob/main/uv.lock) · lockfile · 166066 bytes

_Generated 2026-10-22 10:44 UTC from `main`._
