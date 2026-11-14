<!-- quirq-wiki-generated repo=liftoff dir=test/fixtures -->

# liftoff / test/fixtures

Source: [test/fixtures](https://github.com/quirq-ai/liftoff/tree/main/test/fixtures) in [liftoff](https://github.com/quirq-ai/liftoff).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### fake-docker.mjs

A stand-in for the docker CLI so the pipeline can be tested without Docker. It behaves like
the real one where the pipeline depends on it: `login` reads the password from stdin and
saves it into $DOCKER_CONFIG/config.json, and `push` only works when that file holds the
right login.

[`test/fixtures/fake-docker.mjs`](https://github.com/quirq-ai/liftoff/blob/main/test/fixtures/fake-docker.mjs) · code · 4348 bytes

_Generated 2026-11-14 12:36 UTC from `main`._
