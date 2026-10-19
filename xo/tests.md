<!-- quirq-wiki-generated repo=xo dir=tests -->

# xo / tests

Source: [tests](https://github.com/quirq-ai/xo/tree/main/tests) in [xo](https://github.com/quirq-ai/xo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

A fake XO API on 127.0.0.1: tests never reach the real one. Classes: `FakeXo`, `Hub`.
Functions: `pytest_runtest_call`, `loopback_only`, `no_real_gh`, `config_home`, `fake`,
`no_real_github`, `git`, `github`. Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/xo/blob/main/tests/conftest.py) · code · 9050 bytes

### test_cli.py

from __future__ import annotations Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_cli.py) · code · 117124 bytes

### test_github.py

gh is a fake here: tests never run the real gh or reach GitHub. Classes: `FakeGh`.

[`tests/test_github.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_github.py) · code · 9454 bytes

### test_server.py

"""xo serve against a fake Clerk Backend API on 127.0.0.1. Contains tests.

[`tests/test_server.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_server.py) · code · 131335 bytes

### test_services.py

The services list: what xo accepts from a server, and what it falls back to.

[`tests/test_services.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_services.py) · code · 8588 bytes

### test_workspace.py

xo install, update and sync against the real server code (with a fake Clerk) and local git
repositories standing in for GitHub. Classes: `_Client`.

[`tests/test_workspace.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_workspace.py) · code · 23461 bytes

_Generated 2026-10-19 11:23 UTC from `main`._
