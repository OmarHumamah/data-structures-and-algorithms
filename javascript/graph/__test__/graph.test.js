"use strict";

const { Vertex, Edge, Graph } = require("../graph");

describe("implement Graph TEST", () => {
  it("Node can be successfully added to the graph", () => {
    const vertexOne = new Vertex(1);
    const graph = new Graph();
    graph.addVertex(vertexOne);

    expect(graph.gitVertexes()).toBeDefined();
  });

  it("An edge can be successfully added to the graph", () => {
    const vertexOne = new Vertex(1);
    const vertexTwo = new Vertex(2);
    const graph = new Graph();
    graph.addVertex(vertexOne);
    graph.addEdge(vertexOne, vertexTwo, 5);

    expect(graph.getNeighbors(vertexOne)).toEqual([
      { vertex: { value: 2 }, weight: 5 },
    ]);
  });

  it("A collection of all nodes can be properly retrieved from the graph", () => {
    const vertexOne = new Vertex(1);
    const vertexTwo = new Vertex(2);
    const vertexThree = new Vertex(3);
    const vertexFour = new Vertex(4);

    const graph = new Graph();
    graph.addVertex(vertexOne);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);

    graph.addEdge(vertexOne, vertexThree, 6);
    graph.addEdge(vertexOne, vertexTwo, 5);
    graph.addEdge(vertexTwo, vertexFour, 0);
    
    expect(graph.gitVertexes()).toBeDefined();
  });

  it(" Neighbors are returned with the weight between nodes included", () => {
    const vertexOne = new Vertex(1);
    const vertexTwo = new Vertex(2);
    const vertexThree = new Vertex(3);
    const vertexFour = new Vertex(4);

    const graph = new Graph();
    graph.addVertex(vertexOne);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);

    graph.addEdge(vertexOne, vertexThree, 6);
    graph.addEdge(vertexOne, vertexTwo, 5);
    graph.addEdge(vertexTwo, vertexFour, 0);

    expect(graph.getNeighbors(vertexOne)).toEqual([{"vertex": {"value": 3}, "weight": 6}, {"vertex": {"value": 2}, "weight": 5}])
  });

  it("The proper size is returned, representing the number of nodes in the graph", () => {
    const vertexOne = new Vertex(1);
    const vertexTwo = new Vertex(2);
    const vertexThree = new Vertex(3);
    const vertexFour = new Vertex(4);

    const graph = new Graph();
    graph.addVertex(vertexOne);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);

    graph.addEdge(vertexOne, vertexThree, 6);
    graph.addEdge(vertexOne, vertexTwo, 5);
    graph.addEdge(vertexTwo, vertexFour, 0);

    expect(graph.size()).toEqual(4)
  });

  it("A graph with only one node and edge can be properly returned", () => {
    const vertexOne = new Vertex(1);

    const graph = new Graph();
    graph.addVertex(vertexOne);

    graph.addEdge(vertexOne, vertexOne, 6);

    console.log(graph);

    expect(graph.size()).toEqual(1);
    expect(graph.gitVertexes()).toBeDefined()

  });

});
