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

Python module `test_cli.py`. Functions: `run`, `test_no_key_is_one_actionable_line`,
`test_key_goes_as_a_bearer_token`, `test_flag_key_wins_over_the_variable`,
`test_an_echoed_key_is_redacted`, `test_an_error_body_echoing_the_key_is_redacted`,
`test_redirects_are_never_followed`,
`test_a_sign_in_redirect_says_the_route_wants_a_browser`, and 127 more. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_cli.py) · code · 130129 bytes

### test_github.py

gh is a fake here: tests never run the real gh or reach GitHub. Classes: `FakeGh`.

[`tests/test_github.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_github.py) · code · 9454 bytes

### test_server.py

xo serve against a fake Clerk Backend API on 127.0.0.1. Classes: `FakeClerk`. Functions:
`clerk`, `browser_on`, `xo_server`, `call`, `audits`,
`test_health_needs_no_key_and_no_clerk_call`,
`test_me_verifies_the_key_and_returns_the_profile`,
`test_me_with_no_metadata_or_email_says_so`, and 93 more. Contains tests.

[`tests/test_server.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_server.py) · code · 150573 bytes

### test_services.py

The services list: what xo accepts from a server, and what it falls back to.

[`tests/test_services.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_services.py) · code · 8588 bytes

### test_workspace.py

xo install, update and sync against the real server code (with a fake Clerk) and local git
repositories standing in for GitHub. Classes: `_Client`.

[`tests/test_workspace.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_workspace.py) · code · 23461 bytes

_Generated 2026-10-21 10:42 UTC from `main`._
