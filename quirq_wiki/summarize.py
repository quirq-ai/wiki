"""Deterministic, content-based file summaries. No paid API required."""

from __future__ import annotations

import ast
import json
import re
import textwrap
from pathlib import Path

from quirq_wiki.constants import MAX_READ_BYTES
from quirq_wiki.scan import FileInfo

WRAP_WIDTH = 92
TARGET_MIN_LINES = 3
TARGET_MAX_LINES = 5

_FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.S)
_HEADING_RE = re.compile(r"^#{1,6}\s+(.+)$", re.M)
_JS_BLOCK_COMMENT_RE = re.compile(r"^\s*/\*\*?(.*?)\*/", re.S)
_HASH_HEADER_RE = re.compile(r"^(?:#!.+\n)?(?:#.*\n)+")
_EXPORT_FN_RE = re.compile(
    r"^\s*export\s+(?:default\s+)?(?:async\s+)?function\s+(\w+)", re.M
)
_EXPORT_CLASS_RE = re.compile(r"^\s*export\s+(?:default\s+)?class\s+(\w+)", re.M)
_EXPORT_CONST_RE = re.compile(
    r"^\s*export\s+(?:default\s+)?(?:const|let|var|type|interface|enum)\s+(\w+)", re.M
)
_NAMED_EXPORT_RE = re.compile(r"^\s*export\s*\{([^}]+)\}", re.M)
_FASTAPI_ROUTE_RE = re.compile(
    r"@(?:app|router)\.(get|post|put|patch|delete|head|options|websocket)\(\s*['\"]([^'\"]+)['\"]",
    re.I,
)
_ENV_LINE_RE = re.compile(r"^(?:export\s+)?([A-Z][A-Z0-9_]+)\s*=", re.M)
_HTML_TAG_RE = re.compile(r"<[^>]+>")


