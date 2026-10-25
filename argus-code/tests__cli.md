<!-- quirq-wiki-generated repo=argus-code dir=tests/cli -->

# argus-code / tests/cli

Source: [tests/cli](https://github.com/quirq-ai/argus-code/tree/main/tests/cli) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/cli/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/cli/__init__.py) · empty · 0 bytes

### test_indexing_cli.py

The transcript-indexing command group: new indexing name + hidden search alias. Functions:
`test_indexing_is_the_listed_command_name`,
`test_indexing_status_runs_and_emits_no_rename_note`,
`test_search_alias_still_works_and_nudges_to_indexing`,
`test_indexing_enable_then_status_reports_enabled`. Contains tests.

[`tests/cli/test_indexing_cli.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/cli/test_indexing_cli.py) · code · 1693 bytes

### test_pricing_refresh_cli.py

argus pricing refresh writes into the user's data dir, not the package. Functions:
`test_refresh_writes_to_data_dir_and_takes_effect`,
`test_refresh_reports_unwritable_data_dir`. Contains tests.

[`tests/cli/test_pricing_refresh_cli.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/cli/test_pricing_refresh_cli.py) · code · 1902 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
