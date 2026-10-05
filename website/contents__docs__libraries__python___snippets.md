<!-- quirq-wiki-generated repo=website dir=contents/docs/libraries/python/_snippets -->

# website / contents/docs/libraries/python/_snippets

Source: [contents/docs/libraries/python/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/libraries/python/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capture.mdx

Markdown document `capture.mdx`. posthog.capture("movie_played", distinct_id="distinct_id",
properties={ "movie_id": "123", "category": "romcom", }) MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/libraries/python/_snippets/capture.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/python/_snippets/capture.mdx) · code · 133 bytes

### contexts.mdx

Markdown page “Contexts and user identification”. The Python SDK uses nested contexts for
managing state that's shared across events. Contexts are the recommended way to manage
things like "which user is taking this action" (through identify_context), rather than
manually passing user state through your apps stack. MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/libraries/python/_snippets/contexts.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/python/_snippets/contexts.mdx) · code · 6615 bytes

### django-context-middleware.mdx

Markdown page “Basic setup”. The Python SDK provides a Django middleware that automatically
wraps all requests with a [context](/docs/libraries/python#contexts). This middleware
extracts session and user information from each request and tags all events captured during
that request with relevant metadata. MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/libraries/python/_snippets/django-context-middleware.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/python/_snippets/django-context-middleware.mdx) · code · 6059 bytes

### python-fastapi-exception-autocapture.mdx

Markdown document `python-fastapi-exception-autocapture.mdx`. from fastapi.responses import
JSONResponse from posthog import Posthog MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`contents/docs/libraries/python/_snippets/python-fastapi-exception-autocapture.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/python/_snippets/python-fastapi-exception-autocapture.mdx) · code · 344 bytes

### python-flask-exception-autocapture.mdx

Markdown document `python-flask-exception-autocapture.mdx`. from flask import Flask, jsonify
from posthog import Posthog MDX page (Markdown with JSX components), typically rendered by
the docs site.

[`contents/docs/libraries/python/_snippets/python-flask-exception-autocapture.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/libraries/python/_snippets/python-flask-exception-autocapture.mdx) · code · 628 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
