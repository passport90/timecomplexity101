const { load } = require('../lib/load')
const { measureTimeElapsed } = require('../lib/measure')
const { printResult } = require('./lib/print_result')

const needle = parseInt(process.argv[2])
if (isNaN(needle)) {
  throw new Error('Needle is undefined!')
}

const main = async () => {
  const elements = await load()

  let foundIdx
  measureTimeElapsed(() => {
    foundIdx = linearSearch(elements)
  })

  printResult(foundIdx)
}

const linearSearch = elements => {
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
