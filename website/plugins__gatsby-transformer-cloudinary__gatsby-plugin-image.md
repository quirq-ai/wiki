<!-- quirq-wiki-generated repo=website dir=plugins/gatsby-transformer-cloudinary/gatsby-plugin-image -->

# website / plugins/gatsby-transformer-cloudinary/gatsby-plugin-image

Source: [plugins/gatsby-transformer-cloudinary/gatsby-plugin-image](https://github.com/quirq-ai/website/tree/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### asset-data.js

const axios = require('axios') const probe = require('probe-image-size') const {
generateCloudinaryAssetUrl } = require('./generate-asset-url').

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/asset-data.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/asset-data.js) · code · 1677 bytes

### asset-data.test.js

jest.mock('axios'); jest.mock('probe-image-size') Automated test file.

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/asset-data.test.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/asset-data.test.js) · code · 3410 bytes

### generate-asset-url.js

const cloudinary = require('cloudinary').v2; const pluginPkg = require('../package.json');
const gatsbyPkg = require('gatsby/package.json').

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/generate-asset-url.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/generate-asset-url.js) · code · 1597 bytes

### generate-asset-url.test.js

jest.mock('../package.json', () => ({ version: '0.1.2', }));
jest.mock('gatsby/package.json', () => ({ version: '0.5.3', })) Automated test file.

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/generate-asset-url.test.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/generate-asset-url.test.js) · code · 2261 bytes

### index.js

const { createGatsbyPluginImageResolver } = require('./resolvers').

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/index.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/index.js) · code · 798 bytes

### resolve-asset.js

const { getLowResolutionImageURL, generateImageData } = require('gatsby-plugin-image').

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/resolve-asset.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/resolve-asset.js) · code · 5636 bytes

### resolve-asset.test.js

jest.mock('gatsby-plugin-image'); jest.mock('./asset-data') Automated test file.

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/resolve-asset.test.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/resolve-asset.test.js) · code · 13953 bytes

### resolver-reporter.js

const LEVEL = { verbose: 0, info: 1, warn: 2, error: 3, panic: 4, panicOnBuild: 4, }.

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/resolver-reporter.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/resolver-reporter.js) · code · 564 bytes

### resolver-reporter.test.js

const { resolverReporter } = require('./resolver-reporter') Automated test file.

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/resolver-reporter.test.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/resolver-reporter.test.js) · code · 5217 bytes

### resolvers.js

exports.createGatsbyPluginImageResolver = (gatsbyUtils, pluginOptions) => { const { reporter
} = gatsbyUtils; try { const { getGatsbyImageResolver, } = require('gatsby-plugin-
image/graphql-utils'); const { createResolveCloudinaryAssetData } = require('./resolve-
asset'); const { CloudinaryPlaceholderType } = require('./types').

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/resolvers.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/resolvers.js) · code · 1045 bytes

### types.js

const { GraphQLEnumType } = require('gatsby/graphql').

[`plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/types.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-plugin-image/types.js) · code · 272 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
