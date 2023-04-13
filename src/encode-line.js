const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0
  let result = ''

  for (let i = 0; i < str.length; i++) {
    for(let j = i; j < str.length; j++){
      if (str[i] === str[j]) {
        count++
          if(j === str.length - 1 && count !== 1){
            result += count + str[i]
            count = 0
            i = j
            break
          }else if (j === str.length - 1 && count === 1){
            result += str[i]
            count = 0
            i = j
            break
          }
      } else {
        if(count === 1){
          result += str[i]
          count = 0
          i = j - 1
          break
        } else {
          result += count + str[i]
          count = 0
          i = j - 1 
          break
        }
      }
    }
  }
  return result
}

module.exports = {
  encodeLine
};
