<!-- quirq-wiki-generated repo=rollers dir=tests/fixtures -->

# rollers / tests/fixtures

Source: [tests/fixtures](https://github.com/quirq-ai/rollers/tree/main/tests/fixtures) in [rollers](https://github.com/quirq-ai/rollers).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### promoted.toml

TOML config `promoted.toml`. Fixture: quirq-ai/toolchains promoted.toml at d020ec6, the
first promotion (V0-TCH-03). Read by tests only (through promoted.from_entry); the roller
reads toolchains main with qqtc. Sections: `[toolchain`.

[`tests/fixtures/promoted.toml`](https://github.com/quirq-ai/rollers/blob/main/tests/fixtures/promoted.toml) · code · 1074 bytes

### rolled.repo.toml

TOML config `rolled.repo.toml`. Fixture: a manifest one toolchain promotion behind, in
sync's oci:// pin form (source = the image manifest by digest, digest = its one layer). The
python pin is an older image, the node pin is current, and the deps pin is not a toolchain,
so a roll changes only python's version and pin. Sections: `qq`, `toolchains.python`,
`toolchains.node`, `deps.recipes`, `[targets`.

[`tests/fixtures/rolled.repo.toml`](https://github.com/quirq-ai/rollers/blob/main/tests/fixtures/rolled.repo.toml) · code · 1120 bytes

### stale.repo.toml

TOML config `stale.repo.toml`. Fixture: a manifest one toolchain promotion behind, in sync's
oci:// pin form (source = the image manifest by digest, digest = its one layer). The python
pin is an older image, the node pin is current, and the deps pin is not a toolchain, so a
roll changes only python's version and pin. Sections: `qq`, `toolchains.python`,
`toolchains.node`, `deps.recipes`, `[targets`.

[`tests/fixtures/stale.repo.toml`](https://github.com/quirq-ai/rollers/blob/main/tests/fixtures/stale.repo.toml) · code · 1120 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
