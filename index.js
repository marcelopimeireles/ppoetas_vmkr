const readline = require('readline-sync')

function start() {
  const content ={}
  content.searcTerm = AskAndReturnSearchTerm()
  content.prefix = AskAndReturnPrefix() 

  function AskAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ')
  }

  function AskAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = realine.keyInSelect(prefixes, 'Choose an option: ')
    const selectedPrefix = prefixes[selectedPrefixIndex]
    return selectedPrefix
  }

  console.log(content)
}

start()