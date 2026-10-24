<!-- quirq-wiki-generated repo=argus-code dir=tests/pricing -->

# argus-code / tests/pricing

Source: [tests/pricing](https://github.com/quirq-ai/argus-code/tree/main/tests/pricing) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/pricing/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/pricing/__init__.py) · empty · 0 bytes

### test_compute.py

Per-turn cost computation. Functions: `test_anthropic_with_5m_and_1h_cache_writes`,
`test_anthropic_without_tier_breakdown_uses_5m_rate`, `test_openai_with_cached_input_only`,
`test_returns_zero_for_unknown_model`, `test_unknown_model_is_logged_once`. Contains tests.

[`tests/pricing/test_compute.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/pricing/test_compute.py) · code · 3246 bytes

### test_load.py

Bundled pricing-table load.

[`tests/pricing/test_load.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/pricing/test_load.py) · code · 5326 bytes

### test_refresh.py

LiteLLM pricing refresh. Functions: `test_diff_detects_added_removed_changed`,
`test_fetch_parses_litellm_json_into_per_mtok_shape`. Contains tests.

[`tests/pricing/test_refresh.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/pricing/test_refresh.py) · code · 1810 bytes

_Generated 2026-10-24 09:53 UTC from `main`._
