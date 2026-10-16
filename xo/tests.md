<!-- quirq-wiki-generated repo=xo dir=tests -->

# xo / tests

Source: [tests](https://github.com/quirq-ai/xo/tree/main/tests) in [xo](https://github.com/quirq-ai/xo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

A fake XO API on 127.0.0.1: tests never reach the real one. Classes: `FakeXo`. Functions:
`loopback_only`, `config_home`, `fake`. Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/xo/blob/main/tests/conftest.py) · code · 4142 bytes

### test_cli.py

from __future__ import annotations Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_cli.py) · code · 78020 bytes

### test_coder.py

Coder is a fake executable/runner here; tests never reach a Coder deployment. Classes:
`Calls`. Functions: `record`, `cmd`, `whoami`, `runner`, `invoke`, `parameters`,
`test_launch_uses_native_login_safe_defaults_and_actual_app_url`,
`test_url_flag_wins_at_each_level`, and 46 more. Contains tests.

[`tests/test_coder.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_coder.py) · code · 28708 bytes

### test_server.py

xo serve against a fake Clerk Backend API on 127.0.0.1. Classes: `FakeClerk`. Functions:
`clerk`, `xo_server`, `call`, `audits`, `test_health_needs_no_key_and_no_clerk_call`,
`test_me_verifies_the_key_and_returns_the_fixed_fields`,
`test_me_never_returns_email_or_metadata`, `test_bad_keys_get_401`, and 77 more. Contains
tests.

[`tests/test_server.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_server.py) · code · 52188 bytes

### test_services.py

The services list: what xo accepts from a server, and what it falls back to.

[`tests/test_services.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_services.py) · code · 9177 bytes

_Generated 2026-10-16 10:14 UTC from `main`._
