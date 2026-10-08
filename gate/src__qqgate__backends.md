<!-- quirq-wiki-generated repo=gate dir=src/qqgate/backends -->

# gate / src/qqgate/backends

Source: [src/qqgate/backends](https://github.com/quirq-ai/gate/tree/main/src/qqgate/backends) in [gate](https://github.com/quirq-ai/gate).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Backend-specific gate code, one module per backend named in infra-config (org.toml
[[backend]]). Functions: `load`.

[`src/qqgate/backends/__init__.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/backends/__init__.py) · code · 1007 bytes

### github.py

GitHub backend: required checks are GitHub Actions jobs; the rule is a repository ruleset.
Classes: `_NoRedirect`. Functions: `generated_workflow`, `generated_jobs`, `workflow_path`,
`check_workflows`, `required_checks_rule`, `rulesets`, `org_ruleset`, `plan_org`, and 8
more.

[`src/qqgate/backends/github.py`](https://github.com/quirq-ai/gate/blob/main/src/qqgate/backends/github.py) · code · 28490 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
