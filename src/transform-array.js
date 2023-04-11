const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = []

  if(!Array.isArray(arr)) {
    throw Error('"arr" parameter must be an instance of the Array!')
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '--double-next'){
      i = i - 1
      continue
    }
    if(arr[i] === '--discard-prev'){
      newArr.pop()
      continue
    }
    if(arr[i] === '--discard-next'){
      i = i + 1
        continue
    }
    if(arr[i] === '--double-prev'){
      newArr.push(arr[i - 1])
        continue
    }
    newArr.push(arr[i])
  }
  return newArr.flat(1)
}

module.exports = {
  transform
};
