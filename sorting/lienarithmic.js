const readline = require('readline')
const { isSortingCorrect } = require('./is_correct')

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  const elements = []
  for await (const line of rl) {
    elements.push(parseInt(line))
  }

  const start = process.hrtime.bigint()

  // WRITE HERE

  console.info(`Time elapsed: ${(process.hrtime.bigint() - start) / BigInt(1000)} microseconds.`)

  console.info(`Sorting correct: ${isSortingCorrect(elements)}.`)
}

main()
