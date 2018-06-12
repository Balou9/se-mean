var sdeviate = require('sdeviate')

function seMean (arr) {
  return sdeviate(arr) / Math.sqrt(arr.length)
}

module.exports = seMean
