const readline = require('readline')
const { measureTimeElapsed } = require('../measure')

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity })

  const haystackElements = []
  const needleElements = []

  let isHaystack = true
  for await (const line of rl) {
    if (line === '-') {
      isHaystack = false
      continue
    }

    const element = parseInt(line)
    if (isHaystack) {
      haystackElements.push(element)
    } else {
      needleElements.push(element)
    }
  }

  let intersectionCount = 0
  measureTimeElapsed(() => {
    intersectionCount = nestedIterationIntersection(haystackElements, needleElements)
  })

  console.info(`Intersection count: ${intersectionCount}.`)
}

const nestedIterationIntersection = (haystackElements, needleElements) => {
  let intersectionCount = 0

  for (const needle of needleElements) {
    for (const haystackElement of haystackElements) {
      if (needle === haystackElement) {
        ++intersectionCount
      }
    }
  }

  return intersectionCount
}

main()
