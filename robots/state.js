const fs = require('fs')
const contentFilePath = './content.json'

function save(content) {
  try {
    const contentString = JSON.stringify(content)
    return fs.writeFileSync(contentFilePath, contentString)
  }
  catch (error) {
    console.log(error)
  }
}

function load() {
  try {
    const fileBuffer = fs.readFileSync(contentFilePath, 'utf-8')
    const contentJson = JSON.parse(fileBuffer)
    return contentJson
  }
  catch (error) {
    console.log(error)
  }
}

module.exports = {
  save,
  load
}