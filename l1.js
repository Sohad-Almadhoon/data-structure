class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  addLast(data) {
    let current = this.head;
    const node = new Node(data);
    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  addAtIndex(data, index) {
    if (index < 0 || index > this.size) return;
    else if (index === 0) {
      this.addFirst(data);
    }

    let current = this.head,
      prev,
      count = 0;
    const node = new Node(data);
    console.log(node);
    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = node;
    node.next = current;
    this.size++;
  }
  getData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const li = new LinkedList();
li.addFirst(10);
// li.addFirst(20);
li.addLast(40);
li.addAtIndex(60, 1);
// li.getData();
console.log(li);
