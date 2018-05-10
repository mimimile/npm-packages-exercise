'use strict'

module.exports = function objPairs (obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]]
  })
}