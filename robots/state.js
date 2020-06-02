const fs = require('fs')
const contentFilePath = './content.json'
const scriptFilePath = './content/after-effects-script.js'

function save(content) {
  try {
    const contentString = JSON.stringify(content)
    return fs.writeFileSync(contentFilePath, contentString)
  }
  catch (error) {
    console.log(error)
  }
}

function saveScript(content) {
  const contentString = JSON.stringify(content)
  const scriptString = `var content =${contentString}`
  return fs.writeFileSync(scriptFilePath, scriptString)
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
  saveScript,
  load
}