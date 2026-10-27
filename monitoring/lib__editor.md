<!-- quirq-wiki-generated repo=monitoring dir=lib/editor -->

# monitoring / lib/editor

Source: [lib/editor](https://github.com/quirq-ai/monitoring/tree/main/lib/editor) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### apply.ts

The local editor carries a plan out through the person's own gh, in the same order as the
script: read everything live and stop before the first write if anything moved, then one
branch and pull request per repo, then the property changes. A failure stops there and says
what was already done. Notable exports: `applyEdits`.

[`lib/editor/apply.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/apply.ts) · code · 5615 bytes

### codeowners.ts

CODEOWNERS: one rule per line, `<pattern> <owner> <owner>...`, comments on lines of their
own. The editor changes the owners of a rule, adds a rule at the end or removes one.
Comments and every other line stay byte for byte, as in the TOML editor. Notable exports:
`parseCodeowners`, `checkOwners`, `checkPattern`, `splitOwners`, `applyOwnersEdits`,
`ownersFor`, `OwnerRule`, `OwnersEdit`, and 1 more.

[`lib/editor/codeowners.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/codeowners.ts) · code · 6009 bytes

### commit-file.ts

A file that holds one commit id and nothing else (rollers' infra-config.commit). It is shown
and edited as one field, and the edit keeps the file's own trailing newline. Notable
exports: `checkCommit`, `isPinCommit`, `readCommit`, `commitView`, `applyCommitEdit`.

[`lib/editor/commit-file.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/commit-file.ts) · code · 2151 bytes

### diff.ts

A line diff for the review screen: the changed lines with one line of context around each
run, numbered as in the old and new file. Settings files are a few hundred lines, so a plain
LCS table is small enough. Notable exports: `lineDiff`, `DiffLine`.

[`lib/editor/diff.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/diff.ts) · code · 1700 bytes

### generated.ts

infra-config values that `python3 tools/qqcfg.py generate` reads (its render(), at infra-
config b344eaf): change one and generated/ and .github/workflows/qq-required-*.yml are out
of date, so the required `validate` check fails. The editor cannot regenerate them (it does
not run qqcfg, and writing .github/workflows/ needs a scope it does not ask for), so it
shows these values read-only and says how they are changed.

[`lib/editor/generated.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/generated.ts) · code · 2654 bytes

### gh.ts

The settings editor's only way to GitHub when it runs on a person's own machine: their own
`gh` login. This process never reads, stores or prints the token; `gh` makes each request
itself. The dashboard's GITHUB_TOKEN (and any other token in the environment) is removed
from what gh sees, so an edit is always made as the person who is signed in to gh, never as
the dashboard. Notable exports: `ghRead`, `ghWrite`, `ghLogin`, `GhResult`, `WriteMethod`.

[`lib/editor/gh.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/gh.ts) · code · 5119 bytes

### launch.mjs

`pnpm editor`: run the dashboard on this machine with the settings editor able to open pull
requests, as you, through your own gh login. pnpm editor # builds, then serves
http://127.0.0.1:3020/settings pnpm editor --port N # another port It checks gh is installed
and signed in (and runs `gh auth login` for you if not), then starts `next start` on
127.0.0.1 only, with a fresh random key.

[`lib/editor/launch.mjs`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/launch.mjs) · code · 3609 bytes

### mode.ts

Two ways to run the settings editor: - "script" (the deployed site, and `pnpm dev`): it
reads the settings and shows what an edit would change, then hands the person a `gh` script
that opens the pull requests with their own login. The server writes nothing. - "gh" (`pnpm
editor` on the person's own machine): the server opens the pull requests itself, through the
person's own `gh` login.

[`lib/editor/mode.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/mode.ts) · code · 2643 bytes

### plan.ts

An edit request becomes a plan: one pull request per repo (each changed file one commit on a
new branch), plus the property changes that have no file. The server builds it from its own
read of every file, never from text the browser sent, and the same plan is what the review
screen shows, what the gh script does and what the local editor does.

[`lib/editor/plan.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/plan.ts) · code · 11196 bytes

### properties.ts

Checks for org custom property values, shared by the form and the server. GitHub's limits: a
value is at most 75 characters; a single select must be one of its allowed values; a
required property cannot be unset. Notable exports: `isEditableType`, `checkPropertyValue`,
`PropertyRule`.

[`lib/editor/properties.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/properties.ts) · code · 1370 bytes

### script.ts

The plan as a bash script the person runs with their own gh login, for when the editor runs
on a server that does not write (the deployed site). It is safe on macOS's bash 3.2 and BSD
tools, needs only gh, reads the live state first and stops before writing anything if a file
or a property changed since the editor read it, and asks for an exact lowercase "yes".
Notable exports: `sq`, `renderScript`, `SCRIPT_NAME`.

[`lib/editor/script.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/script.ts) · code · 6404 bytes

### toml-fields.ts

The settings files are hand-written TOML whose comments carry the reasons behind each value
("suraj (2026-10-04): xo-space PRs land by his own Merge when ready"). Re-serialising a
parsed file would drop every comment, so the editor never does that. It finds the line that
holds a value and replaces only the value's own characters, keeping the indentation, the
spacing and the trailing comment.

[`lib/editor/toml-fields.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/toml-fields.ts) · code · 16723 bytes

### types.ts

What the form sends and what it gets back. The request is untrusted: the server checks it
with these schemas, looks every id up in its own catalog and re-reads every file before
using it. Notable exports: `EditRequestSchema`, `EditRequest`, `FieldView`, `RuleView`,
`FileView`, `PropertyDefView`, `PropertiesView`, `PlannedFileView`, and 3 more.

[`lib/editor/types.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/types.ts) · code · 3405 bytes

### view.ts

What the form shows for a file: plain, serialisable values only. Notable exports:
`displayValue`, `tomlView`, `ownersView`.

[`lib/editor/view.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/editor/view.ts) · code · 2223 bytes

_Generated 2026-10-27 11:08 UTC from `main`._
