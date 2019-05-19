const getRandomIntegerBetweenZeroAnd = require('./random')

describe('getRandomIntegerBetweenZeroAnd works as expected', () => {
  it('should return a number between zero and max', () => {
    const max = 10

    const result = getRandomIntegerBetweenZeroAnd(max)

    expect(result).toBeGreaterThanOrEqual(0)
    expect(result % 1).toBe(0)
  })
})
