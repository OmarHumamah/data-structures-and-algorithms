"use strict";

const Node = require("../Node");
const BinarySearchTree = require("../BinarySearchTree");

describe("Node Constructor", () => {
  it("successfully instantiates a new node", () => {
    let node = new Node(1);
    expect(node.leftChild).toBeNull();
    expect(node.rightChild).toBeNull();
    expect(node.value).toBe(1);
  });

  it("successfully instantiate an empty Binary Search Tree", () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });
  it("successfully instantiate a tree with a single root node", () => {
    let tree = new BinarySearchTree();
    tree.add(2);
    expect(tree.root.value).toBe(2);
  });
  it("successfully add a left child and right child to a single root node", () => {
    let tree = new BinarySearchTree();
    tree.add(6);
    tree.add(4);
    tree.add(8);
    expect(tree.root.value).toBe(6);
    expect(tree.root.leftChild.value).toBe(4);
    expect(tree.root.rightChild.value).toBe(8);
  });

  it("successfully returns null on BinaryTree methods if called on an empty tree", () => {
    let tree = new BinarySearchTree();
    let preOrder = tree.preOrder();
    let inOrder = tree.inOrder();
    let postOrder = tree.postOrder();

    expect(preOrder).toBeNull();
    expect(inOrder).toBeNull();
    expect(postOrder).toBeNull();
  });
  it("successfully return a collection from a preOrder traversal", () => {
    let tree = new BinarySearchTree();
    tree.add(2);
    tree.add(9);
    tree.add(1);
    tree.add(5);
   
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual([2, 1, 9, 5]);
  });
  it("successfully return a collection from an inOrder traversal", () => {
    let tree = new BinarySearchTree();
    tree.add(2);
    tree.add(9);
    tree.add(1);
    tree.add(5);
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual([1, 2, 5, 9]);
  });
  it("successfully return a collection from a postOrder traversal", () => {
    let tree = new BinarySearchTree();
    tree.add(2);
    tree.add(9);
    tree.add(1);
    tree.add(5);
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual([1, 5, 9, 2]);
  });
});
