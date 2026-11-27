<!-- quirq-wiki-generated repo=quirq-orbit dir=assets/readmes -->

# quirq-orbit / assets/readmes

Source: [assets/readmes](https://github.com/quirq-ai/quirq-orbit/tree/main/assets/readmes) in [quirq-orbit](https://github.com/quirq-ai/quirq-orbit).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### agent-skills.html

HTML document `agent-skills.html`. Skills that let an agent do a whole job from one prompt.
Each skill is a folder under skills/ with a SKILL.md (what it does, when to use it, the
steps) and whatever it needs beside it: templates, scripts, references.

[`assets/readmes/agent-skills.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/agent-skills.html) · code · 1575 bytes

### argus-code.html

HTML document `argus-code.html`. Argus The observability console for Claude Code and Codex,
local-first, permanent, and honest about cost.

[`assets/readmes/argus-code.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/argus-code.html) · code · 22160 bytes

### claude-code.html

HTML document `claude-code.html`. One container that runs Claude Code with Remote Control
on. You sign in once with your own Claude subscription, then drive the session from
claude.ai/code or the Claude app. No API key is needed. Run docker build -t claude-code .
docker run -d --name cc -p 8080:8080 -v cc-data:/data claude-code docker logs -f cc The logs
print a CONNECT link: 12:45:19 CONNECT: http://localhost:8080/connect#Xb3….

[`assets/readmes/claude-code.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/claude-code.html) · code · 3645 bytes

### cli-console.html

HTML document `cli-console.html`. Your command-line tools, in one local workspace. cli
console turns installed CLIs into a browser interface: command families in the sidebar,
subcommands across the top, flags as forms, and real output from your machine. Pick a tool
and its console is generated on demand from local help or man pages. No hand-maintained
command catalog or AI key is required. What it does.

[`assets/readmes/cli-console.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/cli-console.html) · code · 9154 bytes

### control.html

HTML document `control.html`. Run commands on a remote machine without opening a port on it.
control has two roles. A controlled node polls a shared queue, checks each job, runs the
ones its policy allows and posts signed results. A controller signs jobs, puts them on the
queue and reads back verified results. The queue is pluggable: a git repository (any host,
private recommended) or a plain directory (local disk, shared mount, synced folder). c.

[`assets/readmes/control.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/control.html) · code · 7376 bytes

### docs.html

HTML document `docs.html`. qq docs The docs for qq, quirq's build and release
infrastructure, are live at docs.quirq.dev . XO Space docs are at docs.xo.builders . New
here? Start at docs.quirq.dev/docs , which says what qq does and which guide to read first.
The rest of this file is for people working on the docs site itself. The videos in
public/videos/ are rendered from real qq runs by the scripts in scripts/videos/ .

[`assets/readmes/docs.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/docs.html) · code · 2742 bytes

### environment.html

Empty file `environment.html` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`assets/readmes/environment.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/environment.html) · empty · 0 bytes

### euler.html

HTML document `euler.html`. Euler Your apps. One home. One dock.

[`assets/readmes/euler.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/euler.html) · code · 28223 bytes

### executor.html

HTML document `executor.html`. The sandbox an AI coding agent works in. One executor runs
for one chat: it is a container that connects out to an OpenAI Agents API session (a
self_hosted environment) and runs the shell commands the agent asks for, in a workspace
folder, as an unprivileged user. It is small on purpose: one supervisor process (
executor.mjs , about 100 lines, no dependencies) around one codex exec-server .

[`assets/readmes/executor.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/executor.html) · code · 6506 bytes

### experiments.html

HTML document `experiments.html`. One repo, one branch per experiment. This branch, main ,
is the index, and archive keeps the finished ones. How it works Every experiment starts as a
folder. ./publish turns each folder into a branch.

[`assets/readmes/experiments.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/experiments.html) · code · 16894 bytes

### fabric-chat-node.html

HTML document `fabric-chat-node.html`. Your company's Fabric Chat server This folder is
everything one company needs to run its own team chat on its own Hyperledger Fabric node,
and to share a workspace with other companies that do the same: three files, and Docker.
These files belong to release 0.3.0 of Fabric Chat .

