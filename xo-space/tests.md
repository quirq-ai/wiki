<!-- quirq-wiki-generated repo=xo-space dir=tests -->

# xo-space / tests

Source: [tests](https://github.com/quirq-ai/xo-space/tree/main/tests) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

XO Cowork API tests.

[`tests/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/__init__.py) · code · 205 bytes

### chat_today_probe.py

Today's `/api/chat` for agents without a storm runtime, as a client sees it through
`server.app` (H4, ch 17 §5; sedc 09 #6): the prompt's answer, the stream's bytes, a
reconnect's, abort, and what each agent's chat code was handed. Runnable as a script via `if
__name__ == '__main__'`. Functions: `observe`, `main`. Contains tests.

[`tests/chat_today_probe.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/chat_today_probe.py) · code · 8915 bytes

### doctor_sandbox.py

A healthy Space built from the two golden samples, for xo-doctor tests. Classes:
`DoctorSandbox`. Functions: `snapshot`. Contains tests.

[`tests/doctor_sandbox.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/doctor_sandbox.py) · code · 4183 bytes

### frozen_probe.py

What the frozen-surface test reads in one agent's sealed interpreter (storm ch 17 §4; sedc
04 §5): every frozen route answered through `server.app` (without its lifespan), the daily
usage report as it would be sent, the provider-key and secrets writes over fake values, and
observation over one session row in today's `/api/chat` shape. Runnable as a script via `if
__name__ == '__main__'`. Functions: `main`. Contains tests.

[`tests/frozen_probe.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/frozen_probe.py) · code · 12491 bytes

### frozen_sandbox.py

A sealed machine for the frozen-surface tests (storm ch 05 §6, ch 06 §2). Classes:
`Sandbox`. Functions: `agents`, `scrub_env`.

[`tests/frozen_sandbox.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/frozen_sandbox.py) · code · 5000 bytes

### install_sh_harness.sh

tests/install_sh_harness.sh — exercises install.sh's resolve_repo_dir, fetch_repo and
print_restart_hint in isolation. Shebang `#!/usr/bin/env bash`. Functions: `ok`, `bad`,
`check`, `detect`, `run`, `err`, `expect_stop`, `commit_installer`, `add_acl`, `fetch`, and
3 more.

[`tests/install_sh_harness.sh`](https://github.com/quirq-ai/xo-space/blob/main/tests/install_sh_harness.sh) · code · 20553 bytes

### required_tools.py

The external tools the repo-wide checks shell out to (bash, git, node). Functions:
`clean_env`, `require_tools`. Contains tests.

[`tests/required_tools.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/required_tools.py) · code · 3049 bytes

### storm_comms_kit.py

Storm's conversation layer on the fake claude CLI: the engine, the review queue with the
conversation's hooks, the chats and the jobs (the scheduler's agent runner, in the kit's
state root), and storm's routes served by a real server on a free loopback port, so a fake
CLI calls `xo_comms` over HTTP exactly as the real one does (`tests/fakes mcp` step).
Classes: `Commits`, `CommsTestCase`. Functions: `app`. Built with FastAPI. Contains tests.

[`tests/storm_comms_kit.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/storm_comms_kit.py) · code · 8531 bytes

### storm_engine_kit.py

A storm engine on the fake claude CLI, in a temp state root, home and projects root, with a
manual clock (no real sleeps for timers) and a memory reader the test controls. Classes:
`ManualClock`, `Recorder`, `Desk`, `Kit`. Functions: `message`. Contains tests.

[`tests/storm_engine_kit.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/storm_engine_kit.py) · code · 14260 bytes

### storm_review_kit.py

The review queue on an engine on the fake claude CLI, with its routes served in the engine's
own event loop (`tests/storm_engine_kit.py`). Classes: `ReviewTestCase`. Functions: `app`.
Built with FastAPI. Contains tests.

[`tests/storm_review_kit.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/storm_review_kit.py) · code · 3591 bytes

### storm_stream_kit.py

A client of storm's stream, for tests: it folds frames into blocks by the rules every UI
follows (ch 09 §3, §5), so a test can compare what a person would see live, after a
reconnect, and in history. Classes: `Client`. Functions: `parse_sse`, `place`, `follow`,
`replayed`.

[`tests/storm_stream_kit.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/storm_stream_kit.py) · code · 7431 bytes

### storm_worktrees_kit.py

Real git repositories in a temp folder for storm's worktree tests (git is not an agent CLI).
Functions: `git_env`, `sh`, `repo`, `head`, `branches`, `worktree_paths`. Contains tests.

[`tests/storm_worktrees_kit.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/storm_worktrees_kit.py) · code · 1915 bytes

### test_activity_state.py

Python module `test_activity_state.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `ActivityStateTests`. Contains tests.

[`tests/test_activity_state.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_activity_state.py) · code · 5986 bytes

### test_adapter_chat_default.py

An adapter whose agent chats on a storm runtime has no chat of its own (storm PR 19; sedc 09
#5): it still constructs (`/providers/status` and the runtime build `ClaudeCodeAdapter({})),
its run and stream` refuse, and `chats()` says so from the class alone. Runnable as a script
via `if __name__ == '__main__'`. Classes: `NoChat`, `Chats`, `DefaultChatTests`. Contains
tests.

[`tests/test_adapter_chat_default.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_adapter_chat_default.py) · code · 1704 bytes

### test_agent_env.py

Python module `test_agent_env.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `AgentEnvTests`. Contains tests.

[`tests/test_agent_env.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_agent_env.py) · code · 2339 bytes

### test_background.py

services/background.py: records, never raises, never leaks secrets. Runnable as a script via
`if __name__ == '__main__'`. Classes: `_Loop`, `RecordTests`, `SnapshotCopyTest`,
`RedactTests`. Contains tests.

[`tests/test_background.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_background.py) · code · 5189 bytes

### test_background_wiring.py

The watcher records its ticks and step failures; server.py registers every long-running
task. Runnable as a script via `if __name__ == '__main__'`. Classes: `WatcherRecordsTests`,
`ServerRegistersTasksTests`. Contains tests.

[`tests/test_background_wiring.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_background_wiring.py) · code · 5019 bytes

### test_branding.py

Workspace branding persists validated changes without touching real state. Runnable as a
script via `if __name__ == '__main__'`. Classes: `BrandingTests`. Functions: `image_bytes`.
Built with FastAPI. Contains tests.

[`tests/test_branding.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_branding.py) · code · 13234 bytes

### test_browser_guard.py

server.py wiring that routers/browser_guard.py depends on. Runnable as a script via `if
__name__ == '__main__'`. HTTP routes: `GET /api/anything`. Classes:
`ServerForwardingWiringTests`, `BrowserWriteGuardTests`, `ListenAddressDefaultTests`. Built
with FastAPI. Contains tests.

[`tests/test_browser_guard.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_browser_guard.py) · code · 9877 bytes

### test_chat_without_runtime.py

H4 (ch 17 §5; sedc 09 #6): an agent without a storm runtime chats exactly as it did before
the chat API switch. Runnable as a script via `if __name__ == '__main__'`. Classes:
`ChatWithoutRuntimeTests`. Contains tests.

[`tests/test_chat_without_runtime.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_chat_without_runtime.py) · code · 2261 bytes

### test_checkout_hygiene.py

What the checkout itself may carry, so data files cannot steer the suite. Runnable as a
script via `if __name__ == '__main__'`. Classes: `CheckoutHygiene`. Functions:
`is_env_file`. Contains tests.

[`tests/test_checkout_hygiene.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_checkout_hygiene.py) · code · 3110 bytes

### test_claude_project_encoding.py

Claude Code's transcript-folder encoding, and observation finding sessions whose working
directory holds `. Runnable as a script via `if __name__ == '__main__'`. Classes:
`EncodePathTests`, `_Tree`, `NativeFileTests`, `DiscoveryTests`, `ProjectIdTests`. Contains
tests.

[`tests/test_claude_project_encoding.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_claude_project_encoding.py) · code · 4810 bytes

### test_claude_runtime.py

The claude_code runtime against its fake CLI (storm ch 02; ch 18 §2 PR 6). Classes:
`CommandLineTests`, `CheckAndFeaturesTests`, `BinaryTests`, `EnvTests`, `FakeClaude`,
`SessionTests`, `AccountTests`. Functions: `files_for`, `argv_for`. Contains tests.

[`tests/test_claude_runtime.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_claude_runtime.py) · code · 112274 bytes

### test_codex_plugin_package.py

The marketplace must install a complete, relocatable Codex plugin bundle. Runnable as a
script via `if __name__ == '__main__'`. Classes: `CodexPluginPackageTests`. Contains tests.

[`tests/test_codex_plugin_package.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_codex_plugin_package.py) · code · 4095 bytes

### test_codex_plugin_runtime.py

Exercise the shipped plugin launcher without network, login or a live server. Runnable as a
script via `if __name__ == '__main__'`. Classes: `CodexPluginRuntimeTests`. Contains tests.

[`tests/test_codex_plugin_runtime.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_codex_plugin_runtime.py) · code · 13336 bytes

### test_codex_protocol.py

The part of codex's app-server protocol the codex runtime codes against, checked against the
installed CLI's own schema (storm ch 03 §1, §11). Runnable as a script via `if __name__ ==
'__main__'`. Classes: `ProtocolTests`. Functions: `_methods`, `_enum_values`. Contains
tests.

[`tests/test_codex_protocol.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_codex_protocol.py) · code · 6725 bytes

### test_codex_remote_control.py

Codex Remote Control service and routes, against fake codex-cli 0.152.x output. Runnable as
a script via `if __name__ == '__main__'`. Classes: `FakeCli`, `_IsolatedState`,
`ParseJsonObjectTests`, `CollapseCliErrorTests`, `SmallHelperTests`, `ResolveBinaryTests`,
`FailureClassificationTests`, `LivePidTests`, and 12 more. Functions: `_result`, `_json`.
Built with FastAPI. Contains tests.

[`tests/test_codex_remote_control.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_codex_remote_control.py) · code · 42373 bytes

### test_codex_rollout_messages.py

Codex rollout → MessageResponse conversion. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `CodexUserTurnTests`, `CodexReasoningTests`, `CodexSessionTitleTests`.
Functions: `line`, `labelled_user_item`, `user_item`, `context_item`,
`unlabelled_user_item`, `developer_item`, `user_event`, `assistant_item`, and 4 more.
Contains tests.

[`tests/test_codex_rollout_messages.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_codex_rollout_messages.py) · code · 12581 bytes

### test_codex_runtime.py

"""The codex runtime against its fake app-server (storm ch 03; C1). Contains tests.

[`tests/test_codex_runtime.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_codex_runtime.py) · code · 78784 bytes

### test_command_executor.py

Python module `test_command_executor.py`. Classes: `CommandSpecTests`, `SafeArgTests`,
`RunSpecTests`, `SkillCatalogArgvTests`, `OneExecutorTests`. Functions: `run`. Contains
tests.

[`tests/test_command_executor.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_command_executor.py) · code · 34569 bytes

### test_command_stream.py

The executor's process ownership: run kills on cancel, spawn_stream starts long-lived
processes that are listed until they exit, and reap_orphan stops only the exact process a
registry row names. Runnable as a script via `if __name__ == '__main__'`. Classes: `_Async`,
`RunCancelTests`, `SpawnStreamTests`, `ReapOrphanTests`. Functions: `alive`. Contains tests.

[`tests/test_command_stream.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_command_stream.py) · code · 16424 bytes

### test_command_sync_lifecycle.py

Synchronous command timeouts clean up helpers, not just their parent. Classes:
`SyncCommandLifecycleTests`. Contains tests.

[`tests/test_command_sync_lifecycle.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_command_sync_lifecycle.py) · code · 2054 bytes

### test_composio.py

"""Tests for the Composio connector subpackage. Contains tests.

[`tests/test_composio.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_composio.py) · code · 86040 bytes

### test_composio_byo.py

Bring-your-own-key Composio: local key store and SDK client. Runnable as a script via `if
__name__ == '__main__'`. Classes: `_KeyBase`, `SourceTests`, `FileTests`, `ClientTests`,
`ServiceBackendTests`, `IdentityGateTests`, `StaleGatingErrorTests`,
`ConnectionsSignedInTests`, and 2 more. Functions: `_sdk_stub`, `_req`. Contains tests.

[`tests/test_composio_byo.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_composio_byo.py) · code · 19061 bytes

### test_composio_mcp.py

Tests for the manifest-driven Composio MCP install (`composio/mcp.py`). Runnable as a script
via `if __name__ == '__main__'`. Classes: `_TempConfig`, `ManifestBlockTests`,
`ManifestBlockRejectionTests`, `TomlWriterTests`, `JsonWriterTests`,
`NestedJsonAndPruneTests`, `YamlWriterTests`, `GatewayWiringTests`. Functions: `_target`,
`_target_with_legacy`. Contains tests.

[`tests/test_composio_mcp.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_composio_mcp.py) · code · 30270 bytes

### test_connect_routes.py

The connect flows' routes exist under every AGENT_NAME, hidden aliases included (storm ch 05
§6, ch 06 §2; the swarm contract §0.1). Runnable as a script via `if __name__ ==
'__main__'`. Classes: `ConnectRoutesTests`. Contains tests.

[`tests/test_connect_routes.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_connect_routes.py) · code · 1989 bytes

### test_connections_bff.py

Routes for polled connections: thin over the connections service. Runnable as a script via
`if __name__ == '__main__'`. Classes: `ConnectionsRoutesTests`,
`ServiceEntryAccountFieldsTests`. Functions: `client`. Built with FastAPI. Contains tests.

[`tests/test_connections_bff.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_connections_bff.py) · code · 14140 bytes

### test_connections_collectors.py

The collectors catalog and the payload mapping into events.jsonl lines. Runnable as a script
via `if __name__ == '__main__'`. Classes: `CatalogTests`, `IdentityTests`, `GmailArgsTests`,
`RenderArgsTests`, `LookupAndTimeTests`, `ExtractGmailTests`, `ExtractCalendarTests`,
`ExtractWarningsTests`, and 2 more. Functions: `gmail_spec`, `message`. Contains tests.

[`tests/test_connections_collectors.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_connections_collectors.py) · code · 31627 bytes

### test_connections_docs.py

Python module `test_connections_docs.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `ConnectionsDocsTests`, `Pr97ConnectionsDocsTests`. Functions: `read`,
`squash`, `lines_with`. Contains tests.

[`tests/test_connections_docs.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_connections_docs.py) · code · 18579 bytes

