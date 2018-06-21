let Node = require('./Node.js')

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    console.log(`push ${item} onto stack`)
    // TODO
    // #1: Instantiate new node using value passed in
    // #2: Set new node's next to point at current top
    // #3: Set current top to point at instantiated node
  }

  pop() {
    console.log(`pop off stack`)
    // TODO
    // If stack has a top
      // #1: Set variable to hold data from current top
      // #2: Set current top to point at next from current top
      // #3: Return the variable holding data from the previous top
    /// Else return null
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
