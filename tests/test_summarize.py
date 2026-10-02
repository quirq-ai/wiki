"""Content-based summarizer quality and safety checks."""

from pathlib import Path

from quirq_wiki.scan import FileInfo
from quirq_wiki.summarize import summarize_file


def _info(name: str, relpath: str, size: int, kind: str) -> FileInfo:
    return FileInfo(name=name, relpath=relpath, size=size, kind=kind)


def test_python_uses_docstring_and_exports(tmp_path: Path):
    path = tmp_path / "server.py"
    path.write_text(
        '''"""Euler Server. FastAPI server that hosts the Euler watcher."""
from fastapi import FastAPI
app = FastAPI()

@app.get("/health")
async def health():
    return {"ok": True}

def load_timeline():
    """Reload events."""
    return []
'''
    )
    text = summarize_file(tmp_path, _info("server.py", "server.py", path.stat().st_size, "code"))
    assert "Euler" in text or "FastAPI" in text
    assert "health" in text.lower() or "GET /health" in text
    assert len(text.splitlines()) >= 2
    assert len(text.splitlines()) <= 5


def test_js_shebang_jsdoc(tmp_path: Path):
    path = tmp_path / "server.mjs"
    path.write_text(
        """#!/usr/bin/env node
/**
 * galileo, the inspector of a space. It keeps a list of sources.
 *
 *   localhost:4100  telescope
 */
export function createGalileo() {}
export function logSource() {}
"""
    )
    text = summarize_file(tmp_path, _info("server.mjs", "server.mjs", path.stat().st_size, "code"))
    assert "inspector of a space" in text
    assert "#!/usr/bin" not in text
    assert "createGalileo" in text


def test_ts_slash_comments_after_imports(tmp_path: Path):
    path = tmp_path / "search.ts"
    path.write_text(
        """import MiniSearch from "minisearch";

// Server-side full-text search over the index.
export function search() {}
export function suggest() {}
"""
    )
    text = summarize_file(tmp_path, _info("search.ts", "search.ts", path.stat().st_size, "code"))
    assert "full-text search" in text
    assert not text.strip().startswith("//")


def test_env_file_lists_keys_not_values(tmp_path: Path):
    path = tmp_path / ".env.example"
    path.write_text(
        "# XO Space: environment variables\n"
        "OPENAI_API_KEY=sk-secret-value-do-not-leak\n"
        "HOST=0.0.0.0\n"
        "PORT=5002\n"
    )
    text = summarize_file(
        tmp_path, _info(".env.example", ".env.example", path.stat().st_size, "code")
    )
    assert "OPENAI_API_KEY" in text
    assert "HOST" in text
    assert "sk-secret-value-do-not-leak" not in text
    assert "0.0.0.0" not in text


def test_package_json_scripts(tmp_path: Path):
    path = tmp_path / "package.json"
    path.write_text(
        '{"name":"galileo","description":"The inspector of a space.","scripts":{"start":"node src/server.mjs","test":"node --test"}}'
    )
    text = summarize_file(
        tmp_path, _info("package.json", "package.json", path.stat().st_size, "code")
    )
    assert "galileo" in text
    assert "inspector" in text
    assert "start" in text


def test_markdown_frontmatter(tmp_path: Path):
    path = tmp_path / "quickstart.mdx"
    path.write_text(
        "---\ntitle: \"Quickstart\"\ndescription: \"Verify a Cowork API instance.\"\n---\n\n# Hello\n\nBody text.\n"
    )
    text = summarize_file(
        tmp_path, _info("quickstart.mdx", "quickstart.mdx", path.stat().st_size, "code")
    )
    assert "Quickstart" in text
    assert "Cowork API" in text or "MDX" in text


def test_binary_is_lightly_noted(tmp_path: Path):
    path = tmp_path / "hero.png"
    path.write_bytes(b"\x89PNG" + b"\x00" * 50)
    text = summarize_file(tmp_path, _info("hero.png", "hero.png", path.stat().st_size, "binary"))
    assert "Binary" in text
    assert "PNG" in text


def test_lockfile_note(tmp_path: Path):
    path = tmp_path / "pnpm-lock.yaml"
    path.write_text("lockfileVersion: 9\n")
    text = summarize_file(
        tmp_path, _info("pnpm-lock.yaml", "pnpm-lock.yaml", path.stat().st_size, "lockfile")
    )
    assert "lockfile" in text.lower()
