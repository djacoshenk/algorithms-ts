/*

Reverse a linked list. You should use O(1) space.

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function reverseList(head: Node) {
  if (head === null) {
    return null;
  }

  let prev = null;
  let curr: Node | null = head;

  while (curr !== null) {
    let next: Node | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}
