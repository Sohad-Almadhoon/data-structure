// Select the min number in the stack
class MinStack{
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(ele) {
        if (!this.stack.length) {
            this.minStack.push(ele);
        } else {
            let min = Math.min(ele, this.minStack[this.minStack.length - 1]);
            this.minStack.push(min);
        }
        this.stack.push(ele);
    }
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();
minStack.push(10);
minStack.push(20);
minStack.push(5);
minStack.push(25);
minStack.pop();
// console.log(minStack)
// console.log(minStack.getMin());
console.log(minStack.top(), minStack);

