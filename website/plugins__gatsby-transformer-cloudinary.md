<!-- quirq-wiki-generated repo=website dir=plugins/gatsby-transformer-cloudinary -->

# website / plugins/gatsby-transformer-cloudinary

Source: [plugins/gatsby-transformer-cloudinary](https://github.com/quirq-ai/website/tree/main/plugins/gatsby-transformer-cloudinary) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### gatsby-node.js

const { initializaGlobalState, getCoreSupportsOnPluginInit, } = require('./options'); const
{ createCloudinaryAssetType, createCloudinaryAssetNodes, } = require('./node-creation').

[`plugins/gatsby-transformer-cloudinary/gatsby-node.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-node.js) · code · 1618 bytes

### gatsby-node.test.js

describe('pluginOptionsSchema', () => { test('should validate minimal correct options',
async () => { cloudName, apiKey, apiSecret only needed if uploading const options = {}
Automated test file.

[`plugins/gatsby-transformer-cloudinary/gatsby-node.test.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/gatsby-node.test.js) · code · 1811 bytes

### index.d.ts

export function createRemoteImageNode( args: CreateRemoteImageNodeArgs ): Promise Notable
exports: `createRemoteImageNode`, `CreateRemoteImageNodeArgs`, `CloudinaryAssetNode`.

[`plugins/gatsby-transformer-cloudinary/index.d.ts`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/index.d.ts) · code · 690 bytes

### index.js

exports.createRemoteImageNode = require('./node-creation/create-remote-image-
node').createRemoteImageNode.

[`plugins/gatsby-transformer-cloudinary/index.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/index.js) · code · 109 bytes

### options.js

let options = {}.

[`plugins/gatsby-transformer-cloudinary/options.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/options.js) · code · 869 bytes

### package.json

npm package manifest for `gatsby-transformer-cloudinary` v4.5.0. Transform local files into
Cloudinary-managed assets for Gatsby sites. Scripts: `postversion`. Entry `index.js`.

[`plugins/gatsby-transformer-cloudinary/package.json`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/package.json) · code · 928 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
