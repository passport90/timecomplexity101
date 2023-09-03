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

for (const spaceElement of spaceElements) {
  process.stdout.write(spaceElement + '\n')
}

