let Node = require('./Node.js')

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    console.log(`enqueue ${item} onto queue`)
    if(!this.first) {
      this.last = new Node(item);
      this.first = this.last;
    }
    else {
      this.last.next = new Node(item);
      this.last = this.last.next;
    }
  }

  dequeue() {
    if(this.first) {
      let item = this.first.data;
      console.log(`dequeue ${item} off queue`)
      this.first = this.first.next;
      if(!this.first) { this.last = null; }
      return item;
    }
    return null
  }

  isEmpty() {
    return !this.first
  }
}


let myQueue = new Queue();
console.log("myQueue", myQueue);
myQueue.enqueue(7);
myQueue.enqueue(6);
console.log("myQueue", myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log("myQueue", myQueue);

module.exports = Queue
