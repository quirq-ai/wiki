<!-- quirq-wiki-generated repo=experiments dir=. -->

# experiments / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/experiments/tree/main) in [experiments](https://github.com/quirq-ai/experiments).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 8 pattern(s)
including `/*`, `!/.gitignore`, `!/.publishignore`, `!/README.md`, `!/archive`,
`!/experiments.json`, `!/publish`, `!/rename`. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/experiments/blob/main/.gitignore) · other · 177 bytes

### .publishignore

Extensionless file `.publishignore`. Never published, whatever a folder's own .gitignore
says.

[`.publishignore`](https://github.com/quirq-ai/experiments/blob/main/.publishignore) · other · 474 bytes

### README.md

The project README (“experiments”). One repo, one branch per experiment. This branch, main,
is the index, and archive keeps the finished ones.

[`README.md`](https://github.com/quirq-ai/experiments/blob/main/README.md) · code · 11927 bytes

### archive

Extensionless file `archive`. Archive finished experiments. Each named branch is compressed
into one commit on top of the archive branch: the commit holds only that experiment's final
files, at the root, and none of its snapshot history. Then the branch is deleted and the
index on main lists the experiment as archived. The archive tip is the newest archived
experiment; each commit back is the one archived before it.

[`archive`](https://github.com/quirq-ai/experiments/blob/main/archive) · other · 5085 bytes

### experiments.json

JSON document `experiments.json` whose top-level keys are `owners`, `skip`, `experiments`,
`archived`. Structured data consumed by the surrounding app or tooling.

[`experiments.json`](https://github.com/quirq-ai/experiments/blob/main/experiments.json) · code · 8392 bytes

### publish

Extensionless file `publish`. Publish every experiment folder as its own orphan branch
(branch name = folder name, branch root = folder contents), then rebuild the index in
README.md on main. ./archive and ./rename build on the helpers exported at the bottom.

[`publish`](https://github.com/quirq-ai/experiments/blob/main/publish) · other · 20707 bytes

### rename

Extensionless file `rename`. Rename an experiment: its local folder, its branch and its
index entry move together. The new name can be a path. Missing parent folders are created,
and a folder that holds experiments is a group, never a branch of its own. ./rename
autospawn-clone agentic-ai/autoquirq ./rename --dry-run autospawn-clone agentic-
ai/autoquirq.

[`rename`](https://github.com/quirq-ai/experiments/blob/main/rename) · other · 5778 bytes

_Generated 2026-10-23 10:36 UTC from `main`._