[`assets/readmes/fabric-chat-node.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/fabric-chat-node.html) · code · 21957 bytes

### fabric-chat.html

HTML document `fabric-chat.html`. A Slack-style team chat where the database is a
Hyperledger Fabric 2.5 ledger. It runs in two ways.

[`assets/readmes/fabric-chat.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/fabric-chat.html) · code · 35998 bytes

### galileo.html

HTML document `galileo.html`. The inspector of a space: the apps and files on this machine,
one at a time, under one bar. galileo keeps a list of sources , the things you want to look
at. There are two kinds.

[`assets/readmes/galileo.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/galileo.html) · code · 8917 bytes

### gardener.html

HTML document `gardener.html`. Part of quirq infra ("qq"), quirq-ai's CI/CD system for repos
in any language. This repo keeps main green in every onboarded repo, as an agent plus a
small service: it watches the post-submit run on every main commit, publishes a tree status,
groups failures by regression range, bisects them to a culprit and opens clean reverts
within the caps in infra-config's auto_revert.toml . Today it reports only: the tree statu.

[`assets/readmes/gardener.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/gardener.html) · code · 20916 bytes

### gate.html

HTML document `gate.html`. Part of quirq infra ("qq"), quirq-ai's CI/CD system for repos in
any language. This repo decides what must pass before a change lands: the required checks,
computed from infra-config and each repo's manifest, and the merge queue that verifies the
exact merge result before it reaches main . Chromium counterpart: LUCI CV (Change Verifier)
and commit-queue.cfg . As there, the gate is deterministic config, not judgment.

[`assets/readmes/gate.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/gate.html) · code · 11032 bytes

### github-activity.html

HTML document `github-activity.html`. A small public dashboard of activity across our public
GitHub repositories: commits per week, a live event feed, and a card per repo (language, CI
status, open PRs/issues, latest release, 12-week commit sparkline). How it works.

[`assets/readmes/github-activity.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/github-activity.html) · code · 1332 bytes

### heartwood.html

HTML document `heartwood.html`. An old tree, captured as 5.9 million Gaussian splats, that
pulses with music. Every heartbeat sends a ring of light out from the trunk; tap anywhere to
send a ripple and play a note. In the Studio you write your own song, part by part, and the
tree draws each part as it plays. Live: https://liftoff-7-xo-sscay4t.apps.hello-xo.nl.

[`assets/readmes/heartwood.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/heartwood.html) · code · 7814 bytes

### infra-config.html

HTML document `infra-config.html`. Configuration as code for quirq infra (qq), the CI/CD
system for every quirq-ai repo. This repo declares the whole system as data: which repos are
onboarded, what builds them, how a change lands, how releases move through channels, and the
limits on what agents may do alone. A change here is a pull request that goes through the
same gate as code, and you revert it like code. Chromium counterpart: chromium/src/infra/c.

[`assets/readmes/infra-config.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/infra-config.html) · code · 26225 bytes

### innernet.html

HTML document `innernet.html`. inner net.

[`assets/readmes/innernet.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/innernet.html) · code · 38387 bytes

### installer.html

HTML document `installer.html`. Part of quirq infra ("qq"), quirq-ai's CI/CD system for
repos in any language. This repo makes clients follow a release channel instead of main : it
reads which commit and artifact digest each channel names, and documents how an install
follows one. Today xo-space's install.sh and in-app updater follow main .

[`assets/readmes/installer.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/installer.html) · code · 10225 bytes

### instants.html

HTML document `instants.html`. Instants turns folders of past research and experiments into
Instagram-style carousel posts, so you can browse, rediscover and showcase your work. Drop
in new data in any format (notes, CSV, JSON, images, code) and it becomes a new post. The
library of posts is called Curie , after Marie Curie, who kept meticulous notebooks of every
experiment. Run it Use Node.js 22.13 or newer. npm install npm run dev # http://local.

