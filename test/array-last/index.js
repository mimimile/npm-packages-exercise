var arrayLast = require('../../packages/array-last')
var fixtures = require('./fixtures')
var tape = require('tape')

fixtures.forEach(function (f) {
  tape('arrayLast returns ' + f.expected + ' for ' + f.array, function (t) {
    t.plan(1)

    var actual = arrayLast(f.array, f.num)
    t.equal(actual, f.expected)
  })
})