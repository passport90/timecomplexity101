const { load } = require('../lib/load')
const { measureTimeElapsed } = require('../lib/measure')
const { getNeedle } = require('./lib/get_needle')
const { printResult } = require('./lib/print_result')

const main = async () => {
  const needle = getNeedle()
  const elements = await load()

  let foundIdx
  measureTimeElapsed(() => {
    foundIdx = binarySearch(elements, needle)
  })

  printResult(foundIdx)
}

const binarySearch = (elements, needle) => {
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
