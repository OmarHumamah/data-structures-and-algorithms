"use strict";

const queue = require("../Index");

describe("Pseudo Stack and Queue", () => {
 it('if Pseudo Queue enqueue', ()=>{
  queue.enqueue(20);
  queue.enqueue(15);
  queue.enqueue(10);
  
  queue.enqueue(5);

  expect(queue.peek()).toEqual(20);
  expect(queue.storage[3]).toEqual(5);

 })

 it('if Pseudo Queue dequeue', ()=>{

    queue.dequeue();
    expect(queue.peek()).toEqual(15);
  expect(queue.storage[2]).toEqual(5);
 })

 it('if Pseudo Queue dequeue second time', ()=>{

    queue.dequeue();
    expect(queue.peek()).toEqual(10);
  expect(queue.storage[1]).toEqual(5);
 })

 it('if Pseudo Queue Instantiates a stack', ()=>{
    queue.secondStack;

    expect( typeof queue.secondStack).toBe("object");
 })

});


