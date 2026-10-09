<!-- quirq-wiki-generated repo=test-pipelines dir=src/qqresults/backends -->

# test-pipelines / src/qqresults/backends

Source: [src/qqresults/backends](https://github.com/quirq-ai/test-pipelines/tree/main/src/qqresults/backends) in [test-pipelines](https://github.com/quirq-ai/test-pipelines).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Where runs come from and where records are kept, per backend. Classes: `BackendError`.
Functions: `load`.

[`src/qqresults/backends/__init__.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/backends/__init__.py) · code · 708 bytes

### github.py

The GitHub backend: a Run described from a GitHub Actions job's environment. Classes:
`GitHubEnvError`, `GitHubAPIError`, `NotTrusted`, `NeedsDeletion`, `OrphanLinks`,
`_LinksWaiting`, `_NoRedirect`, `Trust`, and 1 more. Functions: `kind_for`, `run_from_env`,
`http_get`, `list_result_artifacts`, `collect`, `api`, `mirror_issue`.

[`src/qqresults/backends/github.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/backends/github.py) · code · 42830 bytes

### local.py

The local backend: runs described by flags, for a developer's machine and for tests.
Functions: `run_from_args`.

[`src/qqresults/backends/local.py`](https://github.com/quirq-ai/test-pipelines/blob/main/src/qqresults/backends/local.py) · code · 605 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
