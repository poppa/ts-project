// @ts-check
const { spawn } = require('child_process')

module.exports = async (cmd, args) => {
  return new Promise((resolve, reject) => {
    const pipe = spawn(cmd, args)

    pipe.on('error', (err) => {
      reject(err)
    })

    pipe.stderr.on('data', (chunk) => {
      console.error(`err: ${chunk.toString().trim()}`)
    })

    pipe.stdout.on('data', (chunk) => {
      console.log(`out: ${chunk.toString().trim()}`)
    })

    pipe.on('close', (code) => {
      resolve(code)
    })
  })
}
