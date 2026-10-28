<!-- quirq-wiki-generated repo=argus-code dir=python/argus/adapters/claude_code -->

# argus-code / python/argus/adapters/claude_code

Source: [python/argus/adapters/claude_code](https://github.com/quirq-ai/argus-code/tree/main/python/argus/adapters/claude_code) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Claude Code adapter package.

[`python/argus/adapters/claude_code/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/claude_code/__init__.py) · code · 157 bytes

### adapter.py

The Claude Code adapter — façade that wires the package together. Classes:
`ClaudeCodeAdapter`. Functions: `_default_root`.

[`python/argus/adapters/claude_code/adapter.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/claude_code/adapter.py) · code · 2877 bytes

### discover.py

Discover Claude Code session JSONL files under `~/.claude/`. Functions:
`discover_session_files`, `sub_agent_files_for`.

[`python/argus/adapters/claude_code/discover.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/claude_code/discover.py) · code · 4457 bytes

### extract_tool_calls.py

Extract one RawToolCall per tool_use block. Functions: `errored_tool_use_ids`,
`extract_tool_calls`.

[`python/argus/adapters/claude_code/extract_tool_calls.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/claude_code/extract_tool_calls.py) · code · 4329 bytes

### extract_transcript.py

Extract searchable transcript segments from a session's lines. Functions:
`extract_transcript_segments`.

[`python/argus/adapters/claude_code/extract_transcript.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/claude_code/extract_transcript.py) · code · 4236 bytes

### extract_turns.py

Build per-turn records from a session's assistant lines. Functions: `copied_from`,
`extract_turns`.

[`python/argus/adapters/claude_code/extract_turns.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/claude_code/extract_turns.py) · code · 4489 bytes

### history_jsonl.py

Ingest `~/.claude/history.jsonl` — the global prompt history file. Classes: `HistoryLine`,
`HistoryIngestStats`. Functions: `line_to_prompt`, `ingest_history_file`.

[`python/argus/adapters/claude_code/history_jsonl.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/claude_code/history_jsonl.py) · code · 4137 bytes

### ingest_file.py

Parse one Claude Code JSONL file from a byte offset, return new offset. Functions:
`ingest_claude_code_file`.

[`python/argus/adapters/claude_code/ingest_file.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/claude_code/ingest_file.py) · code · 5493 bytes

### model.py

Claude Code model-name canonicalization. Functions: `canonicalize_claude_model`.

[`python/argus/adapters/claude_code/model.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/claude_code/model.py) · code · 301 bytes

### schemas.py

pydantic schemas for one line of a Claude Code JSONL session log. Classes: `_Passthrough`,
`CacheCreation`, `Usage`, `AssistantMessage`, `UserMessage`, `AssistantLine`, `UserLine`.

[`python/argus/adapters/claude_code/schemas.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/claude_code/schemas.py) · code · 2095 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
