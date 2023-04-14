const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let at = '@'
  for(let i = 0; i < email.split('').length; i++){
    if(email.split('')[i] === at && email.split('')[i - 1] !== '.' && email.split('')[i + 1] !== '.'){
      return email.split('').slice(i + 1).join('')
    }
  }
}

module.exports = {
  getEmailDomain
};
