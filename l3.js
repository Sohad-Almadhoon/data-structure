// Remove element from linkedlist

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
  removeElement(val) {
    let curr = this.head,
      prev = this.head;
    while (curr) {
      if (curr.val === val) {
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }
    }
}
// 1 3 2 5

const li = new LinkedList();
li.addFirst(3);
li.addFirst(4);
li.addFirst(2);
li.addFirst(1);
li.removeElement(2);
console.log(li.head);
