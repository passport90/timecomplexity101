const readline = require('readline')
const { measureTimeElapsed } = require('../lib/measure')

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
    intersectionCount = nestedIterationIntersectionLiniear(haystackElements, needleElements)
  })

  console.info(`Intersection count: ${intersectionCount}.`)
}

const nestedIterationIntersectionLiniear = (haystackElements, needleElements) => {
  let intersectionCount = 0

  const combinedArray = haystackElements.concat(needleElements);
  const sortedArray = combinedArray.sort((a, b) => {
    intersectionCount++;
    return a - b
  });

  return intersectionCount
}

main()
