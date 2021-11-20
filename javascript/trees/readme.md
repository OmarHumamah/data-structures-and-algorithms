# Trees

- A binary tree is a tree data structure comprising of nodes with at most two children i.e. a right and left child. The node at the top is referred to as the root.

## Challenge

- **Binary Tree**
  Create a Binary Tree class with methods `pre order`, `in order` and `post order`. Which return an array of the values, ordered appropriately.
- **Binary Search Tree**
  Create a Binary Search Tree class with methods `Add` with parameter, and `Contains` with parameter.

## Approach & Efficiency

time O(n)
space O(n)

## API

- `pre order`: Returns an array of the values, ordered as (root, left, right)
- `in order`: Returns an array of the values, ordered as (left, root, right)
- `post order`: Returns an array of the values, ordered as (left, right, root)
- `Add`: Adds a new node with that value in the correct location in the binary search tree.
- `Contains`: Returns boolean indicating whether or not the value is in the tree at least once.
