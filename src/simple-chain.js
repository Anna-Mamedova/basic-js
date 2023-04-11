const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.length
  },
  addLink(value) {
    this.push(value)
  },
  removeLink(position) {
    this[position].remove()
  },
  reverseChain() {
    this.reverseChain()
  },
  finishChain() {
    return this.join('~~')
  }
};

module.exports = {
  chainMaker
};
