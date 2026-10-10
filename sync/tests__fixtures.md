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

### kinds.toml

TOML config `kinds.toml`. Test copy of quirq-ai/infra-config config/kinds.toml at b344eaf
(kinds and their toolchains only). Sections: `[kind`.

[`tests/fixtures/kinds.toml`](https://github.com/quirq-ai/sync/blob/main/tests/fixtures/kinds.toml) · code · 909 bytes

### promoted.toml

TOML config `promoted.toml`. Test copy of quirq-ai/toolchains promoted.toml at f45c239.
Promoted toolchains: one pin per toolchain, by digest. Written by qqtc promote in a reviewed
PR; read by the toolchain roller (quirq-ai/rollers, V0-ROL-01). Do not edit by hand.
Sections: `[toolchain`.

[`tests/fixtures/promoted.toml`](https://github.com/quirq-ai/sync/blob/main/tests/fixtures/promoted.toml) · code · 1133 bytes

### xo-space.repo.toml

TOML config `xo-space.repo.toml`. Fixture: the manifest xo-space gets at onboarding
(V0-ONB-01 lands the real one in xo-space). The toolchain pin is the one quirq-ai/toolchains
promoted (promoted.toml at d020ec6): the OCI image manifest in the source, and the digest of
its one layer. Only linux-x86_64 is built so far. Sections: `qq`, `toolchains.python`,
`[targets`.

[`tests/fixtures/xo-space.repo.toml`](https://github.com/quirq-ai/sync/blob/main/tests/fixtures/xo-space.repo.toml) · code · 982 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
