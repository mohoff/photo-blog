const R = require('ramda')

const filterValidTags = R.complement(R.anyPass([R.isNil, R.isEmpty, R.equals('country'), R.equals('place')]))

export default filterValidTags