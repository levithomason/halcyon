const path = require('path')

const resolveConfig = require('genesis-core/configs/create-project-config')
const compile = (opts) =>
  require('genesis-core/lib/create-compiler')(resolveConfig(opts))()

compile({
  env: 'production',
  root: path.resolve(__dirname, '..'),
  main: [
    path.resolve(__dirname, '../src/main.preload.js'),
    path.resolve(__dirname, '../src/main.js'),
  ],
  verbose: true,
})
