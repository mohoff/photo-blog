const fs = require('fs')
const path = require('path')
const R = require('ramda')

const MARKDOWN_EXT = '.md'
const PATH = 'data'
const SIDECAR_TEMPLATE = `---
title: 'title'
image: 'placeholder.jpg'
takenAt: '2018-10-05T14:48:00.000Z'
country: 'someCountry'
place: 'somePlace'
publish: true
---
`

const isMarkdownFile = file => file.endsWith(MARKDOWN_EXT)
const getSidecarPath = imageFile => {
  const sidecarFile = path.parse(imageFile).name
  return `${PATH}/${sidecarFile}${MARKDOWN_EXT}`
}

const getSidecarContent = imageFile => {
  return SIDECAR_TEMPLATE.replace(/placeholder.jpg/, `./${imageFile}`)
}

const initSidecar = async () => {
  fileList = await fs.promises.readdir(PATH)
  let numSidecarsExist = 0

  const sidecarFiles = fileList.filter(isMarkdownFile)
  const imageFiles = R.difference(fileList, sidecarFiles)

  await Promise.all(
    imageFiles.map(imageFile => fs.promises.writeFile(
      getSidecarPath(imageFile),
      getSidecarContent(imageFile),
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