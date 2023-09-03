const readline = require('readline')
const { measureTimeElapsed } = require('../measure')
const { printResult } = require('./print_result')

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

  let foundIdx
  measureTimeElapsed(() => {
    foundIdx = binarySearch(elements)
  })

  printResult(foundIdx)
}

const binarySearch = elements => {
  let foundIdx
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
      foundIdx = mid
      break
    }
  }

  return foundIdx
}

main()
