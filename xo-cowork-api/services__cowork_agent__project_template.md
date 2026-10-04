<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/project_template -->

# xo-cowork-api / services/cowork_agent/project_template

Source: [services/cowork_agent/project_template](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/project_template) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AGENTS.md

The agent/workspace instructions (“AGENTS.md — operating contract for this folder”). You are
an agent (Claude, Codex, Cursor, Aider, or other) working inside a well harness engineered
folder. This file is the contract every agent reads first. It is short on purpose. Ignore it
and you will duplicate work, lose context, and corrupt the human's externalized memory.
Don't.

[`services/cowork_agent/project_template/AGENTS.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/project_template/AGENTS.md) · code · 13879 bytes

### CLAUDE.md

The Claude Code instructions. @AGENTS.md.

[`services/cowork_agent/project_template/CLAUDE.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/project_template/CLAUDE.md) · code · 10 bytes

### OBJECTIVES.md

Markdown page “OBJECTIVES.md”. The north-star outcomes for this project. Stable on the order
of weeks. Edit when objectives genuinely shift — not when tasks shift (the current plan goes
in PLAN.md; in-flight todos live in your runtime's todo tool and .xo/todos.json). [TEMPLATE]
markers below mean this folder is fresh. Replace them on first boot.

[`services/cowork_agent/project_template/OBJECTIVES.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/project_template/OBJECTIVES.md) · code · 921 bytes

### PLAN.md

Markdown page “PLAN.md”. The current plan. Agent-maintained. Updated when the plan changes —
not at session boundaries. If this file is stale, the agent has failed at its job.
[TEMPLATE] markers below mean this folder is fresh. Replace them once a real plan exists.

[`services/cowork_agent/project_template/PLAN.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/project_template/PLAN.md) · code · 1236 bytes

### PROGRESS.md

Markdown page “PROGRESS.md”. Running narrative of what's actually been done. Append-only —
never edit prior entries. One paragraph per session at close. Read by every agent at boot
(last ~30 lines only).

[`services/cowork_agent/project_template/PROGRESS.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/project_template/PROGRESS.md) · code · 583 bytes

### PROJECT.md

Markdown page “PROJECT.md”. What this folder is, who it's for, and what is in scope. Edit
when scope changes — not on every session. [TEMPLATE] markers below mean this folder is
fresh. On first boot, the agent must replace each marker with real content (or ask the user)
before doing project work.

[`services/cowork_agent/project_template/PROJECT.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/project_template/PROJECT.md) · code · 1259 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
