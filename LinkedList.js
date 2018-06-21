let Node = require('./Node.js')

class LinkedList {
  constructor() {
    this.head = null;
  }

  appendToTail(item) {
    console.log(`append ${item} to tail`);
  }
}

let myList = new LinkedList();
console.log("myList", myList);
myList.appendToTail(7);
myList.appendToTail(6);
console.log("myList", myList);

module.exports = LinkedList
