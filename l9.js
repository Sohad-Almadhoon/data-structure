const Queue = require("./l8");

class MyStack {
  constructor() {
    this.queue = new Queue();
  }
  push(x) {
    let r = this.queue.size();
    this.queue.enqueue(x);
    while (r > 0) {
      this.queue.enqueue(this.queue.dequeue());
      r--;
    }
  }
  pop() {
    return this.queue.dequeue();
  }
  top() {
    return this.queue.peek();
  }
  empty() {
    return this.queue.isEmpty();
  }
  size() {
    return this.queue.size();
  }
}

const stack = new MyStack();
stack.push(40);
stack.push(50);
console.log(stack.pop())
console.log(stack.pop())
// console.log(stack)
// stack.pop();
// console.log(stack.top()); 
// console.log(stack.size()); 
// console.log(stack.empty()); 
