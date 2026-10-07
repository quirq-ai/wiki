<!-- quirq-wiki-generated repo=setup dir=cli -->

# setup / cli

Source: [cli](https://github.com/quirq-ai/setup/tree/main/cli) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### bin.mjs

@ts-check qq-setup: set up quirq infra (qq) for a GitHub org. The terminal checks your
tools, a local form in your browser asks which org and repos, and the terminal shows the
plan. THIS BUILD IS READ-ONLY: it reads GitHub through your gh login and writes nothing
anywhere.

[`cli/bin.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/bin.mjs) · code · 8620 bytes

### detect.mjs

@ts-check Which qq kinds a repo fits.

[`cli/detect.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/detect.mjs) · code · 3626 bytes

### facts.mjs

@ts-check What the form shows: the user's orgs and, per org, its repos with the qq kinds
they fit. Read-only: every call here is a GET through gh (cli/gh.mjs). Notable exports:
`listOrgs`, `listRepos`, `mapLimit`, `MAX_REPOS`.

[`cli/facts.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/facts.mjs) · code · 5882 bytes

### gh.mjs

@ts-check Every GitHub call goes through the user's own `gh` login: this command never
reads, stores or prints the token, because gh makes the HTTP request itself. This build only
reads (GET). Notable exports: `ghEnv`, `gh`, `getJson`, `getAll`, `whoami`, `isName`,
`encodeRef`, `GhError`, and 1 more.

[`cli/gh.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/gh.mjs) · code · 4825 bytes

### plan.mjs

@ts-check The form's answers, checked against what the command itself read from GitHub, and
the plan they lead to. Pure functions: no I/O, so tests cover them directly. Notable
exports: `checkAnswers`, `buildPlan`, `CONFIG_REPO`, `STARTERS`.

[`cli/plan.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/plan.mjs) · code · 5769 bytes

### preflight.mjs

@ts-check Checks before anything opens: the tools the full setup needs, the user's gh login
and its scopes. Each failing check says the one thing to do about it. Notable exports:
`checks`, `preflight`, `NEEDED_SCOPES`, `LATER_SCOPES`.

[`cli/preflight.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/preflight.mjs) · code · 5451 bytes

### protection.mjs

@ts-check What already guards each picked repo's default branch, read with GETs only, so the
printed plan can warn before the setup step adds the qq-main ruleset (audit B1, setup #1
audit S2). Rulesets and classic protection stack and the strictest rule wins, so an old
required check that never runs on merge_group would stall the merge queue; that is what
these warnings are for.

[`cli/protection.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/protection.mjs) · code · 3764 bytes

### server.mjs

@ts-check The form's local server. It listens on 127.0.0.1 only, serves the static form from
out/, and answers /api/* only to a page that holds the one-time key from the link the
terminal printed. The GitHub token never reaches the page: the page only sees names the
command already read. Notable exports: `startServer`.

[`cli/server.mjs`](https://github.com/quirq-ai/setup/blob/main/cli/server.mjs) · code · 6953 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
