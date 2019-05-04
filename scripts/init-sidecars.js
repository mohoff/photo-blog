const fs = require('fs')
const path = require('path')
const R = require('ramda')

const { extractExifCreateDate } = require('../src/utils/exif')

const MARKDOWN_EXT = '.md'
const PATH = 'data'
const SIDECAR_TEMPLATE = `---
title: 'title'
image: '<image>'
takenAt: '<date>'
country: '<country>'
place: '<place>'
publish: true
---
`

const isMarkdownFile = file => file.endsWith(MARKDOWN_EXT)
const getSidecarPath = imageFile => {
  const sidecarFile = path.parse(imageFile).name
  return `${PATH}/${sidecarFile}${MARKDOWN_EXT}`
}

const getSidecarContent = async imageFile => {
  const imagePath = `${PATH}/${imageFile}`
  const date = await extractExifCreateDate(imagePath)

  return R.compose(
    R.replace(`<image>`, `./${imageFile}`),
    R.replace(`<date>`, R.defaultTo(`2018-10-05T14:48:00.000Z`, date))
  )(SIDECAR_TEMPLATE)
}

const initSidecar = async () => {
  fileList = await fs.promises.readdir(PATH)
  let numSidecarsExist = 0

  const sidecarFiles = fileList.filter(isMarkdownFile)
  const imageFiles = R.difference(fileList, sidecarFiles)

  await Promise.all(
    imageFiles.map(async imageFile => fs.promises.writeFile(
      getSidecarPath(imageFile),
      await getSidecarContent(imageFile),
      { flag: 'wx' }
    ).catch(error => {
      numSidecarsExist++
      console.log(`Sidecar for ${imageFile} exists already`)
    }))
  )

  console.log(`\n...created ${imageFiles.length - numSidecarsExist} sidecar files\n`)
}

initSidecar().catch(error => {
  console.error('Error while creating sidecar files', error)
})