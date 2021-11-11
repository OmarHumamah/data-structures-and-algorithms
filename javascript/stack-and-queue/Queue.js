"use strict";

const Node = require("./Node");

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.length += 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length += 1;
    }
    return this.front;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "the queue is empty";
    }

    const temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    this.length -= 1;
    return temp.value
  }

  peak() {
    if (this.isEmpty()) {
      return "the queue is empty";
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;
