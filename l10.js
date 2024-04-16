// Queue using stack

class MyQueue {
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }
  push(item) {
    this.stackOne.push(item);
  }
  pop() {
    if (!this.stackTwo.length) {
      while (this.stackOne.length) {
        this.stackTwo.push(this.stackOne.pop());
      }
      }
    return this.stackTwo.pop();
  }
  peek() {
    if (!this.stackTwo.length) {
      while (this.stackOne.length) {
        this.stackTwo.push(this.stackOne.pop());
      }
    }
    return this.stackTwo[this.stackTwo.length - 1];
    }
    empty() {
        return !this.stackOne.length && !this.stackTwo.length
    }
}
const queue = new MyQueue();
queue.push(10);
queue.push(20);
queue.push(30); 
// queue.pop(); 
// queue.pop();
queue.pop();
console.log(queue.peek())
console.log(queue)
