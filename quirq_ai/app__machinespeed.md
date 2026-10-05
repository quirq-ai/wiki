<!-- quirq-wiki-generated repo=quirq_ai dir=app/machinespeed -->

# quirq_ai / app/machinespeed

Source: [app/machinespeed](https://github.com/quirq-ai/quirq_ai/tree/main/app/machinespeed) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### calculator.tsx

/** * The ten-hour test, ported from the inline script in machinespeed.html. * The two
sliders are the only interactive thing on the route, so this is the * page's whole client
boundary; everything around it stays server-rendered. * Values are derived on render rather
than written back into the DOM by hand, * which is the one structural change from the sourc
Notable exports: `Calculator`. Marked `'use client'` so it runs in the browser.

[`app/machinespeed/calculator.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/machinespeed/calculator.tsx) · code · 4447 bytes

### machinespeed.module.css

MACHINE SPEED, ported from quirq-package/site/machinespeed.html. Leading class selectors
include `page`, `col`, `prose`, `bars`, `heroSplit`, `heroLeft`, `heroMid`, `stack`, and 50
more. Defines or consumes CSS custom properties (design tokens).

[`app/machinespeed/machinespeed.module.css`](https://github.com/quirq-ai/quirq_ai/blob/main/app/machinespeed/machinespeed.module.css) · code · 13103 bytes

### page.tsx

/** * MACHINE SPEED, ported from quirq-package/site/machinespeed.html. * A sub-brand ("built
on quirq technology") reached from the Enterprise link in * the site nav, opened in a new
tab. It keeps the palette and layout it was * authored with, but wears quirq's chrome: the
site nav above, SiteFooter * below, and the authored footer reduced to the attribution
Notable exports: `MachineSpeed`, `metadata`, `viewport`.

[`app/machinespeed/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/machinespeed/page.tsx) · code · 13455 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
