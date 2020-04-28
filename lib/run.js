const exec = require('./exec')
const { devdeps } = require('./packages')

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
    console.log(`Running "yarn add"`)
    const r = await exec('yarn', ['add', '--dev', ...devdeps])

    if (r !== 0) {
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
}
