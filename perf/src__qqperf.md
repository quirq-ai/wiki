<!-- quirq-wiki-generated repo=perf dir=src/qqperf -->

# perf / src/qqperf

Source: [src/qqperf](https://github.com/quirq-ai/perf/tree/main/src/qqperf) in [perf](https://github.com/quirq-ai/perf).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

qqperf: performance records for quirq infra (qq).

[`src/qqperf/__init__.py`](https://github.com/quirq-ai/perf/blob/main/src/qqperf/__init__.py) · code · 79 bytes

### __main__.py

Python module `__main__.py`.

[`src/qqperf/__main__.py`](https://github.com/quirq-ai/perf/blob/main/src/qqperf/__main__.py) · code · 58 bytes

### bench.py

Read what recipes' bench capability wrote (V0-PRF-01). Classes: `BenchError`. Functions:
`read`.

[`src/qqperf/bench.py`](https://github.com/quirq-ai/perf/blob/main/src/qqperf/bench.py) · code · 1506 bytes

### cli.py

qqperf: record performance numbers per commit, raw and with units. Functions: `cmd_pending`,
`cmd_backlog`, `cmd_record_build_size`, `cmd_record_bench`, `merge_params`, `cmd_manifest`,
`cmd_history`, `cmd_merge`, and 2 more.

[`src/qqperf/cli.py`](https://github.com/quirq-ai/perf/blob/main/src/qqperf/cli.py) · code · 16021 bytes

### record.py

Turn measured values into a perf record, and find the commits that still need one. Classes:
`RecordError`. Functions: `runner`, `make`, `first_parent`, `is_shallow`, `backlog`,
`commit_time`, `since_first`, `pending`.

[`src/qqperf/record.py`](https://github.com/quirq-ai/perf/blob/main/src/qqperf/record.py) · code · 4973 bytes

### results.py

Perf records as test-pipelines Results, the store every qq signal lands in (V0-PRF-01).
Functions: `make_run`, `raw`, `to_result`, `write_bundle`.

[`src/qqperf/results.py`](https://github.com/quirq-ai/perf/blob/main/src/qqperf/results.py) · code · 3222 bytes

### size.py

Build-output size of a Next.js app (V0-PRF-02). Classes: `SizeError`. Functions:
`next_build`.

[`src/qqperf/size.py`](https://github.com/quirq-ai/perf/blob/main/src/qqperf/size.py) · code · 3946 bytes

### store.py

Where perf records live, behind a backend (plan: cloud agnostic). Classes: `StoreError`,
`FileStore`. Functions: `check_commit`, `loads`, `dumps`, `validate`, `open_store`.

[`src/qqperf/store.py`](https://github.com/quirq-ai/perf/blob/main/src/qqperf/store.py) · code · 10569 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
