// Queue
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    // 0 => 5
    this.items[this.tail] = item;
    this.tail++;
  }
  dequeue() {
    if (this.isEmpty()) return;
    delete this.items[this.head];
    this.head++;
  }
  size() {
    return this.tail - this.head;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.items[this.head];
  }
  print() {
    for (const i in this.items) {
      console.log(this.items[i]);
    }
  }
}
const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(40);

// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// console.log(queue.peek());
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.print();
module.exports = Queue;