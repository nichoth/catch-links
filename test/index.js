const test = require('tape')
const catchLinks = require('../')
const dom = require('@socketsupply/test-dom')

test('click a link', t => {
    catchLinks(document.body, function onLinkClick (href) {
        console.log('href', href)
        t.equal(href, '/foo', 'should callback with the right path')
        t.end()
    })

    dom.click(document.getElementById('local-link'))
})
