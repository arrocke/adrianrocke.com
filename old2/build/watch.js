const fs = require('fs')

module.exports = function (path, handler, { delay = 100 } = {}) {
  console.log(`Watching ${path}...`);

  const debounce = {}
  fs.watch(path, { recursive: true }, (event, filename) => {
    if (filename) {
      // Stop if in timeout
      if (debounce[filename]) return;
      debounce[filename] = setTimeout(() => {
        debounce[filename] = false;
      }, delay);
      console.log(`${filename} changed...`)
      handler(filename)
    }
  })
}