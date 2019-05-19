const R = require('ramda')
const ExifImage = require('exif').ExifImage

// '2017:11:21 17:58:39' --> '2017-11-21T17:58:39
const formatExifDate = R.compose(
  R.join('T'),
  R.adjust(0, R.replace(/:/g, '-')),
  R.split(' ')
)

const extractExif = imagePath => {
  return new Promise(resolve => {
    new ExifImage({ image: imagePath }, (error, exifData) => {
      resolve(exifData)
    })
  })
}

const extractExifCreateDate = async imagePath => {
  const exifData = await extractExif(imagePath)
  const createDate = R.path(['exif', 'CreateDate'])(exifData)

  if (!createDate) {
    return undefined
  }

  const formattedDate = formatExifDate(createDate)
  return new Date(formattedDate).toISOString()
}

module.exports = {
  extractExif,
  extractExifCreateDate,
}
