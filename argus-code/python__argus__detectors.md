<!-- quirq-wiki-generated repo=argus-code dir=python/argus/detectors -->

# argus-code / python/argus/detectors

Source: [python/argus/detectors](https://github.com/quirq-ai/argus-code/tree/main/python/argus/detectors) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Detectors — one module per finding type.

[`python/argus/detectors/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/detectors/__init__.py) · code · 308 bytes

### base.py

Detector contract, plus the handful of helpers every detector shares. Classes: `Finding`,
`Detector`. Functions: `iso_at_offset`, `project_label`.

[`python/argus/detectors/base.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/detectors/base.py) · code · 1946 bytes

### cache_hit_drop.py

cache_hit_drop detector. Classes: `CacheHitDropDetector`. Functions: `_hit_rate`.

[`python/argus/detectors/cache_hit_drop.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/detectors/cache_hit_drop.py) · code · 4818 bytes

### cost_spike.py

cost_spike detector. Classes: `CostSpikeDetector`. Functions: `_days_between`.

[`python/argus/detectors/cost_spike.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/detectors/cost_spike.py) · code · 5033 bytes

### registry.py

Detector registry. Mirrors argus.adapters.registry verbatim. Functions: `register`,
`available_detectors`, `registered_detector_names`.

[`python/argus/detectors/registry.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/detectors/registry.py) · code · 493 bytes

### tool_error_rate_spike.py

tool_error_rate_spike detector. Classes: `ToolErrorRateSpikeDetector`.

[`python/argus/detectors/tool_error_rate_spike.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/detectors/tool_error_rate_spike.py) · code · 4875 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
