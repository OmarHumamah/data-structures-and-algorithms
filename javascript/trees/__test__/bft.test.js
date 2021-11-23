"use strict";

const Node = require("../Node");
const BinarySearchTree = require("../BinarySearchTree");
const breadthFirst = require("../bft");
describe("Node Constructor", () => {
  it("traverse bread first of a tree", () => {
    let tree = new BinarySearchTree();
    let tree2 = new BinarySearchTree();
    tree.add(2);
    tree.add(9);
    tree.add(1);
    tree.add(5);
    tree.add(6);
    tree.add(3);
    console.log(breadthFirst(tree));
    let btf = breadthFirst(tree);
    btf.forEach(e=>{
      tree2.add(e)
    })
    console.log(JSON.stringify(tree));
    console.log(JSON.stringify(tree2));
    
    console.log(JSON.stringify(tree) === JSON.stringify(tree2));

    expect(btf).toEqual([2, 1, 9, 5, 3, 6]);
  });
});
