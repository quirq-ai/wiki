<!-- quirq-wiki-generated repo=recipes dir=examples/python-service -->

# recipes / examples/python-service

Source: [examples/python-service](https://github.com/quirq-ai/recipes/tree/main/examples/python-service) in [recipes](https://github.com/quirq-ai/recipes).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### greet.py

The example service's one piece of logic: build a greeting from a name taken from a request.
Functions: `greeting`.

[`examples/python-service/greet.py`](https://github.com/quirq-ai/recipes/blob/main/examples/python-service/greet.py) · code · 211 bytes

### requirements-dev.txt

Txt file `requirements-dev.txt`. pytest==9.1.1 hypothesis==6.168.3.

[`examples/python-service/requirements-dev.txt`](https://github.com/quirq-ai/recipes/blob/main/examples/python-service/requirements-dev.txt) · code · 34 bytes

### requirements.txt

Txt file `requirements.txt`. No runtime dependencies: the standard library is enough.

[`examples/python-service/requirements.txt`](https://github.com/quirq-ai/recipes/blob/main/examples/python-service/requirements.txt) · code · 59 bytes

### server.py

A tiny HTTP service: GET /health and GET /greet?name=... Runnable as a script via `if
__name__ == '__main__'`. Classes: `Handler`.

[`examples/python-service/server.py`](https://github.com/quirq-ai/recipes/blob/main/examples/python-service/server.py) · code · 979 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
