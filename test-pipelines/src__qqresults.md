<!-- quirq-wiki-generated repo=test-pipelines dir=src/qqresults -->

# test-pipelines / src/qqresults

Source: [src/qqresults](https://github.com/quirq-ai/test-pipelines/tree/main/src/qqresults) in [test-pipelines](https://github.com/quirq-ai/test-pipelines).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

qqresults: test results, verdicts and failure records for quirq infra (qq).

[`src/qqresults/__init__.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/__init__.py) · code · 105 bytes

### bundle.py

A run bundle: one run's records as files, written once. Classes: `BundleError`, `Bundle`.
Functions: `dirname`, `write`, `read`.

[`src/qqresults/bundle.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/bundle.py) · code · 2318 bytes

### cli.py

qqresults: test results, verdicts and failure records for quirq infra (qq). Runnable as a
script via `if __name__ == '__main__'`. Functions: `cmd_sink`, `cmd_show`, `cmd_import`,
`cmd_collect`, `cmd_query`, `cmd_scorecard`, `cmd_failure`, `build_parser`, and 1 more.

[`src/qqresults/cli.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/cli.py) · code · 23540 bytes

### errors.py

Python module `errors.py`. Classes: `Error`.

[`src/qqresults/errors.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/errors.py) · code · 124 bytes

### failures.py

Failure records (plan §5.10); V0-TST-04. Classes: `FailureError`, `State`, `Target`.
Functions: `security_text`, `reads_as_security`, `free_text_reads_as_security`, `now`,
`failure_id`, `dirname`, `looks_security_related`, `new`, and 18 more.

[`src/qqresults/failures.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/failures.py) · code · 39779 bytes

### junit.py

JUnit XML in, normalized Results out: the result sink (plan §5.2, like ResultSink for
ResultDB). Classes: `JUnitError`. Functions: `exception_class`, `informative_type`, `parse`,
`parse_file`.

[`src/qqresults/junit.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/junit.py) · code · 14455 bytes

### model.py

The records of the results store (plan §5.4, §5.10). Classes: `Status`, `RunKind`,
`VerdictStatus`, `_Record`, `Change`, `Run`, `Result`, `CaseVerdict`, and 3 more. Functions:
`is_time`, `canonical_json`, `digest`.

[`src/qqresults/model.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/model.py) · code · 12829 bytes

### policy.py

Verdict policy, from infra-config's flakes.toml [verdict] (read with qqcfg.load). Classes:
`PolicyError`, `Policy`. Functions: `from_infra_config`.

[`src/qqresults/policy.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/policy.py) · code · 2157 bytes

### retry.py

Retry, then compare with base (plan §3 P5, flakes.toml [verdict]); V0-TST-03. Classes:
`RetryError`, `RestoreError`, `Rechecked`. Functions: `shell`, `run_setup`, `git`,
`run_tests`, `child_run`, `decide`, `recheck`, `queue_base_derivable`, and 2 more.

[`src/qqresults/retry.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/retry.py) · code · 25465 bytes

### scorecard.py

Scorecard v0: plan §8's metrics, computed from the results store, never typed by hand.
Classes: `Metric`, `Scorecard`. Functions: `red`, `parse_time`, `fmt_time`, `job_key`,
`workflow_key`, `gate_time`, `push_before`, `push_order`, and 10 more.

[`src/qqresults/scorecard.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/scorecard.py) · code · 25715 bytes

### sink.py

The result sink: JUnit reports from one job become one run bundle. Classes: `SinkError`.
Functions: `find_reports`, `sink`.

[`src/qqresults/sink.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/sink.py) · code · 2249 bytes

### store.py

The results store v0: write-once run bundles in a directory tree, with simple queries.
Classes: `StoreError`, `RunFilter`, `FileStore`. Functions: `open_store`.

[`src/qqresults/store.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/store.py) · code · 8779 bytes

### verdict.py

Verdicts, computed mechanically from Results (plan §5.4). Functions: `by_test`,
`test_status`, `compute`.

[`src/qqresults/verdict.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/verdict.py) · code · 1957 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
