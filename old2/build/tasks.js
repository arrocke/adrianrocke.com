const pug = require('pug')
const path = require('path')
const fs = require('fs')
const sass = require('node-sass')

const LAYOUT_PATH = path.resolve(__dirname, '../src/pug/layouts')
const BASE_DIR = path.resolve(__dirname, '../src/pug')
const OUTPUT_DIR = path.resolve(__dirname, '../dist')
const PAGES_DIR = path.resolve(__dirname, '../src/pages')
const IMG_DIR = path.resolve(__dirname, '../src/img')
const SCSS_DIR = path.resolve(__dirname, '../src/scss')
const SCSS_TARGETS_DIR = path.resolve(SCSS_DIR, './targets')
const CSS_DIR = path.resolve(OUTPUT_DIR, './css')

// Rerun a method after creating the directory path if an ENOENT error occurs.
const handleExistsError = (fn, path) => 
  new Promise((resolve, reject) => {
    const callback = err => {
      if (err) {
        if (err.code = 'ENOENT') {
          fs.mkdir(path, { recursive: true }, err => {
            if (err) reject(err)
            else {
              fn(callback)
            }
          })
        } else {
          reject(error)
        }
      }
      else resolve()
    }
    fn(callback)
  })


// Compile a pug page from a json file.
module.exports.compilePage = page => {
  console.log(`compiling ${page}...`)
  const data = JSON.parse(fs.readFileSync(path.join(PAGES_DIR, `${page}.json`)))
  const outputFile = path.join(OUTPUT_DIR, `${page}.html`)
  const layoutFile = path.join(LAYOUT_PATH, `${data.layout}.pug`)
  const render = pug.compileFile(layoutFile, { basedir: BASE_DIR, filename: path.basename(layoutFile) })
  const html = render(data)
  return handleExistsError(cb => fs.writeFile(outputFile, html, cb), OUTPUT_DIR)
    .then(() => console.log(`finished ${page}`))
}

// Copy an image to the built folder.
module.exports.copyImage = file => {
  console.log(`copying ${file}...`)
  const srcFile = path.join(IMG_DIR, file)
  const destFile = path.join(OUTPUT_DIR, 'img', file)

  return handleExistsError(cb => fs.copyFile(srcFile, destFile, cb), path.dirname(destFile))
    .then(() => console.log(`finished ${file}`))
}

// Compile a SCSS file.
module.exports.compileScss = target => {
  console.log(`compiling ${target}`)
  const srcFile = path.join(SCSS_TARGETS_DIR, `${target}.scss`)
  const destFile = path.join(CSS_DIR, `${target}.css`)
  const mapFile = `${destFile}.map`
  return new Promise((resolve, reject) => {
    sass.render({
      file: srcFile,
      includePaths: [SCSS_DIR],
      sourceMap: true,
      outFile: destFile
    }, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })
    .then(({ css, map }) => Promise.all([
      handleExistsError(cb => fs.writeFile(destFile, css, cb), CSS_DIR),
      handleExistsError(cb => fs.writeFile(mapFile, map, cb), CSS_DIR),
    ]))
    .then(() => console.log(`finished ${target}`))
}