### test_connections_mcp_client.py

The streamable-HTTP JSON-RPC client behind the connections poller. Runnable as a script via
`if __name__ == '__main__'`. Classes: `Upstream`, `_Base`, `CallToolTests`,
`ToolResultJsonTests`, `ErrorTextTests`, `RouterUpstream`, `ExecuteToolTests`,
`EchoUpstream`, and 2 more. Functions: `run`, `router_call`, `methods`. Contains tests.

[`tests/test_connections_mcp_client.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_connections_mcp_client.py) · code · 35826 bytes

### test_connections_poller.py

"""The connections poller: due checks, the per-toolkit lock, dedupe, error isolation, the
identity and scope failure paths, and the tick summary. Runnable as a script via `if
__name__ == '__main__'`. Contains tests.

[`tests/test_connections_poller.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_connections_poller.py) · code · 72663 bytes

### test_connections_store.py

The per-connection files under `~/.quirq/connections//`. Runnable as a script via `if
__name__ == '__main__'`. Classes: `_Base`, `PathsAndValidationTests`, `ConfigTests`,
`StateTests`, `EventsTests`, `AccountsTests`, `RemoveTests`. Functions: `ev`. Contains
tests.

[`tests/test_connections_store.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_connections_store.py) · code · 29570 bytes

### test_data_file_rules.py

Rules 2 to 4 for the data files XO Space writes. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `_Sandbox`, `EventLineTests`, `SchemaStampTests`, `TimeFormatTests`.
Contains tests.

[`tests/test_data_file_rules.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_data_file_rules.py) · code · 5004 bytes

### test_doctor_catalog.py

The catalog: every parsed file is described, and no two read alike. Runnable as a script via
`if __name__ == '__main__'`. Classes: `CatalogCoverageTests`, `LevelPolicyTests`,
`LabelTests`, `EvidenceTests`. Contains tests.

[`tests/test_doctor_catalog.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_catalog.py) · code · 6008 bytes

### test_doctor_checks.py

One breakage on top of the healthy samples gives the expected finding. Runnable as a script
via `if __name__ == '__main__'`. Classes: `SpaceIdentityTests`, `DuplicateIdTests`,
`StaleTempTests`, `LayoutTests`, `LegacyTests`, `HeartbeatTests`,
`NoActiveAgentResolutionTests`, `GrowthTests`, and 2 more. Contains tests.

[`tests/test_doctor_checks.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_checks.py) · code · 16093 bytes

### test_doctor_content.py

Content the owning store can't use is reported, in the store's own words. Runnable as a
script via `if __name__ == '__main__'`. Classes: `ValidatorSeamTests`, `ContentSandbox`,
`ContentTests`, `StoreAgreementTests`. Contains tests.

[`tests/test_doctor_content.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_content.py) · code · 6464 bytes

### test_doctor_every_finding.py

No finding is built without a headline and a next step (#188 design §1). Runnable as a
script via `if __name__ == '__main__'`. Classes: `EveryFindingTests`. Contains tests.

[`tests/test_doctor_every_finding.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_every_finding.py) · code · 1265 bytes

### test_doctor_history.py

