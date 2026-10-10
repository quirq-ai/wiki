<!-- quirq-wiki-generated repo=perf dir=tools -->

# perf / tools

Source: [tools](https://github.com/quirq-ai/perf/tree/main/tools) in [perf](https://github.com/quirq-ai/perf).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### bench_commit.sh

Run one benchmark on each given commit through recipes' bench capability and record it
(V0-PRF-01). Shebang `#!/usr/bin/env bash`. Fails fast (`set -e`).

[`tools/bench_commit.sh`](https://github.com/quirq-ai/perf/blob/main/tools/bench_commit.sh) · code · 2349 bytes

### build_commits.sh

Build each given commit of a Next.js repo through recipes' node-app adapter and record its
size. Shebang `#!/usr/bin/env bash`. Fails fast (`set -e`).

[`tools/build_commits.sh`](https://github.com/quirq-ai/perf/blob/main/tools/build_commits.sh) · code · 1854 bytes

### qqperf

Extensionless file `qqperf`. Run qqperf from this checkout's source on the system python3,
with nothing installed: the trusted jobs (perf.yml's store and perf-publish.yml) use it so
that no build backend, package index or Python download runs in them. qqperf needs only the
standard library (Python 3.11 or later); bundle also needs qqresults on PYTHONPATH. -P keeps
the working directory off sys.path.

[`tools/qqperf`](https://github.com/quirq-ai/perf/blob/main/tools/qqperf) · other · 512 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
