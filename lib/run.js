const exec = require('./exec')
const pj = require('./packagejson')
const { devdeps, deps } = require('./packages')

module.exports = {
  yarnInit: async () => {
    console.log(`Running "yarn init"`)
    const r = await exec('yarn', ['init', '-y'])

    if (r !== 0) {
      console.error('Non-zero return code from `yarn init`')
      process.exit(1)
    }

    return true
  },

  yarnAdd: async () => {
    console.log(`Adding dev dependencies`)
    const r = await exec('yarn', ['add', '--dev', ...devdeps])

    if (r !== 0) {
      console.error('Non-zero return code from `yarn add --dev`')
      process.exit(1)
    }

    console.log(`Adding dependencies`)
    const r2 = await exec('yarn', ['add', ...deps])

    if (r2 !== 0) {
      console.error('Non-zero return code from `yarn add`')
      process.exit(1)
    }

    return true
  },

  build: async () => {
    console.log(`Trying to build initial TS file`)
    const r = await exec('yarn', ['tsc'])

    if (r === 0) {
      console.log(`Initial test build succeeded`)
      return true
    } else {
      console.log(`Initial test build failed`)
      return false
    }
  },

  jest: async () => {
    console.log(`Running initial Jest test`)

    const r = await exec('yarn', ['jest'])

    if (r === 0) {
      console.log(`Initial test succeeded`)
      return true
    } else {
      console.log(`Initial test failed`)
      return false
    }
  },

  packagejson: async () => {
    console.log(`Patching "package.json"`)
    return pj()
  },
}
