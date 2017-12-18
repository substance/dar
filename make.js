const b = require('substance-bundler')
const rng = require('substance-bundler/extensions/rng')
const vfs = require('substance-bundler/extensions/vfs')

b.rm('tmp')

rng(b, './src/Manifest.rng', { dir: 'tmp' })

vfs(b, {
  src: 'data/**/*',
  dest: 'tmp/vfs.js',
  format: 'umd', moduleName: 'vfs'
})

b.js('./index.js', {
  targets: [{
    dest: 'dist/rdc.js',
    format: 'umd', moduleName: 'rdc',
    globals: { 'substance': 'window.substance' }
  }, {
    dest: 'dist/rdc.cjs.js',
    format: 'cjs'
  }],
  external: ['substance']
})

b.setServerPort(4007)
b.serve({ static: true, route: '/', folder: '.' })