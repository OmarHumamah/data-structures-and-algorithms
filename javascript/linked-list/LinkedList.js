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

}

module.exports = LinkedList