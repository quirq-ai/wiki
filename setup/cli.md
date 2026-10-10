<!-- quirq-wiki-generated repo=setup dir=cli -->

# setup / cli

Source: [cli](https://github.com/quirq-ai/setup/tree/main/cli) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### bin.mjs

@ts-check qq-setup: set up quirq infra (qq) for a GitHub org, or put qq on this machine to
work on a repo that already uses it. The terminal checks your tools, a local form in your
browser asks which, and the terminal shows the plan or prints the install commands. THIS
BUILD IS READ-ONLY: it reads GitHub through your gh login and writes nothing anywhere.

[`cli/bin.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/bin.mjs) · code · 11275 bytes

### detect.mjs

@ts-check Which qq kinds a repo fits.

[`cli/detect.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/detect.mjs) · code · 3796 bytes

### facts.mjs

@ts-check What the form shows: the user's orgs and, per org, its repos with the qq kinds
they fit. Read-only: every call here is a GET through gh (cli/gh.mjs). Notable exports:
`listOrgs`, `listRepos`, `mapLimit`, `QQ_OWN_REPOS`, `MAX_REPOS`.

[`cli/facts.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/facts.mjs) · code · 6570 bytes

### gh.mjs

@ts-check Every GitHub call goes through the user's own `gh` login: this command never
reads, stores or prints the token, because gh makes the HTTP request itself. This build only
reads (GET). Notable exports: `ghEnv`, `gh`, `getJson`, `getAll`, `whoami`, `encodeRef`,
`GhError`, `TOKEN_VARS`, and 1 more.

[`cli/gh.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/gh.mjs) · code · 4621 bytes

### names.mjs

@ts-check Names: pure functions with no Node imports, so the form imports this same file
(one copy of the rules). Notable exports: `isName`, `normalizeRepo`, `isBlankRepo`,
`parseRepo`.

[`cli/names.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/names.mjs) · code · 1206 bytes

### opener.mjs

@ts-check Opening the browser without putting the key on a command line. Any local user can
read another process's argv (ps), and a browser started fresh keeps its URL there for its
whole life. So the opener gets the path of a page only this user can read, and that page
sends the browser on to the link. The key is single-use anyway (cli/server.mjs); this keeps
it out of argv while it is live. Notable exports: `openerBase`, `writeOpener`, `openFile`.

[`cli/opener.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/opener.mjs) · code · 3327 bytes

### plan.mjs

@ts-check The form's answers, checked against what the command itself read from GitHub, and
the plan they lead to. Pure functions: no I/O, so tests cover them directly. Notable
exports: `checkAnswers`, `buildPlan`, `CONFIG_REPO`, `STARTERS`.

[`cli/plan.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/plan.mjs) · code · 5769 bytes

### preflight.mjs

@ts-check Checks before anything opens: the tools the full setup needs, the user's gh login
and its scopes. Each failing check says the one thing to do about it. Notable exports:
`checks`, `preflight`, `NEEDED_SCOPES`, `LATER_SCOPES`.

[`cli/preflight.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/preflight.mjs) · code · 5423 bytes

### protection.mjs

@ts-check What already guards each picked repo's default branch, read with GETs only, so the
printed plan can warn before the setup step adds the qq-main ruleset (audit B1, setup #1
audit S2). Rulesets and classic protection stack and the strictest rule wins, so an old
required check that never runs on merge_group would stall the merge queue; that is what
these warnings are for.

[`cli/protection.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/protection.mjs) · code · 3764 bytes

### server.mjs

@ts-check The form's local server. It listens on 127.0.0.1 only, serves the static form from
out/, and answers /api/* only to the one tab that traded the link's key for a session.

[`cli/server.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/server.mjs) · code · 10190 bytes

### tools.mjs

@ts-check The second way in: put qq on this machine and work on a repo that already uses it.
qq-setup only prints these commands; it runs none of them. They are copied from the qq guide
(quirq-ai/docs content/docs/qq.mdx, "Use qq on your machine", at bb9a832); change both
together, with tests/fixtures/qq-guide-install.txt. Notable exports: `commandsFor`,
`getLine`, `checkTools`, `toolsText`, `INSTALL`, `USE`, `USE_MAC`, `USE_NOTE`, and 3 more.

[`cli/tools.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/tools.mjs) · code · 6261 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
