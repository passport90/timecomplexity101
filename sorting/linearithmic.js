const { load } = require('../lib/load')
const { printIsCorrect } = require('./lib/is_correct')
const { measureTimeElapsed } = require('../lib/measure')

const main = async () => {
  const elements = await load()

  measureTimeElapsed(() => {
    // ???
    throw new Error('Not implemented!')
  })

  printIsCorrect(elements)
}

main()
