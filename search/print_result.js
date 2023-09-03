const printResult = index => {
  if (index !== undefined) {
    console.info(`Found at index: ${index}!`)
  } else {
    console.info('Not found!')
  }
}

module.exports = { printResult }
