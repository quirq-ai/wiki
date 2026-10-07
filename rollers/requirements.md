<!-- quirq-wiki-generated repo=rollers dir=requirements -->

# rollers / requirements

Source: [requirements](https://github.com/quirq-ai/rollers/tree/main/requirements) in [rollers](https://github.com/quirq-ai/rollers).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### qqsync.txt

Txt file `qqsync.txt`. qqsync by commit, installed with --no-deps --no-build-isolation after
roll.lock. Must match pyproject.toml (tests/test_cli.py checks).

[`requirements/qqsync.txt`](https://github.com/quirq-ai/rollers/blob/main/requirements/qqsync.txt) · code · 226 bytes

### roll.lock

Lock file `roll.lock`. What roll-toolchains.yml installs before the quirq rollers App token
exists, by hash, with --no-deps: qqsync's dependencies (pinned in quirq-ai/sync
pyproject.toml) and the build backend for --no-build-isolation installs of qqsync and
qqroll.

[`requirements/roll.lock`](https://github.com/quirq-ai/rollers/blob/main/requirements/roll.lock) · code · 11668 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