def summarize_file(root: Path, info: FileInfo) -> str:
    """Return a 3–5 line paragraph (or a short skip note) for one source file."""
    if info.kind == "binary":
        ext = Path(info.name).suffix.lstrip(".").upper() or "binary"
        return _wrap(
            f"Binary {ext} asset ({_size_label(info.size)}). Left unsummarized; open "
            f"the file in the source repository if you need the actual bytes. Wiki pages "
            f"do not copy images, fonts, archives, or other generated blobs."
        )
    if info.kind == "lockfile":
        return _wrap(
            f"Package-manager lockfile ({info.name}, {_size_label(info.size)}). It pins "
            f"the exact dependency tree for reproducible installs. Treat this as a generated "
            f"blob: read the companion manifest (`package.json`, `pyproject.toml`, or "
            f"`requirements.txt`) for declared dependencies instead of this file."
        )
    if info.kind == "huge":
        excerpt = _read_text(root / info.relpath, limit=min(MAX_READ_BYTES, 8 * 1024))
        hint = _first_prose(excerpt) if excerpt else ""
        extra = f" Opening lines: {hint}" if hint else ""
        return _wrap(
            f"Large text file ({_size_label(info.size)}), over the generator's "
            f"{HUGE_LABEL} parse cap. Only a prefix was inspected.{extra} "
            f"See the source path `{info.relpath}` for the full content."
        )
    if info.kind == "empty":
        return _wrap(
            f"Empty file `{info.name}` in the source tree. It is present (often as a "
            f"placeholder or `.gitkeep` stand-in) but contains no content to describe."
        )

    path = root / info.relpath
    text = _read_text(path)
    if text is None:
        return _wrap(
            f"`{info.name}` could not be read as UTF-8 text "
            f"({_size_label(info.size)}). Treating it as a non-text asset and skipping "
            f"a structural summary. Open the source file directly if you need its contents."
        )

    ext = Path(info.name).suffix.lower()
    name = info.name
    lower = name.lower()

    if lower in {".env", ".env.example", ".example.env"} or lower.endswith(".env") or lower.endswith(".env.example"):
        paragraph = _summarize_env(name, text)
    elif ext == ".py":
        paragraph = _summarize_python(name, text)
    elif ext in {".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".mts", ".cts"}:
        paragraph = _summarize_js(name, text, ext)
    elif ext in {".md", ".mdx"}:
        paragraph = _summarize_markdown(name, text)
    elif ext == ".json":
        paragraph = _summarize_json(name, text)
    elif ext in {".yml", ".yaml"}:
        paragraph = _summarize_yaml(name, text)
    elif ext in {".sh", ".bash", ".zsh"}:
        paragraph = _summarize_shell(name, text)
    elif ext in {".toml", ".ini", ".cfg"}:
        paragraph = _summarize_ini(name, text, ext)
    elif ext in {".css", ".scss"}:
        paragraph = _summarize_css(name, text)
    elif ext == ".svg":
        paragraph = _summarize_svg(name, text, info.size)
    elif ext in {".html", ".htm"}:
        paragraph = _summarize_html(name, text)
    elif name in {"Dockerfile", "Dockerfile.dev"} or name.startswith("Dockerfile"):
        paragraph = _summarize_dockerfile(name, text)
    elif name in {"LICENSE", "LICENSE.md", "COPYING"}:
        paragraph = _summarize_license(text)
    elif name in {".gitignore", ".dockerignore", ".npmignore"}:
        paragraph = _summarize_ignore(name, text)
    else:
        paragraph = _summarize_generic(name, text, ext)

    return _wrap(paragraph)


HUGE_LABEL = "256 KB"


def _size_label(size: int) -> str:
    if size < 1024:
        return f"{size} bytes"
    if size < 1024 * 1024:
        return f"{size / 1024:.1f} KB"
    return f"{size / (1024 * 1024):.1f} MB"


def _read_text(path: Path, limit: int = MAX_READ_BYTES) -> str | None:
    try:
        data = path.read_bytes()[:limit]
    except OSError:
        return None
    if not data:
        return ""
    if b"\x00" in data[:1024]:
        return None
    try:
        return data.decode("utf-8")
    except UnicodeDecodeError:
        return data.decode("utf-8", errors="replace")


def _wrap(paragraph: str) -> str:
    text = re.sub(r"\s+", " ", paragraph).strip()
    if not text:
        text = "No summary could be derived from this file's contents."
    if text[-1] not in ".!?":
        text += "."
    wrapped = textwrap.fill(text, width=WRAP_WIDTH)
    lines = wrapped.splitlines()
    if len(lines) > TARGET_MAX_LINES:
        # Keep five full lines and end on a sentence boundary when possible.
        clipped = " ".join(lines[:TARGET_MAX_LINES])
        if ". " in clipped:
            parts = clipped.split(". ")
            rebuilt = ". ".join(parts[:-1]).rstrip(".") + "."
            if rebuilt:
                return textwrap.fill(rebuilt, width=WRAP_WIDTH)
        return textwrap.fill(clipped.rstrip(" ,;:"), width=WRAP_WIDTH)
    return wrapped


def _strip_shebang(text: str) -> str:
    if text.startswith("#!"):
        nl = text.find("\n")
        return text[nl + 1 :] if nl != -1 else ""
    return text


def _first_prose(text: str, *, max_chars: int = 420) -> str:
    stripped = text.strip()
    if stripped.startswith("---"):
        match = _FRONTMATTER_RE.match(stripped)
        if match:
            stripped = stripped[match.end() :]
    stripped = _HTML_TAG_RE.sub("", stripped)
    lines: list[str] = []
    for raw in stripped.splitlines():
        line = raw.strip()
        if not line:
            if lines:
                break
            continue
        if line.startswith("```") or line.startswith("~~~"):
            if lines:
                break
            continue
        if line.startswith("<") and line.endswith(">"):
            continue
        if set(line) <= set("=-*_~`# "):
            continue
        if line.startswith("![") or line.startswith("[!["):
            continue
        if line.startswith("#"):
            # Headings are titles, not the descriptive paragraph.
            continue
        if line.startswith("//"):
            line = line[2:].strip()
        if line.startswith("* ") and not lines:
            line = line[2:].strip()
        line = re.sub(r"\*\*(.+?)\*\*", r"\1", line)
        line = re.sub(r"`([^`]+)`", r"\1", line)
        line = re.sub(r"^>\s?", "", line)
        if not line:
            continue
        lines.append(line)
        if sum(len(x) for x in lines) >= max_chars:
            break
    prose = " ".join(lines)
    prose = re.sub(r"\s+", " ", prose).strip()
    return prose[:max_chars].rstrip(" ,;:")


def _jsdoc_paragraph(text: str) -> str:
    """First prose paragraph of a leading JSDoc/block comment (after a shebang)."""
    body_text = _strip_shebang(text).lstrip()
    match = _JS_BLOCK_COMMENT_RE.match(body_text)
    if not match:
        return ""
    para: list[str] = []
    for raw in match.group(1).splitlines():
        line = re.sub(r"^\s*\*\s?", "", raw).rstrip()
        if not line.strip():
            if para:
                break
            continue
        # Indented examples and ASCII diagrams come after the intro paragraph.
        if line.startswith("  ") or line.startswith("\t"):
            if para:
                break
            continue
        para.append(line.strip())
    return re.sub(r"\s+", " ", " ".join(para)).strip()


def _slash_comment_paragraph(text: str) -> str:
    """Leading `//` comments, allowing imports to appear above them."""
    comments: list[str] = []
    started = False
    for raw in _strip_shebang(text).splitlines():
        s = raw.strip()
        if s.startswith("import ") or s.startswith("from ") or s.startswith("import type"):
            continue
        if s.startswith('"use ') or s.startswith("'use "):
            continue
        if s.startswith("//"):
            started = True
            comments.append(s[2:].strip())
            continue
        if not s:
            if started:
                break
            continue
        break
    return re.sub(r"\s+", " ", " ".join(comments)).strip()


def _comment_header(text: str) -> str:
    jsdoc = _jsdoc_paragraph(text)
    if jsdoc:
        return jsdoc
    slashes = _slash_comment_paragraph(text)
    if slashes:
        return slashes
    if text.lstrip().startswith('"""') or text.lstrip().startswith("'''"):
        return ""  # handled by ast
    match = _HASH_HEADER_RE.match(text)
    if match:
        lines = [re.sub(r"^#\s?", "", line) for line in match.group(0).splitlines() if line.startswith("#")]
        lines = [ln for ln in lines if not ln.startswith("!")]
        return _first_prose("\n".join(lines))
    return ""


def _join_names(names: list[str], *, limit: int = 8) -> str:
    uniq: list[str] = []
    seen: set[str] = set()
    for name in names:
        if name and name not in seen:
            seen.add(name)
            uniq.append(name)
    if not uniq:
        return ""
    shown = uniq[:limit]
    extra = len(uniq) - len(shown)
    label = ", ".join(f"`{n}`" for n in shown)
    if extra > 0:
        label += f", and {extra} more"
    return label


def _summarize_python(name: str, text: str) -> str:
    doc = ""
    classes: list[str] = []
    functions: list[str] = []
    assigns: list[str] = []
    routes: list[str] = [f"{m.group(1).upper()} {m.group(2)}" for m in _FASTAPI_ROUTE_RE.finditer(text)]
    try:
        tree = ast.parse(text)
        doc = ast.get_docstring(tree) or ""
        for node in tree.body:
            if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
                functions.append(node.name)
            elif isinstance(node, ast.ClassDef):
                classes.append(node.name)
            elif isinstance(node, ast.Assign):
                for target in node.targets:
                    if isinstance(target, ast.Name) and target.id in {"app", "router", "application"}:
                        assigns.append(target.id)
    except SyntaxError:
        doc = _comment_header(text) or _first_prose(text)

    bits: list[str] = []
    if doc:
        bits.append(_first_sentence(doc))
    else:
        bits.append(f"Python module `{name}`.")
    if "if __name__" in text:
        bits.append("Runnable as a script via `if __name__ == '__main__'`.")
    if assigns:
        bits.append(f"Defines the { _join_names(assigns) } application object.")
    if routes:
        bits.append(f"HTTP routes: {_join_names(routes, limit=6)}.")
    if classes:
        bits.append(f"Classes: {_join_names(classes)}.")
    if functions:
        public = [f for f in functions if not f.startswith("_")] or functions
        bits.append(f"Functions: {_join_names(public)}.")
    if "FastAPI" in text:
        bits.append("Built with FastAPI.")
    if "unittest" in text or "pytest" in text or name.startswith("test_"):
        bits.append("Contains tests.")
    return " ".join(bits)


def _first_sentence(text: str) -> str:
    prose = _first_prose(text, max_chars=500)
    if not prose:
        return ""
    match = re.match(r"(.+?[.!?])(\s|$)", prose)
    if match and len(match.group(1)) > 40:
        return match.group(1)
    # If the first sentence is very short, keep two.
    parts = re.split(r"(?<=[.!?])\s+", prose, maxsplit=2)
    return " ".join(parts[:2]).strip()


def _summarize_js(name: str, text: str, ext: str) -> str:
    header = _comment_header(text) or _first_prose(
        re.sub(r"^(?:import\s.+?;|'use client';|'use server';|\"use client\";|\"use server\";)\s*", "", text, flags=re.M),
        max_chars=360,
    )
    exported: list[str] = []
    exported.extend(_EXPORT_FN_RE.findall(text))
    exported.extend(_EXPORT_CLASS_RE.findall(text))
    exported.extend(_EXPORT_CONST_RE.findall(text))
    for block in _NAMED_EXPORT_RE.findall(text):
        for part in block.split(","):
            token = part.strip().split(" as ")[-1].strip()
            token = token.split(":")[0].strip()
            if token and token != "default":
                exported.append(token)
    default = bool(re.search(r"export\s+default\b", text))
    kind = {
        ".tsx": "React/TypeScript component module",
        ".jsx": "React component module",
        ".ts": "TypeScript module",
        ".mts": "TypeScript ESM module",
        ".mjs": "JavaScript ESM module",
        ".cjs": "JavaScript CommonJS module",
        ".js": "JavaScript module",
    }.get(ext, "JavaScript module")
    bits: list[str] = []
    if header:
        bits.append(header)
    else:
        bits.append(f"{kind} `{name}`.")
    if exported:
        bits.append(f"Notable exports: {_join_names(exported)}.")
    elif default:
        bits.append("Provides a default export as the module's public entry.")
    if "from \"next/" in text or "next/" in text[:800]:
        bits.append("Wired into a Next.js app (App Router or Next APIs).")
    if "use client" in text[:200]:
        bits.append("Marked `'use client'` so it runs in the browser.")
    if "use server" in text[:200]:
        bits.append("Contains server actions (`'use server'`).")
    if re.search(r"\b(describe|it|test)\s*\(", text) and "test" in name.lower():
        bits.append("Automated test file.")
    return " ".join(bits)


def _summarize_markdown(name: str, text: str) -> str:
    title = ""
    description = ""
    match = _FRONTMATTER_RE.match(text)
    rest = text
    if match:
        rest = text[match.end() :]
        for line in match.group(1).splitlines():
            if line.startswith("title:"):
                title = line.split(":", 1)[1].strip().strip("\"'")
            elif line.startswith("description:"):
                description = line.split(":", 1)[1].strip().strip("\"'")
    heading = _HEADING_RE.search(rest)
    if heading and not title:
        title = heading.group(1).strip()
    prose = description or _first_prose(rest)
    bits: list[str] = []
    lower = name.lower()
    role = {
        "readme.md": "project README",
        "contributing.md": "contributor guide",
        "code_of_conduct.md": "code of conduct",
        "security.md": "security policy",
        "support.md": "support guide",
        "changelog.md": "changelog",
        "agents.md": "agent/workspace instructions",
        "claude.md": "Claude Code instructions",
        "developing.md": "developer guide",
        "installation.md": "installation guide",
        "releasing.md": "release guide",
        "design.md": "design spec",
        "license.md": "license text",
    }.get(lower)
    if role:
        bits.append(f"The {role}" + (f" (“{title}”)" if title and title.lower() not in role else "") + ".")
    elif title:
        bits.append(f"Markdown page “{title}”.")
    else:
        bits.append(f"Markdown document `{name}`.")
    if prose and (not title or prose.lower().rstrip(".") != title.lower().rstrip(".")):
        bits.append(prose)
    if name.endswith(".mdx"):
        bits.append("MDX page (Markdown with JSX components), typically rendered by the docs site.")
    return " ".join(bits)


def _summarize_json(name: str, text: str) -> str:
    try:
        data = json.loads(text)
    except json.JSONDecodeError:
        return f"JSON file `{name}` that did not parse from the prefix that was read. Open the source file for the full document."
    if name == "package.json" and isinstance(data, dict):
        bits = [
            f"npm package manifest for `{data.get('name', name)}`"
            + (f" v{data['version']}" if data.get("version") else "")
            + "."
        ]
        if data.get("description"):
            bits.append(str(data["description"]).rstrip(".") + ".")
        if data.get("bin"):
            bins = data["bin"]
            if isinstance(bins, dict):
                bits.append("CLI bins: " + _join_names(list(bins.keys())) + ".")
            else:
                bits.append(f"CLI bin: `{bins}`.")
        scripts = data.get("scripts")
        if isinstance(scripts, dict) and scripts:
            bits.append("Scripts: " + _join_names(list(scripts.keys()), limit=10) + ".")
        main = data.get("main") or (data.get("exports") if isinstance(data.get("exports"), str) else None)
        if main:
            bits.append(f"Entry `{main}`.")
        return " ".join(bits)
    if name == "tsconfig.json":
        return "TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness). Downstream `tsc` and bundlers read it to typecheck and emit."
    if name.endswith(".config.json") or name.endswith("config.json"):
        keys = list(data.keys()) if isinstance(data, dict) else []
        return f"JSON configuration file `{name}` with top-level keys {_join_names(keys, limit=10) or '(none)'}. Used at runtime or during the build rather than as library source."
    if isinstance(data, dict):
        keys = list(data.keys())
        return f"JSON document `{name}` whose top-level keys are {_join_names(keys, limit=12) or 'empty'}. {_json_shape(data)}"
    if isinstance(data, list):
        return f"JSON array `{name}` with {len(data)} items" + (f"; first item keys: {_join_names(list(data[0].keys()) if isinstance(data[0], dict) else [])}." if data else ".")
    return f"JSON file `{name}` holding a {type(data).__name__} value."


def _json_shape(data: dict) -> str:
    if "routes" in data or "paths" in data:
        return "Looks like a route or path table."
    if "dependencies" in data or "devDependencies" in data:
        return "Looks like a package dependency listing."
    return "Structured data consumed by the surrounding app or tooling."


def _summarize_yaml(name: str, text: str) -> str:
    keys = []
    for line in text.splitlines():
        if not line or line.lstrip().startswith("#") or line.startswith(" "):
            if line.strip() and not line.startswith(" ") and not line.lstrip().startswith("#"):
                pass
            if line.startswith(" ") or line.startswith("-"):
                continue
        if ":" in line and not line.startswith(" "):
            keys.append(line.split(":", 1)[0].strip().strip("\"'"))
    header = _comment_header(text) or _first_prose(
        "\n".join(ln.lstrip("# ") for ln in text.splitlines() if ln.startswith("#"))
    )
    bits = []
    lower = name.lower()
    if "dependabot" in lower:
        bits.append("Dependabot configuration for automated dependency updates.")
    elif lower in {"action.yml", "action.yaml"}:
        bits.append("GitHub Action metadata (`action.yml`).")
    elif "workflow" in str(name) or keys[:1] == ["name"] and "on" in keys:
        bits.append(f"GitHub Actions workflow `{name}`.")
        if keys:
            bits.append("Top-level keys: " + _join_names(keys, limit=8) + ".")
    else:
        bits.append(f"YAML file `{name}`.")
        if keys:
            bits.append("Top-level keys: " + _join_names(keys, limit=10) + ".")
    if header:
        bits.append(header)
    return " ".join(bits)


def _summarize_shell(name: str, text: str) -> str:
    header = _comment_header(text)
    funcs = re.findall(r"^(?:function\s+)?([A-Za-z_][\w-]*)\s*\(\)\s*\{", text, re.M)
    bits = []
    if header:
        bits.append(header)
    else:
        bits.append(f"Shell script `{name}`.")
    if text.startswith("#!/"):
        shebang = text.splitlines()[0]
        bits.append(f"Shebang `{shebang}`.")
    if funcs:
        bits.append("Functions: " + _join_names(funcs, limit=10) + ".")
    if "set -e" in text or "set -o errexit" in text:
        bits.append("Fails fast (`set -e`).")
    return " ".join(bits)


def _summarize_ini(name: str, text: str, ext: str) -> str:
    sections = re.findall(r"^\[([^\]]+)\]", text, re.M)
    header = _comment_header(text)
    bits = [f"{ext.lstrip('.').upper()} config `{name}`."]
    if header:
        bits.append(header)
    if sections:
        bits.append("Sections: " + _join_names(sections, limit=10) + ".")
    if name == "pyproject.toml" or name.endswith("pyproject.toml"):
        bits.append("Python project metadata and tool configuration.")
    if name == "pytest.ini":
        bits.append("pytest defaults for this repository.")
    return " ".join(bits)


def _summarize_css(name: str, text: str) -> str:
    header = _comment_header(text)
    selectors = re.findall(r"^\.([A-Za-z_][\w-]*)", text, re.M)
    bits = []
    if header:
        bits.append(header)
    else:
        bits.append(f"Stylesheet `{name}` for layout and visual treatment in this folder.")
    if selectors:
        bits.append("Leading class selectors include " + _join_names(selectors, limit=8) + ".")
    if "--" in text[:2000]:
        bits.append("Defines or consumes CSS custom properties (design tokens).")
    return " ".join(bits)


def _summarize_svg(name: str, text: str, size: int) -> str:
    title = re.search(r"<title>([^<]+)</title>", text, re.I)
    label = title.group(1).strip() if title else name
    return (
        f"SVG graphic `{name}` ({_size_label(size)})"
        + (f" titled “{label}”" if title else "")
        + ". Vector artwork used by the UI, docs, or brand; not executable source."
    )


def _summarize_html(name: str, text: str) -> str:
    title = re.search(r"<title>([^<]+)</title>", text, re.I)
    heading = re.search(r"<h1[^>]*>(.*?)</h1>", text, re.I | re.S)
    label = ""
    if title:
        label = _HTML_TAG_RE.sub("", title.group(1)).strip()
    elif heading:
        label = _HTML_TAG_RE.sub("", heading.group(1)).strip()
    prose = _first_prose(_HTML_TAG_RE.sub(" ", text))
    bits = [f"HTML document `{name}`" + (f" titled “{label}”" if label else "") + "."]
    if prose:
        bits.append(prose)
    return " ".join(bits)


def _summarize_dockerfile(name: str, text: str) -> str:
    from_ = re.search(r"^FROM\s+(\S+)", text, re.M | re.I)
    cmds = re.findall(r"^(FROM|WORKDIR|COPY|RUN|CMD|ENTRYPOINT|EXPOSE|ENV)\b", text, re.M)
    bits = [f"Container build file `{name}`."]
    if from_:
        bits.append(f"Base image `{from_.group(1)}`.")
    expose = re.findall(r"^EXPOSE\s+(\S+)", text, re.M | re.I)
    if expose:
        bits.append("Exposes ports " + _join_names(expose) + ".")
    cmd = re.search(r"^(?:CMD|ENTRYPOINT)\s+(.+)$", text, re.M)
    if cmd:
        bits.append(f"Starts with `{cmd.group(1).strip()}`.")
    if cmds:
        bits.append("Instructions used: " + _join_names(cmds, limit=10) + ".")
    return " ".join(bits)


def _summarize_license(text: str) -> str:
    first = text.strip().splitlines()[0] if text.strip() else "License"
    return (
        f"License text ({first.strip()}). Governs use, modification, and distribution of "
        f"this repository. Read the full file in the source tree before depending on the "
        f"project in a product or redistribution."
    )


def _summarize_ignore(name: str, text: str) -> str:
    entries = [ln.strip() for ln in text.splitlines() if ln.strip() and not ln.strip().startswith("#")]
    return (
        f"`{name}` tells git or Docker which paths to omit. It currently lists "
        f"{len(entries)} pattern(s)"
        + (f" including {_join_names(entries, limit=8)}" if entries else "")
        + ". Generated and secret files matching these patterns are not in the clone the wiki summarizes."
    )


def _summarize_env(name: str, text: str) -> str:
    keys = _ENV_LINE_RE.findall(text)
    intro = ""
    for line in text.splitlines():
        s = line.strip()
        if s.startswith("#") and len(s) > 3:
            intro = s.lstrip("# ").strip()
            break
        if s and not s.startswith("#"):
            break
    bits = [f"Environment template `{name}` (values omitted from the wiki)."]
    if intro:
        bits.append(intro.rstrip(".") + ".")
    if keys:
        bits.append("Keys: " + _join_names(keys, limit=12) + ".")
    else:
        bits.append("No `KEY=value` lines were found in the prefix that was read.")
    bits.append("Copy to `.env` locally; never commit real credentials.")
    return " ".join(bits)


def _summarize_generic(name: str, text: str, ext: str) -> str:
    header = _comment_header(text) or _first_prose(text)
    kind = f"{ext.lstrip('.') or 'extensionless'} file" if ext else "extensionless file"
    bits = [f"{kind.capitalize()} `{name}`."]
    if header:
        bits.append(header)
    else:
        bits.append(
            "No module header, docstring, or front matter was found; this looks like "
            "supporting data or configuration rather than a public API."
        )
    return " ".join(bits)
