<!-- quirq-wiki-generated repo=website dir=contents/docs/feature-flags/local-evaluation/_snippets -->

# website / contents/docs/feature-flags/local-evaluation/_snippets

Source: [contents/docs/feature-flags/local-evaluation/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/feature-flags/local-evaluation/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### distributed-environments-common-patterns.mdx

Markdown page “Common patterns”. When running multiple server instances with a shared cache
like Redis, coordinate fetching so only one instance polls PostHog at a time. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-common-patterns.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-common-patterns.mdx) · code · 2307 bytes

### distributed-environments-elixir.mdx

Markdown page “The interface”. The Elixir SDK accepts a {module, state} tuple. The module
must implement PostHog.FeatureFlags.FlagDefinitionCacheProvider MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-elixir.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-elixir.mdx) · code · 1895 bytes

### distributed-environments-intro.mdx

Markdown page “When to use an external cache”. When using [local evaluation](/docs/feature-
flags/local-evaluation), the SDK fetches feature flag definitions and stores them in memory.
This works well for single-instance applications, but in distributed or stateless
environments (multiple servers, edge workers, lambdas), each instance fetches its own copy,
wasting API calls and adding latency on cold starts.

[`contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-intro.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-intro.mdx) · code · 1785 bytes

### distributed-environments-jvm.mdx

Markdown page “Installation”. External flag definition caches are available in posthog-
server 2.7.0 and later. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-jvm.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-jvm.mdx) · code · 4443 bytes

### distributed-environments-node.mdx

Markdown page “Installation”. Import the interface from the SDK MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-node.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-node.mdx) · code · 2288 bytes

### distributed-environments-php.mdx

Markdown page “Installation”. Import the interface from the SDK MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-php.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-php.mdx) · code · 2810 bytes

### distributed-environments-python.mdx

Markdown page “Installation”. Import the interface from the SDK MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-python.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-python.mdx) · code · 3273 bytes

### distributed-environments-ruby.mdx

Markdown page “Installation”. External flag definition caches are available in the Ruby SDK.
No additional PostHog package is required. MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-ruby.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/feature-flags/local-evaluation/_snippets/distributed-environments-ruby.mdx) · code · 3794 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
