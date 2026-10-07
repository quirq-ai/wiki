<!-- quirq-wiki-generated repo=docs dir=content/research/experiments -->

# docs / content/research/experiments

Source: [content/research/experiments](https://github.com/quirq-ai/docs/tree/main/content/research/experiments) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### alignment-environments.mdx

Markdown page “Why Alignment Testing Needs a Real Environment”. Frontier models can now tell
when they are being tested, and they behave differently when they know. That breaks the
static benchmark, because a passing score measures the model's read of the test environment,
not its behavior in the wild.

[`content/research/experiments/alignment-environments.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/alignment-environments.mdx) · code · 26664 bytes

### coding-model-eval-harness.mdx

Markdown page “Fable 5 vs Opus 4.8: A Coding-Agent Evaluation”. Comparing Claude Fable 5 and
Claude Opus 4.8 on real engineering tasks with a reproducible harness — gated success, run
observability, captured diffs, and blind judging — cut short when Fable was suspended before
the harder tasks ran. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`content/research/experiments/coding-model-eval-harness.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/coding-model-eval-harness.mdx) · code · 17151 bytes

### curiosity-comparison.mdx

Markdown page “Curiosity Comparison Between Agents”. We added a third coding agent to the
context ladder — Google's Gemini — and ran it head-to-head with Codex and Claude on a
lightweight C repository. It is the first agent that behaves like it's curious: it tops our
curiosity index, spends the largest share of its actions reading, and — uniquely — explores
more the richer the space gets.

[`content/research/experiments/curiosity-comparison.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/curiosity-comparison.mdx) · code · 21373 bytes

### harvey-case-study.mdx

Markdown page “Case Study: The Harvey Harness”. Harvey outperforms raw frontier models on
legal work. Reverse-engineering its architecture from public disclosures shows the advantage
is not exclusive access to a smarter model, but the system built around it. Harvey treats
the foundation model as swappable compute and puts every bit of its edge into the harness:
routing, state, permissions, and deterministic task decomposition.

[`content/research/experiments/harvey-case-study.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/harvey-case-study.mdx) · code · 26304 bytes

### index.mdx

Markdown page “How the Environment Affects Agent Performance and Token Cost”. A pilot
measuring how a space's project context shapes a coding agent's performance and token cost:
richer context is nearly free to run, it does not hurt task success, and it lowers the cost
of getting oriented. MDX page (Markdown with JSX components), typically rendered by the docs
site.

[`content/research/experiments/index.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/index.mdx) · code · 14316 bytes

### machine-can-disappear.mdx

Markdown page “The Machine Can Disappear. The Work Doesn't Have To.”. How we benchmarked
idempotent compute across Nirvana ABS, E2B, and GKE agent sandboxes - and why only one
platform kept every bit of committed work after a crash without a 35-second penalty. MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`content/research/experiments/machine-can-disappear.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/machine-can-disappear.mdx) · code · 18845 bytes

### meta.json

JSON document `meta.json` whose top-level keys are `title`, `icon`, `pages`. Structured data
consumed by the surrounding app or tooling.

[`content/research/experiments/meta.json`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/meta.json) · code · 509 bytes

### nested-sandboxes-for-agent-isolation.mdx

Markdown page “Running Agents Inside a Sandbox That Cannot Hold a Container”. Exploratory
work, with an eye on future XO Cowork workflows. A hardened space container protects the
host and does nothing to stop several agents inside it from reaching each other, and the
usual fix, a container inside the container, needs the exact mount privileges the hardening
removes.

[`content/research/experiments/nested-sandboxes-for-agent-isolation.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/nested-sandboxes-for-agent-isolation.mdx) · code · 24414 bytes

### observational-data-work-done.mdx

Markdown page “What Observational Data Can't Tell You About Work Done”. We recorded 119
agent sessions in forensic detail: every tool call captured before execution, every token
accounted, thirty artifacts per run. Then we graded the sessions against the maintainers'
own tests and asked what the recording was worth.

[`content/research/experiments/observational-data-work-done.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/observational-data-work-done.mdx) · code · 43181 bytes

### organic-vs-synthetic-evaluation-data.mdx

Markdown page “Why Organic Data Still Beats Agent-Mimicked Synthetic Data in Evaluation”.
Even when an agent uses real data to mimic it, synthetic evaluation data falls short of
organic data on the two things a safety evaluation most needs: calibrated incidence
forecasting and construct validity. Why the gap is structural, why organic data matters, and
where synthetic legitimately wins.

[`content/research/experiments/organic-vs-synthetic-evaluation-data.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/organic-vs-synthetic-evaluation-data.mdx) · code · 55034 bytes

### relevance-not-volume.mdx

Markdown page “Relevance, Not Volume”. We wrote two operating contracts for a coding agent
and matched them to the same length. One was generic; the other carried a single project-
specific rule. The generic one changed nothing: conformance stayed at its 8% floor. The one
with the rule lifted it to 80–100%. On these tasks it was not about how much context you
give an agent, but whether the bytes close a gap it actually has.

[`content/research/experiments/relevance-not-volume.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/relevance-not-volume.mdx) · code · 14718 bytes

### research-series.mdx

Markdown page “Agent Context Research: The Evidence So Far”. A guided evidence map of XO's
agent-context studies, including the replication that revised the initial pilot and the
questions each follow-up answered. MDX page (Markdown with JSX components), typically
rendered by the docs site.

[`content/research/experiments/research-series.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/research-series.mdx) · code · 5840 bytes

### the-incurious-agent.mdx

Markdown page “The Incurious Agent”. We gave two coding agents a steadily richer home — a
README, an AGENTS.md contract, a project brief, a full scaffold, even a curated memory of
how the codebase works — and measured what they actually opened. They read the surface and
skip the substance. 84 controlled runs on environmental curiosity. MDX page (Markdown with
JSX components), typically rendered by the docs site.

[`content/research/experiments/the-incurious-agent.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/the-incurious-agent.mdx) · code · 37321 bytes

### the-self-sufficient-agent.mdx

Markdown page “The Self-Sufficient Agent”. We promised to raise the difficulty until the
bare agent broke. We did, with harder tasks on a real 170-file service, and on these tasks
it didn't break. With no documentation at all, two coding agents satisfied nine of nine non-
obvious functional requirements, identically. On this kind of work, the bottleneck was never
curiosity. MDX page (Markdown with JSX components), typically rendered by the docs site.

[`content/research/experiments/the-self-sufficient-agent.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/the-self-sufficient-agent.mdx) · code · 17351 bytes

### tokenizer-not-the-language.mdx

Markdown page “Is the Language Hard to Model, or Its Tokenizer?”. The popular read is that
some languages are just hard for language models. We think that is mostly an artifact of how
we represent them, the tokenizer and the writing system, not the language itself. Sanskrit
is the sharpest test, because its extreme theoretical density is exactly what a standard
tokenizer destroys.

[`content/research/experiments/tokenizer-not-the-language.mdx`](https://github.com/quirq-ai/docs/blob/main/content/research/experiments/tokenizer-not-the-language.mdx) · code · 34079 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
