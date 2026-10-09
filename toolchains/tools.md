<!-- quirq-wiki-generated repo=toolchains dir=tools -->

# toolchains / tools

Source: [tools](https://github.com/quirq-ai/toolchains/tree/main/tools) in [toolchains](https://github.com/quirq-ai/toolchains).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### gate-requirements.txt

Txt file `gate-requirements.txt`. pyyaml==6.0.3
--hash=sha256:c458b6d084f9b935061bc36216e8a69a7e293a2f1e68bf956dcd9e6cbcd143f5.

[`tools/gate-requirements.txt`](https://github.com/quirq-ai/toolchains/blob/main/tools/gate-requirements.txt) · code · 93 bytes

### gate.py

gate: decide what the promotion gate must verify, from git data only. Runnable as a script
via `if __name__ == '__main__'`. Classes: `GateError`. Functions: `git`, `show`,
`changed_files`, `merged_tree`, `workflow_problems`, `workflows_at`, `prepare`, `main`.

[`tools/gate.py`](https://github.com/quirq-ai/toolchains/blob/main/tools/gate.py) · code · 14401 bytes

### qqtc.py

qqtc: build, pack, check and promote quirq infra toolchains. Runnable as a script via `if
__name__ == '__main__'`. Classes: `SpecError`. Functions: `load_repo_config`, `load_spec`,
`toolchain_names`, `source_filename`, `artifact_basename`, `registry_repo`,
`check_promoted_entry`, `load_promoted`, and 14 more.

[`tools/qqtc.py`](https://github.com/quirq-ai/toolchains/blob/main/tools/qqtc.py) · code · 24031 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
