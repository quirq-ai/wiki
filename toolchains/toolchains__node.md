<!-- quirq-wiki-generated repo=toolchains dir=toolchains/node -->

# toolchains / toolchains/node

Source: [toolchains/node](https://github.com/quirq-ai/toolchains/tree/main/toolchains/node) in [toolchains](https://github.com/quirq-ai/toolchains).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build.sh

Assemble Node.js and pnpm into $QQ_PREFIX. Inputs as in toolchains/python/build.sh. Shebang
`#!/usr/bin/env bash`. Fails fast (`set -e`).

[`toolchains/node/build.sh`](https://github.com/quirq-ai/toolchains/blob/main/toolchains/node/build.sh) · code · 763 bytes

### toolchain.toml

TOML config `toolchain.toml`. Node.js LTS plus pnpm (V0-TCH-02). Next.js 16 runs on Node 24,
the current LTS line. Node is repackaged from the official nodejs.org Linux binary, the way
Chromium's 3pp repackages upstream binaries; pnpm is the npm registry tarball, unpacked into
the toolchain.

[`toolchains/node/toolchain.toml`](https://github.com/quirq-ai/toolchains/blob/main/toolchains/node/toolchain.toml) · code · 2197 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