History: the Space timeline and project timelines (#188 issue 6). Classes: `HistoryTests`.
Contains tests.

[`tests/test_doctor_history.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_history.py) · code · 2490 bytes

### test_doctor_inventory.py

The doctor's inventory is held to what this xo-space ships. Runnable as a script via `if
__name__ == '__main__'`. Classes: `InventoryCoversTheFixtures`, `StampRequiredTests`,
`WalkFilesTests`. Functions: `_fixture_files`. Contains tests.

[`tests/test_doctor_inventory.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_inventory.py) · code · 9128 bytes

### test_doctor_leftovers.py

Architecture §9.1: what counts as leftover, and when no action is offered. Runnable as a
script via `if __name__ == '__main__'`. Classes: `LeftoverSandbox`, `RuntimeKeyDriftTests`,
`DetectionTests`, `RuntimeSplitTests`, `LastKnownNameTests`, `MoveAsideTests`,
`NameSourceTests`, `IdentityLostTests`. Contains tests.

[`tests/test_doctor_leftovers.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_leftovers.py) · code · 29512 bytes

### test_doctor_liveness.py

Liveness: the task record and what each component leaves on disk. Classes:
`LivenessSandbox`, `WatcherTests`, `WatcherDisabledTests`, `ComponentTests`,
`ConnectionsTests`, `GitHubTests`, `SchedulerTests`, `UsageTests`, and 1 more. Functions:
`_stamp`. Contains tests.

[`tests/test_doctor_liveness.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_liveness.py) · code · 32066 bytes

### test_doctor_model.py

The report's finding shape: v1 fields unchanged, #188 fields added. Runnable as a script via
`if __name__ == '__main__'`. Classes: `FindingShapeTests`, `FindingCountsTests`. Contains
tests.

[`tests/test_doctor_model.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_model.py) · code · 2738 bytes

### test_doctor_read_findings.py

Read findings say which file, what breaks, what happens by itself, and what to do. Classes:
`ReadFindingTests`. Contains tests.

[`tests/test_doctor_read_findings.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_read_findings.py) · code · 10033 bytes

### test_doctor_reading.py

xo-doctor reads a file into exactly one outcome and never returns its content. Runnable as a
script via `if __name__ == '__main__'`. Classes: `ClassifyTests`, `MeasureTreeTests`,
`PrintableTests`, `ModelTests`, `EvidenceAndTailTests`. Contains tests.

[`tests/test_doctor_reading.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_reading.py) · code · 12867 bytes

### test_doctor_regressions.py

and the user's own broken Space (2026-09-23) reads as intended end to end. Classes:
`CoverageMapTests`, `TheUsersBrokenSpaceTests`. Contains tests.

[`tests/test_doctor_regressions.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_regressions.py) · code · 5650 bytes

### test_doctor_relate.py

relate: one entry per underlying problem (#188 design §10). Classes: `LeftoverFoldTests`,
`ProjectIdentityFoldTests`, `ProjectsRootFoldTests`, `ComponentFoldTests`. Contains tests.

[`tests/test_doctor_relate.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_relate.py) · code · 5604 bytes

### test_doctor_routes.py

HTTP translation only: worker thread, guard, error mapping. Runnable as a script via `if
__name__ == '__main__'`. Classes: `DoctorRouteTests`, `OneRunAtATimeTests`. Built with
FastAPI. Contains tests.

[`tests/test_doctor_routes.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_routes.py) · code · 6089 bytes

### test_doctor_run.py

A doctor run: healthy baseline, error isolation, and the read-only contract. Runnable as a
script via `if __name__ == '__main__'`. Classes: `BaselineTests`, `ReadCheckTests`,
`CoverageTests`, `ReportSizeTests`, `ReadOnlyTests`, `HostileFileTests`. Built with FastAPI.
Contains tests.

[`tests/test_doctor_run.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_run.py) · code · 19790 bytes

### test_doctor_seams.py

The private names the doctor borrows from other modules still exist. Runnable as a script
via `if __name__ == '__main__'`. Classes: `PrivateSeamsTests`. Contains tests.

[`tests/test_doctor_seams.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_seams.py) · code · 2115 bytes

### test_doctor_special.py

Links, FIFOs and devices at state paths are reported, never opened. Classes:
`SpecialEntryTests`. Contains tests.

[`tests/test_doctor_special.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_special.py) · code · 3965 bytes

### test_env_blank_shadow.py

Blank exports must not shadow real `.env` values. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `PruneBlankEnvShadowsTests`. Contains tests.

[`tests/test_env_blank_shadow.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_env_blank_shadow.py) · code · 3857 bytes

### test_env_whitelist.py

The agent-neutral env whitelist every storm runtime builds on (storm ch 16 §1). Runnable as
a script via `if __name__ == '__main__'`. Classes: `BaseEnvTests`. Contains tests.

[`tests/test_env_whitelist.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_env_whitelist.py) · code · 6866 bytes

### test_fake_clis.py

The fake CLIs speak their protocols (storm ch 06 §1). Runnable as a script via `if __name__
== '__main__'`. Classes: `_FakeTest`, `EngineTests`, `ClaudeFakeTests`, `CodexFakeTests`,
`AgyFakeTests`. Contains tests.

[`tests/test_fake_clis.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_fake_clis.py) · code · 10534 bytes

### test_files_paths.py

Path containment for `/api/files/*` (routers/cowork_agent/files.py). Runnable as a script
via `if __name__ == '__main__'`. Classes: `FilePathContainmentTests`. Built with FastAPI.
Contains tests.

[`tests/test_files_paths.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_files_paths.py) · code · 6624 bytes

### test_frozen_surfaces.py

Frozen surfaces stay byte for byte (storm ch 05 §6, ch 06 §2, ch 17 §4; decision §0.79).
Runnable as a script via `if __name__ == '__main__'`. Classes: `FrozenSurfaceTests`.
Functions: `observe`, `leaked`. Contains tests.

[`tests/test_frozen_surfaces.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_frozen_surfaces.py) · code · 6024 bytes

### test_grokbot_adapter.py

Focused unit tests for the Grok Bot adapter (paths, seats, sessions, HTTP). Runnable as a
script via `if __name__ == '__main__'`. Classes: `PathDiscoveryTests`, `SessionSeatTests`,
`SetupHealthTests`, `AdapterContractTests`. Functions: `_clear_grokbot_env`. Built with
FastAPI. Contains tests.

[`tests/test_grokbot_adapter.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_grokbot_adapter.py) · code · 14911 bytes

### test_grokbot_dispatcher.py

Grok Bot regressions through the real dispatcher, SSE and session routes. Runnable as a
script via `if __name__ == '__main__'`. Classes: `DispatcherTests`, `TranscriptTests`,
`CompletionTests`. Functions: `entry`. Built with FastAPI. Contains tests.

[`tests/test_grokbot_dispatcher.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_grokbot_dispatcher.py) · code · 20209 bytes

### test_grokbot_history.py

Gateway history regressions with no host files or network access. Classes: `HistoryTests`.
Functions: `row`. Built with FastAPI. Contains tests.

[`tests/test_grokbot_history.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_grokbot_history.py) · code · 8587 bytes

### test_health_route.py

`/health` and the routes left after Plane A's removal. Runnable as a script via `if __name__
== '__main__'`. Classes: `HealthRouteTests`. Contains tests.

[`tests/test_health_route.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_health_route.py) · code · 1216 bytes

### test_inbox_bff.py

Python module `test_inbox_bff.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `InboxRoutesTests`. Functions: `client`. Built with FastAPI. Contains tests.

[`tests/test_inbox_bff.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_inbox_bff.py) · code · 12330 bytes

### test_inbox_docs.py

Python module `test_inbox_docs.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `InboxDocsTests`, `BatchRouteAndAutoCloseDocsTests`. Functions: `read`, `squash`.
Built with FastAPI. Contains tests.

[`tests/test_inbox_docs.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_inbox_docs.py) · code · 11264 bytes

### test_inbox_feeders_issues_connections.py

The two disk-reading inbox feeders (issues, connections) and the item `url` field. Runnable
as a script via `if __name__ == '__main__'`. Classes: `_Base`, `IssuesFeederTests`,
`ConnectionsFeederTests`, `InboxUrlFieldTests`. Functions: `iso`, `ago`, `row`. Contains
tests.

[`tests/test_inbox_feeders_issues_connections.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_inbox_feeders_issues_connections.py) · code · 23239 bytes

### test_inbox_store.py

Python module `test_inbox_store.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `InboxStoreTests`, `InboxLocationTests`. Functions: `iso`, `item`. Contains tests.

[`tests/test_inbox_store.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_inbox_store.py) · code · 42620 bytes

### test_install_sh.py

install.sh — the functions that decide what the one-liner does. Runnable as a script via `if
__name__ == '__main__'`. Classes: `InstallShTests`. Contains tests.

[`tests/test_install_sh.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_install_sh.py) · code · 2330 bytes

### test_issue_37_gaps.py

Regression coverage for the contracts clarified in issue #37. Runnable as a script via `if
__name__ == '__main__'`. Classes: `RelativePathSuffixTests`, `CapabilityLoaderTests`,
`TarballExtractionTests`, `RestoreRouteTests`. Functions: `_add_file`, `_add_symlink`.
Contains tests.

[`tests/test_issue_37_gaps.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_issue_37_gaps.py) · code · 6873 bytes

### test_local_port.py

Python module `test_local_port.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `LocalPortSelectionTests`. Contains tests.

[`tests/test_local_port.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_local_port.py) · code · 1897 bytes

