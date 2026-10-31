<!-- quirq-wiki-generated repo=argus-code dir=tests/detectors -->

# argus-code / tests/detectors

Source: [tests/detectors](https://github.com/quirq-ai/argus-code/tree/main/tests/detectors) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/detectors/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/detectors/__init__.py) · empty · 0 bytes

### test_base_helpers.py

Shared detector helpers — window offsets and project labels. Functions:
`test_iso_at_offset_keeps_the_stored_z_suffix`,
`test_iso_at_offset_accepts_a_naive_timestamp`,
`test_iso_at_offset_handles_fractional_days`, `test_project_label_is_the_last_path_segment`.
Contains tests.

[`tests/detectors/test_base_helpers.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/detectors/test_base_helpers.py) · code · 1036 bytes

### test_cache_hit_drop.py

cache_hit_drop detector tests.

[`tests/detectors/test_cache_hit_drop.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/detectors/test_cache_hit_drop.py) · code · 5820 bytes

### test_cost_spike.py

cost_spike detector tests.

[`tests/detectors/test_cost_spike.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/detectors/test_cost_spike.py) · code · 7784 bytes

### test_registry.py

Detector registry mechanism — @register decorator and available_detectors(). Classes:
`_FakeDetector`. Functions: `test_register_adds_class_to_registry`,
`test_available_detectors_instantiates_classes`, `test_register_returns_class_unchanged`,
`test_shipped_detectors_are_auto_registered`. Contains tests.

[`tests/detectors/test_registry.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/detectors/test_registry.py) · code · 1422 bytes

### test_tool_error_rate_spike.py

tool_error_rate_spike detector tests.

[`tests/detectors/test_tool_error_rate_spike.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/detectors/test_tool_error_rate_spike.py) · code · 5433 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
