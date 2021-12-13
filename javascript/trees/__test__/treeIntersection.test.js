const treeIntersection = require('../tree-intersection');
const BinarySearchTree = require("../BinarySearchTree");

describe("tree-intersection", () => {
    it("Get the common values between two trees", () => {
      let tree = new BinarySearchTree();
      let tree2 = new BinarySearchTree();
      tree.add(2);
      tree.add(9);
      tree.add(1);
      tree.add(5);
      tree.add(6);
      tree.add(3);
      
      tree2.add(2);
      tree2.add(10);
      tree2.add(1);
      tree2.add(5);
      tree2.add(7);
      tree2.add(3);
      
      
  
      expect(treeIntersection(tree, tree2)).toEqual([2, 1, 5, 3]);
    });
  });
