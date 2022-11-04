// @ts-check
const path = require('path')
const esbuild = require('esbuild')

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//
// build a main and render script
//
async function main () {
    // cjs
    await esbuild.build({
        entryPoints: ['src/render/index.js'],
        bundle: true,
        keepNames: true,
        // minify: true,
        format: 'cjs',
        outfile: path.join('./dist/', 'index.cjs.js'),
        platform: 'browser'
    })

    // main process
    await esbuild.build({
        entryPoints: ['src/main/index.js'],
        bundle: true,
        keepNames: true,
        // minify: true,
        format: 'esm',
        outfile: path.join('./dist/', 'index.esm.js'),
        platform: 'browser'
    })
}

main()
