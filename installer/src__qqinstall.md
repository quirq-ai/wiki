<!-- quirq-wiki-generated repo=installer dir=src/qqinstall -->

# installer / src/qqinstall

Source: [src/qqinstall](https://github.com/quirq-ai/installer/tree/main/src/qqinstall) in [installer](https://github.com/quirq-ai/installer).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

quirq infra (qq) installer: follow a release channel instead of main.

[`src/qqinstall/__init__.py`](https://github.com/quirq-ai/installer/blob/main/src/qqinstall/__init__.py) · code · 78 bytes

### __main__.py

Python module `__main__.py`.

[`src/qqinstall/__main__.py`](https://github.com/quirq-ai/installer/blob/main/src/qqinstall/__main__.py) · code · 61 bytes

### cli.py

qqinstall: resolve a channel, put a checkout on it, or check that a checkout is it.
Functions: `check`, `cmd_resolve`, `cmd_checkout`, `cmd_verify`, `cmd_show`, `parser`,
`main`.

[`src/qqinstall/cli.py`](https://github.com/quirq-ai/installer/blob/main/src/qqinstall/cli.py) · code · 15624 bytes

### errors.py

The one exception qqinstall reports as is (exit 2); manifest re-exports it. Classes:
`InstallerError`.

[`src/qqinstall/errors.py`](https://github.com/quirq-ai/installer/blob/main/src/qqinstall/errors.py) · code · 204 bytes

### gitsafe.py

Every git call qqinstall makes goes through run, so they all get the same hardening.
Functions: `run`, `check_branch_name`, `on_branch`.

[`src/qqinstall/gitsafe.py`](https://github.com/quirq-ai/installer/blob/main/src/qqinstall/gitsafe.py) · code · 3445 bytes

### manifest.py

V0-INS-01: read the channel manifest and resolve a channel to a commit and digest. Classes:
`ManifestError`, `NotPublished`, `Channel`, `_HttpsOnly`. Functions: `source_at`,
`check_on_release_state`, `check_name`, `read`, `parse`, `load`, `resolve`.

[`src/qqinstall/manifest.py`](https://github.com/quirq-ai/installer/blob/main/src/qqinstall/manifest.py) · code · 8501 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
