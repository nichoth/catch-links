// @ts-check
const { resolve } = require('../')
const test = require('tape')

// test cases
//   * relative path
//   * absolute path
//   * current path + relative path

test('relative path from "/"', t => {
    const resolved = resolve('/', 'foo/bar')
    t.equal(resolved, '/foo/bar')
    t.end()
})

test('absolute path from "/"', t => {
    const resolved = resolve('/', '/foo/bar')
    t.equal(resolved, '/foo/bar', 'should resolve absolute path')
    t.end()
})

test('relative path from /foo', t => {
    const resolved = resolve('/foo', 'bar/baz')
    t.equal(resolved, '/foo/bar/baz',
        'should resolve relative path from a root path')
    t.end()
})
