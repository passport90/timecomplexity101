const measureTimeElapsed = func => {
  const start = process.hrtime.bigint()

  func()

  console.info(`Time elapsed: ${(process.hrtime.bigint() - start) / BigInt(1_000)} microseconds.`)
}

module.exports = { measureTimeElapsed }
