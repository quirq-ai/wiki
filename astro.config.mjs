import { defineConfig } from 'astro/config';

export default defineConfig({
  // Absolute URLs for canonical links, the sitemap and llms.txt. Vercel sets
  // VERCEL_PROJECT_PRODUCTION_URL (the production domain) on every build.
  site:
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined),
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
