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
const haystackElements = spaceElements.slice(0, bucketLength)
haystackElements.sort((a, b) => a - b)

for (const haystackElement of haystackElements) {
  process.stdout.write(haystackElement + '\n')
}

process.stdout.write('-\n')

shuffle(spaceElements)

const needleElements = spaceElements.slice(0, bucketLength)
needleElements.sort((a, b) => a - b)

for (const needle of needleElements) {
  process.stdout.write(needle + '\n')
}
