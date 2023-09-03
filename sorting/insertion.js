const { load } = require('../load')
const { printIsCorrect } = require('./lib/is_correct')
const { measureTimeElapsed } = require('../measure')

const main = async () => {
  const elements = await load()

  measureTimeElapsed(() => insertionSort(elements))

  printIsCorrect(elements)
}

const insertionSort = elements => {
  let sortedCount = 1
  while (sortedCount < elements.length) {
    let candidateIdx = sortedCount
    while (
      candidateIdx > 0
      && elements[candidateIdx - 1] > elements[candidateIdx]
    ) {
      let temp = elements[candidateIdx]
      elements[candidateIdx] = elements[candidateIdx - 1]
      elements[candidateIdx - 1] = temp

      --candidateIdx;
    }
    ++sortedCount
  }
}

main()
