const readline = require('readline')
const { measureTimeElapsed } = require('../lib/measure')
const { printResult } = require('./lib/print_result')

const needle = parseInt(process.argv[2])
if (isNaN(needle)) {
  throw new Error('Needle is undefined!')
}

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  const map = []
  let i = 0
  for await (const line of rl) {
    map[parseInt(line)] = i++
  }

  let foundIdx
  measureTimeElapsed(() => {
    foundIdx = map[needle]
  })

  printResult(foundIdx)
}

main()
