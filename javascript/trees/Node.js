'use strict'

class Node {
    constructor(value, leftChild = null, rightChild = null) {
      this.value = value;
      this.leftChild = leftChild;
      this.rightChild = rightChild;
    }
  }

  module.exports = Node;
  