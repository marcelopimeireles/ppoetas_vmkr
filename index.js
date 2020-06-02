const readline = require('readline-sync')
const robots = {
  text: require('./robots/text.js')
}

async function start() {
  const content ={}
  content.searchTerm = AskAndReturnSearchTerm()
  content.prefix = AskAndReturnPrefix() 

  await robots.text(content)

  function AskAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ')
  }

  function AskAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose an option: ')
    const selectedPrefix = prefixes[selectedPrefixIndex]
    return selectedPrefix
  }

  console.log(content)
}

start()