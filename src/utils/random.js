// The maximum is exclusive and the minimum is inclusive
const getRandomIntegerBetweenZeroAnd = max => {
  max = Math.floor(max)
  return Math.floor(Math.random() * max)
}

module.exports = getRandomIntegerBetweenZeroAnd
