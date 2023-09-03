const readline = require('readline')
const { isSortingCorrect } = require('./is_correct')
const { measureTimeElapsed } = require('../measure')

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  const elements = []
  for await (const line of rl) {
    elements.push(parseInt(line))
  }

  measureTimeElapsed(() => {
    // ??
  })

  console.info(`Sorting correct: ${isSortingCorrect(elements)}.`)
}

main()
