"""README repo map rendering."""

from quirq_wiki.catalog import mermaid_node_id, render_readme_repo_map
from quirq_wiki.github_api import RepoInfo


def _repo(name: str, *, fork: bool = False) -> RepoInfo:
    return RepoInfo(
        name=name,
        description=None,
        default_branch="main",
        html_url=f"https://github.com/quirq-ai/{name}",
        clone_url=f"https://github.com/quirq-ai/{name}.git",
        fork=fork,
        archived=False,
        private=False,
        pushed_at=None,
    )


def test_mermaid_ids_are_safe():
    assert mermaid_node_id(".github") == "github"
    assert mermaid_node_id("xo-cowork-api") == "xo_cowork_api"
    assert mermaid_node_id("galileo") == "galileo"


def test_readme_map_is_diagram_not_table():
    text = render_readme_repo_map([_repo("galileo"), _repo("xo-space", fork=True)])
    assert "```mermaid" in text
    assert "[`galileo`](galileo/_index.md)" in text
    assert "[`xo-space`](xo-space/_index.md)*" in text
    assert "| Repository |" not in text
    assert "click galileo" in text
