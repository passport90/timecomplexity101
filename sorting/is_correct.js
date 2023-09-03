const isSortingCorrect = (elements) => {
  let correct = true
  let last
  for (const element of elements) {
    if (last === undefined) {
      last = element
      continue
    }

    if (last > element) {
      correct = false
      break
    }
  }

  return correct
}

module.exports = { isSortingCorrect }
