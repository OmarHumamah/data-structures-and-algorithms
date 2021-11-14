'use strict';


class Stack {

  constructor() {
    this.storage = new Array();
    this.top = null;
  }

  peek() {
    return this.top;
  }

  push(item)  {
    this.storage.unshift(item);
    this.top = item;
  }

  pop() {
    let item = this.storage.shift();
    this.top = this.storage[0];
    return item;
  }
}



class PseudoQueue extends Stack {

  constructor() {
    super();
    this.secondStack = new Stack();
    this.storage = new Array();
  }
  
  enqueue(item) {
    this.storage.push(item);
  }
  
  dequeue() {
    return this.storage.shift();
  }
  
  peek() {
    return this.storage[0];
  }

}


module.exports = {Stack, PseudoQueue};