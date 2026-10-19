<!-- quirq-wiki-generated repo=argus-code dir=python/argus/adapters -->

# argus-code / python/argus/adapters

Source: [python/argus/adapters](https://github.com/quirq-ai/argus-code/tree/main/python/argus/adapters) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AGENTS.md

The agent/workspace instructions (“AGENTS.md — adapters (Claude Code + Codex)”). Parent:
python/argus/AGENTS.md. Parses agent transcript files into typed results.

[`python/argus/adapters/AGENTS.md`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/AGENTS.md) · code · 10105 bytes

### __init__.py

Adapters — one subpackage per coding-agent data source.

[`python/argus/adapters/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/__init__.py) · code · 343 bytes

### base.py

Adapter contract. Classes: `ParseError`, `RawToolCall`, `RawSegment`, `AdapterIngestResult`,
`Adapter`. Functions: `native_session_id_for`.

[`python/argus/adapters/base.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/base.py) · code · 4359 bytes

### registry.py

Adapter registry. Functions: `register`, `available_adapters`, `registered_adapter_names`.

[`python/argus/adapters/registry.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/registry.py) · code · 804 bytes

_Generated 2026-10-19 11:22 UTC from `main`._
