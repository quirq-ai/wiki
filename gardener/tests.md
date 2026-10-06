<!-- quirq-wiki-generated repo=gardener dir=tests -->

# gardener / tests

Source: [tests](https://github.com/quirq-ai/gardener/tree/main/tests) in [gardener](https://github.com/quirq-ai/gardener).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

Python module `conftest.py`. Functions: `infra_config_root`, `config_root`, `cfg`. Contains
tests.

[`tests/conftest.py`](https://github.com/quirq-ai/gardener/blob/main/tests/conftest.py) · code · 843 bytes

### forgerepo.py

A product repo on a local bare remote with a planted build break, plus the snapshot the
gardener would see for it: green post-submits before the break, red from the break on.
Functions: `g`, `build`, `stamp`, `snapshot`, `remote_main_state`.

[`tests/forgerepo.py`](https://github.com/quirq-ai/gardener/blob/main/tests/forgerepo.py) · code · 3157 bytes

### history.py

Builds commit histories and post-submit runs for tests: a compact way to write a timeline.
Functions: `sha`, `history`.

[`tests/history.py`](https://github.com/quirq-ai/gardener/blob/main/tests/history.py) · code · 2028 bytes

### test_backends.py

Python module `test_backends.py`.

[`tests/test_backends.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_backends.py) · code · 5655 bytes

### test_backfill.py

V0-GAR-01 backfill: a batched push runs only its newest commit; the cycle dispatches the
rest. Functions: `run_cycle`, `dispatched`, `backfilled`, `batched`,
`test_holes_are_backfilled_oldest_first_and_then_covered`,
`test_a_backfill_cancelled_again_goes_to_a_person`, `test_dry_run_dispatches_nothing`,
`test_backfill_is_capped_per_cycle`, and 8 more. Contains tests.

[`tests/test_backfill.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_backfill.py) · code · 9596 bytes

### test_bisect.py

Python module `test_bisect.py`. Functions: `probe_for`, `test_finds_every_culprit`,
`test_skips_commits_it_cannot_tell`, `test_an_unknown_parent_leaves_both_in_play`,
`test_unknown_neighbours_leave_a_range`, `test_flaky_culprit_does_not_verify`,
`test_single_suspect`, `test_no_suspects`, and 6 more. Contains tests.

[`tests/test_bisect.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_bisect.py) · code · 4124 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `snapshot`, `run`,
`test_every_commit_covered_passes`, `test_a_hole_fails_coverage`,
`test_a_repo_with_no_results_yet_is_a_warning`, `test_red_is_reported`,
`test_unknown_repo_is_an_error`. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_cli.py) · code · 2262 bytes

### test_codeowners.py

Python module `test_codeowners.py`. Functions:
`test_codeowners_names_suraj_for_exactly_the_trust_paths`. Contains tests.

[`tests/test_codeowners.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_codeowners.py) · code · 830 bytes

### test_config.py

Python module `test_config.py`. Functions: `test_onboarded_repos_have_postsubmit_builders`,
`test_no_postsubmit_builder_is_cancellable`, `test_cancellable_builder_is_reported`.
Contains tests.

[`tests/test_config.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_config.py) · code · 694 bytes

### test_cycle.py

Python module `test_cycle.py`.

[`tests/test_cycle.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_cycle.py) · code · 25290 bytes

### test_groups.py

Python module `test_groups.py`. Classes: `FakeEvidence`. Functions: `test_classify`,
`test_builders_with_the_same_range_form_one_group`,
`test_different_ranges_are_separate_groups_and_build_wins`, `test_no_red_no_groups`.
Contains tests.

[`tests/test_groups.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_groups.py) · code · 2027 bytes

### test_package.py

Python module `test_package.py`. Functions: `test_version`. Contains tests.

[`tests/test_package.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_package.py) · code · 70 bytes

### test_policy.py

Python module `test_policy.py`. Functions: `pol`, `test_policy_comes_from_config`,
`test_missing_cap_refuses_to_run`, `young`,
`test_build_break_lands_when_the_repo_allows_it`, `test_v0_repos_are_proposed_only`,
`test_test_failures_are_proposed_only`, `test_old_culprit_is_proposed_not_landed`, and 6
more. Contains tests.

[`tests/test_policy.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_policy.py) · code · 5351 bytes

### test_postsubmit.py

Python module `test_postsubmit.py`. Functions: `status`,
`test_all_green_is_open_and_covered`, `test_red_closes_the_tree_with_its_regression_range`,
`test_green_after_red_reopens`, `test_red_with_no_green_in_window`,
`test_rerun_attempt_replaces_the_first`, `test_missing_and_cancelled_break_coverage`,
`test_recent_commit_without_run_is_pending_not_missing`, and 16 more. Contains tests.

[`tests/test_postsubmit.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_postsubmit.py) · code · 7294 bytes

### test_records.py

Python module `test_records.py`. Classes: `CountingTracker`.

[`tests/test_records.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_records.py) · code · 8404 bytes

### test_workflows.py

The tree-status workflow holds write tokens: what runs next to them stays pinned (audit S5,
S6). Functions: `steps_using`, `test_no_checkout_keeps_credentials`,
`test_only_hash_checked_wheels_are_installed`, `test_the_lock_pins_what_pyproject_pins`,
`test_qqresults_runs_at_the_pinned_commit`, `test_tokens_reach_only_the_steps_that_push`,
`test_each_run_on_main_dispatches_the_next`, `test_an_empty_ledger_needs_a_person`.

[`tests/test_workflows.py`](https://github.com/quirq-ai/gardener/blob/main/tests/test_workflows.py) · code · 4416 bytes

_Generated 2026-10-06 12:17 UTC from `main`._
