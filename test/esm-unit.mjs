// @ts-check
// const test = require('tape')
// const catchLinks = require('../src/index.cjs')
// const dom = require('@socketsupply/test-dom')
// const { resolve } = require('../src/index.cjs')
// import { resolve } from '../dist/index.mjs'
import CatchLinks from '../src/index.cjs'
const { resolve } = CatchLinks
import { test } from 'tapzero'
// import CatchLinks from '../dist/index.esm.js'
// import dom from '@socketsupply/test-dom'

test('relative path from "/"', t => {
    const resolved = resolve('/', 'foo/bar')
    t.equal(resolved, '/foo/bar')
})

test('absolute path from "/"', t => {
    const resolved = resolve('/', '/foo/bar')
    t.equal(resolved, '/foo/bar', 'should resolve absolute path')
})

test('relative path from /foo', t => {
    const resolved = resolve('/foo', 'bar/baz')
    t.equal(resolved, '/foo/bar/baz',
        'should resolve relative path from a root path')
})


// test('click a link', t => {
//     CatchLinks(document.body, function onLinkClick (href) {
//         console.log('href', href)
//         t.equal(href, '/foo', 'should callback with the right path')
//     })

//     // @ts-ignore
//     dom.click(document.getElementById('local-link'))
// })
