<!-- quirq-wiki-generated repo=monitoring dir=tests/fixtures/raw/infra-config/bf3ad29834d85489c49aa6d41ec3c7e59474b746/config -->

# monitoring / tests/fixtures/raw/infra-config/bf3ad29834d85489c49aa6d41ec3c7e59474b746/config

Source: [tests/fixtures/raw/infra-config/bf3ad29834d85489c49aa6d41ec3c7e59474b746/config](https://github.com/quirq-ai/monitoring/tree/main/tests/fixtures/raw/infra-config/bf3ad29834d85489c49aa6d41ec3c7e59474b746/config) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### auto_revert.toml

TOML config `auto_revert.toml`. Gardener auto-revert caps: at most 10 reverts created per
rolling 24 hours. The 10 is suraj's (plan D5). Counting reverts created is a default I
picked, not his decision; he can change it. Beneath it sit LUCI Bisection's finer limits for
Chromium (infra/config/luci-bisection.cfg, read 2026-10-03; plan §3 P6). The culprit-age
limit gates submission, not creation.

[`tests/fixtures/raw/infra-config/bf3ad29834d85489c49aa6d41ec3c7e59474b746/config/auto_revert.toml`](https://github.com/quirq-ai/monitoring/blob/main/tests/fixtures/raw/infra-config/bf3ad29834d85489c49aa6d41ec3c7e59474b746/config/auto_revert.toml) · code · 2101 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
