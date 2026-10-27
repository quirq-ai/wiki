<!-- quirq-wiki-generated repo=xo-space dir=services/decision_models -->

# xo-space / services/decision_models

Source: [services/decision_models](https://github.com/quirq-ai/xo-space/tree/main/services/decision_models) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Decision models behind one interface: Levanto Sage and TypeSafe Jev. Classes: `Choice`,
`Tags`, `Answer`, `Result`. Functions: `applies_from`, `provider_module`, `ask`.

[`services/decision_models/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/decision_models/__init__.py) · code · 3536 bytes

### jev.py

TypeSafe Jev through its SystemOne endpoint (`POST /v1/systemone`). Functions:
`request_body`, `parse`, `ask`.

[`services/decision_models/jev.py`](https://github.com/quirq-ai/xo-space/blob/main/services/decision_models/jev.py) · code · 4151 bytes

### keys.py

Decision-model API keys: `/secrets/router.env` (design §0.81, ch 17 §2.6). Functions:
`path`, `read`, `write`.

[`services/decision_models/keys.py`](https://github.com/quirq-ai/xo-space/blob/main/services/decision_models/keys.py) · code · 1803 bytes

### sage.py

Levanto Sage through its `/decide` endpoint (native choice and tags). Functions: `ask`.

[`services/decision_models/sage.py`](https://github.com/quirq-ai/xo-space/blob/main/services/decision_models/sage.py) · code · 2792 bytes

_Generated 2026-10-27 11:09 UTC from `main`._
