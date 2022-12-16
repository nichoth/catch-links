# catch links

Like the classic [@substack module](https://www.npmjs.com/package/catch-links), but updated.

## features
* zero dependencies
* ESM & CJS format


## install
```
npm i -S @nichoth/catch-links
```

## use

### common JS
```js
const catchLinks = require('@nichoth/catch-links')
```

### ESM
```js
import CatchLinks from '@nichoth/catch-links'
```

## example
Given this HTML
```html
<body>
    <a id="local-link" href="/foo">local</a>
    <a href="https://www.npmjs.com/" id="remote-link">remote</a>
</body>
```

Use this JS
```js
import CatchLinks from '@nichoth/catch-links'

// given a click on `#local-link`
catchLinks(document.body, function onLinkClick (href) {
    console.log('href', href)
    // => '/foo'
})
```

## test
We are using `tape-run` and `inline-htmlify` to run tests in a browser
environment.

See `package.json`:
```js
 "scripts": {
    "test-browser": "browserify test/index.js | htmlify test/index.html | tape-run --input=html | tap-arc"
  }
```

