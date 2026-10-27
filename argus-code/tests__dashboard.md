<!-- quirq-wiki-generated repo=argus-code dir=tests/dashboard -->

# argus-code / tests/dashboard

Source: [tests/dashboard](https://github.com/quirq-ai/argus-code/tree/main/tests/dashboard) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/dashboard/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/dashboard/__init__.py) · empty · 0 bytes

### test_no_raw_html.py

React escapes text by default; the one way to reintroduce stored XSS from .jsonl-derived
strings (model names, paths, tool names, snippets) is `dangerouslySetInnerHTML or a raw
innerHTML` write. Functions: `test_source_tree_is_present`, `test_no_raw_html_sinks`.
Contains tests.

[`tests/dashboard/test_no_raw_html.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/dashboard/test_no_raw_html.py) · code · 1490 bytes

_Generated 2026-10-27 11:08 UTC from `main`._