[`assets/readmes/instants.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/instants.html) · code · 9258 bytes

### lan.html

HTML document `lan.html`. Private networks for developers. Create a network, invite
teammates, and share a local port or a folder (read-only) with them peer-to-peer. Nothing is
exposed to the internet, and every connection is identity-checked.

[`assets/readmes/lan.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/lan.html) · code · 3158 bytes

### launchpad.html

HTML document `launchpad.html`. XO Launchpad CLI Create apps, get Docker commands, and
manage deployments from your terminal. Uses the same sign-in as xo . Install Requires Python
3.11+ and Git. Install in a Python virtual environment: python -m pip install "xo-launchpad
@ git+https://github.com/quirq-ai/launchpad.git" Works on Windows, Linux, and macOS. Docker
is needed to build and push images. For local development, clone this repository and run.

[`assets/readmes/launchpad.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/launchpad.html) · code · 4811 bytes

### library.html

HTML document `library.html`. One repo, one branch per GitHub project. This branch, main ,
is the index and the tool, and attic keeps the retired ones. How it works ./library copies
projects straight from GitHub. No folders on your machine, no checkout.

[`assets/readmes/library.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/library.html) · code · 6085 bytes

### liftoff.html

HTML document `liftoff.html`. A local deploy console for XO Launchpad docker apps. It stores
each app's push password encrypted on your computer and runs the whole sequence for you:
login, build, push, then a check that the registry really holds the image you pushed. Every
deploy is kept in a history with its output. It needs Node 20.12 or newer and Docker. There
is nothing to install: no dependencies, no build step. Start node bin/liftoff.js ser.

[`assets/readmes/liftoff.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/liftoff.html) · code · 17059 bytes

### marketing.html

HTML document `marketing.html`. marketing: campaign copy, launch posts and brand assets.

[`assets/readmes/marketing.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/marketing.html) · code · 62 bytes

### monitoring.html

HTML document `monitoring.html`. The quirq-ai monitoring dashboard: one page that says what
changed across the org and what state everything is in , on a phone or a desktop. suraj's
Vercel project serves it at monitoring.quirq.dev . The dashboard is read-only. It reads the
state the other repos already publish, shows it with the word ( green , red , held , pending
, unknown , stale ) before the color, and links every value to the file or GitHub page.

[`assets/readmes/monitoring.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/monitoring.html) · code · 20995 bytes

### perf.html

HTML document `perf.html`. Part of quirq infra ("qq"), quirq-ai's CI/CD system for repos in
any language. This repo records performance on every post-submit commit, so v1 can alert on
regressions and v2 can bisect them. Chromium counterpart: the chrome.perf waterfall, the
perf dashboard and Pinpoint. v0 only records numbers; it does not alert or bisect. How it
works (v0).

[`assets/readmes/perf.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/perf.html) · code · 7644 bytes

### qq.html

