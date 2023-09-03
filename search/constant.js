const readline = require('readline')
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

  const start = process.hrtime.bigint()

  const index = map[needle]

  console.info(`Time elapsed: ${(process.hrtime.bigint() - start) / BigInt(1000)} microseconds.`)

  if (index !== undefined) {
    console.info(`Found at index: ${index}!`)
  } else {
    console.info('Not found!')
  }
}

main()
