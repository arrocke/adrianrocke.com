const path = require('path')
const browserSync = require('browser-sync')
const watch = require('./watch')
const build = require('./build')
const tasks = require('./tasks')

const PUG_DIR = path.resolve(__dirname, '../src/pug')
const IMG_DIR = path.resolve(__dirname, '../src/img')
const PAGES_DIR = path.resolve(__dirname, '../src/pages')
const SCSS_DIR = path.resolve(__dirname, '../src/scss')
const OUTPUT_DIR = path.resolve(__dirname, '../dist')

const bs = browserSync.create()
bs.init({
  server: OUTPUT_DIR,
  watch: true
})

build.all()
  .then(() => {
    watch(PUG_DIR, build.pages)
    watch(PAGES_DIR, build.pages)
    watch(IMG_DIR, tasks.copyImage)
    watch(SCSS_DIR, build.css)
  })
  .catch(console.error)

