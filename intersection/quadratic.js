const readline = require('readline')

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  const haystackElements = []
  const needleElements = []

  let isHaystack = true
  for await (const line of rl) {
    if (line === '-') {
      isHaystack = false
      continue
    }

    const element = parseInt(line)
    if (isHaystack) {
      haystackElements.push(element)
    } else {
      needleElements.push(element)
    }
  }

  const start = process.hrtime.bigint()

  let intersectionCount = 0
  for (const needle of needleElements) {
    for (const haystackElement of haystackElements) {
      if (needle === haystackElement) {
        ++intersectionCount
      }
    }
  }

  console.info(`Intersection count: ${intersectionCount}.`)

  console.info(`Time elapsed: ${(process.hrtime.bigint() - start) / BigInt(1000)} microseconds.`)
}

main()
