<!-- quirq-wiki-generated repo=lan dir=. -->

# lan / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/lan/tree/main) in [lan](https://github.com/quirq-ai/lan).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 3 pattern(s)
including `e2e/.run/`, `e2e/.bin/`, `deploy/.env`. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/lan/blob/main/.gitignore) · other · 32 bytes

### AGENTS.md

The agent/workspace instructions (“AGENTS.md — operating contract for this folder”). You are
an agent (Claude, Codex, Cursor, Aider, or other) working inside a well harness engineered
folder. This file is the contract every agent reads first. It is short on purpose. Ignore it
and you will duplicate work, lose context, and corrupt the human's externalized memory.
Don't.

[`AGENTS.md`](https://github.com/quirq-ai/lan/blob/main/AGENTS.md) · code · 18429 bytes

### CLAUDE.md

The Claude Code instructions. @AGENTS.md.

[`CLAUDE.md`](https://github.com/quirq-ai/lan/blob/main/CLAUDE.md) · code · 10 bytes

### DESIGN.md

The design spec (“lan — MVP spec”). A tiny CLI that lets developers create a private
network, invite teammates, and share a local port or a folder (read-only) with them peer-to-
peer. Nothing is exposed publicly. Build the lightest thing that works: two Go binaries, one
JSON file of state, no UI.

[`DESIGN.md`](https://github.com/quirq-ai/lan/blob/main/DESIGN.md) · code · 7348 bytes

### OBJECTIVES.md

Markdown page “OBJECTIVES.md”. Why now: first building block for connecting people (and
later agents) across XO products.

[`OBJECTIVES.md`](https://github.com/quirq-ai/lan/blob/main/OBJECTIVES.md) · code · 538 bytes

### PLAN.md

Markdown page “PLAN.md”. As of: 2026-10-17 Driving objective: O1.

[`PLAN.md`](https://github.com/quirq-ai/lan/blob/main/PLAN.md) · code · 941 bytes

### PROGRESS.md

Markdown page “PROGRESS.md”. Running narrative of what's actually been done. Append-only —
never edit prior entries. One paragraph per session at close. Read by every agent at boot
(last ~30 lines only).

[`PROGRESS.md`](https://github.com/quirq-ai/lan/blob/main/PROGRESS.md) · code · 1361 bytes

### PROJECT.md

Markdown page “PROJECT.md”. lan.

[`PROJECT.md`](https://github.com/quirq-ai/lan/blob/main/PROJECT.md) · code · 1468 bytes

### README.md

The project README (“lan”). Private networks for developers. Create a network, invite
teammates, and share a local port or a folder (read-only) with them peer-to-peer. Nothing is
exposed to the internet, and every connection is identity-checked.

[`README.md`](https://github.com/quirq-ai/lan/blob/main/README.md) · code · 2434 bytes

_Generated 2026-10-20 10:30 UTC from `main`._
