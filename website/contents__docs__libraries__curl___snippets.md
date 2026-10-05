<!-- quirq-wiki-generated repo=website dir=contents/docs/libraries/curl/_snippets -->

# website / contents/docs/libraries/curl/_snippets

Source: [contents/docs/libraries/curl/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/libraries/curl/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capture.mdx

Markdown document `capture.mdx`. curl -v -L --header "Content-Type: application/json" -d '{
"api_key": "", "properties": {}, "timestamp": "2020-08-16 09:03:11.913767", "context": {},
"distinct_id": "1234", "type": "capture", "event": "$event", "messageId": "1234" }' /batch/
MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/libraries/curl/_snippets/capture.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/curl/_snippets/capture.mdx) · code · 323 bytes

### identify.mdx

Markdown document `identify.mdx`. curl -v -L --header "Content-Type: application/json" -d '{
"api_key": "", "timestamp": "2020-08-16 09:03:11.913767", "context": {}, "type": "screen",
"distinct_id": "1234", "$set": {}, "event": "$identify", "messageId": "123" }' /batch/ MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/libraries/curl/_snippets/identify.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/curl/_snippets/identify.mdx) · code · 318 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
