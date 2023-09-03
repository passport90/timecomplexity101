const getNeedle = () => {
  const needle = parseInt(process.argv[2])
  if (isNaN(needle)) {
    throw new Error('Needle is undefined!')
  }

  return needle
}

module.exports = { getNeedle }

