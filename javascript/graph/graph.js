"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.list = new Map();
    this.length = 0;
  }

  addVertex(vertex) {
    this.list.set(vertex, []);
    this.length += 1;
    return vertex;
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
      console.log("Invalid nodes");
    }
    const edge = new Edge(endVertex, weight);
    const start = this.list.get(startVertex);
    start.push(edge);
  }
  gitVertexes() {
    for (const [vertex, edge] of this.list.entries()) {
      console.log(vertex, edge);
    }
    return this.list;
  }

  getNeighbors(vertex) {
    return this.list.get(vertex);
  }

  size() {
    return this.length;
  }
}

module.exports={
    Vertex,
    Edge,
    Graph
}
// const vertexOne = new Vertex(1);
// const vertexTwo = new Vertex(2);
// const vertexThree = new Vertex(3);
// const vertexFour = new Vertex(4);

// const graph = new Graph();
// graph.addVertex(vertexOne);
// // graph.addVertex(vertexTwo);
// // graph.addVertex(vertexThree);
// // graph.addVertex(vertexFour);

// graph.addEdge(vertexOne, vertexThree, 6);
// // graph.addEdge(vertexOne, vertexTwo, 5);
// // graph.addEdge(vertexTwo, vertexFour, 0);
// console.log(graph);
// graph.gitVertexes()
// console.log(graph.getNeighbors(vertexOne));
// console.log(graph.size());
