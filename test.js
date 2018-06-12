var seMean = require('./index.js')
var tape = require('tape')

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tape('Output is true', function (t) {
  t.ok(seMean(arr))
  t.end()
})
