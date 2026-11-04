<!-- quirq-wiki-generated repo=setup dir=tests/fixtures/quirq -->

# setup / tests/fixtures/quirq

Source: [tests/fixtures/quirq](https://github.com/quirq-ai/setup/tree/main/tests/fixtures/quirq) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README. Synthetic quirq-ai files for step 3's tests. tests/fake-gh/gh serves the
config files as GitHub's contents API would, and remotes.mjs turns each folder into a local
git repo that step 3 clones (QQ_SETUP_GIT_BASE) instead of github.com. tests/fake-
python/python3 stands in for qqcfg and gate's settings plan; the files it reads here only
have to exist.

[`tests/fixtures/quirq/README.md`](https://github.com/quirq-ai/setup/blob/main/tests/fixtures/quirq/README.md) · code · 360 bytes

### remotes.mjs

@ts-check Local stand-ins for quirq-ai's repos, made from the folders next to this file: one
git repo each, with main as the only branch, served to `git fetch` by path
(QQ_SETUP_GIT_BASE). gate's pins.toml names infra-config's first commit, as the real one
names a reviewed commit. Notable exports: `makeRemotes`, `landOnMain`.

[`tests/fixtures/quirq/remotes.mjs`](https://github.com/quirq-ai/setup/blob/main/tests/fixtures/quirq/remotes.mjs) · code · 1995 bytes

_Generated 2026-11-04 13:22 UTC from `main`._
