/*

Given a directed graph, find the length of the longest path in the graph.
The path can start from any node.

Time Complexity: O(V+E)
Space Complexity: O(V)

*/

export function diameter(start: Node) {
  if (start === null) {
    return 0;
  }

  let tSort = topoSort(start);
  let diameter = 0;

  while (tSort.length > 0) {
    let current = tSort.pop()!;
    diameter = Math.max(diameter, current.longestPath);

    for (let neighbor of current.neighbors) {
      if (current.longestPath + 1 > neighbor.longestPath) {
        neighbor.longestPath = current.longestPath + 1;
      }
    }
  }

  return diameter;
}

export function topoSort(node: Node) {
  let stack = new Array<Node>();

  dfsVisit(node, stack);

  return stack;
}

export function dfsVisit(node: Node, stack: Node[]) {
  node.state = NODE_STATES.VISITING;

  for (let neighbor of node.neighbors) {
    if (neighbor.state === NODE_STATES.UNVISITED) {
      dfsVisit(neighbor, stack);
    }
  }

  node.state = NODE_STATES.VISITED;
  stack.push(node);
}

const NODE_STATES = {
  VISITED: 'VISITED',
  UNVISITED: 'UNVISITED',
  VISITING: 'VISITING',
};

export class Graph {
  nodes: Node[];

  constructor(nodes: Node[] = []) {
    this.nodes = nodes;
  }
}

export class Node {
  data: number;
  neighbors: Node[];
  state: string;
  longestPath: number;

  constructor(data: number) {
    this.data = data;
    this.neighbors = new Array<Node>();
    this.state = NODE_STATES.UNVISITED;
    this.longestPath = 0;
  }
}