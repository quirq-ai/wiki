"""Skip rules and directory walking."""

from pathlib import Path

from quirq_wiki.scan import classify_file, scan_tree, should_skip_dir


def test_skip_dir_names():
    assert should_skip_dir("node_modules")
    assert should_skip_dir(".git")
    assert should_skip_dir("__pycache__")
    assert should_skip_dir("foo.egg-info")
    assert not should_skip_dir("src")
    assert not should_skip_dir(".github")
    assert not should_skip_dir(".agents")


def test_classify_lockfile_and_binary():
    assert classify_file("pnpm-lock.yaml", 80_000) == "lockfile"
    assert classify_file("hero.png", 1200) == "binary"
    assert classify_file("server.py", 4000) == "code"
    assert classify_file("empty.txt", 0) == "empty"
    assert classify_file("blob.txt", 300_000) == "huge"


def test_scan_tree_skips_vendored_and_lists_nested(tmp_path: Path):
    (tmp_path / "README.md").write_text("# hi\n")
    src = tmp_path / "src" / "utils"
    src.mkdir(parents=True)
    (src / "helpers.py").write_text("def helper():\n    return 1\n")
    (tmp_path / "src" / "app.py").write_text("from .utils.helpers import helper\n")
    nested = tmp_path / "node_modules" / "left-pad"
    nested.mkdir(parents=True)
    (nested / "index.js").write_text("module.exports = 1\n")
    (tmp_path / "assets").mkdir()
    (tmp_path / "assets" / "logo.png").write_bytes(b"\x89PNG\r\n")

    folders = scan_tree(tmp_path)
    assert "" in folders
    assert "src" in folders
    assert "src/utils" in folders
    assert "assets" in folders
    assert "node_modules" not in folders
    root_names = {f.name for f in folders[""].files}
    assert root_names == {"README.md"}
    assert {f.name for f in folders["src"].files} == {"app.py"}
    assert {f.name for f in folders["src/utils"].files} == {"helpers.py"}
    assert folders["assets"].files[0].kind == "binary"
