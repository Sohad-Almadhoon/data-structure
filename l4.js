// Remove node from linkedlist
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(data) {
    this.head = new Node(data, this.head);
  }
  removeNode(node) {
      node.val = node.next.val;
      node.next = node.next.next;
  }
}

const li = new LinkedList();
li.addFirst(2);
li.addFirst(4);
li.addFirst(3);
li.addFirst(1); // 1 3 4
li.removeNode(li.head.next.next);
console.log(li.head)

