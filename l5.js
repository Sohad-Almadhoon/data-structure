//Reverse LinkedList
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
  addFirst(val) {
    this.head = new Node(val, this.head);
  }
  reverse(list) {
    let prev = null,
      curr = list.head,
      next = list.head;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      }
    return prev;
  }
}
//null => <= 3 => 4 => 5
const li = new LinkedList();
li.addFirst(12);
li.addFirst(5);
li.addFirst(4);
li.addFirst(3);
console.log(li.reverse(li));
