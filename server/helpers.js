function shuffle(arr) {
  let currIdx = arr.length
  let tempVal
  let randomIdx

  while (currIdx !== 0) {
    randomIdx = Math.floor(Math.random() * currIdx)
    currIdx -= 1
    tempVal = arr[currIdx]
    arr[currIdx] = arr[randomIdx]
    arr[randomIdx] = tempVal
  }

  return arr
}

module.exports = shuffle
