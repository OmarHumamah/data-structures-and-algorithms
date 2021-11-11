"use strict";

const { stack, queue } = require("../Index");

describe("Stack and Queue", () => {
  it("check if it push a new value", () => {
    stack.push(1);
    expect(stack.peak()).toEqual(1);
  });

  it("check if it push multiple values", () => {
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.peak()).toEqual(4);
    expect(stack.length).toEqual(4); // the length is 4
  });

  it("check if it pop a value", () => {
    stack.pop();
    expect(stack.peak()).toEqual(3);
    expect(stack.length).toEqual(3); // the length is 3
  });

  it("check if it empty the stack", () => {
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.peak()).toEqual("the stack is empty");
    expect(stack.length).toEqual(0); // the length is 3
  });

  it("check if it peak the next value", () => {
    expect(stack.peak()).toEqual("the stack is empty");
  });

  it("check if it instantiate an empty stack", () => {
    stack;
    expect(stack.peak()).toEqual("the stack is empty");
    expect(stack.isEmpty()).toEqual(true);
  });

  it("check if it pop and peak on an empty stack", () => {
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
    expect(stack.peak()).toEqual("the stack is empty");
  });

  //------------------------------------------------------------

  it("check if it enqueue into a queue", () => {
    queue.enqueue(1);
    expect(queue.peak()).toEqual(1);
    expect(queue.rear.value).toEqual(1);
  });

  it("check if it enqueue multiple values into a queue", () => {
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.peak()).toEqual(1); // the front value
    expect(queue.rear.value).toEqual(4);
    expect(queue.length).toEqual(4);
  });

  it("check if it dequeue out of a queue the expected value", () => {
    queue.dequeue(); //removes 1
    expect(queue.peak()).toEqual(2);
    expect(queue.rear.value).toEqual(4);
    expect(queue.length).toEqual(3); // the length is 3
  });

  it("check if it peek into a queue", () => {
    expect(queue.peak()).toEqual(2);
  });

  it("check if it empty a queue after multiple dequeues", () => {
    queue.dequeue(); //removes 2
    queue.dequeue(); //removes 3
    queue.dequeue(); //removes 4
    expect(queue.peak()).toEqual("the queue is empty");
  });

  it("check if it instantiate an empty queue", () => {
    queue;
    expect(queue.peak()).toEqual("the queue is empty");
    expect(queue.isEmpty()).toEqual(true);
  });

  it("check if it pop and peak on an empty queue", () => {
    queue.dequeue();

    expect(queue.isEmpty()).toEqual(true);
    expect(stack.peak()).toEqual("the stack is empty");
  });
});
