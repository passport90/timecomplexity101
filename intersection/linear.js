const readline = require('readline')
const { measureTimeElapsed } = require('../lib/measure')

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  let haystackElements = []
  let needleElements = []

  let isHaystack = true
  for await (const line of rl) {
    if (line === '-') {
      isHaystack = false
      continue
    }

    const element = parseInt(line)

    if (isHaystack) {
      haystackElements[element] = 1
    } else {
      needleElements.push(element)
    }
  }


  let intersectionCount = 0
  measureTimeElapsed(() => {
    intersectionCount = nestedIterationIntersection(haystackElements, needleElements)
    // throw new Error('Not implemented!')
  })

  console.info(`Intersection count: ${intersectionCount}.`)
}

const nestedIterationIntersection = (haystackElements, needleElements) => {
  let intersectionCount = 0

  for (const needle of needleElements) {
    if (haystackElements[needle]) {
      intersectionCount++
    }
  }

  return intersectionCount
}

main()
