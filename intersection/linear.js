const readline = require('readline')
const { measureTimeElapsed } = require('../lib/measure')

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  const haystackSet = new Set()
  let isHaystack = true

  let intersectionCount = 0
  for await (const line of rl) {
    if (line === '-') {
      isHaystack = false
      continue
    }

    const element = parseInt(line)

    if (isHaystack) {
      haystackSet.add(element)
    } else {
      if (haystackSet.has(element)) {
        intersectionCount++
      }
    }
  }

  intersectionCount = 0
  measureTimeElapsed(() => {
    for (const element of haystackSet) {
      if (haystackSet.has(element)) {
        intersectionCount++
      }
    }
  });

  console.info(`Intersection count: ${intersectionCount}.`)
}

main()
