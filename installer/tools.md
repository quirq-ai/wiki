<!-- quirq-wiki-generated repo=installer dir=tools -->

# installer / tools

Source: [tools](https://github.com/quirq-ai/installer/tree/main/tools) in [installer](https://github.com/quirq-ai/installer).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### canary_install_drill.py

V0-INS-02 done-when, offline half: a test install follows canary, checked before anything
runs. Runnable as a script via `if __name__ == '__main__'`. Functions: `git`, `install_sh`,
`functions_only`, `qqinstall`, `main`.

[`tools/canary_install_drill.py`](https://github.com/quirq-ai/installer/blob/main/tools/canary_install_drill.py) · code · 10074 bytes

### check_pins.py

Fail unless every GitHub Action this repo uses is pinned by a full commit SHA. Runnable as a
script via `if __name__ == '__main__'`. Classes: `_StrictLoader`. Functions: `skipped`,
`files`, `problems`, `main`.

[`tools/check_pins.py`](https://github.com/quirq-ai/installer/blob/main/tools/check_pins.py) · code · 4003 bytes

### contract_check.py

V0-INS-01 done-when: a script resolves canary to a commit and digest. Runnable as a script
via `if __name__ == '__main__'`. Functions: `git`, `digest`, `resolve`, `main`.

[`tools/contract_check.py`](https://github.com/quirq-ai/installer/blob/main/tools/contract_check.py) · code · 4748 bytes

### hermetic.py

Keep a drill's git calls inside its temp dir: no inherited GIT_* variables (GIT_DIR would
point them at another repo) and no global or system git config (hooks, signing, url
rewrites). Functions: `isolate`.

[`tools/hermetic.py`](https://github.com/quirq-ai/installer/blob/main/tools/hermetic.py) · code · 604 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
