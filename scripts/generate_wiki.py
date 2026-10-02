#!/usr/bin/env python3
"""Thin wrapper so `python scripts/generate_wiki.py` matches `python -m quirq_wiki generate`."""

from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from quirq_wiki.cli import main

if __name__ == "__main__":
    argv = sys.argv[1:]
    if not argv or argv[0].startswith("-"):
        argv = ["generate", *argv]
    raise SystemExit(main(argv))
