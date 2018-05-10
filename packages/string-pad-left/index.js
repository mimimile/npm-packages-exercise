'use strict'

var repeat = require('repeat-string')

module.exports = function padLeft(str, num, ch) {
  str = str.toString()

  if (typeof num === 'undefined') {
    return str
  }

  if (ch === 0) {
    ch = '0'
  } else if (ch) {
    ch = ch.toString()
  } else {
    ch = " "
  }

  return repeat(ch, num - str.length) + str
}