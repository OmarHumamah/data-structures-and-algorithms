"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashedTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let hash =
      (key.split("").reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0) *
        599) %
      this.size;

    return hash;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    let bucket = { [key]: value };
    this.map[hash].add(bucket);
  }

  get(key) {
    let hash = this.hash(key);
    if (this.map[hash]) {
      let pointer = this.map[hash].head;
      while (pointer) {
        if (pointer.value[key]) {
          return pointer.value[key];
        }
        pointer = pointer.next;
      }
    } else {
      return "empty";
    }
  }

  contains(key) {
    let hash = this.hash(key);
    if (this.map[hash]) {
      let pointer = this.map[hash].head;
      while (pointer) {
        if (pointer.value[key]) {
          return true;
        }
        pointer = pointer.next;
      }
    } else {
      return false;
    }
  }
}

module.exports = {
  HashedTable,
  LinkedList,
  Node,
};
