<!-- quirq-wiki-generated repo=xo-space dir=tests/fixtures/quirq-state/connections/gmail -->

# xo-space / tests/fixtures/quirq-state/connections/gmail

Source: [tests/fixtures/quirq-state/connections/gmail](https://github.com/quirq-ai/xo-space/tree/main/tests/fixtures/quirq-state/connections/gmail) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### config.json

JSON configuration file `config.json` with top-level keys `schema`, `toolkit`, `enabled`,
`interval_s`, `collectors`. Used at runtime or during the build rather than as library
source.

[`tests/fixtures/quirq-state/connections/gmail/config.json`](https://github.com/quirq-ai/xo-space/blob/main/tests/fixtures/quirq-state/connections/gmail/config.json) · code · 116 bytes

### events.jsonl

Jsonl file `events.jsonl`. {"ts": "2026-01-01T09:14:00Z", "type": "unread", "key": "msg-
example-1", "title": "Welcome to sample-project", "body": "someone@example.com", "url":
"https://mail.google.com/mail/u/0/#inbox/msg-example-1", "toolkit": "gmail"}.

[`tests/fixtures/quirq-state/connections/gmail/events.jsonl`](https://github.com/quirq-ai/xo-space/blob/main/tests/fixtures/quirq-state/connections/gmail/events.jsonl) · code · 226 bytes

### state.json

JSON document `state.json` whose top-level keys are `schema`, `last_poll_at`, `last_ok_at`,
`last_error`, `cursors`, `events_total`. Structured data consumed by the surrounding app or
tooling.

[`tests/fixtures/quirq-state/connections/gmail/state.json`](https://github.com/quirq-ai/xo-space/blob/main/tests/fixtures/quirq-state/connections/gmail/state.json) · code · 233 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
