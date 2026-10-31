<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/worktrees -->

# xo-space / services/cowork_agent/storm/worktrees

Source: [services/cowork_agent/storm/worktrees](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/worktrees) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm's worktrees (design ch 13): each thread of a git project works in its own checkout,
`/.xo/worktrees/thread-`, on a branch `xo/thread-`, removed only when nothing would be lost.

[`services/cowork_agent/storm/worktrees/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/worktrees/__init__.py) · code · 733 bytes

### git.py

The git commands storm's worktrees run, through the one executor (`utils.commands.run`), and
the parsers for what they print. Classes: `GitFailed`, `Entry`, `Change`. Functions: `git`,
`git_out`, `version`, `relative_paths`, `worktree_list`, `status`.

[`services/cowork_agent/storm/worktrees/git.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/worktrees/git.py) · code · 5292 bytes

### service.py

Storm's worktrees in the engine's life (design ch 13 §2, §4–§6). Classes: `WouldLoseWork`,
`NotFound`, `Worktrees`. Functions: `current`.

[`services/cowork_agent/storm/worktrees/service.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/worktrees/service.py) · code · 24778 bytes

### trees.py

A thread's git worktree on disk, its whole life (design ch 13 §1–§6). Classes:
`WorktreeRefused`, `Kept`, `Place`, `Found`, `Snapshot`, `Tree`, `Loss`. Functions: `place`,
`worktrees_root`, `tree_path`, `thread_of`, `lock_for`, `snapshot`, `find`, `ensure`, and 6
more. Contains tests.

[`services/cowork_agent/storm/worktrees/trees.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/worktrees/trees.py) · code · 29074 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
