const { load } = require('../lib/load')
const { measureTimeElapsed } = require('../lib/measure')
const { getNeedle } = require('./lib/get_needle')
const { printResult } = require('./lib/print_result')

const main = async () => {
  const needle = getNeedle()

  const elements = await load()

  let foundIdx
  measureTimeElapsed(() => {
    foundIdx = linearSearch(elements, needle)
  })

  printResult(foundIdx)
}

const linearSearch = (elements, needle) => {
  let foundIdx
  for (i = 0; i < elements.length; ++i) {
    if (elements[i] === needle) {
      foundIdx = i
      break
    }
  }

  return foundIdx
}

main()
