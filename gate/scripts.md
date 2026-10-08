<!-- quirq-wiki-generated repo=gate dir=scripts -->

# gate / scripts

Source: [scripts](https://github.com/quirq-ai/gate/tree/main/scripts) in [gate](https://github.com/quirq-ai/gate).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### apply.sh

Apply the gate's settings: the one command in docs/apply-settings.md (V0-ORG-03, an org
admin runs it). Paste it from anywhere, any number of times: the subshell leaves your shell
where it was. Each run deletes and clones qq-gate fresh in ~/qq-apply, so nothing an earlier
run left there (an edited script, a package in the venv) can run or get in the way Shebang
`#!/usr/bin/env bash`.

[`scripts/apply.sh`](https://github.com/quirq-ai/gate/blob/main/scripts/apply.sh) · code · 12864 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
