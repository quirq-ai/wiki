<!-- quirq-wiki-generated repo=gardener dir=tools -->

# gardener / tools

Source: [tools](https://github.com/quirq-ai/gardener/tree/main/tools) in [gardener](https://github.com/quirq-ai/gardener).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### plant-break.sh

Builds a throwaway git repo for the V0-GAR-02 done-when: N commits on main, where commit
BREAK breaks ./check.sh (a stand-in for a repo's build or test) and every later commit stays
broken. Prints the good (first) commit, the planted culprit and the bad (last) commit.
tools/plant-break.sh DIR [N=12] [BREAK=7] Shebang `#!/usr/bin/env bash`. Fails fast (`set
-e`).

[`tools/plant-break.sh`](https://github.com/quirq-ai/gardener/blob/main/tools/plant-break.sh) · code · 1057 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
