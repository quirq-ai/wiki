<!-- quirq-wiki-generated repo=argus-code dir=tests/adapters/codex -->

# argus-code / tests/adapters/codex

Source: [tests/adapters/codex](https://github.com/quirq-ai/argus-code/tree/main/tests/adapters/codex) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/adapters/codex/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/codex/__init__.py) · empty · 0 bytes

### test_adapter.py

CodexAdapter façade: presence, discovery, containment, skip rules.

[`tests/adapters/codex/test_adapter.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/codex/test_adapter.py) · code · 4714 bytes

### test_discover.py

Codex discovery: CODEX_HOME resolution, session-dir containment, first-record identity, sub-
agent / continuation relationships. Functions: `test_codex_home_prefers_env`,
`test_contained_only_under_session_dirs`, `test_peek_reads_identity_from_first_record`,
`test_index_top_level_and_descendants`, `test_orphan_child_is_not_top_level`,
`test_refresh_forgets_moved_files`. Contains tests.

[`tests/adapters/codex/test_discover.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/codex/test_discover.py) · code · 4022 bytes

### test_ingest_file.py

One-file ingest: turns from usage records, tool-call -> turn assignment, model per Codex
turn, header, privacy. Functions: `E`, `tur`, `item`, `session`,
`test_turns_tokens_model_and_header`, `test_calls_assigned_to_the_right_response`,
`test_transcript_has_no_secrets`, `test_legacy_token_count_only_file`, and 3 more. Contains
tests.

[`tests/adapters/codex/test_ingest_file.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/codex/test_ingest_file.py) · code · 7603 bytes

### test_lines.py

Codex rollout envelope reader: byte-exact offsets, partial-line holdback, tolerance of
unknown shapes, no line content in parse errors. Functions:
`test_offsets_are_file_wide_and_partial_line_is_held_back`, `test_stop_limits_the_read`,
`test_unknown_shapes_skipped_and_bad_json_reported_without_content`,
`test_empty_or_no_newline`. Contains tests.

[`tests/adapters/codex/test_lines.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/codex/test_lines.py) · code · 2083 bytes

### test_real_root.py

Opt-in: ingest a real Codex home and cross-check usage totals. Functions:
`test_real_root_output_tokens_match`. Contains tests.

[`tests/adapters/codex/test_real_root.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/codex/test_real_root.py) · code · 2553 bytes

### test_records.py

Pure interpretation of single Codex records (shapes from real rollouts, cli 0.159.2,
profiled 2026-10-04).

[`tests/adapters/codex/test_records.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/codex/test_records.py) · code · 6516 bytes

### test_state.py

The fold that makes chunked ingest equal one-pass ingest. Functions:
`test_scan_tracks_models_open_task_and_snapshot`, `test_window_reparses_the_open_task`,
`test_cache_hit_equals_rescan`, `test_child_cutoff_skips_copied_parent_history`. Contains
tests.

[`tests/adapters/codex/test_state.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/codex/test_state.py) · code · 3085 bytes

_Generated 2026-10-27 11:08 UTC from `main`._
