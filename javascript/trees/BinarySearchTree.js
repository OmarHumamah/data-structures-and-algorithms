"use strict";

const Node = require("./Node");
const BinaryTree = require("./binaryTree");

class BinarySearchTree extends BinaryTree {
  add(value) {
    let currentNode;
    if (Number.isInteger(value)) {
      currentNode = new Node(value);
    } else {
      return null;
    }
    if (!this.root) {
      this.root = currentNode;
    } else {
      let _addNode = (node, currentNode) => {
        if (currentNode.value < node.value) {
          if (!node.leftChild) {
            node.leftChild = currentNode;
          } else {
            _addNode(node.leftChild, currentNode);
          }
        } else {
          if (!node.rightChild) {
            node.rightChild = currentNode;
          } else {
            _addNode(node.rightChild, currentNode);
          }
        }
      };
      _addNode(this.root, currentNode);
    }
  }
  contains(value) {
    if (!this.root) {
      return false;
    } else {
      let _containsNode = (node, value) => {
        if (value < node.value) {
          if (!node.leftChild) {
            return false;
          } else {
            _containsNode(node.leftChild, value);
          }
        } else if (value > node.value) {
          if (!node.rightChild) {
            return false;
          } else {
            _containsNode(node.rightChild, value);
          }
        } else if (value === node.value) {
          return true;
        }
        return false;
      };
      return _containsNode(this.root, value);
    }
  }
}

module.exports = BinarySearchTree;
