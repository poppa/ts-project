// @ts-check

module.exports = () => {
  const args = process.argv.slice(2)
  const rest = []
  const argv = {}

  let i = 0

  const stripDash = (s) => {
    return s.replace(/^--?(.*)/, '$1')
  }

  const addArgv = (flag) => {
    if (argv[flag.flag]) {
      if (Array.isArray(argv[flag.flag])) {
        argv[flag.flag] = [argv[flag.flag]]
      }

      argv[flag.flag].push(flag.value)
    } else {
      argv[flag.flag] = flag.value
    }
  }

  const next = () => {
    return args[i + 1]
  }

  const readNext = () => {
    return args[++i]
  }

  const curr = () => {
    return args[i]
  }

  /** @param {string} [n] */
  const isFlag = (n) => {
    const c = n || args[i] || ''
    return !!c.match(/^(-\w=?)|(--\w[-_\w\d]+(=?))/gm)
  }

  // NOTE: This can only be called once in every iteration
  const getFlagValue = () => {
    const c = stripDash(curr() || '')

    if (c.includes('=')) {
      const [x, y] = c.split('=').map((s) => s.trim())
      return { flag: x, value: y }
    } else if (isFlag(next())) {
      return { flag: c, value: true }
    } else {
      return { flag: c, value: readNext() || true }
    }
  }

  for (; i < args.length; i++) {
    if (isFlag()) {
      addArgv(getFlagValue())
    } else {
      rest.push(curr())
    }
  }

  return { argv, rest }
}
