<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/chats -->

# xo-space / services/cowork_agent/storm/chats

Source: [services/cowork_agent/storm/chats](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/chats) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Chats and threads: the conversation layer on the engine and the store (design ch 11).
Classes: `ChatRefused`, `Chats`. Functions: `live_coordinator`, `project_folders`,
`valid_project_name`, `project_pid`, `describe_project`, `pid_keys`, `read_catalog`,
`check_pin`, and 5 more.

[`services/cowork_agent/storm/chats/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/__init__.py) · code · 39232 bytes

### attachments.py

Files the owner attaches to a message (hub #30). Classes: `AttachmentRefused`, `Upload`.
Functions: `chat_folder`, `attachments_root`, `path_of`, `clean_name`, `public`, `lookup`,
`open_file`, `read_chunks`, and 9 more.

[`services/cowork_agent/storm/chats/attachments.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/attachments.py) · code · 20485 bytes

### authority.py

Telling the founder when an agent claimed their authority and XO refused it (the plan's W8):
a citation of a founder message that isn't one, or XO's own message tags in an agent's
output (`storm/authority`). Classes: `Reporter`. Functions: `flag`.

[`services/cowork_agent/storm/chats/authority.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/authority.py) · code · 3853 bytes

### cards.py

A thread's status card, rule-based (design ch 11 §7.3; the PoC's rules, D58, with the UI
audit's two fixes). Functions: `card`.

[`services/cowork_agent/storm/chats/cards.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/cards.py) · code · 2171 bytes

### catchup.py

What a person catching up on a chat reads (v2): what happened in its threads and when, and
when they last looked. Functions: `event_view`, `thread_events`, `seen`, `set_seen`.

[`services/cowork_agent/storm/chats/catchup.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/catchup.py) · code · 5451 bytes

### continuation.py

Continue a thread's work in a new thread, on another runtime (mixed-runtime plan, step 9).
Classes: `ContinueRefused`. Functions: `continued_to`, `continue_thread`.

[`services/cowork_agent/storm/chats/continuation.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/continuation.py) · code · 13456 bytes

### conversation.py

The conversation's part of a review item (design ch 15 §5.2, ch 11 §10, §16): the review
queue's `Conversation`. Classes: `Conversation`. Functions: `_thread_of`.

[`services/cowork_agent/storm/chats/conversation.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/conversation.py) · code · 6288 bytes

### delivery.py

Delivering the person's message (design ch 11 §2, §3, §7.4; sedc 09 #12). Functions: `post`,
`to_coordinator`, `as_coordinator`, `recover`, `hand_over`.

[`services/cowork_agent/storm/chats/delivery.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/delivery.py) · code · 21389 bytes

### digest.py

What a project coordinator no longer hears through wakes, read at the top of its next real
turn (w5-w7-design W5, "Wakes that go away"). Classes: `SinceLastTurn`. Functions: `_lines`,
`_named`.

[`services/cowork_agent/storm/chats/digest.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/digest.py) · code · 5994 bytes

### envelope.py

What an agent is handed as a turn's input: ```, ``` Functions: `goal_wake`, `escape_text`,
`escape_attr`, `attachment_tags`, `message_tag`, `wake`, `relay`, `review_answered`, and 3
more.

[`services/cowork_agent/storm/chats/envelope.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/envelope.py) · code · 16690 bytes

### keeper.py

The goal keeper (the plan's W6): while a goal is before its end time and nothing is running,
queued or waiting on a timer for its chat, it wakes the chat's coordinator once with the
goal's state. Classes: `GoalKeeper`. Functions: `progress`, `busy`, `reconcile`.

[`services/cowork_agent/storm/chats/keeper.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/keeper.py) · code · 10411 bytes

### lifecycle.py

What the conversation does when its sessions move (design ch 11 §5, §6.2, §7.3, §16.2): an
engine `Listener` that hears the store's commits and the runtime's `SessionIdle`, and acts
on them in tasks it owns, one session at a time. Classes: `Lifecycle`. Functions: `_input`,
`_ended`, `_decisions`, `_settle_asks`, `_answers`, `_hands_on`, `_status`, `_decided`.

[`services/cowork_agent/storm/chats/lifecycle.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/lifecycle.py) · code · 21198 bytes

### limits.py

The usage-limit card (mixed-runtime plan, step 8): when a runtime's pool closes on its limit
while threads wait on it, XO asks the owner once per pool, not once per thread: wait for the
reset, or continue those threads on another runtime. Classes: `LimitCards`. Functions:
`waiting_threads`, `open_card`.

[`services/cowork_agent/storm/chats/limits.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/limits.py) · code · 6576 bytes

### memory.py

A chat's memory: what a coordinator learned that must outlive its incarnation (design ch 11
§8; the PoC's D53). Classes: `MemoryRefused`. Functions: `folder`, `version_of`,
`check_path`, `read`, `list_files`, `write`.

[`services/cowork_agent/storm/chats/memory.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/memory.py) · code · 4833 bytes

### projects.py

Projects coming into the workspace (design ch 11 §9; requirement R3). Functions: `sync`,
`create`.

[`services/cowork_agent/storm/chats/projects.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/projects.py) · code · 7192 bytes

### recycle.py

Replacing a coordinator (w5-w7-design W7; the plan's decision 4 and C): only when its
context is full, when an XO upgrade changed its role (its tools or prompt: `upgrade`), or
when the founder switched its chat's agent (`agent_switch`). Classes: `Busy`, `Replacement`.
Functions: `is_coordinator`, `input_ended`, `replace_at`, `nearly_full`, `context_full`,
`reason`, `succeed`, `keep_note`, and 1 more.

[`services/cowork_agent/storm/chats/recycle.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/recycle.py) · code · 16939 bytes

### router.py

The router: who decides where the person's message on a timeline goes (design ch 11 §3,
§14.1–§14.4, §14.7; §0.47–§0.52). Classes: `RouterRefused`. Functions: `action_of`,
`read_setting`, `write_setting`, `space_router`, `chat_override`, `effective`, `check`,
`get`, and 16 more.

[`services/cowork_agent/storm/chats/router.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/router.py) · code · 21075 bytes

### rows.py

The conversation's rows (design ch 08 §2, ch 11, ch 11 §16.2): chats, messages, threads and
hops, each written with its event in the caller's transaction (`Writes`), and read as the
routes and the tools show them. Functions: `new_id`, `chat_view`, `get_chat`,
`workspace_chat`, `project_chat`, `retire_project_chat`, `message_view`, `get_message`, and
16 more.

[`services/cowork_agent/storm/chats/rows.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/rows.py) · code · 20136 bytes

### shape.py

The person's own layer of the UI's shape (xo-coworker `js/shape.js`): one small JSON
document, kept in the store so it follows the person to every device. Classes:
`ShapeRefused`. Functions: `version`, `get`, `put`.

[`services/cowork_agent/storm/chats/shape.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/shape.py) · code · 3358 bytes

### shared.py

Files an agent shares, as a message carries them (inline media). Classes: `LateShares`.
Functions: `describe`, `extra_for`, `attach_late`.

[`services/cowork_agent/storm/chats/shared.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/shared.py) · code · 6608 bytes

### summaries.py

A thread's one-sentence summary (v2): what it did, in the past tense, 90 characters at most,
for a person catching up ("Since you left"). Classes: `Summaries`, `_Launcher`. Functions:
`clean`.

[`services/cowork_agent/storm/chats/summaries.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/summaries.py) · code · 12933 bytes

### thread_status.py

A thread's state, derived from the store's records as they are now and never saved as a
label (the plan's W6; record design v2 §4). Classes: `Publisher`. Functions: `read`.

[`services/cowork_agent/storm/chats/thread_status.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/thread_status.py) · code · 12565 bytes

### views.py

What the `/api/chat/chats*` routes show and change (design ch 17 §2.2; ch 10 §3.3; ch 11
§3.1, §7.4, §8, §16.2). Functions: `list_chats`, `get_chat`, `update_chat`, `messages`,
`hops`, `memory_files`, `memory_file`, `list_threads`, and 2 more.

[`services/cowork_agent/storm/chats/views.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/views.py) · code · 13222 bytes

### work.py

A chat's work as it stands, for the founder's panel (the plan's W6, "your panel's data"):
its goals that haven't ended, with each one's pause or stall reason; every task still open
or stopped, and every task of those goals; the timers and jobs armed in it; and the leases
its sessions hold. Functions: `snapshot`, `reports`.

[`services/cowork_agent/storm/chats/work.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/work.py) · code · 3683 bytes

_Generated 2026-11-25 16:16 UTC from `main`._
