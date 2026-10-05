<!-- quirq-wiki-generated repo=website dir=contents/docs/self-host/_snippets -->

# website / contents/docs/self-host/_snippets

Source: [contents/docs/self-host/_snippets](https://github.com/quirq-ai/website/tree/main/contents/docs/self-host/_snippets) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### cluster-requirements.mdx

Markdown page “Cluster requirements”. import ExpandableVolumeSnippet from './expandable-
volume' MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/cluster-requirements.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/cluster-requirements.mdx) · code · 1834 bytes

### command-helm-get-repo.mdx

Markdown document `command-helm-get-repo.mdx`. helm repo add posthog
https://posthog.github.io/charts-clickhouse/ helm repo update MDX page (Markdown with JSX
components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/command-helm-get-repo.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/command-helm-get-repo.mdx) · code · 97 bytes

### command-helm-upgrade.mdx

Markdown document `command-helm-upgrade.mdx`. helm upgrade -f values.yaml --timeout 30m
--namespace posthog posthog posthog/posthog --atomic --wait --wait-for-jobs --debug MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/command-helm-upgrade.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/command-helm-upgrade.mdx) · code · 139 bytes

### disclaimer.mdx

Markdown document `disclaimer.mdx`. Self-hosted open-source deployment is MIT licensed and
provided without a guarantee.See the [disclaimer](/docs/self-host/open-source/disclaimer)
for more information. MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/self-host/_snippets/disclaimer.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/disclaimer.mdx) · code · 174 bytes

### do-ip-address.mdx

Markdown document `do-ip-address.mdx`. import GetInstallationAddress from './get-
installation-address' MDX page (Markdown with JSX components), typically rendered by the
docs site.

[`contents/docs/self-host/_snippets/do-ip-address.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/do-ip-address.mdx) · code · 743 bytes

### domain-disclaimer.mdx

Markdown document `domain-disclaimer.mdx`. Do not use posthog or tracking related words as
your sub-domain record: As we grow, PostHog owned domains might be added to tracker
blockers. To reduce the risk of tracker blockers interfering with events sent to your self-
hosted instance, we suggest to avoid using any combination of potentially triggering words
as your sub-domain.

[`contents/docs/self-host/_snippets/domain-disclaimer.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/domain-disclaimer.mdx) · code · 432 bytes

### expandable-volume.mdx

Markdown document `expandable-volume.mdx`. Details MDX page (Markdown with JSX components),
typically rendered by the docs site.

[`contents/docs/self-host/_snippets/expandable-volume.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/expandable-volume.mdx) · code · 1326 bytes

### get-installation-address.mdx

Markdown document `get-installation-address.mdx`.

[`contents/docs/self-host/_snippets/get-installation-address.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/get-installation-address.mdx) · code · 670 bytes

### install-cluster-issuer.mdx

Markdown document `install-cluster-issuer.mdx`. Create a new cluster resource that will take
care of signing your TLS certificates using [Let’s Encrypt](https://letsencrypt.org/). MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/install-cluster-issuer.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/install-cluster-issuer.mdx) · code · 836 bytes

### installing.mdx

Markdown document `installing.mdx`. To install the chart using [Helm](https://helm.sh/) with
the release name posthog in the posthog namespace, run the following MDX page (Markdown with
JSX components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/installing.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/installing.mdx) · code · 663 bytes

### next-steps.mdx

Markdown document `next-steps.mdx`. Now that your deployment is up and running, here are a
couple of guides we'd recommend you check out to fully configure your instance. MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/next-steps.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/next-steps.mdx) · code · 506 bytes

### setup-dns.mdx

Markdown document `setup-dns.mdx`. import DomainDisclaimer from './domain-disclaimer' MDX
page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/setup-dns.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/setup-dns.mdx) · code · 346 bytes

### sunset-disclaimer.mdx

Markdown document `sunset-disclaimer.mdx`. 🌇 Sunset Kubernetes deployments MDX page
(Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/sunset-disclaimer.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/sunset-disclaimer.mdx) · code · 880 bytes

### tryunsecure.mdx

Markdown document `tryunsecure.mdx`. import GetInstallationAddress from './get-installation-
address' MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/tryunsecure.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/tryunsecure.mdx) · code · 453 bytes

### uninstalling.mdx

Markdown document `uninstalling.mdx`. To uninstall the chart with the release name posthog
in posthog namespace, you can run: helm uninstall posthog --namespace posthog (take a look
at the [Helm docs](https://helm.sh/docs/helm/helm_uninstall/) for more info about the
command). MDX page (Markdown with JSX components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/uninstalling.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/uninstalling.mdx) · code · 485 bytes

### upgrading.mdx

Markdown document `upgrading.mdx`. import CommandHelmGetRepoSnippet from './command-helm-
get-repo' import CommandHelmUpgradeSnippet from './command-helm-upgrade' MDX page (Markdown
with JSX components), typically rendered by the docs site.

[`contents/docs/self-host/_snippets/upgrading.mdx`](https://github.com/quirq-ai/website/blob/main/contents/docs/self-host/_snippets/upgrading.mdx) · code · 883 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
