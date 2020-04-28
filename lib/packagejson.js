const { readfile, writefile } = require('./fs')

const template = {
  bootstrap: 'yarn install --pure-lockfile',
  dev: 'NODE_ENV=development tsc -w',
  build: 'NODE_ENV=production tsc',
  start: 'NODE_ENV=production node dist/index.js',
  'start:dev': 'NODE_ENV=development node dist/index.js',
  clean: 'rimraf dist',
  'clean:all': 'rimraf dist && rimraf node_modules',
  test: './node_modules/.bin/jest',
  lint: 'yarn eslint src/**/*.ts --quiet',
}

const husky = {
  hooks: {
    'pre-commit': 'yarn lint && pretty-quick --staged',
  },
}

module.exports = async () => {
  const d = await readfile('package.json')

  if (d) {
    const p = JSON.parse(d)
    p.main = 'dist/index.js'
    p.scripts = template
    p.husky = husky

    if (await writefile('package.json', JSON.stringify(p, null, 2))) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
