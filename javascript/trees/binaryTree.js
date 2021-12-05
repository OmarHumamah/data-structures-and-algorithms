"use strict";

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let outputArray = [];
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    } else {
      let traverseTree = (currentNode) => {
        outputArray.push(currentNode.value);
        if (currentNode.leftChild) {
          traverseTree(currentNode.leftChild);
        }
        if (currentNode.rightChild) {
          traverseTree(currentNode.rightChild);
        }
      };
      traverseTree(currentNode);
      return outputArray;
    }
  }
  inOrder() {
    let outputArray = [];
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    } else {
      let traverseTree = (currentNode) => {
        if (currentNode.leftChild) {
          traverseTree(currentNode.leftChild);
        }
        outputArray.push(currentNode.value);
        if (currentNode.rightChild) {
          traverseTree(currentNode.rightChild);
        }
      };
      traverseTree(currentNode);
      return outputArray;
    }
  }
  postOrder() {
    let outputArray = [];
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    } else {
      let traverseTree = (currentNode) => {
        if (currentNode.leftChild) {
          traverseTree(currentNode.leftChild);
        }
        if (currentNode.rightChild) {
          traverseTree(currentNode.rightChild);
        }
        outputArray.push(currentNode.value);
      };
      traverseTree(currentNode);
      return outputArray;
    }
  }

  findMaxValue(none) {
    let arr = none.inOrder();
    let maxValue = Math.max(...arr);

    return maxValue;
  }

  sumOfOddNum(none) {
    let arr = none.inOrder();
    let oddArr = [];
    arr.forEach(e => {
      if(e%2!== 0) oddArr.push(e)
    }); 
    let sum = oddArr.reduce((acc,x)=>{
      return acc + x
      },0);
    return sum;
  }
}

module.exports = BinaryTree;
