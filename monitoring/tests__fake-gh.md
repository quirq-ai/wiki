<!-- quirq-wiki-generated repo=monitoring dir=tests/fake-gh -->

# monitoring / tests/fake-gh

Source: [tests/fake-gh](https://github.com/quirq-ai/monitoring/tree/main/tests/fake-gh) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### gh

Extensionless file `gh`. A stand-in for the GitHub CLI for the settings editor's tests. It
never touches the network: GETs are answered from tests/fixtures (files from raw/,
properties from api/), and every write is appended to FAKE_GH_LOG as one JSON line ({
method, path, body }) and answered the way GitHub does, so a test can show exactly what the
editor, or the script it prints, would have sent.

[`tests/fake-gh/gh`](https://github.com/quirq-ai/monitoring/blob/main/tests/fake-gh/gh) · other · 4812 bytes

_Generated 2026-10-15 10:26 UTC from `main`._
