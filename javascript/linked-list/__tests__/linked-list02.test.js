'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it("append value", () => {
    let newList = new LinkedList();
    newList.insert(1);
    expect(newList.head.value).toEqual(1);
  });
  
  it("append a node before a node located in the middle of a linked list", () => {
    const testNext = new LinkedList(1);
    testNext.insert(1);
    testNext.insert(2);
    testNext.insert(4);
    testNext.insert(5);
    testNext.insertBefore(4, 3);
    expect(testNext.head.next.next.value).toEqual(4);
  });
  it("append a node before the first node of a linked list", () => {
    const testNext = new LinkedList(1);
    testNext.insert(1);
    testNext.insert(2);
    testNext.insert(4);
    testNext.insert(5);
    testNext.insertBefore(1, 3);
    expect(testNext.head.value).toEqual(1);
  });
  
  it("append a node after the last node of the linked list", () => {
    const testNext = new LinkedList(1);
    testNext.insert(1);
    testNext.insert(2);
    testNext.insert(4);
    testNext.insert(5);
    testNext.insertAfter(5, 3);
    let currentNode = testNext.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    expect(currentNode.value).toEqual(5);
  });
  
  
});
