<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/worktrees -->

# xo-space / services/cowork_agent/storm/worktrees

Source: [services/cowork_agent/storm/worktrees](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/worktrees) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm's worktrees (design ch 13): each thread of a git project works in its own checkout,
`/.xo/worktrees/thread-`, on a branch `xo/thread-`, removed only when nothing would be lost.

[`services/cowork_agent/storm/worktrees/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/worktrees/__init__.py) · code · 733 bytes

### git.py

Moved to services.git_safe; this import path stays valid.

[`services/cowork_agent/storm/worktrees/git.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/worktrees/git.py) · code · 146 bytes

### service.py

Storm's worktrees in the engine's life (design ch 13 §2, §4–§6). Classes: `WouldLoseWork`,
`NotFound`, `Worktrees`. Functions: `current`.

[`services/cowork_agent/storm/worktrees/service.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/worktrees/service.py) · code · 28256 bytes

### state.py

A thread branch's git state, as a person catching up reads it (v2). Functions: `empty`,
`read`, `merge_pr`, `changed`, `gh_available`, `pr_lookup`.

[`services/cowork_agent/storm/worktrees/state.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/worktrees/state.py) · code · 12857 bytes

### tracking.py

Keeping each thread branch's git state (`state.py`) in the store, so a thread says what
became of its work after its worktree and branch are gone. Classes: `Tracker`. Functions:
`pr_due`.

[`services/cowork_agent/storm/worktrees/tracking.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/worktrees/tracking.py) · code · 7813 bytes

### trees.py

A thread's git worktree on disk, its whole life (design ch 13 §1–§6). Classes:
`WorktreeRefused`, `Kept`, `Place`, `Found`, `Snapshot`, `Tree`, `Loss`. Functions: `place`,
`worktrees_root`, `tree_path`, `thread_of`, `lock_for`, `snapshot`, `find`, `ensure`, and 6
more. Contains tests.

[`services/cowork_agent/storm/worktrees/trees.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/worktrees/trees.py) · code · 29095 bytes

_Generated 2026-11-22 13:40 UTC from `main`._
