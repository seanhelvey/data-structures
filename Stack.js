let Node = require('./Node.js')

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    console.log(`push ${item} onto stack`)
  }

  pop() {
    console.log(`pop off stack`)
  }
}

let myStack = new Stack();
console.log("myStack", myStack);
myStack.push(7);
myStack.push(6);
console.log("myStack", myStack);
myStack.pop();
myStack.pop();
console.log("myStack", myStack);

module.exports = Stack
