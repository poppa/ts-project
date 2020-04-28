#!/usr/bin/env node
const { args, copy, run } = require(`./lib`)

const start = async () => {
  const { argv } = args()
  const results = []

  if (!argv['skip-init']) {
    results.push(await run.yarnInit())
  }

  if (!argv['skip-add']) {
    results.push(await run.yarnAdd())
  }

  if (!argv['skip-package-json']) {
    results.push(await run.packagejson())
  }

  if (!argv['skip-copy-config']) {
    results.push(await copy.config())
  }

  if (!argv['skip-copy-src']) {
    results.push(await copy.src())
  }

  if (!argv['skip-copy-jest']) {
    results.push(await copy.jest())
  }

  if (!argv['skip-copy-tests']) {
    results.push(await copy.tests())
  }

  if (!argv['skip-build']) {
    results.push(await run.build())
  }

  if (!argv['skip-test']) {
    results.push(await run.jest())
  }

  if (results.every((r) => r)) {
    console.log(`\n`)
    console.log(`Everything seems to fly. Happy coding...\n`)
  } else {
    console.log(`\n`)
    console.log(`Something wasn't correct. Check output above...\n`)
  }
}

start().catch((e) => console.error(`Main error:`, e))