### test_local_state.py

Python module `test_local_state.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `LocalStateTests`. Contains tests.

[`tests/test_local_state.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_local_state.py) · code · 4099 bytes

### test_no_skip_flags.py

ch 15 §8: no session XO starts runs with a CLI's skip or bypass flag. Runnable as a script
via `if __name__ == '__main__'`. Classes: `NoSkipFlagTests`. Functions: `sources`. Contains
tests.

[`tests/test_no_skip_flags.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_no_skip_flags.py) · code · 1892 bytes

### test_opentelemetry_exporter.py

Python module `test_opentelemetry_exporter.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `TestOpenTelemetryGenAIExporter`. Contains tests.

[`tests/test_opentelemetry_exporter.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_opentelemetry_exporter.py) · code · 2621 bytes

### test_periodic.py

`services.periodic.run_forever`, the loop both background pollers run on, and the two
pollers on top of it: their log lines and their survive-a-failure, stop-on-cancel behaviour
are the ones they had. Runnable as a script via `if __name__ == '__main__'`. Classes:
`_Loop`, `RunForeverTests`, `RunForeverRecordsTests`, `ConnectionsPollerLoopTests`,
`GithubPollerLoopTests`. Functions: `_sleeps`. Contains tests.

[`tests/test_periodic.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_periodic.py) · code · 9404 bytes

### test_pid_keys.py

Rule 1: records about a project carry its `pid`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `_Sandbox`, `TimelineTests`, `InboxTests`. Functions: `_event`.
Contains tests.

[`tests/test_pid_keys.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_pid_keys.py) · code · 4682 bytes

### test_plugin_discovery.py

Exercise the shipped discovery script without network or Python in its PATH. Runnable as a
script via `if __name__ == '__main__'`. Classes: `PluginDiscoveryTests`. Contains tests.

[`tests/test_plugin_discovery.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_plugin_discovery.py) · code · 8244 bytes

### test_project_management.py

Project management is local-only: removal never consults sharing, and it fails closed on
uncertain local state. Runnable as a script via `if __name__ == '__main__'`. Classes:
`ProjectManagementTests`. Functions: `command`. Built with FastAPI. Contains tests.

[`tests/test_project_management.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_management.py) · code · 21586 bytes

### test_project_sharing_bff.py

Python module `test_project_sharing_bff.py`. Classes: `WorkspaceIdPredicateTests`,
`RelayRoutesTests`, `ApplyServiceTests`. Functions: `client`. Built with FastAPI. Contains
tests.

[`tests/test_project_sharing_bff.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_bff.py) · code · 9472 bytes

### test_project_sharing_clone.py

Python module `test_project_sharing_clone.py`. Classes: `CloneFunctionTests`,
`AutoCloneInTickTests`. Functions: `run`. Contains tests.

[`tests/test_project_sharing_clone.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_clone.py) · code · 15345 bytes

### test_project_sharing_e2e.py

End-to-end project sharing with real git and three workspaces. Classes: `FakeSwarm`,
`ProjectSharingEndToEndTests`. Functions: `run`, `git`. Contains tests.

[`tests/test_project_sharing_e2e.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_e2e.py) · code · 11944 bytes

### test_project_sharing_git_ops.py

git_ops bounds every git call: a hung network or lock must not stall the relay, and a
missing credential fails at once instead of waiting on a prompt. Runnable as a script via
`if __name__ == '__main__'`. Classes: `GitOpsTimeoutTests`. Functions: `result`. Contains
tests.

[`tests/test_project_sharing_git_ops.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_git_ops.py) · code · 2900 bytes

### test_project_sharing_identity.py

Python module `test_project_sharing_identity.py`. Classes: `RepoIdentityTests`. Contains
tests.

[`tests/test_project_sharing_identity.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_identity.py) · code · 2027 bytes

### test_project_sharing_layout.py

Python module `test_project_sharing_layout.py`. Classes: `GitRepoDirsTests`, `ConfigTests`,
`LocalRemoteHeadTests`, `StatusSnapshotTests`. Contains tests.

[`tests/test_project_sharing_layout.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_layout.py) · code · 6366 bytes

### test_project_sharing_nudge.py

Python module `test_project_sharing_nudge.py`. Classes: `NudgeTests`. Contains tests.

[`tests/test_project_sharing_nudge.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_nudge.py) · code · 3744 bytes

### test_project_sharing_poller.py

Python module `test_project_sharing_poller.py`. Classes: `PollerTickTests`,
`WatcherPublishTests`. Functions: `run`. Contains tests.

[`tests/test_project_sharing_poller.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_poller.py) · code · 10714 bytes

### test_project_sharing_state.py

Python module `test_project_sharing_state.py`. Classes: `CommitRelayStateTests`. Contains
tests.

[`tests/test_project_sharing_state.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_state.py) · code · 6506 bytes

### test_project_sharing_status.py

Python module `test_project_sharing_status.py`. Classes: `CommitRelayStatusTests`. Contains
tests.

[`tests/test_project_sharing_status.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_status.py) · code · 4655 bytes

### test_project_tree_listing.py

Project browsing lists one level without misleading raw child counts. Runnable as a script
via `if __name__ == '__main__'`. Classes: `ProjectTreeListingTests`. Contains tests.

[`tests/test_project_tree_listing.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_tree_listing.py) · code · 3527 bytes

### test_pty_process.py

utils.commands.spawn_pty / PtyProcess on a real pseudo-terminal. Runnable as a script via
`if __name__ == '__main__'`. Classes: `_Harness`, `PtyProcessTests`,
`PtyProcessUvloopTests`. Functions: `_alive`. Built with FastAPI. Contains tests.

[`tests/test_pty_process.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_pty_process.py) · code · 10272 bytes

### test_quirq_bridge.py

Runs tests/quirq/check_bridge.cjs: the quirq plugin's Space bridge (plugins/quirq/ui/space-
bridge.js) in a fake host, without a browser. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `QuirqBridgeTests`. Contains tests.

[`tests/test_quirq_bridge.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_quirq_bridge.py) · code · 816 bytes

### test_quirq_catalog.py

Python module `test_quirq_catalog.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `QuirqCatalogTests`. Contains tests.

[`tests/test_quirq_catalog.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_quirq_catalog.py) · code · 5373 bytes

### test_quirq_plugin_server.py

The quirq plugin's MCP server (plugins/quirq/mcp/server.py): proxy policy, settings,
mentions, views and a real stdio MCP handshake. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `BridgeTests`. Functions: `load`, `fake_read_api`. Contains tests.

[`tests/test_quirq_plugin_server.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_quirq_plugin_server.py) · code · 17504 bytes

### test_quirq_space_view.py

The quirq plugin's packaging: the committed Space view and the upload ZIP. Runnable as a
script via `if __name__ == '__main__'`. Classes: `SpaceViewPackagingTests`. Functions:
`load`. Contains tests.

[`tests/test_quirq_space_view.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_quirq_space_view.py) · code · 3329 bytes

### test_quirq_state_layout.py

The machine-local state root has one folder per subject. Runnable as a script via `if
__name__ == '__main__'`. Classes: `_Sandbox`, `SampleTests`, `StorePathTests`,
`MigrationTests`, `ExampleRuleTests`, `ExampleSchemaTests`, `ExampleStoreTests`. Functions:
`_sample_folders`, `_examples`, `_rel`, `_documents`, `_strings`. Contains tests.

[`tests/test_quirq_state_layout.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_quirq_state_layout.py) · code · 15723 bytes

### test_repo_checks.py

The repo-wide checks that the old .github/workflows/tests.yml ran by hand. Runnable as a
script via `if __name__ == '__main__'`. Classes: `RepoCheckCase`, `RouteParity`,
`PluginBundles`, `SpaceUiSyntax`. Contains tests.

[`tests/test_repo_checks.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_repo_checks.py) · code · 3264 bytes

### test_root_sessions.py

Sessions started with no project (issue #146). Runnable as a script via `if __name__ ==
'__main__'`. Classes: `_Sandbox`, `IndexWriteTests`, `ReaderTests`. Functions: `_row`.
Contains tests.

[`tests/test_root_sessions.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_root_sessions.py) · code · 6388 bytes

### test_runtime_config.py

Python module `test_runtime_config.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `RuntimeConfigTests`, `RuntimeHealthTests`. Functions: `_manifest`.
Built with FastAPI. Contains tests.

[`tests/test_runtime_config.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_runtime_config.py) · code · 19932 bytes

### test_runtime_conformance.py

Conformance: every runtime, run against its fake CLI, behaves as its `check()` and feature
list say (storm ch 01 §7, ch 06 §2). Runnable as a script via `if __name__ == '__main__'`.
Classes: `Binding`, `ConformanceTests`, `FamilyProblemsTests`, `SessionConformanceTests`,
`TranscriptConformanceTests`, `TranscriptProblemsTests`, `EventOrderTests`.

