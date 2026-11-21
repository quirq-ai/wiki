<!-- quirq-wiki-generated repo=xo-space dir=services/advisory -->

# xo-space / services/advisory

Source: [services/advisory](https://github.com/quirq-ai/xo-space/tree/main/services/advisory) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

The space advisory: live facts about the Space's accounts, machine and sessions, each with
its source and age. Functions: `current`.

[`services/advisory/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/advisory/__init__.py) · code · 1316 bytes

### advisory.py

The space advisory: one live, versioned snapshot of the Space's facts. Classes: `Advisory`.
Functions: `_never_raises`, `_no_readers`.

[`services/advisory/advisory.py`](https://github.com/quirq-ai/xo-space/blob/main/services/advisory/advisory.py) · code · 16873 bytes

### facts.py

A fact: one value, with where it came from and when it was seen. Classes: `Fact`, `Reading`.
Functions: `iso_at`, `fact_of`.

[`services/advisory/facts.py`](https://github.com/quirq-ai/xo-space/blob/main/services/advisory/facts.py) · code · 3727 bytes

### machine.py

The container's CPU and memory, read from its cgroup (v2). Classes: `Sample`. Functions:
`cgroup_dir`, `read_sample`, `machine`, `cpu_used`, `parse_int`, `parse_max`,
`parse_cpu_max`, `parse_flat`, and 2 more.

[`services/advisory/machine.py`](https://github.com/quirq-ai/xo-space/blob/main/services/advisory/machine.py) · code · 8882 bytes

### model.py

The advisory's snapshot: everything it knows, at one version. Classes: `Window`, `Paid`,
`Account`, `Machine`, `Session`, `Snapshot`. Functions: `frozen`.

[`services/advisory/model.py`](https://github.com/quirq-ai/xo-space/blob/main/services/advisory/model.py) · code · 6959 bytes

### runtimes.py

The runtimes that can read their account's usage with no model call. Functions:
`usage_readers`.

[`services/advisory/runtimes.py`](https://github.com/quirq-ai/xo-space/blob/main/services/advisory/runtimes.py) · code · 1530 bytes

### sessions.py

What each live session costs: the memory of its process tree now, and its last turn's spend
and context size. Classes: `Root`, `SessionState`, `Measured`, `_Proc`. Functions:
`measure`, `start_ticks`, `pss_bytes`.

[`services/advisory/sessions.py`](https://github.com/quirq-ai/xo-space/blob/main/services/advisory/sessions.py) · code · 5995 bytes

### usage.py

The usage book: what each account has used, window by window, and what it can do beyond its
plan. Classes: `WindowState`, `AccountState`, `UsageBook`. Functions: `reset_seconds`,
`to_minute`, `merge`.

[`services/advisory/usage.py`](https://github.com/quirq-ai/xo-space/blob/main/services/advisory/usage.py) · code · 10347 bytes

_Generated 2026-11-21 13:47 UTC from `main`._
