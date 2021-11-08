'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it("check new linked list", () => {
    let newList = new LinkedList();
    expect(newList.head).toEqual(null);
  });

  it("check add", () => {
    let newList = new LinkedList();
    let initialValue = "first value";
    newList.insert(initialValue);
    expect(newList.head.value).toEqual(initialValue);
  });

  it("check the head", () => {
    let newList = new LinkedList();
    let initialValue = "first value";
    newList.insert(initialValue);
    expect(newList.head.value).toEqual(initialValue);
  });

  it("check add multiple nodes into the linked list", () => {
    let newList = new LinkedList();
    let initialValue = "first value";
    newList.insert(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let anotherValue = "second value";
    newList.insert(anotherValue);
    expect(newList.head.next.value).toEqual(anotherValue);
    expect(newList.head.next.next).toEqual(null);
    expect(newList.head.value).toEqual(initialValue);
  });

  it("check the value if exist", () => {
    let newList = new LinkedList();
    let initialValue = "first value";
    newList.insert(initialValue);
    expect(newList.includes(initialValue)).toEqual(true);
  });
  it("check value not exist", () => {
    let newList = new LinkedList();
    let initialValue = "first value";
    newList.insert(initialValue);
    newList.includes("fake value");
    expect(newList.includes("fake value")).toEqual(false);
  });
  it("Check all the values", () => {
    let newList = new LinkedList();
    let initialValue = "first value";
    newList.insert(initialValue);
    expect(newList.toString()).toEqual("first value --> Null");
  });
});
