
const Node = require("../Node");
const BinarySearchTree = require("../BinarySearchTree");
const breadthFirst = require("../bft");
const fizzBuzz = require('../fizzBuzzTree')
describe("Node Constructor", () => {
  it("check if Breadth First arr can restructure the same tree", () => {
    let tree = new BinarySearchTree();
    let tree2 = new BinarySearchTree();
    tree.add(2);
    tree.add(9);
    tree.add(1);
    tree.add(5);
    tree.add(6);
    tree.add(3);

    let btf = breadthFirst(tree);
    btf.forEach(e=>{
      tree2.add(e)
    })
    expect(tree).toEqual(tree2);
  });

  it('check the fizzBuzz function',()=>{
    let tree = new BinarySearchTree();
    tree.add(2);
    tree.add(9);
    tree.add(1);
    tree.add(3);
    tree.add(360);
    tree.add(6);
    tree.add(3);
    tree.add(15);

    console.log(JSON.stringify(fizzBuzz(tree)));

    expect(typeof fizzBuzz(tree)).toBe('object')
  })

});
