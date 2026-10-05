<!-- quirq-wiki-generated repo=gate dir=tests/fixtures -->

# gate / tests/fixtures

Source: [tests/fixtures](https://github.com/quirq-ai/gate/tree/main/tests/fixtures) in [gate](https://github.com/quirq-ai/gate).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### green.json

JSON document `green.json` whose top-level keys are `xo-space-presubmit`, `innernet-
presubmit`. Structured data consumed by the surrounding app or tooling.

[`tests/fixtures/green.json`](https://github.com/quirq-ai/gate/blob/main/tests/fixtures/green.json) · code · 67 bytes

### innernet.repo.toml

TOML config `innernet.repo.toml`. Fixture: the manifest innernet gets at onboarding
(V0-ONB-02 lands the real one in innernet). The toolchain pin is the one quirq-ai/toolchains
promoted (promoted.toml at d020ec6): an OCI image manifest digest. Only linux-x86_64 is
built so far. Sections: `qq`, `toolchains.node`, `[targets`.

[`tests/fixtures/innernet.repo.toml`](https://github.com/quirq-ai/gate/blob/main/tests/fixtures/innernet.repo.toml) · code · 754 bytes

### red.json

JSON document `red.json` whose top-level keys are `xo-space-presubmit`, `innernet-
presubmit`, `tests`. Structured data consumed by the surrounding app or tooling.

[`tests/fixtures/red.json`](https://github.com/quirq-ai/gate/blob/main/tests/fixtures/red.json) · code · 87 bytes

### xo-space.repo.toml

TOML config `xo-space.repo.toml`. Fixture: the manifest xo-space gets at onboarding
(V0-ONB-01 lands the real one in xo-space). The toolchain pin is the one quirq-ai/toolchains
promoted (promoted.toml at d020ec6): an OCI image manifest digest. Only linux-x86_64 is
built so far. Sections: `qq`, `toolchains.python`, `[targets`.

[`tests/fixtures/xo-space.repo.toml`](https://github.com/quirq-ai/gate/blob/main/tests/fixtures/xo-space.repo.toml) · code · 869 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
