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

// Build all of a single asset type.
const buildPages = () => Promise.all(pages.map(tasks.compilePage))
const buildImages = () => Promise.all(images.map(tasks.copyImage))

// Build entire project.
const all = () => Promise.all([ buildPages(), buildImages() ])

// Run build if executed as main module.
if (require.main === module) {
  all()
}

module.exports = {
  all,
  pages: buildPages,
  images: buildImages 
}
