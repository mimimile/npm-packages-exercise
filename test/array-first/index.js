var arrayFirst = require('../../packages/array-first')
var fixtures = require('./fixtures')
var tape = require('tape')

fixtures.forEach(function (f) {
  tape('arrayFirst returns ' + f.expected + ' for ' + f.array, function (t) {
    t.plan(1)

    var actual = arrayFirst(f.array, f.num)
    t.equal(actual, f.expected)
  })
})
