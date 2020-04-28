const { join, resolve } = require('path')
const { readdir, copyfile, mkdir, exists } = require('./fs')

async function lowCopy(isrc, idest) {
  const dest = join(resolve(process.cwd()), idest)

  if (!(await exists(dest))) {
    if (!(await mkdir(dest))) {
      console.error(`Failed creating destination "${dest}"`)
      return false
    }
  }

  const src = join(__dirname, '..', 'files', isrc)
  const files = await readdir(src)

  console.log(`Copy files from ${src} to ${dest}`)

  for (const f of files) {
    if (await copyfile(join(src, f), join(dest, f))) {
      console.log(`Copied "${f}"`)
    } else {
      console.error(`Failed copying file "${f}"`)
      return false
    }
  }

  return true
}

module.exports = {
  config: async () => {
    return await lowCopy('config', '.')
  },

  src: async () => {
    return await lowCopy('src', 'src')
  },

  jest: async () => {
    return await lowCopy('jest', 'jest')
  },

  tests: async () => {
    return await lowCopy('__tests__', '__tests__')
  },
}
