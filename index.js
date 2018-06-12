var sdeviate = require('./sdeviate/index.js')

function seMean (arr) {
  return sdeviate(arr) / Math.sqrt(arr.length)
}

module.exports = seMean
