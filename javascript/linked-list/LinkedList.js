"use strict";

let Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length += 1;
      this.tail = node;
      return this;
    }
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length += 1;
    this.tail = node;
    return this;
  }
  kthFromEnd(k) {
    k += 1;
    if (typeof k !== "number") return null;
    if (k === 1) return this.tail.value;
    if (k === this.length) return this.head.value;
    if (k > this.length) return null;
    if (k < 1) return null;
    let currentNode = this.head;
    let counter = 0;
    while (counter < this.length - k) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode.value;
  }

  zipLists(firstLinkedList, secondLinkedList) {
    let zippedLinkedList = new LinkedList();
    let firstPointer = firstLinkedList.head;
    let secondPointer = secondLinkedList.head;
    if (!firstPointer) {
      return console.log("1st LInked List is empty");
    } else if (!secondPointer) {
      return console.log("2nd LInked List is empty");
    }

    while (firstPointer || secondPointer) {
      if (firstPointer) {
        zippedLinkedList.append(firstPointer.value);
        firstPointer = firstPointer.next;
      }
      if (secondPointer) {
        zippedLinkedList.append(secondPointer.value);
        secondPointer = secondPointer.next;
      }
    }

    return zippedLinkedList;
  }
}

module.exports = LinkedList;
