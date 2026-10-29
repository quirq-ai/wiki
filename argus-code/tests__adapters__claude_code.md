<!-- quirq-wiki-generated repo=argus-code dir=tests/adapters/claude_code -->

# argus-code / tests/adapters/claude_code

Source: [tests/adapters/claude_code](https://github.com/quirq-ai/argus-code/tree/main/tests/adapters/claude_code) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/adapters/claude_code/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/__init__.py) · empty · 0 bytes

### test_adapter.py

Python module `test_adapter.py`. Functions: `test_exposes_agent_name_and_root_path`.
Contains tests.

[`tests/adapters/claude_code/test_adapter.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_adapter.py) · code · 372 bytes

### test_discover.py

Python module `test_discover.py`. Functions: `test_finds_top_level_jsonl_files`,
`test_returns_sub_agent_files_for_a_session`,
`test_returns_empty_array_when_no_subagents_dir`, `test_finds_nested_workflow_subagents`,
`test_finds_flat_and_nested_subagents_together`,
`test_warns_when_subdirs_present_but_nothing_matches`. Contains tests.

[`tests/adapters/claude_code/test_discover.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_discover.py) · code · 2979 bytes

### test_extract_tool_calls.py

Python module `test_extract_tool_calls.py`.

[`tests/adapters/claude_code/test_extract_tool_calls.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_extract_tool_calls.py) · code · 4321 bytes

### test_extract_transcript.py

Python module `test_extract_transcript.py`.

[`tests/adapters/claude_code/test_extract_transcript.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_extract_transcript.py) · code · 5591 bytes

### test_extract_turns.py

Python module `test_extract_turns.py`. Functions: `test_dedupes_by_message_id`,
`test_counts_tool_use_blocks_across_deduped_lines`,
`test_output_tokens_come_from_the_final_streamed_line`, `test_maps_cache_fields_correctly`,
`test_extracts_5m_and_1h_breakdown_when_present`. Contains tests.

[`tests/adapters/claude_code/test_extract_turns.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_extract_turns.py) · code · 3196 bytes

### test_history_jsonl.py

Python module `test_history_jsonl.py`. Functions: `test_skips_empty_or_whitespace_display`,
`test_flags_slash_commands`, `test_normalizes_windows_project_path`,
`test_pasted_chars_zero_when_no_paste`, `test_pasted_chars_nonzero_when_paste_present`,
`test_truncates_display_past_8kb_cap`, `test_preserves_leading_slash_after_trim`,
`test_reads_new_bytes_only_on_subsequent_calls`, and 6 more. Contains tests.

[`tests/adapters/claude_code/test_history_jsonl.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_history_jsonl.py) · code · 6246 bytes

### test_ingest_file.py

Python module `test_ingest_file.py`. Functions: `test_parses_fresh_file_from_offset_zero`,
`test_respects_from_offset_and_parses_only_new_tail`,
`test_records_parse_error_for_malformed_line`, `test_preserves_partial_trailing_line`,
`test_builds_session_header_from_cwd_field`. Contains tests.

[`tests/adapters/claude_code/test_ingest_file.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_ingest_file.py) · code · 3114 bytes

### test_integration.py

Real-fixture smoke test — opt-in via ARGUS_REAL_CLAUDE_ROOT env var. Functions:
`test_discovers_session_files_in_real_root`,
`test_ingests_real_session_with_low_parse_error_rate`. Contains tests.

[`tests/adapters/claude_code/test_integration.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_integration.py) · code · 1264 bytes

### test_model.py

Python module `test_model.py`. Functions: `test_passes_alias_forms_through`,
`test_strips_date_suffix_from_dated_forms`, `test_returns_raw_for_unknown`. Contains tests.

[`tests/adapters/claude_code/test_model.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_model.py) · code · 786 bytes

### test_path_containment.py

Ingest must refuse any path that escapes the Claude root.

[`tests/adapters/claude_code/test_path_containment.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_path_containment.py) · code · 5846 bytes

### test_schemas.py

Python module `test_schemas.py`. Functions: `test_parses_assistant_line_with_usage`,
`test_accepts_assistant_line_with_cache_creation_tier_breakdown`, `test_parses_user_line`,
`test_passthrough_preserves_unknown_fields`. Contains tests.

[`tests/adapters/claude_code/test_schemas.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/adapters/claude_code/test_schemas.py) · code · 3069 bytes

_Generated 2026-10-29 11:51 UTC from `main`._
