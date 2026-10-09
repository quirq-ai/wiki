<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/connectors/vercel -->

# xo-space / services/cowork_agent/connectors/vercel

Source: [services/cowork_agent/connectors/vercel](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/connectors/vercel) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Vercel connector.

[`services/cowork_agent/connectors/vercel/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/vercel/__init__.py) · code · 1262 bytes

### api.py

Vercel REST API client. Classes: `TokenCheck`. Functions: `whoami`.

[`services/cowork_agent/connectors/vercel/api.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/vercel/api.py) · code · 1948 bytes

### connector.py

Vercel connection state, persistence, and flow orchestration. Classes: `Connection`,
`Authorization`. Functions: `default_redirect_uri`, `needs_auth`, `connect_with_api_token`,
`start_authorization`, `complete_authorization`, `get_access_token`, `get_status`,
`disconnect`.

[`services/cowork_agent/connectors/vercel/connector.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/vercel/connector.py) · code · 14431 bytes

### oauth.py

Vercel authorization server client (Sign in with Vercel: OAuth 2.1 + OIDC). Classes:
`VercelOAuthError`, `TokenSet`, `Identity`, `PendingAuth`. Functions: `new_pkce_pair`,
`new_state`, `fetch_discovery`, `register_client`, `build_authorize_url`, `exchange_code`,
`refresh_tokens`, `revoke_token`, and 2 more.

[`services/cowork_agent/connectors/vercel/oauth.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/vercel/oauth.py) · code · 9306 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
