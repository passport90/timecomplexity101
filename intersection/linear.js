const readline = require('readline')
const { measureTimeElapsed } = require('../lib/measure')

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  // ???

  let isHaystack = true
  for await (const line of rl) {
    if (line === '-') {
      isHaystack = false
      continue
    }

    const element = parseInt(line)

    // ???
  }


  let intersectionCount = 0
  measureTimeElapsed(() => {
    // ???
  })

  console.info(`Intersection count: ${intersectionCount}.`)
}

main()
