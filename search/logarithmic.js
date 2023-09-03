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
  let left = 0
  let right = elements.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    const midElement = elements[mid]
    if (midElement < needle) {
      left = mid + 1
    } else if (needle < midElement) {
      right = mid - 1
    } else {
      index = mid
      break
    }
  }

  console.info(`Time elapsed: ${(process.hrtime.bigint() - start) / BigInt(1000)} microseconds.`)

  if (index !== undefined) {
    console.info(`Found at index: ${index}!`)
  } else {
    console.info('Not found!')
  }
}

main()
