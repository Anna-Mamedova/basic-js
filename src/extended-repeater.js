const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes
  let separator
  let addition
  let additionRepeatTimes
  let additionSeparator

  if(!options.repeatTimes){
    repeatTimes = 0
  } else {
    repeatTimes = options.repeatTimes
  }
  if(!options.separator){
    separator = '+'
  } else {
    separator = options.separator
  }
  if(!options.hasOwnProperty('addition')){
    addition = ''
  } else {
    addition = options.addition
  }
  if(!options.additionRepeatTimes){
    additionRepeatTimes = 0
  } else {
    additionRepeatTimes = options.additionRepeatTimes
  }
  if(!options.additionSeparator){
    additionSeparator = '|'
  } else {
    additionSeparator = options.additionSeparator
  }

  let result = ''
  if(repeatTimes === 0) {
    result = `${str}${addition}`
    return result
  }
  for(let i = 0; i < repeatTimes; i++){
    result += `${str}${addition}`
    for(let j = 0; j < additionRepeatTimes - 1; j++){
      result += `${additionSeparator}${addition}`
    }
    if(i === repeatTimes - 1){
      return result
    }
    result += `${separator}`
  }
}

module.exports = {
  repeater
};
