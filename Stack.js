let Node = require('./Node.js')

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    let newNode = new Node(item);
    console.log(`push ${item} onto stack`)
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top) {
      let item = this.top.data;
      console.log(`pop ${item} off stack`)
      this.top = this.top.next;
      return item;
    }
    else {
      return null;
    }
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
