"use strict";

function treeIntersection(tree, tree2) {
  let result = [];
  let arr = tree.preOrder();
  let arr2 = tree2.preOrder();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr2[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = treeIntersection;
