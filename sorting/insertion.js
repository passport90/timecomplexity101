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
      swap(elements, candidateIdx - 1, candidateIdx)

      --candidateIdx;
    }
    ++sortedCount
  }
}

const swap = (elements, a, b) => {
  let temp = elements[a]
  elements[a] = elements[b]
  elements[b] = temp
}

main()
