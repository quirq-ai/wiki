<!-- quirq-wiki-generated repo=test-pipelines dir=tools -->

# test-pipelines / tools

Source: [tools](https://github.com/quirq-ai/test-pipelines/tree/main/tools) in [test-pipelines](https://github.com/quirq-ai/test-pipelines).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### planted_demo.sh

V0-TST-03 done-when, end to end with a real test runner: a planted failure that also fails
on base does not block, while a change that breaks a test (through the test or through the
code under test) does. Builds throwaway git repos, runs their tests, then lets qqresults
sink --rerun ... --fail-on-verdict decide. A last case uses Rust's libtest (AUDIT-R5 N1):
one fixed failure type must not exonerate.

[`tools/planted_demo.sh`](https://github.com/quirq-ai/test-pipelines/blob/main/tools/planted_demo.sh) · code · 5602 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
