<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/connectors/github -->

# xo-space / services/cowork_agent/connectors/github

Source: [services/cowork_agent/connectors/github](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/connectors/github) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

GitHub connector.

[`services/cowork_agent/connectors/github/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/github/__init__.py) · code · 1078 bytes

### cli_auth.py

GitHub connector — gh auth login (CLI device-flow) acquisition. Classes: `_Session`.
Functions: `start_login`, `poll_login`, `connect`, `cancel_login`. Built with FastAPI.

[`services/cowork_agent/connectors/github/cli_auth.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/github/cli_auth.py) · code · 13126 bytes

### common.py

GitHub connector — shared core, common to every auth method. Functions: `get_github_token`,
`get_github_auth_method`, `save_github_token`, `delete_github_token`, `validate_token`,
`get_status`, `commit_email`, `configure_git_identity`, and 1 more.

[`services/cowork_agent/connectors/github/common.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/github/common.py) · code · 10710 bytes

### issue_actions.py

The GitHub reads a *person* triggers: fetch one issue, ask who we are. Classes:
`IssueResult`, `LoginResult`. Functions: `fetch_issue`, `authenticated_login`.

[`services/cowork_agent/connectors/github/issue_actions.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/github/issue_actions.py) · code · 6474 bytes

### issues.py

One repo's open GitHub issues, read through `gh api graphql`. Classes: `RepoRef`,
`RateLimit`, `IssuesResult`, `GhResult`. Functions: `parse_remote_url`, `parse_repo_slug`,
`query_connections`, `gh_available`, `run_graphql`, `run_rest`, `fetch_open_issues`,
`fetch_open_issues_for_remote`.

[`services/cowork_agent/connectors/github/issues.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/github/issues.py) · code · 25133 bytes

### pat.py

GitHub connector — PAT (Personal Access Token) acquisition. Functions: `looks_like_token`,
`connect`.

[`services/cowork_agent/connectors/github/pat.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/github/pat.py) · code · 1948 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