[`tests/test_runtime_conformance.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_runtime_conformance.py) · code · 45124 bytes

### test_runtime_contract.py

The runtime contract's shape (storm ch 01; its rules in §2, amendments §9A). Runnable as a
script via `if __name__ == '__main__'`. Classes: `ImportTests`, `DataTests`, `EventTests`,
`SupportTests`, `ProtocolTests`. Functions: `_contract_dataclasses`. Contains tests.

[`tests/test_runtime_contract.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_runtime_contract.py) · code · 10911 bytes

### test_safe_read.py

State files are read whole only when they are small regular files. Runnable as a script via
`if __name__ == '__main__'`. Classes: `ReadTextGuardedTests`,
`SchedulerRefusesDevicesTests`. Contains tests.

[`tests/test_safe_read.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_safe_read.py) · code · 3299 bytes

### test_scheduler.py

Tests for utils/commands/scheduler.py. Runnable as a script via `if __name__ == '__main__'`.
Classes: `SchedulerTests`. Functions: `_cmd`, `_job`, `_at`. Contains tests.

[`tests/test_scheduler.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_scheduler.py) · code · 27991 bytes

### test_scheduler_agent.py

The scheduler's `agent` kind (storm design ch 10 §4.5, ch 12 §9, ch 17 §2.8), with a runner
the test controls: what storm registers at its boot is tested in `tests/test_storm_jobs.py`.
Runnable as a script via `if __name__ == '__main__'`. Classes: `Runner`, `AgentKindTests`,
`AgentRouteTests`. Functions: `_at`, `_agent`. Built with FastAPI. Contains tests.

[`tests/test_scheduler_agent.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_scheduler_agent.py) · code · 17117 bytes

### test_scheduler_api.py

HTTP mapping for routers/schedules.py. Runnable as a script via `if __name__ == '__main__'`.
HTTP routes: `GET /probe`. Classes: `SchedulerApiTests`. Functions: `_payload`. Built with
FastAPI. Contains tests.

[`tests/test_scheduler_api.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_scheduler_api.py) · code · 13026 bytes

### test_session_mounts.py

Python module `test_session_mounts.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `SessionMountTests`. Contains tests.

[`tests/test_session_mounts.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_session_mounts.py) · code · 2923 bytes

### test_session_transcript.py

Python module `test_session_transcript.py`. Classes: `BuildTranscriptTests`,
`TranscriptRouteTests`. Functions: `part`, `msg`. Built with FastAPI. Contains tests.

[`tests/test_session_transcript.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_session_transcript.py) · code · 5101 bytes

### test_setup_status.py

Setup verifies identity without minting sessions or exposing credentials. Runnable as a
script via `if __name__ == '__main__'`. Classes: `SetupStatusTests`. Built with FastAPI.
Contains tests.

[`tests/test_setup_status.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_setup_status.py) · code · 13632 bytes

### test_space_activity_views.py

Activity transforms and lifecycle run with isolated reads and fake timers. Runnable as a
script via `if __name__ == '__main__'`. Classes: `ActivityViewTests`. Contains tests.

[`tests/test_space_activity_views.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_activity_views.py) · code · 17557 bytes

### test_space_atlas_lifecycle.py

Atlas projection requests cannot reload or reclaim another UI page. Runnable as a script via
`if __name__ == '__main__'`. Classes: `AtlasLifecycleTests`. Contains tests.

[`tests/test_space_atlas_lifecycle.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_atlas_lifecycle.py) · code · 5891 bytes

### test_space_command_palette.py

The Cmd+K command palette (space_ui/js/core/command-palette.js): shell chrome that opens a
searchable overlay for navigation, projects, quick actions and handing a query to the active
page's search. Runnable as a script via `if __name__ == '__main__'`. Classes:
`CommandPaletteCompositionTests`. Functions: `read`. Contains tests.

[`tests/test_space_command_palette.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_command_palette.py) · code · 6926 bytes

### test_space_commands.py

Setup commands: manual scheduling, persisted results and local-only controls. Classes:
`SpaceCommandsTests`. Built with FastAPI. Contains tests.

[`tests/test_space_commands.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_commands.py) · code · 15982 bytes

### test_space_connections.py

Python module `test_space_connections.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `InboxSourceFilterTests`, `InboxOpenLinkTests`,
`InboxConnectionsSectionTests`, `ConnectorsPollingDrawerTests`, `ConnectedAccountTests`,
`CacheBusterTests`, `HygieneTests`. Functions: `read`, `slice_between`. Contains tests.

[`tests/test_space_connections.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_connections.py) · code · 21985 bytes

### test_space_dashboard.py

Python module `test_space_dashboard.py`. Runnable as a script via `if __name__ ==
'__main__'`. HTTP routes: `GET /dashboard.json`. Classes: `CategorizedGraphTests`,
`DashboardUiTests`. Contains tests.

[`tests/test_space_dashboard.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_dashboard.py) · code · 7203 bytes

### test_space_doctor_ui.py

The Quirq view's Health panel: on-demand checks and one confirmed action. Runnable as a
script via `if __name__ == '__main__'`. Classes: `HealthPanelTests`. Functions: `read`.
Contains tests.

[`tests/test_space_doctor_ui.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_doctor_ui.py) · code · 4634 bytes

### test_space_file_history.py

The previewer's version picker: /file-history + /file?commit= backend, floating-window UI.
Runnable as a script via `if __name__ == '__main__'`. Classes: `RepoFixture`,
`FileGitHistoryTests`, `ReadFileAtCommitTests`, `FileHistoryRouteTests`,
`PreviewWindowUITests`. Functions: `git`. Contains tests.

[`tests/test_space_file_history.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_file_history.py) · code · 13610 bytes

### test_space_foundation.py

The Space foundation under `services/inbox and services/connections`: the file primitives in
`services/storage` (and the aliases at their former paths), `services/timestamps,
services/errors` with its BFF glue in `routers/cowork_agent/bff/errors.py`, and the new-
events listener registry that replaced the connections -> inbox import. Runnable as a script
via `if __name__ == '__main__'`.

[`tests/test_space_foundation.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_foundation.py) · code · 14379 bytes

### test_space_inbox.py

Python module `test_space_inbox.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `SpaceInboxCompositionTests`. Functions: `read`. Contains tests.

[`tests/test_space_inbox.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_inbox.py) · code · 7571 bytes

### test_space_index_counts.py

Indexed counts stay truthful when the graph omits scanned files. Runnable as a script via
`if __name__ == '__main__'`. Classes: `SpaceIndexCountsTests`, `WorkspaceCountsClientTests`.
Contains tests.

[`tests/test_space_index_counts.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_index_counts.py) · code · 8220 bytes

### test_space_inline_sharing.py

Run the real inline sharing component against a small DOM and fake fetch. Runnable as a
script via `if __name__ == '__main__'`. Classes: `InlineSharingTests`. Contains tests.

[`tests/test_space_inline_sharing.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_inline_sharing.py) · code · 11518 bytes

### test_space_issues.py

Reusable Manage Issues preserve the existing GitHub mirror contract. Runnable as a script
via `if __name__ == '__main__'`. Classes: `IssuesPanelTests`, `IssuesDocsTests`,
`IssuesEndpointTests`. Contains tests.

[`tests/test_space_issues.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_issues.py) · code · 7321 bytes

### test_space_jobs.py

Space UI jobs: plain-language schedules map onto the scheduler's fields. Runnable as a
script via `if __name__ == '__main__'`. Classes: `SpaceJobsTests`. Contains tests.

[`tests/test_space_jobs.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_jobs.py) · code · 6252 bytes

### test_space_navigation.py

Exercise real section definitions, view factories and the registry under Node. Classes:
`SpaceNavigationTests`. Contains tests.

[`tests/test_space_navigation.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_navigation.py) · code · 14241 bytes

### test_space_pr97_ui.py

PR #97 frontend fixes: the seams the review asked for, pinned the way the other space_ui
tests pin theirs, plus two behaviour tests that run under node (skipped when node is not
installed): the pure core helpers, and the Connectors Polling drawer driven through its own
click listener over a DOM stub (paint order, the paint after Save, one drawer at a time).
Runnable as a script via `if __name__ == '__main__'`.

[`tests/test_space_pr97_ui.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_pr97_ui.py) · code · 52763 bytes

### test_space_preview_navigation.py

Exercise the preview's Projects navigation and atlas reload handoff. Runnable as a script
via `if __name__ == '__main__'`. Classes: `PreviewNavigationTests`. Contains tests.

[`tests/test_space_preview_navigation.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_preview_navigation.py) · code · 13008 bytes

### test_space_project_image.py

/api/xo-projects/{id}/image: one image's bytes for the image viewer. Runnable as a script
via `if __name__ == '__main__'`. Classes: `ProjectImageTests`. Built with FastAPI. Contains
tests.

[`tests/test_space_project_image.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_project_image.py) · code · 4327 bytes

### test_space_project_pins.py

Project pins share browser-local state without requiring a DOM or server. Runnable as a
script via `if __name__ == '__main__'`. Classes: `ProjectPinsTests`. Contains tests.

