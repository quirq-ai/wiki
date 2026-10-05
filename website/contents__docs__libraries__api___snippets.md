<!-- quirq-wiki-generated repo=website dir=contents/docs/libraries/api/_snippets -->

# website / contents/docs/libraries/api/_snippets

Source: [contents/docs/libraries/api/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/libraries/api/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capture.mdx

Markdown document `capture.mdx`. POST https://[your-instance].com/i/v0/e/ Content-Type:
application/json Body: { "api_key": "", "batch": [ { "event": "event_name", "properties": {
"distinct_id": "distinct_id_of_your_user", "key1": "value1", "key2": "value2" },
"timestamp": "[optional timestamp in ISO 8601 format]" }, ... ] } MDX page (Markdown with
JSX components), typically rendered by the docs site.

[`contents/docs/libraries/api/_snippets/capture.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/api/_snippets/capture.mdx) · code · 456 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
