/*

Use an array to implement 2 stacks.

Time Complexity: O(1) for both push() and pop()
Space Complexity: ​O(1) - no extra space used apart from the array.

*/

export class ArrayStack {
  arr: number[];
  s1: number;
  s2: number;

  constructor(arraySize: number) {
    this.arr = new Array(arraySize);
    this.s1 = 0;
    this.s2 = this.arr.length - 1;
  }

  push(stackNumber: number, data: number) {
    if (stackNumber !== 1 && stackNumber !== 2) {
      throw new Error('Invalid stack number');
    }

    if (this.s1 > this.s2) {
      throw new Error('Stack full');
    }

    if (stackNumber === 1) {
      this.arr[this.s1++] = data;
    } else {
      this.arr[this.s2--] = data;
    }
  }

  pop(stackNumber: number) {
    if (stackNumber !== 1 && stackNumber !== 2) {
      throw new Error('Invalid stack number');
    }

    if (stackNumber === 1 && this.s1 > 0) {
      return this.arr[--this.s1];
    } else if (stackNumber === 2 && this.s2 < this.arr.length - 1) {
      return this.arr[++this.s2];
    } else {
      throw new Error('Stack empty');
    }
  }
}
