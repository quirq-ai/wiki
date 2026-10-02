"""Private repos must never enter the documentable list."""

from quirq_wiki.github_api import repos_from_payloads


def test_private_and_wiki_filtered():
    repos = repos_from_payloads(
        [
            {
                "name": "public-one",
                "description": "ok",
                "default_branch": "main",
                "html_url": "https://github.com/quirq-ai/public-one",
                "clone_url": "https://github.com/quirq-ai/public-one.git",
                "fork": False,
                "archived": False,
                "private": False,
            },
            {
                "name": "hidden",
                "description": "nope",
                "default_branch": "main",
                "html_url": "https://github.com/quirq-ai/hidden",
                "clone_url": "https://github.com/quirq-ai/hidden.git",
                "fork": False,
                "archived": False,
                "private": True,
            },
            {
                "name": "wiki",
                "description": "self",
                "default_branch": "main",
                "html_url": "https://github.com/quirq-ai/wiki",
                "clone_url": "https://github.com/quirq-ai/wiki.git",
                "fork": False,
                "archived": False,
                "private": False,
            },
            {
                "name": "old",
                "description": "archived",
                "default_branch": "main",
                "html_url": "https://github.com/quirq-ai/old",
                "clone_url": "https://github.com/quirq-ai/old.git",
                "fork": False,
                "archived": True,
                "private": False,
            },
            {
                "name": "xo-space",
                "description": "fork",
                "default_branch": "main",
                "html_url": "https://github.com/quirq-ai/xo-space",
                "clone_url": "https://github.com/quirq-ai/xo-space.git",
                "fork": True,
                "archived": False,
                "private": False,
            },
        ]
    )
    names = [r.name for r in repos]
    assert names == ["public-one", "xo-space"]


def test_include_archived():
    repos = repos_from_payloads(
        [
            {
                "name": "old",
                "description": "archived",
                "default_branch": "main",
                "html_url": "https://github.com/quirq-ai/old",
                "clone_url": "https://github.com/quirq-ai/old.git",
                "fork": False,
                "archived": True,
                "private": False,
            }
        ],
        include_archived=True,
    )
    assert [r.name for r in repos] == ["old"]
