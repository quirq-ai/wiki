<!-- quirq-wiki-generated repo=toolchains dir=toolchains/python -->

# toolchains / toolchains/python

Source: [toolchains/python](https://github.com/quirq-ai/toolchains/tree/main/toolchains/python) in [toolchains](https://github.com/quirq-ai/toolchains).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build.sh

Build CPython into $QQ_PREFIX. Called by qqtc build with: QQ_SOURCES directory holding the
verified source tarballs QQ_WORK empty scratch directory QQ_PREFIX empty directory that
becomes the toolchain root (bin/, lib/, ...) QQ_VERSION the toolchain version, e.g. 3.14.8
Shebang `#!/usr/bin/env bash`. Fails fast (`set -e`).

[`toolchains/python/build.sh`](https://github.com/quirq-ai/toolchains/blob/main/toolchains/python/build.sh) · code · 2532 bytes

### toolchain.toml

TOML config `toolchain.toml`. CPython built from the python.org source release (V0-TCH-01).
To move to a new release: change version and the source URL and sha256, reset revision to 1.
To rebuild the same release (a build-script change): bump revision. Sections: `toolchain`,
`[source`, `build`, `build.github`, `smoke`, `[consumer`.

[`toolchains/python/toolchain.toml`](https://github.com/quirq-ai/toolchains/blob/main/toolchains/python/toolchain.toml) · code · 2330 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
