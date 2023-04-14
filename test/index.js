const test = require('tape')
const lib = require('../index')

test('basic test', (t) => {
  t.equal(lib.hello(), 'Hello universe', 'Universe okay')
  setTimeout(() => {
    t.end()
  }, 100)
})
