const tasks = require('./tasks')

// List assets to work on.
const pages = [
  'index'
]

const images = [
  'headshot.jpg',
  'hero.jpg',
  'icons/menu.svg'
]

const css = [
  'common',
  'util'
]

// Build all of a single asset type.
const buildPages = () => Promise.all(pages.map(tasks.compilePage))
const buildImages = () => Promise.all(images.map(tasks.copyImage))
const buildCss = () => Promise.all(css.map(tasks.compileScss))

// Build entire project.
const all = () => Promise.all([ buildPages(), buildImages(), buildCss() ])

// Run build if executed as main module.
if (require.main === module) {
  all().catch(console.error)
}

module.exports = {
  all,
  pages: buildPages,
  images: buildImages,
  css: buildCss
}
