<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/chats -->

# xo-space / services/cowork_agent/storm/chats

Source: [services/cowork_agent/storm/chats](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/chats) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Chats and threads: the conversation layer on the engine and the store (design ch 11).
Classes: `ChatRefused`, `Chats`. Functions: `live_coordinator`, `project_folders`,
`valid_project_name`, `project_pid`, `describe_project`, `pid_keys`, `read_catalog`,
`check_pin`, and 5 more.

[`services/cowork_agent/storm/chats/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/__init__.py) · code · 35204 bytes

### attachments.py

Files the owner attaches to a message (hub #30). Classes: `AttachmentRefused`, `Upload`.
Functions: `chat_folder`, `attachments_root`, `path_of`, `clean_name`, `public`, `lookup`,
`open_file`, `read_chunks`, and 9 more.

[`services/cowork_agent/storm/chats/attachments.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/attachments.py) · code · 19917 bytes

### cards.py

A thread's status card, rule-based (design ch 11 §7.3; the PoC's rules, D58, with the UI
audit's two fixes). Functions: `card`, `thread_state`.

[`services/cowork_agent/storm/chats/cards.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/cards.py) · code · 2473 bytes

### conversation.py

The conversation's part of a review item (design ch 15 §5.2, ch 11 §10, §16): the review
queue's `Conversation`. Classes: `Conversation`. Functions: `_owner_asked`, `_thread_of`.

[`services/cowork_agent/storm/chats/conversation.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/conversation.py) · code · 9076 bytes

### delivery.py

Delivering the person's message (design ch 11 §2, §3, §7.4; sedc 09 #12). Functions: `post`,
`to_coordinator`, `as_coordinator`, `recover`, `hand_over`.

[`services/cowork_agent/storm/chats/delivery.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/delivery.py) · code · 19604 bytes

### envelope.py

What an agent is handed as a turn's input: ```, ``` Functions: `escape_text`, `escape_attr`,
`attachment_tags`, `message_tag`, `wake`, `relay`, `review_answered`, `schedule`, and 1
more.

[`services/cowork_agent/storm/chats/envelope.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/envelope.py) · code · 11067 bytes

### lifecycle.py

What the conversation does when its sessions move (design ch 11 §5, §6.2, §7.3, §16.2): an
engine `Listener` that hears the store's commits and the runtime's `SessionIdle`, and acts
on them in tasks it owns, one session at a time. Classes: `Lifecycle`. Functions: `_input`,
`_ended`, `_decisions`, `_answers`, `_status`, `_decided`.

[`services/cowork_agent/storm/chats/lifecycle.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/lifecycle.py) · code · 19450 bytes

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

Keeping a coordinator usable forever: retire an incarnation between inputs and start its
successor from a ```` (design ch 11 §6.2; the PoC's `recycle.py`, D51; thresholds are
constants, sedc 09 #15). Classes: `Busy`. Functions: `input_ended`, `reason`,
`handoff_parts`, `succeed`.

[`services/cowork_agent/storm/chats/recycle.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/recycle.py) · code · 6953 bytes

### router.py

The router: who decides where the person's message on a timeline goes (design ch 11 §3,
§14.1–§14.4, §14.7; §0.47–§0.52). Classes: `RouterRefused`. Functions: `read_setting`,
`write_setting`, `space_router`, `chat_override`, `effective`, `check`, `get`, `put`, and 15
more.

[`services/cowork_agent/storm/chats/router.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/router.py) · code · 20743 bytes

### rows.py

The conversation's rows (design ch 08 §2, ch 11, ch 11 §16.2): chats, messages, threads and
hops, each written with its event in the caller's transaction (`Writes`), and read as the
routes and the tools show them. Functions: `new_id`, `chat_view`, `get_chat`,
`workspace_chat`, `project_chat`, `retire_project_chat`, `message_view`, `get_message`, and
15 more.

[`services/cowork_agent/storm/chats/rows.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/rows.py) · code · 19234 bytes

### views.py

What the `/api/chat/chats*` routes show and change (design ch 17 §2.2; ch 10 §3.3; ch 11
§3.1, §7.4, §8, §16.2). Functions: `list_chats`, `get_chat`, `update_chat`, `messages`,
`hops`, `memory_files`, `memory_file`, `list_threads`, and 2 more.

[`services/cowork_agent/storm/chats/views.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/chats/views.py) · code · 12237 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
