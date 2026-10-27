<!-- quirq-wiki-generated repo=xo dir=tests -->

# xo / tests

Source: [tests](https://github.com/quirq-ai/xo/tree/main/tests) in [xo](https://github.com/quirq-ai/xo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

A fake XO API on 127.0.0.1: tests never reach the real one. Classes: `FakeXo`, `Hub`.
Functions: `pytest_runtest_call`, `loopback_only`, `no_real_gh`, `config_home`, `fake`,
`no_real_github`, `git`, `github`. Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/xo/blob/main/tests/conftest.py) · code · 9216 bytes

### test_attach.py

xo gh and xo sh: other CLIs run through xo.

[`tests/test_attach.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_attach.py) · code · 3569 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `run`, `test_no_key_is_one_actionable_line`,
`test_key_goes_as_a_bearer_token`, `test_flag_key_wins_over_the_variable`,
`test_an_echoed_key_is_redacted`, `test_an_error_body_echoing_the_key_is_redacted`,
`test_redirects_are_never_followed`,
`test_a_sign_in_redirect_says_the_route_wants_a_browser`, and 126 more. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_cli.py) · code · 146667 bytes

### test_github.py

gh is a fake here: tests never run the real gh or reach GitHub. Classes: `FakeGh`.

[`tests/test_github.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_github.py) · code · 9454 bytes

### test_quirq.py

A space's GitHub projects through the quirq hub: xo login finds the hub, install adds the
quirq remote, update and sync push to and rebase on the hub and never on GitHub.

[`tests/test_quirq.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_quirq.py) · code · 25525 bytes

### test_selfupdate.py

Auto-update (src/xo/selfupdate.py): off without setup's marker, a background check at most
once a day, the update first on the next run, and never a hand-installed xo.

[`tests/test_selfupdate.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_selfupdate.py) · code · 12430 bytes

### test_server.py

xo serve against a fake Clerk Backend API on 127.0.0.1. Classes: `FakeClerk`. Functions:
`clerk`, `browser_on`, `xo_server`, `call`, `audits`,
`test_health_needs_no_key_and_no_clerk_call`,
`test_me_verifies_the_key_and_returns_the_profile`,
`test_me_with_no_metadata_or_email_says_so`, and 93 more. Contains tests.

[`tests/test_server.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_server.py) · code · 150722 bytes

### test_server_hub.py

xo serve with the hub on (XO_HUB_URL and XO_HUB_KEY): what xo keeps for a user lives in the
hub's record, not in Clerk's private metadata. Classes: `FakeHub`.

[`tests/test_server_hub.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_server_hub.py) · code · 14804 bytes

### test_services.py

The services list: what xo accepts from a server, and what it falls back to.

[`tests/test_services.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_services.py) · code · 8588 bytes

### test_spacerepo.py

xo create space NAME with no KIND (xo/spacerepo.py): each folder here a branch, main the
index, pushed to a local stand-in for GitHub.

[`tests/test_spacerepo.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_spacerepo.py) · code · 36014 bytes

### test_workspace.py

xo install, update and sync against the real server code (with a fake Clerk) and local git
repositories standing in for GitHub. Classes: `_Client`.

[`tests/test_workspace.py`](https://github.com/quirq-ai/xo/blob/main/tests/test_workspace.py) · code · 23418 bytes

_Generated 2026-10-27 11:09 UTC from `main`._
