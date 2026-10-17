<!-- quirq-wiki-generated repo=xo dir=tests -->

# xo / tests

Source: [tests](https://github.com/quirq-ai/xo/tree/main/tests) in [xo](https://github.com/quirq-ai/xo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

A fake XO API on 127.0.0.1: tests never reach the real one. Classes: `FakeXo`, `Hub`.
Functions: `pytest_runtest_call`, `loopback_only`, `no_real_gh`, `no_real_coder`,
`config_home`, `fake`, `no_real_github`, `git`, and 1 more. Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/xo/blob/main/tests/conftest.py) · code · 10448 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `run`, `test_no_key_is_one_actionable_line`,
`test_key_goes_as_a_bearer_token`, `test_flag_key_wins_over_the_variable`,
`test_an_echoed_key_is_redacted`, `test_an_error_body_echoing_the_key_is_redacted`,
`test_redirects_are_never_followed`,
`test_a_sign_in_redirect_says_the_route_wants_a_browser`, and 127 more. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_cli.py) · code · 100242 bytes

### test_coder.py

Coder is a fake executable/runner here; tests never reach a Coder deployment. Classes:
`Calls`. Functions: `record`, `cmd`, `whoami`, `runner`, `invoke`, `parameters`,
`test_launch_uses_native_login_safe_defaults_and_actual_app_url`,
`test_url_flag_wins_at_each_level`, and 47 more. Contains tests.

[`tests/test_coder.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_coder.py) · code · 29473 bytes

### test_github.py

gh is a fake here: tests never run the real gh or reach GitHub. Classes: `FakeGh`.

[`tests/test_github.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_github.py) · code · 10162 bytes

### test_server.py

"""xo serve against a fake Clerk Backend API on 127.0.0.1. Contains tests.

[`tests/test_server.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_server.py) · code · 130495 bytes

### test_services.py

The services list: what xo accepts from a server, and what it falls back to.

[`tests/test_services.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_services.py) · code · 9177 bytes

### test_workspace.py

xo install, update and sync against the real server code (with a fake Clerk) and local git
repositories standing in for GitHub. Classes: `_Client`.

[`tests/test_workspace.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_workspace.py) · code · 13613 bytes

_Generated 2026-10-17 09:48 UTC from `main`._
