const readline = require('readline')
const { measureTimeElapsed } = require('../measure')
const { printResult } = require('./print_result')

const needle = parseInt(process.argv[2])
if (isNaN(needle)) {
  throw new Error('Needle is undefined!')
}

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  const elements = []
  for await (const line of rl) {
    elements.push(parseInt(line))
  }

  let foundIdx
  measureTimeElapsed(() => {
    foundIdx = linearSearch(elements)
  })

  printResult(foundIdx)
}

const linearSearch = elements => {
  let foundIdx
  for (i = 0; i < elements.length; ++i) {
    if (elements[i] === needle) {
      foundIdx = i
      break
    }
  }

  return foundIdx
}

main()
