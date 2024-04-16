// Remove duplicate elements from linkedlist

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
  removeDuplicateElements() {
      let curr = this.head; 
    
    while (curr && curr.next) {
       // 1 1 
        console.log(curr.val)
      if (curr.val === curr.next.val) {
          curr.next = curr.next.next;
          
      } else {
        curr = curr.next;
      }
    }

    return this.head;
  }
}
// 1 1 2 5

const li = new LinkedList();
li.addFirst(2);
li.addFirst(3);
li.addFirst(3);
li.addFirst(1);
li.addFirst(1);

console.log(li.removeDuplicateElements());
// console.log(li.head)
