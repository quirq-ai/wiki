<!-- quirq-wiki-generated repo=argus-code dir=tests/server -->

# argus-code / tests/server

Source: [tests/server](https://github.com/quirq-ai/argus-code/tree/main/tests/server) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/server/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/server/__init__.py) · empty · 0 bytes

### test_api.py

API endpoint tests + windowed-aggregation regressions. Functions:
`test_ingest_status_includes_daemon_flag`, `test_write_endpoints_blocked_in_read_only`,
`test_write_endpoints_work_when_not_read_only`, `test_overview_exposes_token_breakdowns`,
`api_client`, `test_get_api_sessions_returns_sorted_list`, `test_get_api_session_by_id`,
`test_get_api_overview_returns_totals_for_window`, and 21 more. Built with FastAPI.

[`tests/server/test_api.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/server/test_api.py) · code · 16027 bytes

### test_api_search.py

Tests for /api/prompts, /api/search, /api/sessions/:id/transcript, /api/tools/overview, and
/api/search-index/* — the routes that aren't covered by test_api.py.

[`tests/server/test_api_search.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/server/test_api_search.py) · code · 13112 bytes

### test_day_buckets.py

Day buckets follow the viewer's timezone; prior-window totals don't overlap (H8).

[`tests/server/test_day_buckets.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/server/test_day_buckets.py) · code · 4412 bytes

### test_param_bounds.py

Caller-supplied numeric params must be bounded. Functions:
`test_negative_limits_are_rejected`, `test_absurd_upper_bounds_are_rejected_cleanly`,
`test_the_dashboards_real_requests_still_work`,
`test_search_still_clamps_large_limits_silently`. Contains tests.

[`tests/server/test_param_bounds.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/server/test_param_bounds.py) · code · 3554 bytes

### test_read_cache.py

The aggregate endpoints are memoised per argument set and invalidated when the underlying
tables change (fingerprint of row counts / max rowids). Functions:
`test_overview_is_cached_until_data_changes`, `test_cache_is_keyed_per_argument`,
`test_read_cache_recomputes_only_when_fingerprint_moves`. Contains tests.

[`tests/server/test_read_cache.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/server/test_read_cache.py) · code · 3114 bytes

### test_server.py

Server bootstrap — API + static dashboard served from the same app.

[`tests/server/test_server.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/server/test_server.py) · code · 13511 bytes

### test_spa_fallback.py

Deep links into the SPA must serve index.html; API and asset misses must stay 404.
Functions: `test_unknown_page_path_serves_index`,
`test_nested_and_legacy_paths_serve_index`, `test_api_and_asset_misses_stay_404`,
`test_no_dashboard_dir_means_no_fallback`. Contains tests.

[`tests/server/test_spa_fallback.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/server/test_spa_fallback.py) · code · 2498 bytes

### test_week_of.py

Regression tests for `_week_of` (Trends granularity=week). Functions:
`test_week_of_full_iso_inputs`, `test_week_of_accepts_date_only_inputs`. Contains tests.

[`tests/server/test_week_of.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/server/test_week_of.py) · code · 2503 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
