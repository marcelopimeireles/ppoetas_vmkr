const robots = {
  input: require('./robots/input.js'),
  text: require('./robots/text.js'),
  state: require('./robots/state.js'),
}

async function start() {
  robots.input()
  await robots.text()

  const contentFile = robots.state.load()
  console.dir(contentFile, { depth: null})
}

start()