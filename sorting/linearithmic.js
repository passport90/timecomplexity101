const { load } = require('../load')
const { printIsCorrect } = require('./lib/is_correct')
const { measureTimeElapsed } = require('../measure')

const main = async () => {
  const elements = await load()

  measureTimeElapsed(() => {
    // ??
  })

  printIsCorrect(elements)
}

main()
