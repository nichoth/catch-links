// @ts-check
// const test = require('tape')
// const catchLinks = require('../src/index.cjs')
// const dom = require('@socketsupply/test-dom')
import { test } from 'tapzero'
import CatchLinks from '../src/index.cjs'
import dom from '@socketsupply/test-dom'

test('click a link', t => {
    CatchLinks(document.body, function onLinkClick (href) {
        console.log('href', href)
        t.equal(href, '/foo', 'should callback with the right path')
    })

    // @ts-ignore
    dom.click(document.getElementById('local-link'))
})