[`tests/test_space_project_pins.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_project_pins.py) · code · 7541 bytes

### test_space_project_root.py

The Projects root picker can read and navigate without booting an atlas. Runnable as a
script via `if __name__ == '__main__'`. Classes: `ProjectRootTests`. Contains tests.

[`tests/test_space_project_root.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_project_root.py) · code · 12688 bytes

### test_space_project_sharing.py

Python module `test_space_project_sharing.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `SpaceProjectSharingCompositionTests`. Functions: `read`. Contains
tests.

[`tests/test_space_project_sharing.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_project_sharing.py) · code · 6951 bytes

### test_space_restart.py

Restart modes, HTTP controls and the native runner surviving its parent. Classes:
`RestartModeTests`, `RestartRouteTests`, `ManagedRestartTests`,
`NativeRestartIntegrationTests`. Functions: `_processes_started_in`. Built with FastAPI.
Contains tests.

[`tests/test_space_restart.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_restart.py) · code · 17167 bytes

### test_space_self_update.py

Git-backed self-update (Setup tab · 04 Version). Runnable as a script via `if __name__ ==
'__main__'`. Classes: `SelfUpdateTests`. Functions: `_git_env`. Contains tests.

[`tests/test_space_self_update.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_self_update.py) · code · 4824 bytes

### test_space_sessions.py

Python module `test_space_sessions.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `SpaceSessionsUiTests`, `ArgusSessionsTests`, `CombinedSessionsTests`,
`SessionPromptTests`. Contains tests.

[`tests/test_space_sessions.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_sessions.py) · code · 13032 bytes

### test_space_sharing_drafts.py

Sharing refresh and failed requests retain the current form state. Runnable as a script via
`if __name__ == '__main__'`. Classes: `SharingDraftTests`. Contains tests.

[`tests/test_space_sharing_drafts.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_sharing_drafts.py) · code · 5723 bytes

### test_space_subpage_controllers.py

Shared Agents/Inbox controllers retain state across registered subpages. Runnable as a
script via `if __name__ == '__main__'`. Classes: `SpaceSubpageControllerTests`. Contains
tests.

[`tests/test_space_subpage_controllers.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_subpage_controllers.py) · code · 10298 bytes

### test_space_timeline_events.py

The Space timeline carries every event a project timeline does. Runnable as a script via `if
__name__ == '__main__'`. Classes: `_Sandbox`, `TodoEventTests`, `WorkitemEventTests`,
`SinkTests`. Contains tests.

[`tests/test_space_timeline_events.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_timeline_events.py) · code · 4496 bytes

### test_space_timeline_modes.py

Timeline "By file / By project" modes. Runnable as a script via `if __name__ == '__main__'`.
Classes: `AggregateHistoryTests`, `GitFactsHistoryTests`, `GitOnlyDatesTests`,
`TimelineModeWiringTests`. Functions: `_repo_builder`. Contains tests.

[`tests/test_space_timeline_modes.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_timeline_modes.py) · code · 9648 bytes

### test_space_timeline_summary.py

Timeline summaries report selected data in the visible date window. Classes:
`TimelineSummaryTests`. Contains tests.

[`tests/test_space_timeline_summary.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_timeline_summary.py) · code · 3337 bytes

### test_space_toolbar.py

Exercise toolbar ownership and lazy view activation under Node. Classes:
`SpaceToolbarTests`. Contains tests.

[`tests/test_space_toolbar.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_toolbar.py) · code · 12669 bytes

### test_space_ui_project_actions.py

Refresh and project-form handoffs use the completed, current activation. Runnable as a
script via `if __name__ == '__main__'`. Classes: `ProjectActionTests`. Contains tests.

[`tests/test_space_ui_project_actions.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_ui_project_actions.py) · code · 12051 bytes

### test_space_view_search.py

Exercise contextual view searches against the real view modules. Classes:
`SpaceViewSearchTests`. Contains tests.

[`tests/test_space_view_search.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_view_search.py) · code · 11430 bytes

### test_space_wiki.py

Python module `test_space_wiki.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `SpaceWikiTests`. Functions: `view_contract`. Contains tests.

[`tests/test_space_wiki.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_wiki.py) · code · 40572 bytes

### test_storage_layout.py

The state root's folders, and a store that adopts its own old file. Runnable as a script via
`if __name__ == '__main__'`. Classes: `_Sandbox`, `FolderTests`, `UsageWatermarkTests`.
Contains tests.

[`tests/test_storage_layout.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storage_layout.py) · code · 3304 bytes

### test_storage_migrations.py

Moving the state root's files from where earlier releases kept them. Runnable as a script
via `if __name__ == '__main__'`. Classes: `_Sandbox`, `MigrateTests`, `CommandLogTests`.
Contains tests.

[`tests/test_storage_migrations.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storage_migrations.py) · code · 13021 bytes

### test_storm_attachments.py

