<!-- quirq-wiki-generated repo=liftoff dir=test/e2e -->

# liftoff / test/e2e

Source: [test/e2e](https://github.com/quirq-ai/liftoff/tree/main/test/e2e) in [liftoff](https://github.com/quirq-ai/liftoff).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### mock_registry.py

In-memory Docker/OCI registry for Liftoff's end-to-end test. Runnable as a script via `if
__name__ == '__main__'`. Classes: `Handler`. Functions: `sha256`.

[`test/e2e/mock_registry.py`](https://github.com/quirq-ai/liftoff/blob/main/test/e2e/mock_registry.py) · code · 8659 bytes

### run.mjs

End-to-end check with the real docker CLI and engine: node test/e2e/run.mjs It starts a
throwaway registry in a container (test/e2e/mock_registry.py on the python:3.12-slim image,
which must already be on this machine), then deploys a tiny image to it through Liftoff's
real pipeline: once against a registry that hands out tokens like Harbor, once against one
that takes the password directly.

[`test/e2e/run.mjs`](https://github.com/quirq-ai/liftoff/blob/main/test/e2e/run.mjs) · code · 9270 bytes

_Generated 2026-11-14 12:36 UTC from `main`._