HTML document `qq.html`. qq is the quirq infra command line (this repo was quirq-ai/depot
until 2026-10-09; the old URL redirects here). Every repo that quirq infra builds pins the
qq version it runs in its manifest, infra/repo.toml , and qq installs and runs exactly that
version. Chromium counterpart depot_tools : the one checkout on your PATH that bootstraps
itself and wraps the tools a contributor needs ( gclient , git cl upload , git cl.

[`assets/readmes/qq.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/qq.html) · code · 20756 bytes

### quirq.html

HTML document `quirq.html`. A small, filesystem-first workspace for quirqy, viewed with
open-chat . This repository contains content, not the Next.js application. Five places, five
examples.

[`assets/readmes/quirq.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/quirq.html) · code · 3223 bytes

### quirq_ai.html

HTML document `quirq_ai.html`. quirq · work at light speed.

[`assets/readmes/quirq_ai.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/quirq_ai.html) · code · 50950 bytes

### quirqy.html

HTML document `quirqy.html`. Explore repositories, their history, and the people around them
in interactive 3D. Quirqy builds on Observatory's shared 3D engine and liquid-glass
interface. Its primary repository apps are Data Lab for files and commit history, Activity
Lab for pull requests, issues, reviews, comments, forks, and contributors, and About for the
connected repository’s README. Scientific instruments remain available through the dock'.

[`assets/readmes/quirqy.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/quirqy.html) · code · 30405 bytes

### quitter.html

HTML document `quitter.html`. All your agent and thread activity in one place. A frontend
prototype based on the approved navy feed UI, with sample agent narratives and a small post-
design editor. The UI and engine can be developed independently. Use Node 22 ( nvm use if
you use nvm). npm install npm run dev Open http://127.0.0.1:5174/ . Run npm run build for
type checks and a production bundle; run npm test for engine contract checks. Customize.

[`assets/readmes/quitter.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/quitter.html) · code · 3888 bytes

### recipes.html

HTML document `recipes.html`. Part of quirq infra ("qq"), quirq-ai's CI/CD system for repos
in any language. This repo holds one adapter per target kind, found by one loader. An
adapter is the only place in quirq infra that may name a language, a build tool or a test
runner. Chromium counterpart: the recipes in chromium/tools/build and the recipes-py engine
that runs them. As there, the core says what to do with a target and the recipe says how f.

[`assets/readmes/recipes.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/recipes.html) · code · 11285 bytes

### release.html

HTML document `release.html`. Part of quirq infra ("qq"), quirq-ai's CI/CD system for repos
in any language. This repo moves builds through channels. A channel is a pointer:
channels/&lt;name&gt; names a commit and an artifact digest, and only the release executor
moves it, recording an operation key before it does.

[`assets/readmes/release.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/release.html) · code · 22949 bytes

### remote-build.html

HTML document `remote-build.html`. Part of quirq infra ("qq"), quirq-ai's CI/CD system for
repos in any language. This repo is where actions run and how their results are reused: the
executor interface and the action cache. Chromium counterpart: goma, then reclient, then
Siso with RBE over REAPI, which works with any REAPI backend.

[`assets/readmes/remote-build.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/remote-build.html) · code · 5923 bytes

### research.html

HTML document `research.html`. Verified, shareable research outcomes from quirq. This
repository is not a scratchpad. Notes, drafts, raw dumps and half-checked claims stay out.
Everything committed here has been checked against its sources and is safe to share outside
the team. How it is organised Every research topic is a top-level folder named with a short
slug, created from _template/ and holding the same parts.

[`assets/readmes/research.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/research.html) · code · 10520 bytes

### rollers.html

HTML document `rollers.html`. rollers moves pinned dependencies and toolchains forward for
quirq infra ( qq ), through the same gate as any other change, with no human in the loop. An
agent may land a clean roll alone (plan D4). Chromium counterpart Skia AutoRoll, and roll-
dep in depot_tools. AutoRoll and similar rollers write about a fifth of Chromium's commits;
here they do the same job for every repo quirq infra builds. What it rolls.

[`assets/readmes/rollers.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/rollers.html) · code · 13600 bytes

### setup.html

HTML document `setup.html`. qq-setup One command to install, update or remove qq and xo on
your machine, and to set up quirq infra (qq) for your GitHub org: the terminal checks your
tools and opens one page in your browser, qq on this machine first, then your org's repos.
npx --allow-remote=root https://codeload.github.com/quirq-ai/setup/tar.gz/&lt;commit&gt;
&lt;commit&gt; is the full id of the latest commit on main . Always pin it: the link t.

[`assets/readmes/setup.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/setup.html) · code · 22430 bytes

### space-hub.html

HTML document `space-hub.html`. Git hosting stored in SpacetimeDB, laid out like GitHub.

[`assets/readmes/space-hub.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/space-hub.html) · code · 97517 bytes

### sync.html

HTML document `sync.html`. sync owns the quirq infra ( qq ) repo manifest, infra/repo.toml :
its versioned schema, the only library that reads and edits it ( qqsync ), and the checks
that keep pins honest. Every repo that quirq infra builds keeps one manifest. It lists the
repo's pinned toolchains and dependencies and its typed targets. A target's kind is an
opaque string; what a kind means lives in quirq-ai/recipes and the list of kinds in qu.

[`assets/readmes/sync.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/sync.html) · code · 16519 bytes

### test-pipelines.html

HTML document `test-pipelines.html`. Part of quirq infra ("qq"), quirq-ai's CI/CD system for
repos in any language. This repo turns test output into stored results and mechanical
verdicts. Chromium counterpart: ResultDB (the results store and its ResultSink) and LUCI
Analysis (verdicts, flake handling and failure clustering). What it holds (plan §5.4,
§5.10).

[`assets/readmes/test-pipelines.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/test-pipelines.html) · code · 44886 bytes

### toolchains.html

HTML document `toolchains.html`. Part of quirq infra ("qq"), quirq-ai's CI/CD system for
repos in any language. This repo builds the toolchains every qq build uses, publishes them,
pins them by digest, and promotes them from staging by reviewed pull request. Chromium
counterpart: CIPD packages built by 3pp, and clang's upload-then-promote flow.

[`assets/readmes/toolchains.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/toolchains.html) · code · 7040 bytes

### ui.html

HTML document `ui.html`. Quirq UI registry A shadcn registry (plus docs site) for every
Astryx component, block template and page template, built with Next.js.

[`assets/readmes/ui.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/ui.html) · code · 4300 bytes

### vangogh.html

Empty file `vangogh.html` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`assets/readmes/vangogh.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/vangogh.html) · empty · 0 bytes

### vercel-activity.html

HTML document `vercel-activity.html`. A small public site showing deployment activity for
the Vercel projects deployed from our workspace, plus an /account page with the connected
Vercel account and its domains. Which projects appear is decided by workspace.json : a
Vercel project is shown only if it is linked to one of the GitHub repos listed there. Add a
repo to that file when the workspace starts deploying it.

[`assets/readmes/vercel-activity.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/vercel-activity.html) · code · 1968 bytes