Files the owner attaches to a message (hub #30): the upload and read routes, what they
refuse, the message that names them, what each agent is handed, forwarding, the sweep, and
the read policy. Runnable as a script via `if __name__ == '__main__'`. Classes:
`_Attachments`, `UploadTests`, `MessageTests`, `SweepTests`, `ImageInputTests`,
`ReadPolicyTests`. Contains tests.

[`tests/test_storm_attachments.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_attachments.py) · code · 18734 bytes

### test_storm_chats.py

Storm's chats beyond the PoC flows (design ch 11, ch 17 §2.2, §2.6): the routes' shapes, the
router's setting and decision models, a project made on the person's Allow, new projects
announced, pins, pauses and memory. Classes: `ChatRouteTests`, `RouterTests`,
`DecisionRoutingTests`, `ProjectCreationTests`, `PauseTests`. Functions: `_choice`,
`_request`. Contains tests.

[`tests/test_storm_chats.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_chats.py) · code · 25828 bytes

### test_storm_chats_failures.py

Storm's conversation under failure and races (design ch 11 §2, §3.1, §5, §6.2, §9, §16.2;
sedc 09 #12): when an input ends, which calls answer it, a pause on an idle thread, a
coordinator recycled only between inputs, a decision model's routing that survives a retry
and a restart, and a project created under the name its folder gets.

[`tests/test_storm_chats_failures.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_chats_failures.py) · code · 45152 bytes

### test_storm_chats_flows.py

The PoC's flows on the fake claude CLI, through storm's routes and the real `xo_comms`
endpoint (design ch 11 §12; ch 18 §8: "workspace → project → thread, the reply gate,
resolve/reopen, hops"). Classes: `FlowTestCase`, `WorkspaceFlowTests`, `GateTests`,
`SecondThreadFlowTests`, `ThreadFlowTests`, `RecycleTests`. Functions: `start`,
`next_input`, `done`. Contains tests.

[`tests/test_storm_chats_flows.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_chats_flows.py) · code · 19174 bytes

### test_storm_chats_units.py

The conversation's pure pieces (design ch 11 §4, §6.2, §7.3): envelopes with their escaping,
the handoff, and the card rule. Classes: `EnvelopeTests`, `CardTests`. Functions: `row`.
Contains tests.

[`tests/test_storm_chats_units.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_chats_units.py) · code · 5769 bytes

### test_storm_comms.py

`xo_comms` (storm design ch 12): the endpoint and its tokens, each role's tools, the lines
of talk, one transaction per call, and each tool's effect. Classes: `TokenTests`,
`RoleTests`, `LinesOfTalkTests`, `OwnerToolTests`, `ConversationHookTests`, `FenceTests`,
`WorkToolTests`, `ChatIdentityTests`, and 1 more. Functions: `_wake`, `_request`. Contains
tests.

[`tests/test_storm_comms.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_comms.py) · code · 50676 bytes

### test_storm_composio.py

Composio in a plain chat on storm (owner §0.108; ch 10 §4.1): the stored spec names it only;
when the process starts it becomes exactly the entry today's per-turn `--mcp-config` file
held, behind the same gate (a Composio key configured), or is left out. Runnable as a script
via `if __name__ == '__main__'`. Classes: `FilledTests`, `EngineStartTests`. Functions:
`spec`. Contains tests.

[`tests/test_storm_composio.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_composio.py) · code · 5963 bytes

### test_storm_decision_models.py

Decision models for storm's router (design ch 11 §3, §14.3; §0.81): Sage and Jev behind one
interface, keys only in `router.env`, and the router's decision from their answers (the
PoC's tests, on storm's key store). Classes: `_StateRoot`, `KeyStoreTests`, `LevantoTests`,
`ProviderTests`, `DecideTests`. Contains tests.

[`tests/test_storm_decision_models.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_decision_models.py) · code · 9873 bytes

### test_storm_emulated_auto.py

`auto` on a runtime whose CLI can't decide for itself (§0.80, §0.122). Runnable as a script
via `if __name__ == '__main__'`. Classes: `EmulatedAutoRuntime`, `EmulatedAutoTests`.
Functions: `bash`. Contains tests.

[`tests/test_storm_emulated_auto.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_emulated_auto.py) · code · 7501 bytes

### test_storm_engine.py

Storm's session engine on the fake claude CLI (design ch 07; ch 18 §2's proof for PR 7): one
turn end to end, idle release at 10 minutes, Stop, hold and answer, park and wake, epochs
fencing a stale process, boot recovery, wake idempotency and batching, the admission gates.
Runnable as a script via `if __name__ == '__main__'`.

[`tests/test_storm_engine.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_engine.py) · code · 49180 bytes

### test_storm_engine_failures.py

"""Storm's engine on its failure paths, and the seams PR 8 and PR 9 use (the PR 7 review's
must-fixes, should-fixes and seams). Contains tests.

[`tests/test_storm_engine_failures.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_engine_failures.py) · code · 85985 bytes

### test_storm_engine_inputs.py

Storm's engine: an input ends at the runtime's `SessionIdle`, not when the engine sees no
turn running (storm PR 20; ch 07 §2, §4.2, §5.2, §7, §8; ch 01 §5.2; ch 02 §4.3). Runnable
as a script via `if __name__ == '__main__'`. Classes: `Case`, `GapTests`,
`WorkerRunningTests`, `HeldCheck`, `LookAgainBeforeSendTests`, `StopInTheGapTests`,
`MissedIdleTests`, `EndTests`.

[`tests/test_storm_engine_inputs.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_engine_inputs.py) · code · 24019 bytes

### test_storm_engine_routes.py

Storm's first routes (ch 17 §2.1, §2.7; sedc 09 #9): /api/chat/status, /api/chat/sessions*,
/api/chat/runtimes*. Runnable as a script via `if __name__ == '__main__'`. Classes:
`NoEffortChange`, `RouteTests`. Functions: `app`. Built with FastAPI. Contains tests.

[`tests/test_storm_engine_routes.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_engine_routes.py) · code · 10135 bytes

### test_storm_integrity.py

The integrity check on disk (design ch 16 §2.1–§2.2; S16-2, the watched-path corpus): real
git in temp repositories, no engine and no model. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `Case`, `WorktreeCorpus`, `GitOwnCorpus`, `MainCheckout`, `Unwatched`,
`Snapshots`, `Reports`, `Failures`, and 2 more. Functions: `write`. Contains tests.

[`tests/test_storm_integrity.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_integrity.py) · code · 39398 bytes

### test_storm_integrity_engine.py

The integrity check in the engine's life (design ch 16 §2.3–§2.4; owner §11.2) on the fake
claude CLI, with the real review queue and conversation, the worktrees' preparer and a real
temp git project. Runnable as a script via `if __name__ == '__main__'`. Classes: `Case`,
`ThreadTests`, `PlainAndCoordinatorTests`. Functions: `started`, `turn`, `writes_settings`,
`write_file`. Contains tests.

[`tests/test_storm_integrity_engine.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_integrity_engine.py) · code · 26566 bytes

### test_storm_jobs.py

Agent jobs (storm design ch 10 §4.5, ch 11 §7.1, §14.6, ch 12 §5.8, ch 17 §2.8; §0.44,
§0.51, §0.107): the scheduler's `agent` kind run by storm, the job tools, the `create_job`
review item and its decision. Classes: `JobsTestCase`, `RunTests`, `PersonJobTests`,
`ToolTests`, `FlowTests`. Functions: `_request`. Built with FastAPI. Contains tests.

[`tests/test_storm_jobs.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_jobs.py) · code · 48093 bytes

### test_storm_plain_chat.py

Plain chat on storm through `/api/chat` (storm PR 19; ch 17 §2.1, §3; ch 10 §4.1; owner
§0.108, §0.109; sedc 09 #6, #12), on the fake claude CLI: create and continue, add / now /
409, abort, active, a paused session resumed, a retried `client_id`, a pre-switch chat
continued, the folder rule, the model rule, Composio in the process's MCP config and not in
the store, and the branch itself: an agent without a runtime never reaches storm, and claude

[`tests/test_storm_plain_chat.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_plain_chat.py) · code · 45184 bytes

### test_storm_policy.py

The policy engine's pieces (storm ch 15 §2–§4, ch 16 §2.1): the parser's refusals, where a
path lands, rules and their limits, the order of checks, grants, coordinators, and failing
closed. Runnable as a script via `if __name__ == '__main__'`. Classes: `_Tree`,
`ParserTests`, `ActionHashTests`, `SedScriptTests`, `OptionsTests`, `PlacesTests`,
`RuleTests`, `OrderTests`, and 1 more. Contains tests.

[`tests/test_storm_policy.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_policy.py) · code · 26345 bytes

### test_storm_policy_corpus.py

The policy corpus (storm ch 15 §2.2; R4): every bypass form of R-E F6/F7 lands at "ask" or
higher, unparseable means ask, protected paths are denied whatever the rules say, and XO's
default rules allow routine work. Runnable as a script via `if __name__ == '__main__'`.
Classes: `CorpusTests`. Functions: `rule_from`, `run`. Contains tests.

[`tests/test_storm_policy_corpus.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_policy_corpus.py) · code · 3801 bytes

### test_storm_presets.py

Storm's presets (design ch 10): each preset's spec, read against a runtime's feature list
and checked by its runtime, never by its name. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `PresetSpecTests`, `PluggableTests`, `FingerprintTests`. Functions:
`ctx`, `build`. Contains tests.

[`tests/test_storm_presets.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_presets.py) · code · 14118 bytes

### test_storm_redact.py

Redaction of what storm stores (design ch 16 §3; §0.76) and the raw per-turn CLI logs (ch 08
§4; §0.106). Runnable as a script via `if __name__ == '__main__'`. Classes: `SecretsCase`,
`RedactTests`, `StoredRecordTests`, `LogTests`, `RawTurnLogTests`, `EngineTests`,
`WakeScrubTests`, `TypedTextTests`, and 3 more. Functions: `leaky`, `consume`. Contains
tests.

[`tests/test_storm_redact.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_redact.py) · code · 49406 bytes

### test_storm_retention.py

The daily retention prune (design ch 08 §6, §0.106; storm B4 PR 22). Runnable as a script
via `if __name__ == '__main__'`. Classes: `_Store`, `EventsTests`, `RowsTests`,
`KeptAlwaysTests`, `BatchesAndFailuresTests`, `ResumeTests`, `DailyTaskTests`. Functions:
`ago`. Contains tests.

[`tests/test_storm_retention.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_retention.py) · code · 22990 bytes

### test_storm_review.py

The review queue end to end on the fake claude CLI through the engine and the decision route
(design ch 15 §5–§7; ch 18 §2's proof for PR 9): a held call's item opens in one transaction
and the route's decision goes into the call; `decided_by` is the server's; a decision is
single-use and bound to its input's hash; a call that is gone gets a grant the retry spends
once; scope limits by tier; "make it a rule" needs the server's sentence; revoking a default

[`tests/test_storm_review.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_review.py) · code · 25165 bytes

### test_storm_review_queue.py

The review queue's own rules (design ch 15 §3, §5, §9; ch 07 §5.1; ch 17 §2.5): expiry, the
queue's order and paging, the person's rules and XO's default rules over the routes, paid
usage, the loop breaker's counts, and the routes' refusals (503, 404, 422, the browser write
guard). Runnable as a script via `if __name__ == '__main__'`.

[`tests/test_storm_review_queue.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_review_queue.py) · code · 35913 bytes

### test_storm_routing_setup.py

Routing chooses every new thread's model and effort (design ch 11 §3.3, ch 10 §3.3, ch 12
§4; owner §0.103, §0.105; B4 PR 21). Classes: `SetupTestCase`, `CoordinatorChoosesTests`,
`CatalogToolTests`, `PersonsPinTests`, `DecisionModelChoosesTests`,
`SlowCatalogRoutingTests`, `SetupDecisionTests`. Functions: `_pc_starting`, `_choice`,
`_catalog`. Contains tests.

[`tests/test_storm_routing_setup.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_routing_setup.py) · code · 41795 bytes

### test_storm_runs.py

Storm's sub-agent runs on the fake claude CLI (design ch 14; ch 18 §2's proof for PR 14):
the run tree from fake events at depth 2 with its ancestry, progress coalesced to one
aggregate a second, a sub-agent's held call moving its run to `waiting` and back, one run
stopped and confirmed only by its end event, a runtime without `runs.stop`, boot after a
crash (lost runs, the resume note), reconcile with the CLI's files, and transcript paging

[`tests/test_storm_runs.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_runs.py) · code · 43189 bytes

### test_storm_runs_routes.py

Storm's run routes (ch 17 §2.3): every route's shape and errors, on the fake claude CLI,
driven in the engine's own event loop. Runnable as a script via `if __name__ == '__main__'`.
Classes: `NoRunControl`, `RunRouteTests`. Functions: `app`. Built with FastAPI. Contains
tests.

[`tests/test_storm_runs_routes.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_runs_routes.py) · code · 12959 bytes

### test_storm_store.py

Storm's store, the engine lock and boot recovery (design ch 08; ch 07 §9). Runnable as a
script via `if __name__ == '__main__'`. Classes: `_Temp`, `SchemaTests`, `TransactionTests`,
`HandBackTests`, `WriteAheadLogTests`, `LockTests`, `RecoveryTests`. Functions:
`load_sample`, `schema_of`, `digest`. Contains tests.

[`tests/test_storm_store.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_store.py) · code · 36322 bytes

### test_storm_stream.py

Storm's stream on real turns (ch 09; ch 18 §2 PR 8: "snapshots rebuild the same blocks as
the live stream"): real turns on the fake claude through the engine, and three views of each
compared Classes: `StreamCase`, `LiveHistoryReconnectTests`, `ResumeTests`,
`ShutdownSignalTests`, `ExactlyOnceTests`. Functions: `rich_turn`. Contains tests.

[`tests/test_storm_stream.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_stream.py) · code · 22774 bytes

### test_storm_stream_bus.py

The bus (ch 09 §3, §4) on its own: coalescing on an injectable clock, file sizes at most
four a second, a slow subscriber (live frames dropped first, then `reset`; the queue never
grows past its bound), heartbeats, and filters. Classes: `StubSource`, `Feed`, `BusCase`,
`CoalescingTests`, `BackPressureTests`, `EngineViewTests`, `HeartbeatTests`, `FilterTests`,
and 1 more. Functions: `_until_closed`. Contains tests.

[`tests/test_storm_stream_bus.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_stream_bus.py) · code · 13247 bytes

### test_storm_stream_presenter.py

The turn presenter and its wording table (ch 09 §2, §2.1), as a pure fold: the same stored
events always give the same blocks, whatever came live in between. Runnable as a script via
`if __name__ == '__main__'`. Classes: `Turn`, `WordingTests`, `FoldTests`, `DegradeTests`,
`MoreWordingTests`, `StoredStepsTests`, `TurnsTests`. Functions: `fold`. Contains tests.

[`tests/test_storm_stream_presenter.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_stream_presenter.py) · code · 21569 bytes

### test_storm_stream_routes.py

Storm's stream routes (ch 17 §2.4): GET /api/chat/stream, /api/chat/sessions/{id}/stream and
/api/chat/events. Runnable as a script via `if __name__ == '__main__'`. Classes:
`SseResponse`, `StreamRouteTests`. Functions: `app`. Built with FastAPI. Contains tests.

[`tests/test_storm_stream_routes.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_stream_routes.py) · code · 14798 bytes

### test_storm_worktree_guards.py

The guards today's code gains for thread worktrees (design ch 13 §7): a backup never carries
a checkout (W3), `ensure_xo_structure` and the doctor never look inside `.xo/worktrees/`,
and project removal offers XO's clean worktrees first, then lists what blocks it. Runnable
as a script via `if __name__ == '__main__'`. Classes: `Case`, `BackupTests`,
`StructureTests`, `DoctorTests`, `ProjectRemovalTests`. Contains tests.

[`tests/test_storm_worktree_guards.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_worktree_guards.py) · code · 7297 bytes

### test_storm_worktrees.py

A thread's worktree on disk (design ch 13 §1–§6), on real temp git repositories: where it
goes, creating and reusing it, the refusals, a rename of the project folder, bringing it
back after a removal, what removal would lose, the removal itself, and the project's other
worktrees. Runnable as a script via `if __name__ == '__main__'`.

[`tests/test_storm_worktrees.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_worktrees.py) · code · 22918 bytes

### test_storm_worktrees_engine.py

Storm's worktrees in the engine's life (design ch 13 §2, §4–§6) on the fake claude CLI and a
real temp git project: the preparer makes and records a thread's tree before its process
starts (and its failure paths), a tree removed while the thread was resolved comes back at
the same path, a worktree a CLI made is reported once, the 7-day sweep, and the routes.
Runnable as a script via `if __name__ == '__main__'`.

[`tests/test_storm_worktrees_engine.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_storm_worktrees_engine.py) · code · 27749 bytes

### test_swarm_api.py

Python module `test_swarm_api.py`. Classes: `ClientPatch`, `TransportTests`,
`FeatureModuleTests`, `OneDoorTests`. Functions: `run`, `fake_response`. Contains tests.

[`tests/test_swarm_api.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_swarm_api.py) · code · 8729 bytes

### test_telemetry_sources.py

Telemetry source configuration: descriptors, saving paths and the per-source collection
switch the Agents tab's Configure page drives. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `FakeStore`, `DescribeSourceTests`, `SaveSourceTests`,
`BuilderSwitchTests`, `RouterTests`. Functions: `_provider`. Built with FastAPI. Contains
tests.

[`tests/test_telemetry_sources.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_telemetry_sources.py) · code · 8923 bytes

### test_terminal_api.py

routers/cowork_agent/terminal.py over HTTP and WebSocket. Runnable as a script via `if
__name__ == '__main__'`. Classes: `_Server`, `TerminalApiTests`, `WebsocketGuardTests`.
Functions: `_app`, `_read_until`. Built with FastAPI. Contains tests.

[`tests/test_terminal_api.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_terminal_api.py) · code · 20412 bytes

### test_terminal_service.py

services/terminal: scrollback, environment, starting folder, registry rules. Runnable as a
script via `if __name__ == '__main__'`. Classes: `ScrollbackTests`, `EnvironmentTests`,
`StartFolderTests`, `NameTests`, `RegistryTests`. Contains tests.

[`tests/test_terminal_service.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_terminal_service.py) · code · 15955 bytes

### test_theme.py

Theme preferences persist independently of branding and the checkout. Runnable as a script
via `if __name__ == '__main__'`. Classes: `ThemeTests`. Built with FastAPI. Contains tests.

[`tests/test_theme.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_theme.py) · code · 8620 bytes

### test_timeline_routes.py

Timeline lines carry `pid`, and the timeline routes must serve them. Runnable as a script
via `if __name__ == '__main__'`. Classes: `TimelineRouteTests`. Built with FastAPI. Contains
tests.

[`tests/test_timeline_routes.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_timeline_routes.py) · code · 3409 bytes

### test_todo_status.py

Inbox project activity retains the backend todo lifecycle vocabulary. Runnable as a script
via `if __name__ == '__main__'`. Classes: `TodoStatusTests`. Contains tests.

[`tests/test_todo_status.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_todo_status.py) · code · 1142 bytes

### test_todos_conflicts.py

A `todos.json` the store cannot read is refused, never overwritten. Runnable as a script via
`if __name__ == '__main__'`. Classes: `_Sandbox`, `StoreTests`, `RouteTests`. Built with
FastAPI. Contains tests.

[`tests/test_todos_conflicts.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_todos_conflicts.py) · code · 5255 bytes

### test_uninstall_sh.py

uninstall.sh — the functions that decide what gets removed. Runnable as a script via `if
__name__ == '__main__'`. Classes: `UninstallShTests`. Contains tests.

[`tests/test_uninstall_sh.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_uninstall_sh.py) · code · 3139 bytes

### test_usage_reporting_status.py

Python module `test_usage_reporting_status.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `UsageReportingStatusTests`. Contains tests.

[`tests/test_usage_reporting_status.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_usage_reporting_status.py) · code · 3074 bytes

### test_watcher_scheduler.py

The watcher as the scheduler's clock: one guarded call per tick. Runnable as a script via
`if __name__ == '__main__'`. Classes: `WatcherSchedulerTests`. Functions: `_at`, `_job`.
Contains tests.

[`tests/test_watcher_scheduler.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_watcher_scheduler.py) · code · 11144 bytes

### test_workspace_document.py

Space's data files are real files, materialised by the watcher. Runnable as a script via `if
__name__ == '__main__'`. HTTP routes: `GET /{name}.json`, `GET /data/{name}.json`, `GET
/data/session_prompts.json`. Classes: `WorkspaceViewFileTests`,
`AbandonedWorkspaceStateTests`, `XoDataRouteTests`. Functions: `_env`, `_workspace`.
Contains tests.

[`tests/test_workspace_document.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_workspace_document.py) · code · 17986 bytes

### test_xo_root_identity.py

One XO root, one project identity. Runnable as a script via `if __name__ == '__main__'`.
Classes: `ProjectIdentityTests`, `MixedCaseFolderTests`, `StorageRootBootTests`. Functions:
`_project`. Contains tests.

[`tests/test_xo_root_identity.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_xo_root_identity.py) · code · 12027 bytes

### test_xo_structure.py

Every xo-project carries the same `.xo/`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `CanonicalSampleTests`, `_Sandbox`, `CreationPathTests`,
`SafetyTests`, `StoreCompatibilityTests`, `WatcherCheckTests`, `GitTests`. Functions:
`_files`, `_fixture`. Contains tests.

[`tests/test_xo_structure.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_xo_structure.py) · code · 17313 bytes

### uninstall_sh_harness.sh

tests/uninstall_sh_harness.sh — exercises uninstall.sh's resolve_repo_dir, resolve_roots,
remove_path guards and remove_checkout in isolation, plus one full --yes run against a
fabricated managed install. Shebang `#!/usr/bin/env bash`. Functions: `ok`, `bad`, `check`,
`make_install`.

[`tests/uninstall_sh_harness.sh`](https://github.com/quirq-ai/xo-space/blob/main/tests/uninstall_sh_harness.sh) · code · 9689 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
