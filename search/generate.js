const shuffle = require('shuffle-array')

const spaceLength = parseInt(process.argv[2])
if (isNaN(spaceLength)) {
  throw new Error('Space length must be a number!')
}
if (spaceLength < 0) {
  throw new Error('Space length must be a non-negative integer!')
}

const spaceElements = []
for (let i = 0; i < spaceLength; ++i) {
  spaceElements.push(i)
}

shuffle(spaceElements)

const bucketLength = spaceLength / 2
const bucketElements = spaceElements.slice(0, bucketLength)
bucketElements.sort((a, b) => a - b)

for (let i = 0; i < bucketElements.length; ++i) {
  process.stdout.write(bucketElements[i] + '\n')
}
