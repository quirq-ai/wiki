<!-- quirq-wiki-generated repo=monitoring dir=tests/fixtures/raw/infra-config/main/config -->

# monitoring / tests/fixtures/raw/infra-config/main/config

Source: [tests/fixtures/raw/infra-config/main/config](https://github.com/quirq-ai/monitoring/tree/main/tests/fixtures/raw/infra-config/main/config) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### channels.toml

TOML config `channels.toml`. Release channels and promotion rules. A build reaches a channel
only from the channel before it, in file order. Settled with suraj: canary (agents only),
then dev (humans plus agents), then stable. The fully autonomous loop is canary: a research
and test environment that runs unattended daily. Human owners approve before any release
reaches people, and only suraj promotes to stable. Numbers are proposals.

[`tests/fixtures/raw/infra-config/main/config/channels.toml`](https://github.com/quirq-ai/monitoring/blob/main/tests/fixtures/raw/infra-config/main/config/channels.toml) · code · 2639 bytes

### health.toml

TOML config `health.toml`. Health signals that gate promotion and trigger rollback.
Observers never act: release and the gardener read these and act through recorded
operations. SEED (V0-CFG-03): v0 uses CI signals and canary probes only. PostHog signals are
declared with phase = "v1" (V1-PH-01): neither repo sends PostHog events today (checked by
grep, 2026-10-03).

[`tests/fixtures/raw/infra-config/main/config/health.toml`](https://github.com/quirq-ai/monitoring/blob/main/tests/fixtures/raw/infra-config/main/config/health.toml) · code · 3205 bytes

### repos.toml

TOML config `repos.toml`. The registry of onboarded repos. Onboarding a repo means adding
one [[repo]] block here, plus the repo's own infra/repo.toml once sync exists. Facts were
read from the repos on 2026-10-03. Settled: public repos only for now (both repos below
clone anonymously). Sections: `area`, `[repo`, `repo.deploy`, `[repo.other_qq_workflows`.

[`tests/fixtures/raw/infra-config/main/config/repos.toml`](https://github.com/quirq-ai/monitoring/blob/main/tests/fixtures/raw/infra-config/main/config/repos.toml) · code · 2834 bytes

### rollers.toml

TOML config `rollers.toml`. Machine-written dependency updates. Roller PRs go through the
same gate, and an agent may land a clean roll alone (gate.toml change_class "dependency-
roll"). SEED (V0-CFG-03): rollers generates Dependabot config from the dependabot rollers
(V0-ROL-02) and runs the toolchain roller itself (V0-ROL-01). An agent may land a clean roll
alone (D4). Sections: `area`, `[roller`.

[`tests/fixtures/raw/infra-config/main/config/rollers.toml`](https://github.com/quirq-ai/monitoring/blob/main/tests/fixtures/raw/infra-config/main/config/rollers.toml) · code · 1496 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