### website.html

HTML document `website.html`. quirq home base Everything quirq builds. One little space. A
desktop for the apps, experiments, tools, and open source projects in the quirq GitHub
organization . Explore a repository, read its docs, follow a project's progress, or open an
app in its own window.

[`assets/readmes/website.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/website.html) · code · 12824 bytes

### wiki.html

HTML document `wiki.html`. quirq-ai org wiki A map of what lives where across every public
repository in quirq-ai . Each public repo gets a folder here. Each source directory gets one
markdown page. File-level pages are generated, edit the generator or this README, not those
pages. This wiki repo is not documented as content (no wiki/ folder). Index · Activity ·
Sizes · generator · sync workflow Read it as a website This repository includes an.

[`assets/readmes/wiki.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/wiki.html) · code · 23754 bytes

### xo-cowork-api.html

HTML document `xo-cowork-api.html`. xo-cowork-api The local control plane for AI coding
agents. One workspace, many runtimes, Claude Code, OpenClaw, Codex, Hermes, Antigravity, and
whatever comes next.

[`assets/readmes/xo-cowork-api.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/xo-cowork-api.html) · code · 27144 bytes

### xo-space.html

HTML document `xo-space.html`. XO Space Build, observe and measure agentic work, locally,
across every coding agent you use. One environment for Claude Code, Codex, OpenClaw, Hermes
and Antigravity. Every project, session, todo and cost on one screen. Measure output, not
just tokens. Quick start · Capabilities · Supported agents · How it works · Docs ·
Contributing.

[`assets/readmes/xo-space.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/xo-space.html) · code · 35369 bytes

### xo.html

HTML document `xo.html`. xo is the command line for the XO Cloud core API. Every endpoint is
a command, and xo sends your XO API key on each request without ever printing it. It follows
the shape of quirq's own tools ( qq fetch , qqsync ): one Python package, one argparse
command, standard library only, Apache-2.0. Unlike them the command is plain xo . Install
For a step-by-step setup on your own Mac or Linux machine, see docs/quickstart.md.

[`assets/readmes/xo.html`](https://github.com/quirq-ai/quirq-orbit/blob/main/assets/readmes/xo.html) · code · 24595 bytes

_Generated 2026-11-27 15:41 UTC from `main`._
