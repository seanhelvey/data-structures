let Node = require('./Node.js')

class LinkedList {
  constructor() {
    this.head = null;
  }

  appendToTail(item) {
    console.log(`append ${item} to tail`);
    let newNode = new Node(item);
    if(!this.head) {
      this.head = newNode;
    }
    else {
      while (this.head.next !== null) {
        this.head = this.head.next;
      }
      this.head.next = newNode;
    }
  }
}

let myList = new LinkedList();
console.log("myList", myList);
myList.appendToTail(7);
myList.appendToTail(6);
console.log("myList", myList);

module.exports = LinkedList
