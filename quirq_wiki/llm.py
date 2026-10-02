"""Optional LLM rewrite. Offline heuristic summaries are always the default."""

from __future__ import annotations

import json
import os
import urllib.error
import urllib.request

from quirq_wiki.summarize import _wrap


def llm_enabled() -> bool:
    return bool(_provider())


def _provider() -> tuple[str, str] | None:
    """Return (provider, api_key) if a supported env var is set."""
    anthropic = os.environ.get("ANTHROPIC_API_KEY", "").strip()
    if anthropic:
        return "anthropic", anthropic
    openai = os.environ.get("OPENAI_API_KEY", "").strip() or os.environ.get("QUIRQ_WIKI_LLM_KEY", "").strip()
    if openai:
        return "openai", openai
    return None


def rewrite_summary(paragraph: str, *, filename: str, excerpt: str) -> str:
    """Rewrite a heuristic paragraph. Falls back to the original on any error."""
    provider = _provider()
    if not provider:
        return paragraph
    name, key = provider
    prompt = (
        "Rewrite the following file description as one dense paragraph of 3–5 short "
        "sentences for an engineer. Mention purpose, role in the repo, and notable "
        "exports or entrypoints. Do not invent APIs. Do not quote secrets or env values. "
        f"Filename: {filename}\n\nCurrent summary:\n{paragraph}\n\nFile excerpt:\n{excerpt[:4000]}"
    )
    try:
        if name == "anthropic":
            text = _anthropic(key, prompt)
        else:
            text = _openai(key, prompt)
        return _wrap(text) if text.strip() else paragraph
    except (urllib.error.URLError, TimeoutError, RuntimeError, json.JSONDecodeError, OSError):
        return paragraph


def _openai(key: str, prompt: str) -> str:
    body = json.dumps(
        {
            "model": os.environ.get("QUIRQ_WIKI_LLM_MODEL", "gpt-4o-mini"),
            "temperature": 0,
            "messages": [
                {"role": "system", "content": "You write concise engineering wiki paragraphs."},
                {"role": "user", "content": prompt},
            ],
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=body,
        headers={
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json",
            "User-Agent": "quirq-wiki-generator",
        },
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=45) as response:
        payload = json.loads(response.read().decode("utf-8"))
    return payload["choices"][0]["message"]["content"]


def _anthropic(key: str, prompt: str) -> str:
    body = json.dumps(
        {
            "model": os.environ.get("QUIRQ_WIKI_LLM_MODEL", "claude-haiku-4-5"),
            "max_tokens": 400,
            "temperature": 0,
            "messages": [{"role": "user", "content": prompt}],
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=body,
        headers={
            "x-api-key": key,
            "anthropic-version": "2023-06-01",
            "Content-Type": "application/json",
            "User-Agent": "quirq-wiki-generator",
        },
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=45) as response:
        payload = json.loads(response.read().decode("utf-8"))
    parts = payload.get("content") or []
    return "".join(p.get("text", "") for p in parts if isinstance(p, dict))
