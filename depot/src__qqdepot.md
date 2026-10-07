<!-- quirq-wiki-generated repo=depot dir=src/qqdepot -->

# depot / src/qqdepot

Source: [src/qqdepot](https://github.com/quirq-ai/depot/tree/main/src/qqdepot) in [depot](https://github.com/quirq-ai/depot).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

qqdepot: qq, the quirq infra command line.

[`src/qqdepot/__init__.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/__init__.py) · code · 72 bytes

### bootstrap.py

The qq bootstrap, run by bin/qq straight from a depot checkout, before anything is
installed. Runnable as a script via `if __name__ == '__main__'`. Functions: `qq_home`,
`head`, `export`, `ensure_launcher`, `main`.

[`src/qqdepot/bootstrap.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/bootstrap.py) · code · 4366 bytes

### cli.py

qq: the quirq infra command line. Runnable as a script via `if __name__ == '__main__'`.
Functions: `build_parser`, `repo_epilog`, `main`.

[`src/qqdepot/cli.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/cli.py) · code · 3542 bytes

### gate.py

The gate's verdict on a change, from quirq-ai/gate's own qqgate, used by pinned commit.
Functions: `ensure`, `gated_name`, `required`, `classify_gated`, `classify_ungated`,
`verdict`.

[`src/qqdepot/gate.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/gate.py) · code · 8890 bytes

### pin.py

Version pinning: run the qq version the current repo pins in infra/repo.toml. Classes:
`PinError`, `Pin`. Functions: `qq_home`, `git_env`, `find_manifest`, `read_pin`, `trusted`,
`check`, `is_self`, `pip_install`, and 5 more.

[`src/qqdepot/pin.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/pin.py) · code · 12755 bytes

### store.py

Fetch pinned toolchains and dependencies into a content-addressed store, checked by digest.
Classes: `FetchError`, `Artifact`. Functions: `resolve`, `store_dir`, `ensure`.

[`src/qqdepot/store.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/store.py) · code · 15075 bytes

### watch.py

Acknowledge, then push: the verdict reaches the agent after qq has returned. Runnable as a
script via `if __name__ == '__main__'`. Classes: `Watch`. Functions: `run_id`,
`verdict_path`, `spawn`, `deliver`, `watch`, `main`.

[`src/qqdepot/watch.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/watch.py) · code · 9686 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
