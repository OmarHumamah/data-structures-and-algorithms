"use strict";

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  add(key, value) {
    const hash = this.hash(key);

    const entry = { [key]: value };

    if (!this.map[hash]) {
      this.map[hash] = new Array();
    }

    this.map[hash].push(entry);
  }

  get(key) {
    const hash = this.hash(key);

    return this.map[hash];
  }

  contain(key) {
    const hash = this.hash(key);
    return this.map[hash][0].hasOwnProperty(key)?true:null;
  }

  hash(key) {
    const assciSum = key.split("").reduce((p, n) => p + n.charCodeAt(0), 0);
    const withPrime = assciSum * 599;
    return withPrime % this.size;
  }
}

module.exports = HashMap;
