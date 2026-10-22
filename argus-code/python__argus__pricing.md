<!-- quirq-wiki-generated repo=argus-code dir=python/argus/pricing -->

# argus-code / python/argus/pricing

Source: [python/argus/pricing](https://github.com/quirq-ai/argus-code/tree/main/python/argus/pricing) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`python/argus/pricing/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/pricing/__init__.py) · empty · 0 bytes

### compute.py

Per-turn cost computation. Functions: `compute_turn_cost`.

[`python/argus/pricing/compute.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/pricing/compute.py) · code · 2294 bytes

### load.py

Load the bundled pricing JSON shipped inside the wheel. Functions: `user_pricing_dir`,
`load_pricing_table`.

[`python/argus/pricing/load.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/pricing/load.py) · code · 2984 bytes

### refresh.py

Diff against current pricing and fetch the latest from LiteLLM. Classes: `PricingDiff`.
Functions: `diff_pricing`, `fetch_litellm_table`.

[`python/argus/pricing/refresh.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/pricing/refresh.py) · code · 2839 bytes

### types.py

Pricing-table model — direct port of src/pricing/types.ts. Classes: `ModelPricing`,
`PricingTable`.

[`python/argus/pricing/types.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/pricing/types.py) · code · 531 bytes

_Generated 2026-10-22 10:44 UTC from `main`._
