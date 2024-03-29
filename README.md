# catch links
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![types](https://img.shields.io/npm/types/@nichoth/catch-links?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Like the classic [@substack module](https://www.npmjs.com/package/catch-links), but updated.

Intercept local link clicks on a page, for client-side pushState UIs.

## install
```
npm i -S @nichoth/catch-links
```

## use

### common JS
```js
const catchLinks = require('@nichoth/catch-links').default
```

### ESM
```js
import CatchLinks from '@nichoth/catch-links'
```

## example
Given this HTML,
```html
<body>
    <a id="local-link" href="/foo">local</a>
    <a href="https://www.npmjs.com/" id="remote-link">remote</a>
</body>
```

Use this JS:
```js
import CatchLinks from '@nichoth/catch-links'

// given a click on `#local-link`
CatchLinks(document.body, function onLinkClick (href) {
    // this will not be called on click to #remote-link

    console.log('href', href)
    // => '/foo'
})
```
