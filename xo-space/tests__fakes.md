<!-- quirq-wiki-generated repo=xo-space dir=tests/fakes -->

# xo-space / tests/fakes

Source: [tests/fakes](https://github.com/quirq-ai/xo-space/tree/main/tests/fakes) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Fake agent CLIs: a test talks to a runtime's CLI with no model, no login and no cost (storm
design ch 06 §1). Classes: `FakeCli`. Functions: `scenario`, `by_prompt`, `expect`, `write`,
`answer`, `install`.

[`tests/fakes/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/fakes/__init__.py) · code · 5419 bytes

### engine.py

The fake-CLI engine: plays a scripted scenario over newline-delimited JSON. Runnable as a
script via `if __name__ == '__main__'`. Classes: `Fake`. Functions: `matches`, `dig`,
`main`.

[`tests/fakes/engine.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/fakes/engine.py) · code · 11404 bytes

### host.py

A `Host` for runtime tests: the contract's callbacks with scripted answers. Classes:
`Launcher`, `ScriptedHost`.

[`tests/fakes/host.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/fakes/host.py) · code · 2682 bytes

_Generated 2026-10-29 11:52 UTC from `main`._
