<!-- quirq-wiki-generated repo=website dir=scripts/hogfm -->

# website / scripts/hogfm

Source: [scripts/hogfm](https://github.com/quirq-ai/website/tree/main/scripts/hogfm) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .env.example

Environment template `.env.example` (values omitted from the wiki).
=============================================================================. Keys:
`ELEVENLABS_API_KEY`, `ELEVENLABS_VOICE_ID`, `S3_BUCKET`, `AWS_REGION`. Copy to `.env`
locally; never commit real credentials.

[`scripts/hogfm/.env.example`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/.env.example) · code · 1188 bytes

### .python-version

Extensionless file `.python-version`. 3.12.

[`scripts/hogfm/.python-version`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/.python-version) · other · 5 bytes

### README.md

The project README (“HogFM”). PostHog's audio generation toolkit.

[`scripts/hogfm/README.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/README.md) · code · 2237 bytes

### pyproject.toml

TOML config `pyproject.toml`. Sections: `project`, `project.scripts`, `tool.uv`, `build-
system`, `tool.hatch.build.targets.wheel`. Python project metadata and tool configuration.

[`scripts/hogfm/pyproject.toml`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/pyproject.toml) · code · 590 bytes

### sync_s3_to_podbean.py

Sync podcast episodes from S3 to Podbean. Runnable as a script via `if __name__ ==
'__main__'`. Functions: `get_access_token`, `list_s3_audio_files`, `get_podbean_episodes`,
`get_presigned_upload_url`, `upload_file_to_presigned_url`, `delete_episode`,
`save_episode`, `download_s3_file`, and 8 more.

[`scripts/hogfm/sync_s3_to_podbean.py`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/sync_s3_to_podbean.py) · code · 18507 bytes

### uv.lock

Package-manager lockfile (uv.lock, 67.7 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`scripts/hogfm/uv.lock`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/uv.lock) · lockfile · 69356 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
