<!-- quirq-wiki-generated repo=argus-code dir=templates/default/.claude/rules -->

# argus-code / templates/default/.claude/rules

Source: [templates/default/.claude/rules](https://github.com/quirq-ai/argus-code/tree/main/templates/default/.claude/rules) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### api-conventions.md

Markdown page “API Conventions”. - Plural nouns for resources: /users, /posts - HTTP verbs
correctly: GET (read), POST (create), PUT (replace), PATCH (update), DELETE - 200 for
success, 201 for created, 400 for bad input, 401 for unauth, 404 for not found, 500 for
server error - Always return JSON, even for errors.

[`templates/default/.claude/rules/api-conventions.md`](https://github.com/quirq-ai/argus-code/blob/main/templates/default/.claude/rules/api-conventions.md) · code · 663 bytes

### code-style.md

Markdown page “Code Style”. - Prefer explicit variable names over short ones - No magic
numbers — use named constants - Max function length: ~40 lines. If longer, split it. -
Delete dead code instead of commenting it out.

[`templates/default/.claude/rules/code-style.md`](https://github.com/quirq-ai/argus-code/blob/main/templates/default/.claude/rules/code-style.md) · code · 691 bytes

### testing.md

Markdown page “Testing”. - Every bug fix needs a test that would have caught it - Test
behavior, not implementation details - One assertion per test where possible - Test names
describe the scenario: it('returns null when user not found').

[`templates/default/.claude/rules/testing.md`](https://github.com/quirq-ai/argus-code/blob/main/templates/default/.claude/rules/testing.md) · code · 566 bytes

_Generated 2026-10-23 10:35 UTC from `main`._
