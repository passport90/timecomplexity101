const readline = require('readline')
const { measureTimeElapsed } = require('../lib/measure')

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  const haystackElements = [];
  const needleElements = []

  let isHaystack = true
  for await (const line of rl) {
    if (line === '-') {
      isHaystack = false
      continue
    }

    const element = parseInt(line)
    if (isHaystack) {
      haystackElements[element] = -1;
    } else {
      needleElements.push(element)
    }
  }


  let intersectionCount = 0
  measureTimeElapsed(() => {
    intersectionCount = nestedIterationIntersectionLiniear(haystackElements, needleElements)
  })

  console.info(`Intersection count: ${intersectionCount}.`)
}

const nestedIterationIntersectionLiniear = (haystackElements, needleElements) => {
  let intersectionCount = 0

  for (const needle of needleElements) {
    if (haystackElements[needle]) {
      intersectionCount++
    }
  }

  return intersectionCount
}

main()
