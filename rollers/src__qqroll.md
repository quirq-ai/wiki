<!-- quirq-wiki-generated repo=rollers dir=src/qqroll -->

# rollers / src/qqroll

Source: [src/qqroll](https://github.com/quirq-ai/rollers/tree/main/src/qqroll) in [rollers](https://github.com/quirq-ai/rollers).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

qqroll: rollers for quirq infra (qq).

[`src/qqroll/__init__.py`](https://github.com/quirq-ai/rollers/blob/main/src/qqroll/__init__.py) · code · 67 bytes

### cli.py

The qqroll command line. Runnable as a script via `if __name__ == '__main__'`. Functions:
`cmd_dependabot`, `cmd_roll`, `cmd_rotation`, `cmd_repos`, `build_parser`, `main`.

[`src/qqroll/cli.py`](https://github.com/quirq-ai/rollers/blob/main/src/qqroll/cli.py) · code · 10401 bytes

### config.py

Read roller settings from a checkout of quirq-ai/infra-config, through its own loader
(qqcfg). Classes: `ConfigError`. Functions: `load`, `rollers`, `load_rollers`,
`toolchain_pins`, `rollers_for`.

[`src/qqroll/config.py`](https://github.com/quirq-ai/rollers/blob/main/src/qqroll/config.py) · code · 1690 bytes

### dependabot.py

V0-ROL-02: generate each repo's Dependabot config from infra-config's rollers.toml. Classes:
`GenerateError`. Functions: `dependabot_yml`, `land_workflow`, `with_digest`, `generate`,
`github_slugs`, `write`, `check`.

[`src/qqroll/dependabot.py`](https://github.com/quirq-ai/rollers/blob/main/src/qqroll/dependabot.py) · code · 12244 bytes

### land_check.py

The check qq-roll-land runs on a Dependabot PR before it may land with no human (V0-ROL-02,
D4). Runnable as a script via `if __name__ == '__main__'`. Functions: `pages`, `matches`,
`changed_lines`, `dep_name`, `entry`, `lock_leaves`, `lock_problems`, `satisfies`, and 6
more.

[`src/qqroll/land_check.py`](https://github.com/quirq-ai/rollers/blob/main/src/qqroll/land_check.py) · code · 45594 bytes

### promoted.py

The toolchains quirq-ai/toolchains promoted: the pins the toolchain roller moves repos to.
Classes: `PromotedError`, `Promoted`. Functions: `from_entry`, `parse_json`, `load`.

[`src/qqroll/promoted.py`](https://github.com/quirq-ai/rollers/blob/main/src/qqroll/promoted.py) · code · 5850 bytes

### roll.py

V0-ROL-01: move a repo's toolchain pins to the digests quirq-ai/toolchains promoted.
Classes: `Change`, `Roll`. Functions: `plan`.

[`src/qqroll/roll.py`](https://github.com/quirq-ai/rollers/blob/main/src/qqroll/roll.py) · code · 6820 bytes

### rotation.py

The toolchain roller rotation: for every repo the quirq-rollers toolchains roller covers,
roll its manifest to the promoted digests and open (or refresh) one roll PR. Classes:
`Report`. Functions: `title`, `body`, `run`.

[`src/qqroll/rotation.py`](https://github.com/quirq-ai/rollers/blob/main/src/qqroll/rotation.py) · code · 6187 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
