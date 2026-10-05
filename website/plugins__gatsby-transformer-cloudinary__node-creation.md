<!-- quirq-wiki-generated repo=website dir=plugins/gatsby-transformer-cloudinary/node-creation -->

# website / plugins/gatsby-transformer-cloudinary/node-creation

Source: [plugins/gatsby-transformer-cloudinary/node-creation](https://github.com/quirq-ai/website/tree/main/plugins/gatsby-transformer-cloudinary/node-creation) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### create-asset-node-from-file.js

const { uploadImageNodeToCloudinary } = require('./upload'); const { createImageNode } =
require('./create-image-node').

[`plugins/gatsby-transformer-cloudinary/node-creation/create-asset-node-from-file.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/node-creation/create-asset-node-from-file.js) · code · 1185 bytes

### create-asset-node-from-file.test.js

jest.mock('./upload'); jest.mock('./create-image-node') Automated test file.

[`plugins/gatsby-transformer-cloudinary/node-creation/create-asset-node-from-file.test.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/node-creation/create-asset-node-from-file.test.js) · code · 1992 bytes

### create-image-node.js

const stringify = require('fast-json-stable-stringify'); const { getPluginOptions } =
require('../options').

[`plugins/gatsby-transformer-cloudinary/node-creation/create-image-node.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/node-creation/create-image-node.js) · code · 1337 bytes

### create-image-node.test.js

const { createImageNode } = require('./create-image-node') Automated test file.

[`plugins/gatsby-transformer-cloudinary/node-creation/create-image-node.test.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/node-creation/create-image-node.test.js) · code · 5191 bytes

### create-remote-image-node.js

const path = require('path'); const { uploadImageToCloudinary } = require('./upload'); const
{ createImageNode } = require('./create-image-node'); const { getPluginOptions } =
require('../options').

[`plugins/gatsby-transformer-cloudinary/node-creation/create-remote-image-node.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/node-creation/create-remote-image-node.js) · code · 1913 bytes

### create-remote-image-node.test.js

const path = require('path'); const { createRemoteImageNode } = require('./create-remote-
image-node') Automated test file.

[`plugins/gatsby-transformer-cloudinary/node-creation/create-remote-image-node.test.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/node-creation/create-remote-image-node.test.js) · code · 5827 bytes

### index.js

const { createAssetNodeFromFile } = require('./create-asset-node-from-file'); const {
CloudinaryAssetType } = require('./types').

[`plugins/gatsby-transformer-cloudinary/node-creation/index.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/node-creation/index.js) · code · 573 bytes

### types.js

exports.CloudinaryAssetType = ` type CloudinaryAsset implements Node { id: ID! publicId:
String! cloudName: String! version: String originalWidth: Int originalHeight: Int
originalFormat: String } `.

[`plugins/gatsby-transformer-cloudinary/node-creation/types.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/node-creation/types.js) · code · 231 bytes

### upload.js

const cloudinary = require('cloudinary').v2; const { getPluginOptions } =
require('../options').

[`plugins/gatsby-transformer-cloudinary/node-creation/upload.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/node-creation/upload.js) · code · 2510 bytes

### upload.test.js

const { uploadImageToCloudinary, uploadImageNodeToCloudinary, } = require('./upload')
Automated test file.

[`plugins/gatsby-transformer-cloudinary/node-creation/upload.test.js`](https://github.com/quirq-ai/website/blob/main/plugins/gatsby-transformer-cloudinary/node-creation/upload.test.js) · code · 5713 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
