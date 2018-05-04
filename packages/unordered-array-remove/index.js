'use strict'

function remove (arr, i) {
  if (i >= arr.length || i < 0) return
  var last = arr.pop()
  console.log('last', last)
  if (i < arr.length) {
    var tmp = arr[i]
    arr[i] = last
    console.log('tmp', tmp)
    return tmp
  }
  return last
}
