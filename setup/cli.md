<!-- quirq-wiki-generated repo=setup dir=cli -->

# setup / cli

Source: [cli](https://github.com/quirq-ai/setup/tree/main/cli) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### bin.mjs

qq-setup's entry. It is written so that an old Node can still read it (Node 10, and 12.17
and up, which covers Ubuntu 20.04's and 22.04's own packages), and says plainly that it
needs Node 22 instead of failing on newer syntax in the rest of qq-setup. Keep it that way:
no static imports, nothing newer than ES2019 plus import(). CI's old-node job runs it on a
real Node 12.

[`cli/bin.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/bin.mjs) · code · 808 bytes

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

### install.mjs

@ts-check qq-setup install: install, update or remove qq (with qqsync) and xo on this
machine. It looks at what is already here, asks what to do with each, shows the exact
commands, and runs them only after a yes.

[`cli/install.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/install.mjs) · code · 46886 bytes

### machine.mjs

@ts-check The form's "This machine" panel: the same install, update and remove as `qq-setup
install` (cli/install.mjs), chosen on the page and run here. The page never sends a command.
It sends a choice per tool, which must be one the tool's state offers (choices()), with the
signature of the look it is showing. The server turns it into steps with planSteps and keeps
that plan. A run takes only the id of the latest plan.

[`cli/machine.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/machine.mjs) · code · 12548 bytes

### main.mjs

@ts-check qq-setup: set up quirq infra (qq) for a GitHub org, or install, update or remove
qq and xo on this machine. The terminal checks your tools and a local form in your browser
asks what to do: the form's "This machine" panel runs the install, update or remove steps
you pick (cli/machine.mjs), and the terminal shows the plan for an org. `qq-setup install`
does the same for this machine in the terminal.

[`cli/main.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/main.mjs) · code · 14424 bytes

### names.mjs

@ts-check Names: pure functions with no Node imports, so the form imports this same file
(one copy of the rules). Notable exports: `isName`.

[`cli/names.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/names.mjs) · code · 362 bytes

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
`checks`, `version`, `pythonAt`, `preflight`, `NEEDED_SCOPES`, `LATER_SCOPES`.

[`cli/preflight.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/preflight.mjs) · code · 7842 bytes

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

[`cli/server.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/server.mjs) · code · 11207 bytes

### tools.mjs

@ts-check qq's install commands, which `qq-setup install` and the page's "This machine"
steps run (cli/install.mjs). They are copied from the qq guide (quirq-ai/docs
content/docs/install.mdx, "Install qq", at 3f8df0d); change both together, with
tests/fixtures/qq-guide-install.txt. MAC_PYTHON is that page's "On a Mac, set up Python
first" command. Notable exports: `installFor`, `qqPython`, `INSTALL`, `MAC_PYTHON`, `MAC`.

[`cli/tools.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/tools.mjs) · code · 3399 bytes

### windows.mjs

@ts-check What qq-setup says about qq on Windows: qq runs on Linux and macOS only, so on
Windows qq-setup installs xo (in cmd.exe) but not qq, and points to WSL for qq. A common
trap: in WSL with no Linux Node, the shell finds Windows' npx, because WSL adds Windows'
PATH by default, so qq-setup runs on Windows' Node. npx then starts in
\\wsl.localhost\<distro>\... (or \\wsl$\... on older WSL), or in C:\.

[`cli/windows.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/windows.mjs) · code · 2604 bytes

_Generated 2026-10-21 10:42 UTC from `main`._
