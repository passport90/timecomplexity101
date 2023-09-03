const readline = require('readline')

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

  const start = process.hrtime.bigint()

  let intersectionCount = 0

  // ???

  console.info(`Time elapsed: ${(process.hrtime.bigint() - start) / BigInt(1000)} microseconds.`)

  console.info(`Intersection count: ${intersectionCount}.`)
}

main()
