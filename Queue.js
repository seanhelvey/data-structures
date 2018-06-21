let Node = require('./Node.js')

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    console.log(`enqueue ${item} onto queue`)
  }

  dequeue() {
    console.log(`dequeue off queue`)
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
