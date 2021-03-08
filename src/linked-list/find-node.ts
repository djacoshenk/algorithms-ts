export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }

  getNext() {
    return this.next;
  }
}

class LinkedList {
  head: Node;
  tail: Node;

  constructor(head: Node, tail: Node) {
    this.head = head;
    this.tail = tail;
  }

  findNode(n: number) {
    let node: Node | null = this.head;

    for (let i = 0; i < n - 1; i++) {
      if (node != null) {
        node = node.getNext();
      } else {
        return `No node at index ${n}`;
      }
    }

    if (node == null) {
      return `No node at index ${n}`;
    }

    return node;
  }
}

let list = new LinkedList(new Node(1, new Node(2, new Node(3))), new Node(3));

console.log(list.findNode(1));
console.log(list.findNode(2));
console.log(list.findNode(3));
console.log(list.findNode(4));
