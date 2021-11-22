function breadthFirst(tree) {
  let traverse = [];
  let arr = [];
  let current = tree.root;
  arr.push(tree.root);
  while (arr.length > 0) {
    current = arr.shift();
    if (current.leftChild) {
      arr.push(current.leftChild);
    }
    if (current.rightChild) {
      arr.push(current.rightChild);
    }
    traverse.push(current.value);
  }
  return traverse;
}
module.exports = breadthFirst;
