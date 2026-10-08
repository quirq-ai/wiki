<!-- quirq-wiki-generated repo=gate dir=src/qqgate -->

# gate / src/qqgate

Source: [src/qqgate](https://github.com/quirq-ai/gate/tree/main/src/qqgate) in [gate](https://github.com/quirq-ai/gate).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

qqgate: the quirq infra (qq) landing gate.

[`src/qqgate/__init__.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/__init__.py) · code · 71 bytes

### cli.py

qqgate: the quirq infra (qq) landing gate. Functions: `cmd_required`, `cmd_rule`,
`cmd_verdict`, `cmd_settings`, `cmd_guard`, `cmd_queued_at`, `main`.

[`src/qqgate/cli.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/cli.py) · code · 28065 bytes

### config.py

Read infra-config through its own loader and validator (qqcfg), from a checkout at a pinned
commit. Functions: `qqcfg_module`, `load`.

[`src/qqgate/config.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/config.py) · code · 1810 bytes

### errors.py

Typed gate errors. A gate that cannot compute its checks refuses; it never guesses. Classes:
`GateError`, `NotOnboarded`.

[`src/qqgate/errors.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/errors.py) · code · 554 bytes

### guard.py

V0-GAT-02: the agnosticism guard. No core file names a language, build tool or deploy
target. Classes: `Finding`. Functions: `load_terms`, `scan_file`, `scan_repo`. Contains
tests.

[`src/qqgate/guard.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/guard.py) · code · 6447 bytes

### required.py

V0-GAT-01: compute a repo's required checks from infra-config and its manifest. Classes:
`Check`, `RequiredSet`. Functions: `compute`, `load_manifest`.

[`src/qqgate/required.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/required.py) · code · 4559 bytes

### settings.py

V0-ORG-03: merge queue and rulesets as code (settings/.toml), applied by an admin. Classes:
`RepoPlan`, `Job`, `CheckoutState`. Functions: `load_settings`, `build`, `repo_settings`,
`repo_options`, `workflow_jobs`, `readiness`, `checkout_state`, `org_workflows`, and 3 more.

[`src/qqgate/settings.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/settings.py) · code · 28774 bytes

### timing.py

V0-GAT-04: when did a change enter the gate? Classes: `QueuedAt`. Functions: `rfc3339`.

[`src/qqgate/timing.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/timing.py) · code · 1140 bytes

### verdict.py

The gate's verdict on one commit: every required check present and green, or refused.
Classes: `Verdict`. Functions: `evaluate`.

[`src/qqgate/verdict.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/verdict.py) · code · 1952 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
