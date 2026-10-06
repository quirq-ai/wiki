<!-- quirq-wiki-generated repo=sync dir=tests/fixtures -->

# sync / tests/fixtures

Source: [tests/fixtures](https://github.com/quirq-ai/sync/tree/main/tests/fixtures) in [sync](https://github.com/quirq-ai/sync).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### innernet.repo.toml

TOML config `innernet.repo.toml`. Fixture: the manifest innernet gets at onboarding
(V0-ONB-02 lands the real one in innernet). The toolchain pin is the one quirq-ai/toolchains
promoted (promoted.toml at d020ec6): the OCI image manifest in the source, and the digest of
its one layer. Only linux-x86_64 is built so far. Sections: `qq`, `toolchains.node`,
`[targets`.

[`tests/fixtures/innernet.repo.toml`](https://github.com/quirq-ai/sync/blob/main/tests/fixtures/innernet.repo.toml) · code · 867 bytes

### xo-space.repo.toml

TOML config `xo-space.repo.toml`. Fixture: the manifest xo-space gets at onboarding
(V0-ONB-01 lands the real one in xo-space). The toolchain pin is the one quirq-ai/toolchains
promoted (promoted.toml at d020ec6): the OCI image manifest in the source, and the digest of
its one layer. Only linux-x86_64 is built so far. Sections: `qq`, `toolchains.python`,
`[targets`.

[`tests/fixtures/xo-space.repo.toml`](https://github.com/quirq-ai/sync/blob/main/tests/fixtures/xo-space.repo.toml) · code · 982 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
