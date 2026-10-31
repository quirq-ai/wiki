<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/review -->

# xo-space / services/cowork_agent/storm/review

Source: [services/cowork_agent/storm/review](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/review) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm's policy and review (design ch 15, ch 16): the shell parser, the computed tiers,
rules, protected paths and the policy engine; the person's rules as stored (`rule_store);
and the review queue (queue`: items, decisions, delivery, expiry, the loop breaker, paid
usage), which reaches the engine only through `engine_link`; and the pre-turn integrity
check (`integrity, on disk; integrity_watch`, in the engine's life).

[`services/cowork_agent/storm/review/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/__init__.py) · code · 1109 bytes

### decisions.py

Checking a person's decision against its item, and what it does (design ch 15 §7; ch 17
§2.5). Classes: `ReviewRefused`, `Request`, `Plan`. Functions: `secret_ids`, `plan`.

[`services/cowork_agent/storm/review/decisions.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/decisions.py) · code · 12918 bytes

### engine_link.py

Everything the review queue asks of the engine, in one place (design ch 07 §6; the seams of
`storm/engine/ports.py`). Classes: `Asked`, `Resolved`. Functions: `boot`, `shutdown`,
`current`, `desk`, `clock`, `subscribe`, `read`, `write`, and 5 more.

[`services/cowork_agent/storm/review/engine_link.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/engine_link.py) · code · 5429 bytes

### integrity.py

The pre-turn integrity check, on disk (design ch 16 §2; owner §11.2, §0.72): what a
session's folder holds at the paths that make a CLI or git run code on their own, compared
with the session's baseline. Classes: `CheckFailed`, `Watch`, `Entry`, `Scan`, `_TooMany`,
`_Walk`, `TreeEntry`, `Change`, and 2 more. Functions: `scan`, `base_tree`,
`against_commit`, `against_snapshot`, `inspect`, `describe`.

[`services/cowork_agent/storm/review/integrity.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/integrity.py) · code · 45770 bytes

### integrity_watch.py

The integrity check in the engine's life (design ch 16 §2.3–§2.4; owner §11.2, §0.72): when
it runs, the baselines it keeps, and the report it opens. Classes: `Target`,
`IntegrityWatch`. Functions: `_never_watched`, `_late`, `_target`, `_has_baseline`,
`_baseline`, `_keep_baseline`, `_has_run`, `_reported`, and 6 more.

[`services/cowork_agent/storm/review/integrity_watch.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/integrity_watch.py) · code · 26213 bytes

### items.py

The review item: one model for every kind (design ch 15 §5; ch 08 §2). Classes: `ItemSpec`.
Functions: `fixed_options`, `expiry`, `permission_options`, `render_rule`, `view`.

[`services/cowork_agent/storm/review/items.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/items.py) · code · 10947 bytes

### loops.py

The loop breaker (design ch 15 §9; decisions §0.64): it stops a loop of asks, never
parallelism or spend. Classes: `Outcome`. Functions: `scope_of`, `count`,
`suggestion_title`.

[`services/cowork_agent/storm/review/loops.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/loops.py) · code · 2795 bytes

### options.py

Reading a command's options the way the program itself does (GNU getopt). Classes: `Spec`,
`Options`. Functions: `read_options`.

[`services/cowork_agent/storm/review/options.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/options.py) · code · 3097 bytes

### paths.py

Where a path lands, for the policy engine (design ch 15 §2.2, §4; ch 16 §2.1). Classes:
`Place`, `Places`. Functions: `cli_homes`, `declared_project_config_paths`, `glob_match`.

[`services/cowork_agent/storm/review/paths.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/paths.py) · code · 11156 bytes

### policy.py

The policy engine: what happens to an action a CLI asked about (design ch 15 §2; decisions
§0.61, §0.62, §0.75, §0.80). Classes: `SessionRef`, `Action`, `Grant`, `PolicyContext`,
`Verdict`. Functions: `action_sha256`, `request_sha256`, `decide`, `assess`.

[`services/cowork_agent/storm/review/policy.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/policy.py) · code · 10910 bytes

### queue.py

The review queue: everything only the person can settle (design ch 15 §5–§9; ch 07 §5.1, §6;
ch 11 §10). Classes: `Conversation`, `ReviewQueue`. Functions: `boot`, `shutdown`,
`current`.

[`services/cowork_agent/storm/review/queue.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/queue.py) · code · 34223 bytes

### rule_store.py

The person's rules as XO stores them (design ch 15 §3, §3.1; ch 08 §2): the `rules` rows,
and the revocations of XO's default rules. Classes: `RuleRefused`. Functions: `match_json`,
`match_of`, `widest_tier`, `project_name`, `check_match`, `create`, `by_client_id`,
`create_from_settings`, and 4 more.

[`services/cowork_agent/storm/review/rule_store.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/rule_store.py) · code · 10964 bytes

### rules.py

Rules: the person's standing answers, and XO's default rules (design ch 15 §3, §3.1;
decision §0.62). Classes: `Match`, `Rule`, `DefaultRule`. Functions: `prefix_rules_allowed`,
`scope_refusal`, `render_sentence`.

[`services/cowork_agent/storm/review/rules.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/rules.py) · code · 9710 bytes

### shell.py

A small shell parser for the policy engine (design ch 15 §2.1; decision §0.61). Classes:
`ShellRefused`, `Redirect`, `SimpleCommand`. Functions: `parse`, `canonical_command`.

[`services/cowork_agent/storm/review/shell.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/shell.py) · code · 7489 bytes

### tiers.py

"""The tier of an action, computed and never claimed (design ch 15 §2.2; ch 16 §7; R-E
§3.2). Contains tests.

[`services/cowork_agent/storm/review/tiers.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/review/tiers.py) · code · 89855 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
