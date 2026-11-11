<!-- quirq-wiki-generated repo=control dir=examples -->

# control / examples

Source: [examples](https://github.com/quirq-ai/control/tree/main/examples) in [control](https://github.com/quirq-ai/control).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### control-controlled.service

Service file `control-controlled.service`. systemd user unit:
~/.config/systemd/user/control-controlled.service then: systemctl --user enable --now
control-controlled.

[`examples/control-controlled.service`](https://github.com/quirq-ai/control/blob/main/examples/control-controlled.service) · code · 412 bytes

### controlled-trusted-scripts.json

JSON document `controlled-trusted-scripts.json` whose top-level keys are `role`, `node`,
`transport`, `privateKey`, `trust`, `policy`. Structured data consumed by the surrounding
app or tooling.

[`examples/controlled-trusted-scripts.json`](https://github.com/quirq-ai/control/blob/main/examples/controlled-trusted-scripts.json) · code · 382 bytes

### controlled.json

JSON document `controlled.json` whose top-level keys are `role`, `node`, `transport`,
`privateKey`, `pollSeconds`, `stateDir`, `trust`, `policy`, `redact`. Structured data
consumed by the surrounding app or tooling.

[`examples/controlled.json`](https://github.com/quirq-ai/control/blob/main/examples/controlled.json) · code · 1002 bytes

### controller.json

JSON document `controller.json` whose top-level keys are `role`, `name`, `transport`,
`privateKey`, `pollSeconds`, `nodes`, `defaultNode`. Structured data consumed by the
surrounding app or tooling.

[`examples/controller.json`](https://github.com/quirq-ai/control/blob/main/examples/controller.json) · code · 340 bytes

_Generated 2026-11-11 13:02 UTC from `main`._
