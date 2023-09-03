const readline = require('readline')
const { isSortingCorrect } = require('./is_correct')

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  const elements = []
  for await (const line of rl) {
    elements.push(parseInt(line))
  }

  const start = process.hrtime.bigint()

  let sortedCount = 1
  while (sortedCount < elements.length) {
    let candidateIdx = sortedCount
    while (candidateIdx > 0 && elements[candidateIdx - 1] > elements[candidateIdx]) {
      let temp = elements[candidateIdx]
      elements[candidateIdx] = elements[candidateIdx - 1]
      elements[candidateIdx - 1] = temp

      --candidateIdx;
    }
    ++sortedCount
  }

  console.info(`Time elapsed: ${(process.hrtime.bigint() - start) / BigInt(1000)} microseconds.`)

  console.info(`Sorting correct: ${isSortingCorrect(elements)}.`)
}

main()
