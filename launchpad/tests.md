<!-- quirq-wiki-generated repo=launchpad dir=tests -->

# launchpad / tests

Source: [tests](https://github.com/quirq-ai/launchpad/tree/main/tests) in [launchpad](https://github.com/quirq-ai/launchpad).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### test_auth.py

XO owns login and credentials; Launchpad only delegates and reads them privately. Runnable
as a script via `if __name__ == '__main__'`. Classes: `SharedAuthTests`. Contains tests.

[`tests/test_auth.py`](https://github.com/quirq-ai/launchpad/blob/main/tests/test_auth.py) · code · 4313 bytes

### test_cli.py

Behavioral CLI tests: exact requests, auth selection, secret handling and lifecycle flows.
Runnable as a script via `if __name__ == '__main__'`. Classes: `FakeClient`, `CliTests`.
Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/launchpad/blob/main/tests/test_cli.py) · code · 22763 bytes

### test_client.py

Python module `test_client.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `Handler`, `ClientTests`. Contains tests.

[`tests/test_client.py`](https://github.com/quirq-ai/launchpad/blob/main/tests/test_client.py) · code · 6566 bytes

### test_e2e.py

Run the installed CLI as a real process against a local HTTP API; never the beta server.
Runnable as a script via `if __name__ == '__main__'`. Classes: `LaunchpadHandler`,
`EndToEndTests`. Contains tests.

[`tests/test_e2e.py`](https://github.com/quirq-ai/launchpad/blob/main/tests/test_e2e.py) · code · 9233 bytes

_Generated 2026-10-29 11:51 UTC from `main`._
