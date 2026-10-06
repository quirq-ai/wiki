<!-- quirq-wiki-generated repo=sync dir=src/qqsync -->

# sync / src/qqsync

Source: [src/qqsync](https://github.com/quirq-ai/sync/tree/main/src/qqsync) in [sync](https://github.com/quirq-ai/sync).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

qqsync: the infra/repo.toml manifest schema and the only library that reads and edits it.

[`src/qqsync/__init__.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/__init__.py) · code · 119 bytes

### cli.py

qqsync: the quirq infra manifest tool. The only program that reads or edits infra/repo.toml.
Runnable as a script via `if __name__ == '__main__'`. Functions: `main`.

[`src/qqsync/cli.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/cli.py) · code · 7163 bytes

### errors.py

Errors qqsync raises. Each carries a message a person can act on. Classes: `ManifestError`.

[`src/qqsync/errors.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/errors.py) · code · 405 bytes

### guard.py

The "no other parser" check: only qqsync may parse infra/repo.toml. Classes: `GuardError`,
`Finding`. Functions: `tracked_files`, `scan`.

[`src/qqsync/guard.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/guard.py) · code · 18704 bytes

### manifest.py

Reading and editing manifests. The one place a manifest's text becomes data. Classes:
`Manifest`. Functions: `loads`, `load`.

[`src/qqsync/manifest.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/manifest.py) · code · 10735 bytes

### pins.py

Pins: every toolchain and dependency is pinned by digest, and every fetch is checked against
it. Classes: `PinError`, `PinMismatch`, `Pin`, `_HttpsOnlyRedirects`. Functions:
`iter_pins`, `find_pin`, `placeholders`, `current_platform`, `file_digest`, `verify_file`,
`verify_checkout`, `oci_parts`, and 1 more.

[`src/qqsync/pins.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/pins.py) · code · 14982 bytes

### schema.py

The manifest schemas and validation against them. Functions: `schema_for`, `validate`.

[`src/qqsync/schema.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/schema.py) · code · 7474 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
