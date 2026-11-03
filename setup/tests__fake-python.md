<!-- quirq-wiki-generated repo=setup dir=tests/fake-python -->

# setup / tests/fake-python

Source: [tests/fake-python](https://github.com/quirq-ai/setup/tree/main/tests/fake-python) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### python3

Extensionless file `python3`. A stand-in for Python in step 3's tests (QQ_PYTHON): it
answers the few commands cli/policy-write.mjs runs, the way the real tools change files,
without Python or the network. --version prints Python 3.14.0 (qq-setup's preflight) -c
"...version_info..." prints True -m venv DIR makes DIR/bin/python (this script) -m pip
install .

[`tests/fake-python/python3`](https://github.com/quirq-ai/setup/blob/main/tests/fake-python/python3) · other · 4391 bytes

_Generated 2026-11-03 13:06 UTC from `main`._
