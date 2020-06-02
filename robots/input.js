const readline = require('readline-sync')
const state = require('./state.js')

function robot() {
  const content ={
    maximumSentences: 7
  }
  content.searchTerm = AskAndReturnSearchTerm()
  content.prefix = AskAndReturnPrefix() 
  state.save(content)

  function AskAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ')
  }
  
  function AskAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose an option: ')
    const selectedPrefix = prefixes[selectedPrefixIndex]
    return selectedPrefix
  }
}

module.exports = robot