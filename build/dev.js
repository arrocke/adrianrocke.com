const path = require('path')
const watch = require('./watch')
const build = require('./build')
const tasks = require('./tasks')

const PUG_DIR = path.resolve(__dirname, '../src/pug')
const IMG_DIR = path.resolve(__dirname, '../src/img')
const PAGES_DIR = path.resolve(__dirname, '../src/pages')

build.all()
  .then(() => {
    watch(PUG_DIR, build.pages)
    watch(PAGES_DIR, build.pages)
    watch(IMG_DIR, tasks.copyImage)
  })
  .catch(console.error)

