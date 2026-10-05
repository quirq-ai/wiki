<!-- quirq-wiki-generated repo=release dir=tests -->

# release / tests

Source: [tests](https://github.com/quirq-ai/release/tree/main/tests) in [release](https://github.com/quirq-ai/release).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### canary_demo.py

V0-REL-03 done-when, offline: 7 daily canaries in a row with no human touch, and a planted
bad canary is held. Runnable as a script via `if __name__ == '__main__'`. Functions: `git`,
`commit_all`, `python_version`, `main`.

[`tests/canary_demo.py`](https://github.com/quirq-ai/release/blob/main/tests/canary_demo.py) · code · 8676 bytes

### conftest.py

Python module `conftest.py`. Functions: `infra_config_root`, `config_root`, `cfg`. Contains
tests.

[`tests/conftest.py`](https://github.com/quirq-ai/release/blob/main/tests/conftest.py) · code · 788 bytes

### test_canary.py

Python module `test_canary.py`. Functions: `git`, `world`, `lkgr_to`, `passed`,
`test_canary_repos_come_from_pipelines_and_repos`,
`test_the_workflow_runs_on_the_schedule_in_channels_toml`, `test_select`,
`test_ship_promotes_and_records`, and 27 more. Contains tests.

[`tests/test_canary.py`](https://github.com/quirq-ai/release/blob/main/tests/test_canary.py) · code · 29666 bytes

### test_channels.py

Python module `test_channels.py`. Functions: `git`, `world`, `lkgr_to`,
`test_promote_takes_lkgrs_commit_and_names_a_digest`,
`test_promote_refuses_anything_but_the_source_commit`, `test_promote_needs_a_real_digest`,
`test_dev_takes_its_build_from_canary`, `test_unknown_channel_and_repo_are_errors`, and 17
more. Contains tests.

[`tests/test_channels.py`](https://github.com/quirq-ai/release/blob/main/tests/test_channels.py) · code · 14136 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `git`,
`test_one_repos_error_does_not_stop_the_others`. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/release/blob/main/tests/test_cli.py) · code · 1558 bytes

### test_codeowners.py

Python module `test_codeowners.py`. Functions:
`test_codeowners_names_suraj_for_exactly_the_trust_paths`. Contains tests.

[`tests/test_codeowners.py`](https://github.com/quirq-ai/release/blob/main/tests/test_codeowners.py) · code · 812 bytes

### test_config.py

Python module `test_config.py`. Functions: `test_lkgr_ref_comes_from_channels_toml`,
`test_every_onboarded_repo_has_post_submit_builders`,
`test_backend_comes_from_pipelines_toml`. Contains tests.

[`tests/test_config.py`](https://github.com/quirq-ai/release/blob/main/tests/test_config.py) · code · 481 bytes

### test_executor.py

Python module `test_executor.py`. Classes: `Spy`, `Skip`.

[`tests/test_executor.py`](https://github.com/quirq-ai/release/blob/main/tests/test_executor.py) · code · 17525 bytes

### test_github_backend.py

Python module `test_github_backend.py`. Classes: `Fake`. Functions:
`test_creates_a_missing_ref`, `test_moves_an_existing_ref_only_from_the_expected_commit`,
`test_a_ref_already_at_the_target_is_done`, `test_without_a_token_nothing_is_written`.
Contains tests.

[`tests/test_github_backend.py`](https://github.com/quirq-ai/release/blob/main/tests/test_github_backend.py) · code · 1511 bytes

### test_lkgr.py

Python module `test_lkgr.py`.

[`tests/test_lkgr.py`](https://github.com/quirq-ai/release/blob/main/tests/test_lkgr.py) · code · 2209 bytes

### test_package.py

Python module `test_package.py`. Functions: `test_version`. Contains tests.

[`tests/test_package.py`](https://github.com/quirq-ai/release/blob/main/tests/test_package.py) · code · 72 bytes

### timeline.py

Builds main histories and post-submit runs for tests: one letter per commit and builder.
Functions: `sha`, `history`, `runs_for`.

[`tests/timeline.py`](https://github.com/quirq-ai/release/blob/main/tests/timeline.py) · code · 2271 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
