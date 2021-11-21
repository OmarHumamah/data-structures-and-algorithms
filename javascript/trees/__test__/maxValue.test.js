"use strict";

const Node = require("../Node");
const BinarySearchTree = require("../BinarySearchTree");

describe("Node Constructor", () => {
  it(" can find max value of a tree", () => {
    let tree = new BinarySearchTree();
    tree.add(2);
    tree.add(9);
    tree.add(1);
    tree.add(5);
    let maxValue = tree.findMaxValue(tree);
    expect(maxValue).toEqual(9);
  });
});
