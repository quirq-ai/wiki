<!-- quirq-wiki-generated repo=gardener dir=src/qqgarden -->

# gardener / src/qqgarden

Source: [src/qqgarden](https://github.com/quirq-ai/gardener/tree/main/src/qqgarden) in [gardener](https://github.com/quirq-ai/gardener).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

The quirq infra (qq) gardener: keeps main green in every onboarded repo.

[`src/qqgarden/__init__.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/__init__.py) · code · 101 bytes

### bisect.py

V0-GAR-02, second half: bisect a regression range to its culprit (LUCI Bisection's job).
Classes: `Probe`, `Result`, `CommandProbe`. Functions: `bisect`.

[`src/qqgarden/bisect.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/bisect.py) · code · 5811 bytes

### cli.py

qqgarden: the gardener's command line. Runnable as a script via `if __name__ == '__main__'`.
Functions: `statuses`, `summary`, `cmd_status`, `cmd_groups`, `cmd_bisect`, `cmd_cycle`,
`cmd_revert`, `main`.

[`src/qqgarden/cli.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/cli.py) · code · 18759 bytes

### config.py

Read infra-config through its own loader and validator (qqcfg), from a checkout at a pinned
commit. Classes: `Repo`. Functions: `qqcfg_module`, `load`, `repos`, `cancellable`.

[`src/qqgarden/config.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/config.py) · code · 3944 bytes

### cycle.py

V0-GAR-03: one gardening cycle. Observe every onboarded repo, group its failures, and for
each group with a verified culprit, create a clean revert within the caps. Classes:
`Outcome`, `Verification`. Functions: `assignees`, `pr_body`, `verify`, `backfill`, `run`,
`inline`, `revert_title`, `follow_up`, and 5 more.

[`src/qqgarden/cycle.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/cycle.py) · code · 21881 bytes

### errors.py

Python module `errors.py`. Classes: `GardenerError`.

[`src/qqgarden/errors.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/errors.py) · code · 128 bytes

### evidence.py

Evidence for grouping: failed step names from the backend, unexpected tests from the results
store (test-pipelines' results branch, checked out as a directory). Classes: `Evidence`.

[`src/qqgarden/evidence.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/evidence.py) · code · 1758 bytes

### forge.py

Forges: where a revert becomes a change people see, and lands. Classes: `NoIdentity`.

[`src/qqgarden/forge.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/forge.py) · code · 1173 bytes

### git.py

The little git the gardener needs: a branch's first-parent history from a public clone.
Functions: `run`, `mirror`, `first_parent`.

[`src/qqgarden/git.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/git.py) · code · 2121 bytes

### groups.py

V0-GAR-02, first half: group failures by regression range (Sheriff-o-Matic's grouping).
Classes: `Group`, `Evidence`. Functions: `classify`, `group`.

[`src/qqgarden/groups.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/groups.py) · code · 4189 bytes

### ledger.py

The revert ledger: every revert the gardener created, write-once, so caps hold across runs.
Classes: `Entry`, `Ledger`. Functions: `revert_id`.

[`src/qqgarden/ledger.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/ledger.py) · code · 9046 bytes

### model.py

What the gardener reads (commits and post-submit runs) and what it publishes (tree status).
Classes: `RunState`, `TreeState`, `Commit`, `BuilderRun`, `BuilderStatus`, `RedSpan`,
`Coverage`, `TreeStatus`.

[`src/qqgarden/model.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/model.py) · code · 6366 bytes

### policy.py

V0-GAR-03: the revert caps, read from infra-config's auto_revert.toml and nothing else.
Classes: `Action`, `TypeLimits`, `Policy`, `Counts`, `Decision`. Functions: `decide`.

[`src/qqgarden/policy.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/policy.py) · code · 5115 bytes

### postsubmit.py

V0-GAR-01: a verdict for every main commit, red detection and the tree status. Functions:
`parse_time`, `latest_runs`, `from_main`, `state_of`, `observe`, `tree_status`, `coverage`.

[`src/qqgarden/postsubmit.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/postsubmit.py) · code · 10389 bytes

### records.py

V0-GAR-04: a failure record and a postmortem stub for every revert the gardener creates.
Classes: `Records`. Functions: `trigger_mode`, `template`, `stub_body`.

[`src/qqgarden/records.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/records.py) · code · 7774 bytes

### revert.py

Make a clean revert of one culprit on top of the branch tip, in a scratch clone. Classes:
`Made`. Functions: `branch_name`, `make`.

[`src/qqgarden/revert.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/revert.py) · code · 2716 bytes

### tracker.py

Trackers: where failure-record mirrors and postmortem stubs become issues people see.
Classes: `GitHubTracker`, `LocalTracker`.

[`src/qqgarden/tracker.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/tracker.py) · code · 4072 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
