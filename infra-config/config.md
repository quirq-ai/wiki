<!-- quirq-wiki-generated repo=infra-config dir=config -->

# infra-config / config

Source: [config](https://github.com/quirq-ai/infra-config/tree/main/config) in [infra-config](https://github.com/quirq-ai/infra-config).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### auto_revert.toml

TOML config `auto_revert.toml`. Gardener auto-revert caps: at most 10 reverts created per
rolling 24 hours. The 10 is suraj's (plan D5). Counting reverts created is a default I
picked, not his decision; he can change it. Beneath it sit LUCI Bisection's finer limits for
Chromium (infra/config/luci-bisection.cfg, read 2026-10-03; plan §3 P6). The culprit-age
limit gates submission, not creation.

[`config/auto_revert.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/auto_revert.toml) · code · 2101 bytes

### channels.toml

TOML config `channels.toml`. Release channels and promotion rules. A build reaches a channel
only from the channel before it, in file order. Settled with suraj: canary (agents only),
then dev (humans plus agents), then stable. The fully autonomous loop is canary: a research
and test environment that runs unattended daily. Human owners approve before any release
reaches people, and only suraj promotes to stable. Numbers are proposals.

[`config/channels.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/channels.toml) · code · 2639 bytes

### flakes.toml

TOML config `flakes.toml`. How a test failure becomes a verdict, and how flaky tests are
quarantined (plan §3 P5). SEED (V0-CFG-03): the v0 retry values. test-pipelines' verdict
(V0-TST-03) reads [verdict]; the rest is read once quarantine lands (v1). Numbers are
proposals, as Chromium's (cq.md) are tuned. Sections: `area`, `verdict`, `quarantine`,
`detection`.

[`config/flakes.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/flakes.toml) · code · 1315 bytes

### fuzz.toml

TOML config `fuzz.toml`. Property tests, the canary fuzz smoke and fuzz schedules (plan
§5.9). SEED (V0-CFG-03): v0 runs property tests only, time-boxed, in the gate and in the
canary's fuzz smoke (V0-REC-04, V0-REL-03). Coverage-guided fuzzing and its schedules are v1
(V1-REL-02): neither repo has fuzz targets yet, so the schedules below have phase = "v1" and
nothing runs them.

[`config/fuzz.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/fuzz.toml) · code · 2681 bytes

### gate.toml

TOML config `gate.toml`. The landing gate. A change lands only when the deterministic gate
has verified the exact merge result. Agents propose; machinery disposes. No agent can
override the gate. Sections: `area`, `merge_queue`, `admission`, `verification_surface`,
`[change_class`, `tree_status`.

[`config/gate.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/gate.toml) · code · 2824 bytes

### health.toml

TOML config `health.toml`. Health signals that gate promotion and trigger rollback.
Observers never act: release and the gardener read these and act through recorded
operations. SEED (V0-CFG-03): v0 uses CI signals and canary probes only. PostHog signals are
declared with phase = "v1" (V1-PH-01): neither repo sends PostHog events today (checked by
grep, 2026-10-03).

[`config/health.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/health.toml) · code · 3205 bytes

### kinds.toml

TOML config `kinds.toml`. Toolchains and target kinds, with the capabilities each kind
implements (plan §5.2). A kind resolves to an adapter in quirq-ai/recipes (contract and
loader: V0-REC-01). Capabilities are recipes' list: fetch, build, test, package, run,
deploy, bench and fuzz. A missing capability is a declared state, not an error: a docs site
has no test. Settled year-one stack: the latest Python and the latest Next.js.

[`config/kinds.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/kinds.toml) · code · 3915 bytes

### org.toml

TOML config `org.toml`. Org-wide policy: the system's name, execution backends, roles,
pools, secret scopes, budget and rotations. Every other area refers to the names defined
here. SEED (V0-CFG-03): names, backends, policy-owner, the two pools, the two secret scopes
and the three rotations are what v0 runs on: proposed in the skeleton, settled when suraj
approves V0-CFG-03.

[`config/org.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/org.toml) · code · 7213 bytes

### perf.toml

TOML config `perf.toml`. Benchmarks on main with alert thresholds (plan §3 P7). STUB:
nothing runs until P6. Sections: `area`, `[benchmark`.

[`config/perf.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/perf.toml) · code · 670 bytes

### pipelines.toml

TOML config `pipelines.toml`. Builders: what runs, on which trigger, in which pool.
Pipelines follow Chromium's split: presubmit (on the change, inside the gate), postsubmit
(every main commit), release, and perf (perf.toml). Fuzz schedules live in fuzz.toml.

[`config/pipelines.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/pipelines.toml) · code · 5314 bytes

### postmortem.toml

TOML config `postmortem.toml`. Postmortem policy and failure tracking. Every trigger below
opens or updates one tracked record, whether or not a postmortem is written, so recurring
failures become visible. SEED (V0-CFG-03): v0 triggers and the template. Read by gardener
(V0-GAR-04) and release (V0-REL-03). The recurrence rule is a v1 proposal (V1-CFG-04);
nothing enforces it in v0. Sections: `area`, `policy`, `recurrence`, `[trigger`.

[`config/postmortem.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/postmortem.toml) · code · 2679 bytes

### repos.toml

TOML config `repos.toml`. The registry of onboarded repos. Onboarding a repo means adding
one [[repo]] block here, plus the repo's own infra/repo.toml once sync exists. Facts were
read from the repos on 2026-10-03. Settled: public repos only for now (both repos below
clone anonymously). Sections: `area`, `[repo`, `repo.deploy`, `[repo.other_qq_workflows`.

[`config/repos.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/repos.toml) · code · 2834 bytes

### rollers.toml

TOML config `rollers.toml`. Machine-written dependency updates. Roller PRs go through the
same gate, and an agent may land a clean roll alone (gate.toml change_class "dependency-
roll"). SEED (V0-CFG-03): rollers generates Dependabot config from the dependabot rollers
(V0-ROL-02) and runs the toolchain roller itself (V0-ROL-01). An agent may land a clean roll
alone (D4). Sections: `area`, `[roller`.

[`config/rollers.toml`](https://github.com/quirq-ai/infra-config/blob/main/config/rollers.toml) · code · 1496 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
