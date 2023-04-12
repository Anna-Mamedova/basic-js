const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (this.chain.length === 0) {
      this.chain = this.chain.concat(`( ${value} )`)
    } else {
      this.chain = this.chain.concat(`( ${value} )`)
    }
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length) {
      this.chain = []
      throw Error('You can\'t remove incorrect link!')
    } else {
      this.chain.splice(position - 1 ,1)
      return this
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    let result = this.chain.join('~~')
    this.chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
