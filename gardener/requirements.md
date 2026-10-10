<!-- quirq-wiki-generated repo=gardener dir=requirements -->

# gardener / requirements

Source: [requirements](https://github.com/quirq-ai/gardener/tree/main/requirements) in [gardener](https://github.com/quirq-ai/gardener).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### runtime.lock

Lock file `runtime.lock`. What the tree-status workflow installs next to its write tokens:
exact versions, hash-checked, wheels only, no dependency resolution (pip install --require-
hashes --no-deps --only-binary :all:). qqgarden itself and qqresults (pins.toml [test-
pipelines]) run from source on PYTHONPATH. Regenerate: echo jsonschema== | uv pip compile -
--generate-hashes \ --python-version 3.14 --python-platform x86_64-manylinux_2_28.

[`requirements/runtime.lock`](https://github.com/quirq-ai/gardener/blob/main/requirements/runtime.lock) · code · 11297 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
