<!-- quirq-wiki-generated repo=xo-space dir=tests -->

# xo-space / tests

Source: [tests](https://github.com/quirq-ai/xo-space/tree/main/tests) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

XO Cowork API tests.

[`tests/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/__init__.py) · code · 27 bytes

### doctor_sandbox.py

A healthy Space built from the two golden samples, for xo-doctor tests. Classes:
`DoctorSandbox`. Functions: `snapshot`. Contains tests.

[`tests/doctor_sandbox.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/doctor_sandbox.py) · code · 4183 bytes

### install_sh_harness.sh

tests/install_sh_harness.sh — exercises install.sh's resolve_repo_dir, fetch_repo and
print_restart_hint in isolation. Shebang `#!/usr/bin/env bash`. Functions: `ok`, `bad`,
`check`, `detect`, `fetch`, `hint`.

[`tests/install_sh_harness.sh`](https://github.com/quirq-ai/xo-space/blob/main/tests/install_sh_harness.sh) · code · 7502 bytes

### test_activity_state.py

Python module `test_activity_state.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `ActivityStateTests`. Contains tests.

[`tests/test_activity_state.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_activity_state.py) · code · 5986 bytes

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

[`tests/test_branding.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_branding.py) · code · 13222 bytes

### test_browser_guard.py

server.py wiring that routers/browser_guard.py depends on. Runnable as a script via `if
__name__ == '__main__'`. HTTP routes: `GET /api/anything`. Classes:
`ServerForwardingWiringTests`, `BrowserWriteGuardTests`, `ListenAddressDefaultTests`. Built
with FastAPI. Contains tests.

[`tests/test_browser_guard.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_browser_guard.py) · code · 9877 bytes

### test_claude_stream_deltas.py

The Claude Code adapter streams text live. Classes: `StreamDeltaTests`. Functions: `line`,
`forward`. Contains tests.

[`tests/test_claude_stream_deltas.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_claude_stream_deltas.py) · code · 9228 bytes

### test_codex_plugin_package.py

The marketplace must install a complete, relocatable Codex plugin bundle. Runnable as a
script via `if __name__ == '__main__'`. Classes: `CodexPluginPackageTests`. Contains tests.

[`tests/test_codex_plugin_package.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_codex_plugin_package.py) · code · 3266 bytes

### test_codex_plugin_runtime.py

Exercise the shipped plugin launcher without network, login or a live server. Runnable as a
script via `if __name__ == '__main__'`. Classes: `CodexPluginRuntimeTests`. Contains tests.

[`tests/test_codex_plugin_runtime.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_codex_plugin_runtime.py) · code · 13369 bytes

### test_codex_rollout_messages.py

Codex rollout → MessageResponse conversion. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `CodexUserTurnTests`, `CodexReasoningTests`, `CodexSessionTitleTests`.
Functions: `line`, `labelled_user_item`, `user_item`, `context_item`,
`unlabelled_user_item`, `developer_item`, `user_event`, `assistant_item`, and 4 more.
Contains tests.

[`tests/test_codex_rollout_messages.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_codex_rollout_messages.py) · code · 12581 bytes

### test_command_executor.py

Python module `test_command_executor.py`. Classes: `CommandSpecTests`, `SafeArgTests`,
`RunSpecTests`, `SkillCatalogArgvTests`, `OneExecutorTests`. Functions: `run`. Contains
tests.

[`tests/test_command_executor.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_command_executor.py) · code · 30608 bytes

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

[`tests/test_connections_docs.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_connections_docs.py) · code · 19380 bytes

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
`NameSourceTests`. Contains tests.

[`tests/test_doctor_leftovers.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_leftovers.py) · code · 25550 bytes

### test_doctor_liveness.py

Liveness: the task record and what each component leaves on disk. Classes:
`LivenessSandbox`, `WatcherTests`, `ComponentTests`, `ConnectionsTests`, `GitHubTests`,
`SchedulerTests`, `UsageTests`, `RelayTests`. Functions: `_stamp`. Contains tests.

[`tests/test_doctor_liveness.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_liveness.py) · code · 23120 bytes

### test_doctor_model.py

The report's finding shape: v1 fields unchanged, #188 fields added. Runnable as a script via
`if __name__ == '__main__'`. Classes: `FindingShapeTests`, `FindingCountsTests`. Contains
tests.

[`tests/test_doctor_model.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_model.py) · code · 2738 bytes

### test_doctor_read_findings.py

Read findings say which file, what breaks, what happens by itself, and what to do. Classes:
`ReadFindingTests`. Contains tests.

[`tests/test_doctor_read_findings.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_read_findings.py) · code · 6833 bytes

### test_doctor_reading.py

xo-doctor reads a file into exactly one outcome and never returns its content. Runnable as a
script via `if __name__ == '__main__'`. Classes: `ClassifyTests`, `MeasureTreeTests`,
`PrintableTests`, `ModelTests`, `EvidenceAndTailTests`. Contains tests.

[`tests/test_doctor_reading.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_reading.py) · code · 12384 bytes

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
`ReportSizeTests`, `ReadOnlyTests`, `HostileFileTests`. Built with FastAPI. Contains tests.

[`tests/test_doctor_run.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_run.py) · code · 17797 bytes

### test_doctor_seams.py

The private names the doctor borrows from other modules still exist. Runnable as a script
via `if __name__ == '__main__'`. Classes: `PrivateSeamsTests`. Contains tests.

[`tests/test_doctor_seams.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_doctor_seams.py) · code · 2115 bytes

### test_env_blank_shadow.py

Blank exports must not shadow real `.env` values. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `PruneBlankEnvShadowsTests`. Contains tests.

[`tests/test_env_blank_shadow.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_env_blank_shadow.py) · code · 3857 bytes

### test_files_paths.py

Path containment for `/api/files/*` (routers/cowork_agent/files.py). Runnable as a script
via `if __name__ == '__main__'`. Classes: `FilePathContainmentTests`. Built with FastAPI.
Contains tests.

[`tests/test_files_paths.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_files_paths.py) · code · 6624 bytes

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

### test_inbox_bff.py

Python module `test_inbox_bff.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `InboxRoutesTests`. Functions: `client`. Built with FastAPI. Contains tests.

[`tests/test_inbox_bff.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_inbox_bff.py) · code · 12330 bytes

### test_inbox_docs.py

Python module `test_inbox_docs.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `InboxDocsTests`, `BatchRouteAndAutoCloseDocsTests`. Functions: `read`, `squash`.
Built with FastAPI. Contains tests.

[`tests/test_inbox_docs.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_inbox_docs.py) · code · 14088 bytes

### test_inbox_feeders_issues_connections.py

The two disk-reading inbox feeders (issues, connections) and the item `url` field. Runnable
as a script via `if __name__ == '__main__'`. Classes: `_Base`, `IssuesFeederTests`,
`ConnectionsFeederTests`, `InboxUrlFieldTests`. Functions: `iso`, `ago`, `row`. Contains
tests.

[`tests/test_inbox_feeders_issues_connections.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_inbox_feeders_issues_connections.py) · code · 23239 bytes

### test_inbox_store.py

Python module `test_inbox_store.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `InboxStoreTests`, `InboxLocationTests`. Functions: `iso`, `item`. Contains tests.

[`tests/test_inbox_store.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_inbox_store.py) · code · 40747 bytes

### test_install_sh.py

install.sh — the functions that decide what the one-liner does. Runnable as a script via `if
__name__ == '__main__'`. Classes: `InstallShTests`. Contains tests.

[`tests/test_install_sh.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_install_sh.py) · code · 2199 bytes

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

Project management is local-only and fails closed on uncertain sharing. Runnable as a script
via `if __name__ == '__main__'`. Classes: `ProjectManagementTests`. Functions: `command`.
Built with FastAPI. Contains tests.

[`tests/test_project_management.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_management.py) · code · 22978 bytes

### test_project_sharing_bff.py

Python module `test_project_sharing_bff.py`. Classes: `WorkspaceIdPredicateTests`,
`RelayRoutesTests`, `ApplyServiceTests`. Functions: `client`. Built with FastAPI. Contains
tests.

[`tests/test_project_sharing_bff.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_bff.py) · code · 9472 bytes

### test_project_sharing_clone.py

Python module `test_project_sharing_clone.py`. Classes: `CloneFunctionTests`,
`AutoCloneInTickTests`. Functions: `run`. Contains tests.

[`tests/test_project_sharing_clone.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_clone.py) · code · 15322 bytes

### test_project_sharing_e2e.py

End-to-end project sharing with real git and three workspaces. Classes: `FakeSwarm`,
`ProjectSharingEndToEndTests`. Functions: `run`, `git`. Contains tests.

[`tests/test_project_sharing_e2e.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_e2e.py) · code · 11718 bytes

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

[`tests/test_project_sharing_nudge.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_nudge.py) · code · 3701 bytes

### test_project_sharing_poller.py

Python module `test_project_sharing_poller.py`. Classes: `PollerTickTests`,
`WatcherPublishTests`. Functions: `run`. Contains tests.

[`tests/test_project_sharing_poller.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_project_sharing_poller.py) · code · 9696 bytes

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

### test_quirq_catalog.py

Python module `test_quirq_catalog.py`. Runnable as a script via `if __name__ == '__main__'`.
Classes: `QuirqCatalogTests`. Contains tests.

[`tests/test_quirq_catalog.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_quirq_catalog.py) · code · 5373 bytes

### test_quirq_state_layout.py

The machine-local state root has one folder per subject. Runnable as a script via `if
__name__ == '__main__'`. Classes: `_Sandbox`, `SampleTests`, `StorePathTests`,
`MigrationTests`, `ExampleRuleTests`, `ExampleSchemaTests`, `ExampleStoreTests`. Functions:
`_sample_folders`, `_examples`, `_rel`, `_documents`, `_strings`. Contains tests.

[`tests/test_quirq_state_layout.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_quirq_state_layout.py) · code · 15512 bytes

### test_root_sessions.py

Sessions started with no project (issue #146). Runnable as a script via `if __name__ ==
'__main__'`. Classes: `_Sandbox`, `IndexWriteTests`, `ReaderTests`, `AdapterTests`.
Functions: `_row`. Contains tests.

[`tests/test_root_sessions.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_root_sessions.py) · code · 9321 bytes

### test_runtime_config.py

Python module `test_runtime_config.py`. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `RuntimeConfigTests`, `RuntimeHealthTests`. Functions: `_manifest`.
Built with FastAPI. Contains tests.

[`tests/test_runtime_config.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_runtime_config.py) · code · 19932 bytes

### test_scheduler.py

Tests for utils/commands/scheduler.py. Runnable as a script via `if __name__ == '__main__'`.
Classes: `SchedulerTests`. Functions: `_cmd`, `_job`, `_at`. Contains tests.

[`tests/test_scheduler.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_scheduler.py) · code · 27991 bytes

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

[`tests/test_space_doctor_ui.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_doctor_ui.py) · code · 4059 bytes

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

[`tests/test_space_project_sharing.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_project_sharing.py) · code · 6963 bytes

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

[`tests/test_space_wiki.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_space_wiki.py) · code · 40276 bytes

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

### test_stream_events.py

One stream vocabulary for every chat adapter. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `VocabularyTests`, `CodexParserSpeaksTheVocabulary`. Functions:
`line`. Contains tests.

[`tests/test_stream_events.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_stream_events.py) · code · 4052 bytes

### test_swarm_api.py

Python module `test_swarm_api.py`. Classes: `ClientPatch`, `TransportTests`,
`FeatureModuleTests`, `OneDoorTests`. Functions: `run`, `fake_response`. Contains tests.

[`tests/test_swarm_api.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_swarm_api.py) · code · 8042 bytes

### test_telemetry_sources.py

Telemetry source configuration: descriptors, saving paths and the per-source collection
switch the Agents tab's Configure page drives. Runnable as a script via `if __name__ ==
'__main__'`. Classes: `FakeStore`, `DescribeSourceTests`, `SaveSourceTests`,
`BuilderSwitchTests`, `RouterTests`. Functions: `_provider`. Built with FastAPI. Contains
tests.

[`tests/test_telemetry_sources.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_telemetry_sources.py) · code · 8923 bytes

### test_theme.py

Theme preferences persist independently of branding and the checkout. Runnable as a script
via `if __name__ == '__main__'`. Classes: `ThemeTests`. Built with FastAPI. Contains tests.

[`tests/test_theme.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_theme.py) · code · 8611 bytes

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

[`tests/test_uninstall_sh.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_uninstall_sh.py) · code · 3087 bytes

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

[`tests/test_xo_structure.py`](https://github.com/quirq-ai/xo-space/blob/main/tests/test_xo_structure.py) · code · 16803 bytes

### uninstall_sh_harness.sh

tests/uninstall_sh_harness.sh — exercises uninstall.sh's resolve_repo_dir, resolve_roots,
remove_path guards and remove_checkout in isolation, plus one full --yes run against a
fabricated managed install. Shebang `#!/usr/bin/env bash`. Functions: `ok`, `bad`, `check`,
`make_install`.

[`tests/uninstall_sh_harness.sh`](https://github.com/quirq-ai/xo-space/blob/main/tests/uninstall_sh_harness.sh) · code · 9689 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
