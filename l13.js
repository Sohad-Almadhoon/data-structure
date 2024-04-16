class Stack{
    constructor() {
        this.items = [];
        this.count = 0;
    }
    push(ele) {
        this.items[this.count] = ele;
        this.count++;
    }
    pop() {
        const removedElement = this.items[this.count - 1];
        this.items.splice(this.count - 1, 1);
        this.count--;
        return removedElement;
    }
    isEmpty() {
        return this.count === 0;
    }
    length() {
        return this.count;
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
// stack.pop();
stack.pop();
console.log(stack)
console.log(stack.isEmpty());
console.log(stack.length());


