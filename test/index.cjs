// @ts-check
const test = require('tape')
const catchLinks = require('../src/index.cjs')
const dom = require('@socketsupply/test-dom')

test('click a link', t => {
    catchLinks(document.body, function onLinkClick (href) {
        console.log('href', href)
        t.equal(href, '/foo', 'should callback with the right path')
        t.end()
    })

    // @ts-ignore
    dom.click(document.getElementById('local-link'))
})
