let Node = require('./Node.js')

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    console.log(`enqueue ${item} onto queue`)
    // TODO
    // If queue *does not* have a first
      // #1: Set current last to a newly instantiated node using value passed in
      // #2: Set current first to current last
    // Else if queue *does* have a first
      // #3: Set current last next to a newly instantiated node using value passed in
      // #4: Set current last to current last next
  }

  dequeue() {
    console.log(`dequeue off queue`)
    // If queue *does* have a first
      // #1: Set variable to hold data from current first
      // #2: Set current first to current first next
      // #3: If current first is now null, set current last to null also
      // #4: Return the variable holding data from previous top
    // Else return null if queue *does not* have a first
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
