"""Tests for source-folder → wiki filename encoding."""

from quirq_wiki.layout import dirs_for_changed_paths, encode_folder, normalize_relpath


def test_root_encodes_to_root_md():
    assert encode_folder("") == "_root.md"
    assert encode_folder(".") == "_root.md"
    assert encode_folder("/") == "_root.md"


def test_nested_slashes_become_dunder():
    assert encode_folder("src") == "src.md"
    assert encode_folder("src/utils") == "src__utils.md"
    assert encode_folder("content/docs/(operate)") == "content__docs__(operate).md"


def test_normalize_strips_slashes():
    assert normalize_relpath("src/utils/") == "src/utils"
    assert normalize_relpath("./src") == "src"


def test_changed_paths_include_parent_folders_and_root():
    folders = dirs_for_changed_paths(["src/utils/helpers.py", "README.md"])
    assert folders is not None
    assert "" in folders
    assert "src" in folders
    assert "src/utils" in folders


def test_empty_changed_paths_means_all():
    assert dirs_for_changed_paths([]) is None
