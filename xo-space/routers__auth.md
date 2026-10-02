<!-- quirq-wiki-generated repo=xo-space dir=routers/auth -->

# xo-space / routers/auth

Source: [routers/auth](https://github.com/quirq-ai/xo-space/tree/main/routers/auth) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Identity + provider setup-token flows: Clerk-backed xo-auth (auth.py) and the per-provider
setup endpoints (claude_setup_token, codex_setup).

[`routers/auth/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/auth/__init__.py) · code · 148 bytes

### auth.py

Auth router and auth-state helpers for XO Space API. Defines the `router` application
object. HTTP routes: `POST /start`, `GET /status/{auth_session_id}`, `POST /consume`, `GET
/whoami`, `GET /state`, `POST /logout`. Classes: `XOAuthStartRequest`,
`XOAuthConsumeRequest`.

[`routers/auth/auth.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/auth/auth.py) · code · 8531 bytes

### claude_setup_token.py

Connect Claude — drive `claude auth login --claudeai` and stream its output via SSE. Defines
the `router` application object. HTTP routes: `POST /connect/claude-code/callback`, `POST
/claude/setup-token/callback`, `POST /connect/claude-code`, `POST /claude/setup-token`,
`DELETE /connect/claude-code`, `DELETE /claude/setup-token`. Classes:
`ClaudeSetupTokenCallbackBody`.

[`routers/auth/claude_setup_token.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/auth/claude_setup_token.py) · code · 50023 bytes

### codex_setup.py

OpenAI Codex CLI device-code login. Defines the `router` application object. HTTP routes:
`POST /connect/codex`, `POST /codex/setup`. Functions: `codex_setup`. Built with FastAPI.

[`routers/auth/codex_setup.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/auth/codex_setup.py) · code · 39047 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
