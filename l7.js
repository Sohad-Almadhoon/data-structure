// Odd & Even LinkedList
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
  middle(li) {
      let slow = li.head , fast = li.head;
      while (fast.next && fast) {
          slow = slow.next;
          fast = fast.next.next;
      }
      return slow;
  }
}
const li = new LinkedList();

li.addFirst(12);
li.addFirst(5);
li.addFirst(4);
li.addFirst(3);
console.log(li.middle(li));
