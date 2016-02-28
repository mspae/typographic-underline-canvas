module.exports = function multiplyValue (value, multiplier) {
  var str = value
  var m = multiplier
  var result = str.match(/(\d*\.?\d*)(.*)/)
  // http://stackoverflow.com/questions/2868947/split1px-into-1px-1-px-in-javascript
  return result[1] * m + result[2]
}
