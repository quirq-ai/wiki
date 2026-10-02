"""Command-line interface for the org wiki generator."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from quirq_wiki import __version__
from quirq_wiki.generate import generate, load_repos, parse_source_map


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="quirq-wiki",
        description="Generate a human-readable wiki of public quirq-ai repositories.",
    )
    parser.add_argument("--version", action="version", version=f"%(prog)s {__version__}")
    sub = parser.add_subparsers(dest="cmd", required=True)

    list_p = sub.add_parser("list-repos", help="Print public documentable org repos.")
    list_p.add_argument("--org", default="quirq-ai")
    list_p.add_argument("--include-archived", action="store_true")
    list_p.add_argument("--repos-json", type=Path, default=None)

    gen = sub.add_parser("generate", help="Regenerate wiki markdown from public source repos.")
    gen.add_argument("--org", default="quirq-ai")
    gen.add_argument("--out", type=Path, default=Path("."))
    gen.add_argument("--repo", default=None, help="Incremental: only this repository folder.")
    gen.add_argument(
        "--changed-paths",
        default=None,
        help="Comma-separated source paths; only those folders (and root) are rewritten.",
    )
    gen.add_argument("--cache-dir", type=Path, default=None)
    gen.add_argument("--include-archived", action="store_true")
    gen.add_argument("--dry-run", action="store_true")
    gen.add_argument(
        "--source-map",
        action="append",
        default=None,
        metavar="NAME=/path",
        help="Use an existing checkout instead of cloning (repeatable).",
    )
    gen.add_argument("--repos-json", type=Path, default=None)
    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    if args.cmd == "list-repos":
        repos = load_repos(
            org=args.org,
            include_archived=args.include_archived,
            repos_json=args.repos_json,
        )
        for repo in repos:
            kind = "fork" if repo.fork else "source"
            archived = " archived" if repo.archived else ""
            print(f"{repo.name}\t{kind}{archived}\t{repo.html_url}")
        return 0

    if args.cmd == "generate":
        changed = []
        if args.changed_paths:
            changed = [p.strip() for p in args.changed_paths.split(",") if p.strip()]
        try:
            source_map = parse_source_map(args.source_map)
        except ValueError as exc:
            parser.error(str(exc))
        result = generate(
            wiki_root=args.out,
            org=args.org,
            repo_name=args.repo,
            changed_paths=changed or None,
            cache_dir=args.cache_dir,
            include_archived=args.include_archived,
            dry_run=args.dry_run,
            source_map=source_map,
            repos_json=args.repos_json,
        )
        mode = "dry-run" if args.dry_run else "wrote"
        print(
            f"{mode} {len(result.written)} path(s) for {len(result.repos)} public repo(s)",
            file=sys.stderr,
        )
        if result.removed:
            print("removed stale folders: " + ", ".join(result.removed), file=sys.stderr)
        return 0

    parser.error(f"unknown command {args.cmd}")
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
