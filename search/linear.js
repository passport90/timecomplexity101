const readline = require('readline')
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

  const start = process.hrtime.bigint()

  let index = undefined
  for (i = 0; i < elements.length; ++i) {
    if (elements[i] === needle) {
      index = i
      break
    }
  }

  if (index !== undefined) {
    console.info(`Found at index: ${index}!`)
  } else {
    console.info('Not found!')
  }

  console.info(`Time elapsed: ${(process.hrtime.bigint() - start) / BigInt(1000)} microseconds.`)
}

main()
