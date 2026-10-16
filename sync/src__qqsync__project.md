<!-- quirq-wiki-generated repo=sync dir=src/qqsync/project -->

# sync / src/qqsync/project

Source: [src/qqsync/project](https://github.com/quirq-ai/sync/tree/main/src/qqsync/project) in [sync](https://github.com/quirq-ai/sync).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

qqsync.project: keep working clones up to date and manage who has access to their repo.

[`src/qqsync/project/__init__.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/project/__init__.py) · code · 275 bytes

### access.py

Who has access to a clone's repo: finds the code host's backend and asks it. Functions:
`target`, `members`, `invite`, `revoke`.

[`src/qqsync/project/access.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/project/access.py) · code · 1697 bytes

### add.py

add: clone a repo into a folder of clones. Functions: `default_name`, `add`.

[`src/qqsync/project/add.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/project/add.py) · code · 2357 bytes

### check.py

check: is each clone behind its remote? Reads only; changes nothing, not even remote refs.
Functions: `check_clone`, `check`.

[`src/qqsync/project/check.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/project/check.py) · code · 2795 bytes

### cli.py

Keep working clones up to date and manage who has access to their repo. Functions:
`cmd_update`, `cmd_check`, `cmd_add`, `cmd_members`, `cmd_invite`, `cmd_revoke`, `register`.

[`src/qqsync/project/cli.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/project/cli.py) · code · 8138 bytes

### clones.py

Which clones a command acts on. Functions: `find`, `one`.

[`src/qqsync/project/clones.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/project/clones.py) · code · 1280 bytes

### errors.py

One error type, so every command fails the same way. Classes: `ProjectError`. Functions:
`refused`.

[`src/qqsync/project/errors.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/project/errors.py) · code · 937 bytes

### git.py

git plumbing. The only module that runs git. Classes: `Result`. Functions: `run`,
`valid_branch`, `toplevel`, `origin_url`, `config_get`, `current_branch`, `rev`,
`has_commit`, and 6 more.

[`src/qqsync/project/git.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/project/git.py) · code · 5588 bytes

### identity.py

What "the same repo" means: a remote URL normalized to host/owner/name. Functions:
`normalize`, `split`.

[`src/qqsync/project/identity.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/project/identity.py) · code · 1247 bytes

### update.py

update: fetch a clone's remote, then bring the clone up to date with its strategy.
Functions: `update_clone`, `update`.

[`src/qqsync/project/update.py`](https://github.com/quirq-ai/sync/blob/main/src/qqsync/project/update.py) · code · 3185 bytes

_Generated 2026-10-16 10:14 UTC from `main`._
