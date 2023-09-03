const readline = require('readline')
const { measureTimeElapsed } = require('../lib/measure')
const { printResult } = require('./lib/print_result')
const { getNeedle } = require('./lib/get_needle')

const main = async () => {
  const needle = getNeedle()

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
