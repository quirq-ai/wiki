<!-- quirq-wiki-generated repo=toolchains dir=tests -->

# toolchains / tests

Source: [tests](https://github.com/quirq-ai/toolchains/tree/main/tests) in [toolchains](https://github.com/quirq-ai/toolchains).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### test_gate.py

Tests for tools/gate.py: the promotion gate's rules, on throwaway git repos. Functions:
`sh`, `commit`, `pin`, `spec`, `repo`, `branch`, `run_prepare`,
`test_promotion_only_pr_passes_and_lists_the_moved_pin`, and 25 more. Contains tests.

[`tests/test_gate.py`](https://github.com/quirq-ai/toolchains/blob/main/tests/test_gate.py) · code · 16241 bytes

### test_qqtc.py

Tests for tools/qqtc.py. Standard library plus pytest; no network. Functions: `write_spec`,
`spec_dir`, `fake_download`, `test_repo_specs_are_valid`, `test_repo_lists_python_and_node`,
`test_repo_consumers_are_pinned`, `test_valid_spec_loads`, `test_invalid_spec_is_rejected`,
and 29 more. Contains tests.

[`tests/test_qqtc.py`](https://github.com/quirq-ai/toolchains/blob/main/tests/test_qqtc.py) · code · 17491 bytes

### test_repo.py

Repo-shape checks that hold from the first commit. Functions:
`test_codeowners_owns_every_gate_path`. Contains tests.

[`tests/test_repo.py`](https://github.com/quirq-ai/toolchains/blob/main/tests/test_repo.py) · code · 817 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
