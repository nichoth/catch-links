// @ts-check
const path = require('path')
const esbuild = require('esbuild')

//
// build CJS and ESM versions
//
async function main () {
    // cjs
    await esbuild.build({
        entryPoints: ['src/index.cjs'],
        bundle: true,
        keepNames: true,
        format: 'cjs',
        outfile: path.join('./dist/', 'index.cjs'),
        platform: 'browser'
    })

    // esm
    await esbuild.build({
        entryPoints: ['src/index.cjs'],
        bundle: true,
        keepNames: true,
        format: 'esm',
        outfile: path.join('./dist/', 'index.mjs'),
        platform: 'browser'
    })
}

main()
