<!-- quirq-wiki-generated repo=website dir=scripts/hogfm/handbook -->

# website / scripts/hogfm/handbook

Source: [scripts/hogfm/handbook](https://github.com/quirq-ai/website/tree/main/scripts/hogfm/handbook) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ALLOWED_FILES_MODE.md

Markdown page “Allowed files mode for cron jobs”. The --allowed-only mode processes a
hardcoded list of allowed handbook files. This is designed for cron jobs where you want to:
- Version control the list of files to process - Avoid external file dependencies - Have a
predictable, repeatable process - Automatically generate and upload specific handbook pages.

[`scripts/hogfm/handbook/ALLOWED_FILES_MODE.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/ALLOWED_FILES_MODE.md) · code · 11739 bytes

### CHANGE_DETECTION.md

Markdown page “Change detection for cost savings”. The handbook audio generation system now
includes automatic change detection to avoid regenerating audio when content hasn't changed.
This saves significant costs on daily cron runs.

[`scripts/hogfm/handbook/CHANGE_DETECTION.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/CHANGE_DETECTION.md) · code · 10212 bytes

### COST_CALCULATION_UPDATE.md

Markdown page “Cost calculation update: Duration-based pricing”. The cost tracking system
now calculates costs based on actual audio duration instead of character count.

[`scripts/hogfm/handbook/COST_CALCULATION_UPDATE.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/COST_CALCULATION_UPDATE.md) · code · 6371 bytes

### COST_TRACKING.md

Markdown page “Cost tracking for handbook audio generation”. This system now tracks the cost
of audio generation per handbook page using the ElevenLabs API.

[`scripts/hogfm/handbook/COST_TRACKING.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/COST_TRACKING.md) · code · 5098 bytes

### DIRECTORY_MODE.md

Markdown page “Directory mode for handbook audio generation”. You can now generate audio for
all files in a specific directory using the --dir flag.

[`scripts/hogfm/handbook/DIRECTORY_MODE.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/DIRECTORY_MODE.md) · code · 5995 bytes

### IMPLEMENTATION_SUMMARY.md

Markdown page “Cost tracking implementation summary”. I've successfully added cost tracking
functionality to the handbook audio generation system. Here's what changed.

[`scripts/hogfm/handbook/IMPLEMENTATION_SUMMARY.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/IMPLEMENTATION_SUMMARY.md) · code · 7146 bytes

### QUICKSTART.md

Markdown page “Quick start guide”. Navigate to the hogfm project and install dependencies
with uv.

[`scripts/hogfm/handbook/QUICKSTART.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/QUICKSTART.md) · code · 2581 bytes

### QUICK_START_COST_TRACKING.md

Markdown page “Quick start: Cost tracking”. ✅ Track cost of audio generation per handbook
page ✅ Output cost metric file alongside audio and text files ✅ Research what data
ElevenLabs SDK returns ✅ Capture request IDs and usage information.

[`scripts/hogfm/handbook/QUICK_START_COST_TRACKING.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/QUICK_START_COST_TRACKING.md) · code · 4377 bytes

### README.md

The project README (“Handbook audio generation (modular)”). This module (part of the hogfm
project) generates audio narration of handbook pages using ElevenLabs.

[`scripts/hogfm/handbook/README.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/README.md) · code · 12378 bytes

### S3_SETUP.md

Markdown page “S3 Upload Setup Guide”. This guide explains how to configure and use S3
uploads for handbook audio files.

[`scripts/hogfm/handbook/S3_SETUP.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/S3_SETUP.md) · code · 7255 bytes

### S3_UPLOAD_UPDATE.md

Markdown page “S3 upload enhancement: All files now uploaded”. The S3 upload feature now
uploads all three files for each handbook page, not just the audio file.

[`scripts/hogfm/handbook/S3_UPLOAD_UPDATE.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/S3_UPLOAD_UPDATE.md) · code · 6422 bytes

### TEST_RESULTS.md

Markdown page “Handbook Audio Processing Test Results”. Date: 2025-01-20 Status: ✅ All tests
passing Files tested: 7 diverse handbook files.

[`scripts/hogfm/handbook/TEST_RESULTS.md`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/TEST_RESULTS.md) · code · 4757 bytes

### __init__.py

Handbook Audio Generation Module.

[`scripts/hogfm/handbook/__init__.py`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/__init__.py) · code · 904 bytes

### audio_saver.py

Save generated audio files to disk Functions: `get_audio_duration_seconds`,
`save_audio_file`, `get_output_path`, `audio_file_exists`, `save_text_file`,
`save_cost_file`.

[`scripts/hogfm/handbook/audio_saver.py`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/audio_saver.py) · code · 8113 bytes

### elevenlabs_client.py

ElevenLabs API client for generating audio using the official SDK Functions:
`check_api_available`, `split_text_into_sentences`, `split_text_into_chunks_by_sentences`,
`split_text_into_chunks`, `generate_audio`, `get_voice_info`.

[`scripts/hogfm/handbook/elevenlabs_client.py`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/elevenlabs_client.py) · code · 13042 bytes

### file_selector.py

Select and discover handbook files for processing Functions: `find_all_handbook_files`,
`find_handbook_file_by_pattern`, `find_handbook_files_in_directory`,
`get_handbook_file_info`.

[`scripts/hogfm/handbook/file_selector.py`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/file_selector.py) · code · 2944 bytes

### generate.py

Main script to generate handbook audio files Runnable as a script via `if __name__ ==
'__main__'`. Functions: `process_single_file`, `main`.

[`scripts/hogfm/handbook/generate.py`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/generate.py) · code · 15233 bytes

### markdown_processor.py

Process markdown/MDX files and convert to speech-friendly text Functions:
`strip_frontmatter`, `extract_title_from_frontmatter`, `check_skip_audio`,
`replace_tables_with_description`, `markdown_to_speech_text`,
`replace_code_block_with_hint`, `replace_image_with_hint`, `describe_special_components`,
and 10 more.

[`scripts/hogfm/handbook/markdown_processor.py`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/markdown_processor.py) · code · 13139 bytes

### regenerate_costs.py

Regenerate cost files for existing audio files with accurate duration-based costs Runnable
as a script via `if __name__ == '__main__'`. Functions: `regenerate_cost_for_file`, `main`.

[`scripts/hogfm/handbook/regenerate_costs.py`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/regenerate_costs.py) · code · 1835 bytes

### s3_uploader.py

Upload handbook audio files to S3 Functions: `check_s3_available`, `upload_to_s3`,
`download_text_from_s3`, `delete_from_s3`, `file_exists_in_s3`, `get_s3_url`,
`list_s3_files`.

[`scripts/hogfm/handbook/s3_uploader.py`](https://github.com/quirq-ai/website/blob/main/scripts/hogfm/handbook/s3_uploader.py) · code · 9697 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
