<!-- quirq-wiki-generated repo=argus-code dir=tests/collector -->

# argus-code / tests/collector

Source: [tests/collector](https://github.com/quirq-ai/argus-code/tree/main/tests/collector) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/collector/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/__init__.py) · empty · 0 bytes

### test_aggregate.py

Python module `test_aggregate.py`. Functions: `test_rolls_up_turn_totals_into_session`,
`test_picks_primary_model_by_input_plus_output_tokens`. Contains tests.

[`tests/collector/test_aggregate.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_aggregate.py) · code · 2454 bytes

### test_codex_incremental_invariant.py

Chunked Codex ingest must equal one-pass ingest (the H1 invariant, which collector/AGENTS.md
requires for every adapter). Functions: `E`, `TUR`, `IT`, `one_pass`,
`test_reference_values`, `test_line_by_line_equals_one_pass`,
`test_byte_chunks_equal_one_pass`, `test_cold_cache_mid_task_equals_one_pass`, and 2 more.
Contains tests.

[`tests/collector/test_codex_incremental_invariant.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_codex_incremental_invariant.py) · code · 7437 bytes

### test_first_run.py

Foreground (recent) vs background (older) first-pass ingest.

[`tests/collector/test_first_run.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_first_run.py) · code · 15794 bytes

### test_first_run_shutdown.py

First-run's background thread must never outlive the DB connection. Functions:
`test_join_returns_only_after_the_thread_is_done`,
`test_join_reports_threads_that_outlive_the_timeout`,
`test_join_is_a_no_op_when_nothing_is_running`, `test_real_first_run_thread_is_joined`.
Contains tests.

[`tests/collector/test_first_run_shutdown.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_first_run_shutdown.py) · code · 3211 bytes

### test_fork_dedup.py

Forked Claude sessions must not re-count the turns they copied (H2).

[`tests/collector/test_fork_dedup.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_fork_dedup.py) · code · 8798 bytes

### test_fork_dedup_db.py

DB-only fork de-duplication (transcripts already deleted). Functions:
`test_fork_gives_copies_back_to_the_session_that_continued_first`,
`test_session_made_only_of_copies_is_emptied_and_twins_keep_the_lower_id`,
`test_not_an_exact_copy_is_left_alone`, `test_sub_agent_sessions_are_never_touched`,
`test_idempotent`. Contains tests.

[`tests/collector/test_fork_dedup_db.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_fork_dedup_db.py) · code · 5134 bytes

### test_incremental_invariant.py

Chunked ingest must equal one-pass ingest.

[`tests/collector/test_incremental_invariant.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_incremental_invariant.py) · code · 11624 bytes

### test_incremental_repairs.py

One-shot repairs for rows written by the pre-fix incremental ingest (H1). Functions:
`test_session_duration_repair_fixes_inconsistent_rows_once`,
`test_tool_error_sweep_rereads_sessions_once`,
`test_tool_error_sweep_flag_waits_until_every_session_was_reread`. Contains tests.

[`tests/collector/test_incremental_repairs.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_incremental_repairs.py) · code · 4603 bytes

### test_pipeline.py

Pipeline regression tests — turn merging, sub-agent double-count, segment gating.

[`tests/collector/test_pipeline.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_pipeline.py) · code · 19135 bytes

### test_pipeline_codex.py

Codex thread structure through the real pipeline. Functions: `E`, `TUR`,
`test_subagent_rolls_up_and_copied_history_is_skipped`,
`test_subagent_growth_after_parent_goes_quiet_is_ingested`,
`test_continuation_segment_merges_into_one_session`,
`test_archive_move_does_not_double_count`, `test_claude_and_codex_side_by_side`.

[`tests/collector/test_pipeline_codex.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_pipeline_codex.py) · code · 6698 bytes

### test_rollup_subagents.py

Python module `test_rollup_subagents.py`. Functions:
`test_sums_subagent_totals_into_parent`. Contains tests.

[`tests/collector/test_rollup_subagents.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_rollup_subagents.py) · code · 1515 bytes

### test_scheduler.py

Scheduler — the only writer of alerts. Runs detectors on a fixed cadence. Classes:
`_StubDetector`, `_CrashyDetector`, `_SwitchableDetector`.

[`tests/collector/test_scheduler.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_scheduler.py) · code · 4440 bytes

### test_session_files.py

Session-id -> transcript-file lookup used by the backfills. Classes: `_StemOnly`,
`_Threaded`. Functions: `test_claude_keys_are_agent_plus_stem`,
`test_adapter_without_method_falls_back_to_stem`, `test_one_session_can_span_several_files`.
Contains tests.

[`tests/collector/test_session_files.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_session_files.py) · code · 1870 bytes

### test_watcher.py

Watchdog live-tail. Slow-ish because we wait for the debouncer to fire. Functions:
`test_picks_up_appended_lines_after_start`. Contains tests.

[`tests/collector/test_watcher.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/collector/test_watcher.py) · code · 2078 bytes

_Generated 2026-10-19 11:22 UTC from `main`._
