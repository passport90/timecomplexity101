const readline = require('readline')
const needle = parseInt(process.argv[2])
if (isNaN(needle)) {
  throw new Error('Needle is undefined!')
}

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  const map = new Map()
  let i = 0
  for await (const line of rl) {
    map.set(parseInt(line), i++)
  }

  const start = Date.now()

  const index = map.get(needle)
  if (index !== undefined) {
    console.info(`Found at index: ${index}!`)
  } else {
    console.info('Not found!')
  }

  console.info(`Time elapsed: ${Date.now() - start} ms.`)
}

main()
