"use strict";
const Node = require("./Node");

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.length += 1;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length += 1;
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log("the stack became empty");
      return false;
    }
    
    const tempValue= this.top;
    this.top = this.top.next;
    tempValue.next=null
    this.length -= 1;
    return tempValue.value
  }

  peak() {
    if (this.isEmpty()) {
      return "the stack is empty";
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack