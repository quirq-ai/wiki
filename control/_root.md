<!-- quirq-wiki-generated repo=control dir=. -->

# control / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/control/tree/main) in [control](https://github.com/quirq-ai/control).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 4 pattern(s)
including `node_modules/`, `*.key`, `state/`, `.control-state/`. Generated and secret files
matching these patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/control/blob/main/.gitignore) · other · 43 bytes

### DESIGN.md

The design spec (“control: design”). Let one party (the controller) run commands on a
machine it does not have a shell on (the controlled node), through a channel both sides can
already reach, without opening an inbound port on the node, and without making "can write to
the channel" equal to "can run anything".

[`DESIGN.md`](https://github.com/quirq-ai/control/blob/main/DESIGN.md) · code · 11418 bytes

### LICENSE

License text (MIT License). Governs use, modification, and distribution of this repository.
Read the full file in the source tree before depending on the project in a product or
redistribution.

[`LICENSE`](https://github.com/quirq-ai/control/blob/main/LICENSE) · other · 1062 bytes

### README.md

The project README (“control”). Run commands on a remote machine without opening a port on
it.

[`README.md`](https://github.com/quirq-ai/control/blob/main/README.md) · code · 6042 bytes

### SECURITY.md

The security policy. control executes commands on remote machines, so security reports are
very welcome.

[`SECURITY.md`](https://github.com/quirq-ai/control/blob/main/SECURITY.md) · code · 498 bytes

### package.json

npm package manifest for `control` v0.1.0. Signed, policy-checked remote command execution
between a controller and a controlled node, over pluggable transports (git repo, shared
directory). CLI bins: `control`. Scripts: `test`. Entry `./src/index.js`.

[`package.json`](https://github.com/quirq-ai/control/blob/main/package.json) · code · 623 bytes

_Generated 2026-11-14 12:35 UTC from `main`._
