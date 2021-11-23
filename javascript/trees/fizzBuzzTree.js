"use strict";
const breadthFirst = require("./bft");
const BinarySearchTree = require("./BinarySearchTree");

function fizzBuzz(tree) {
    let treeArr = breadthFirst(tree)
    let newTree = new BinarySearchTree();
  treeArr.forEach((e) => {
    if (e % 3 === 0 && e % 5 === 0) {
      newTree.add("FizzBuzz");
    } else if (e % 5 === 0) {
      newTree.add("Buzz");
    } else if (e % 3 === 0) {
      newTree.add("Fizz");
    } else {
      newTree.add(e.toString());
    }
  });
  return newTree;
}

module.exports = fizzBuzz;

