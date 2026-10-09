<!-- quirq-wiki-generated repo=xo-space dir=tests/quirq -->

# xo-space / tests/quirq

Source: [tests/quirq](https://github.com/quirq-ai/xo-space/tree/main/tests/quirq) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### check_bridge.cjs

Hermetic check of plugins/quirq/ui/space-bridge.js (run by tests/test_quirq_bridge.py): no
browser, no dependencies (Node 18+). Loads the bridge into a fake window, plays the MCP Apps
host and asserts the handshake, deep link routing, fetch → tool mapping, links and model
context.

[`tests/quirq/check_bridge.cjs`](https://github.com/quirq-ai/xo-space/blob/main/tests/quirq/check_bridge.cjs) · code · 8494 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
