"""End-to-end generation against a fixture tree (no network)."""

import json
from pathlib import Path

from quirq_wiki.generate import generate
from quirq_wiki.layout import encode_folder


def _write_mini_repo(root: Path) -> None:
    (root / "README.md").write_text("# Mini\n\nA tiny fixture used in wiki generator tests.\n")
    (root / "LICENSE").write_text("MIT License\n\nCopyright (c) 2026\n")
    src = root / "src" / "utils"
    src.mkdir(parents=True)
    (root / "src" / "app.py").write_text(
        '''"""Application entry for the mini fixture."""
def main():
    """Run the app."""
    print("ok")

if __name__ == "__main__":
    main()
'''
    )
    (src / "helpers.py").write_text(
        '''"""Helpers used by app.py."""
def ident(x):
    return x
'''
    )
    assets = root / "assets"
    assets.mkdir()
    (assets / "logo.png").write_bytes(b"\x89PNG\r\n\x1a\n" + b"\x00" * 16)
    nested = root / "node_modules" / "pkg"
    nested.mkdir(parents=True)
    (nested / "index.js").write_text("module.exports = 1\n")


def test_generate_offline_layout(tmp_path: Path):
    source = tmp_path / "mini-src"
    source.mkdir()
    _write_mini_repo(source)
    wiki = tmp_path / "wiki"
    wiki.mkdir()
    repos_json = tmp_path / "repos.json"
    repos_json.write_text(
        json.dumps(
            [
                {
                    "name": "mini",
                    "description": "Fixture",
                    "default_branch": "main",
                    "html_url": "https://github.com/quirq-ai/mini",
                    "clone_url": "https://github.com/quirq-ai/mini.git",
                    "fork": False,
                    "archived": False,
                    "private": False,
                    "pushed_at": "2026-10-02T00:00:00Z",
                    "language": "Python",
                },
                {
                    "name": "wiki",
                    "description": "should be excluded",
                    "default_branch": "main",
                    "html_url": "https://github.com/quirq-ai/wiki",
                    "clone_url": "https://github.com/quirq-ai/wiki.git",
                    "fork": False,
                    "archived": False,
                    "private": False,
                    "pushed_at": None,
                },
                {
                    "name": "secret",
                    "description": "must never appear",
                    "default_branch": "main",
                    "html_url": "https://github.com/quirq-ai/secret",
                    "clone_url": "https://github.com/quirq-ai/secret.git",
                    "fork": False,
                    "archived": False,
                    "private": True,
                    "pushed_at": None,
                },
            ]
        )
    )

    result = generate(
        wiki_root=wiki,
        repos_json=repos_json,
        source_map={"mini": source},
    )
    names = {r.name for r in result.repos}
    assert names == {"mini"}
    assert not (wiki / "wiki").exists()
    assert not (wiki / "secret").exists()
    assert not (wiki / "mini" / "node_modules.md").exists()

    root = wiki / "mini" / "_root.md"
    assert root.exists()
    body = root.read_text()
    assert "### README.md" in body
    assert "### LICENSE" in body
    assert "mini fixture" in body.lower() or "Mini" in body

    assert (wiki / "mini" / "src.md").exists()
    assert (wiki / "mini" / encode_folder("src/utils")).exists()
    assert "### helpers.py" in (wiki / "mini" / "src__utils.md").read_text()
    assert "### app.py" in (wiki / "mini" / "src.md").read_text()
    # Parent must not describe nested files.
    assert "helpers.py" not in (wiki / "mini" / "src.md").read_text()
    assets = (wiki / "mini" / "assets.md").read_text()
    assert "### logo.png" in assets
    assert "Binary" in assets

    readme = (wiki / "README.md").read_text()
    assert "[`mini/`](mini/_index.md)" in readme or "[`mini`](mini/_index.md)" in readme
    assert "```mermaid" in readme
    assert "quirq-ai/secret" not in readme
    assert "| **secret**" not in readme
    index = (wiki / "INDEX.md").read_text()
    assert "[`mini/`](mini/_index.md)" in index
    assert (wiki / "mini" / "_index.md").exists()


def test_github_source_repo_keeps_wiki_workflows(tmp_path: Path):
    """Documenting the org `.github` repo must not wipe this wiki's Actions."""
    source = tmp_path / "src-github"
    source.mkdir()
    (source / "README.md").write_text("# org profile\n")
    (source / "profile").mkdir()
    (source / "profile" / "README.md").write_text("# profile\nHello.\n")
    wiki = tmp_path / "wiki"
    (wiki / ".github" / "workflows").mkdir(parents=True)
    (wiki / ".github" / "workflows" / "wiki-sync.yml").write_text("name: keep-me\n")
    repos_json = tmp_path / "repos.json"
    repos_json.write_text(
        json.dumps(
            [
                {
                    "name": ".github",
                    "description": "org files",
                    "default_branch": "main",
                    "html_url": "https://github.com/quirq-ai/.github",
                    "clone_url": "https://github.com/quirq-ai/.github.git",
                    "fork": False,
                    "archived": False,
                    "private": False,
                    "pushed_at": None,
                }
            ]
        )
    )
    generate(
        wiki_root=wiki,
        repos_json=repos_json,
        source_map={".github": source},
    )
    assert (wiki / ".github" / "workflows" / "wiki-sync.yml").read_text() == "name: keep-me\n"
    assert (wiki / ".github" / "_root.md").exists()
    assert (wiki / ".github" / "profile.md").exists()


def test_incremental_only_one_repo(tmp_path: Path):
    wiki = tmp_path / "wiki"
    wiki.mkdir()
    repos_json = tmp_path / "repos.json"
    repos_json.write_text(
        json.dumps(
            [
                {
                    "name": "alpha",
                    "description": "A",
                    "default_branch": "main",
                    "html_url": "https://github.com/quirq-ai/alpha",
                    "clone_url": "https://github.com/quirq-ai/alpha.git",
                    "fork": False,
                    "archived": False,
                    "private": False,
                    "pushed_at": None,
                },
                {
                    "name": "beta",
                    "description": "B",
                    "default_branch": "main",
                    "html_url": "https://github.com/quirq-ai/beta",
                    "clone_url": "https://github.com/quirq-ai/beta.git",
                    "fork": False,
                    "archived": False,
                    "private": False,
                    "pushed_at": None,
                },
            ]
        )
    )
    alpha = tmp_path / "alpha"
    beta = tmp_path / "beta"
    alpha.mkdir()
    beta.mkdir()
    (alpha / "a.py").write_text("'''alpha'''\n")
    (beta / "b.py").write_text("'''beta'''\n")

    generate(
        wiki_root=wiki,
        repos_json=repos_json,
        source_map={"alpha": alpha, "beta": beta},
        repo_name="alpha",
    )
    assert (wiki / "alpha" / "_root.md").exists()
    assert not (wiki / "beta").exists()
    readme = (wiki / "README.md").read_text()
    assert "alpha" in readme and "beta" in readme
