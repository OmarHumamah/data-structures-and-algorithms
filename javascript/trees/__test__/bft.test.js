"use strict";

const Node = require("../Node");
const BinarySearchTree = require("../BinarySearchTree");
const breadthFirst = require("../bft");
describe("Node Constructor", () => {
  it("traverse bread first of a tree", () => {
    let tree = new BinarySearchTree();
    tree.add(2);
    tree.add(9);
    tree.add(1);
    tree.add(5);
    tree.add(6);
    tree.add(3);
    console.log(tree);
    console.log(breadthFirst(tree));
    let btf = breadthFirst(tree);
    expect(btf).toEqual([2, 1, 9, 5, 3, 6]);
  });
});
