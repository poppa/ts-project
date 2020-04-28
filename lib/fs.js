const { promises } = require('fs')

async function stat(p) {
  try {
    return await promises.lstat(p)
  } catch (e) {
    return undefined
  }
}

async function exists(p) {
  try {
    return !!(await stat(p))
  } catch (e) {
    return false
  }
}

async function copyfile(from, to) {
  try {
    await promises.copyFile(from, to)
    return true
  } catch (e) {
    return false
  }
}

async function readdir(p) {
  try {
    return await promises.readdir(p)
  } catch (e) {
    console.error('Error:', e)
  }
}

async function mkdir(p, recursive = true) {
  try {
    await promises.mkdir(p, { recursive })
    return true
  } catch (e) {
    return false
  }
}

async function readfile(p) {
  try {
    return await promises.readFile(p, { encoding: 'utf-8' })
  } catch (e) {
    return undefined
  }
}

async function writefile(p, data) {
  try {
    await promises.writeFile(p, data)
    return true
  } catch (e) {
    return false
  }
}

module.exports = {
  stat,
  exists,
  copyfile,
  readdir,
  mkdir,
  readfile,
  writefile,
}
