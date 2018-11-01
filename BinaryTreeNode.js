class BinaryTreeNode {
    constructor(data = null) {
      this.data = data;
      this.left = null;
      this.right = null;
    }

    insert(data) {
      console.log('insert called');
      if (!this.data) {
        this.data = data
      } else if (data < this.data) {
        if (!this.left) {
          this.left = new BinaryTreeNode(data)
        } else {
          this.left.insert(data)
        }
      } else if (data >= this.data) {
        if (!this.right) {
          this.right = new BinaryTreeNode(data)
        } else {
          this.right.insert(data)
        }
      }
    }
  }

let myBinarySearchTree = new BinaryTreeNode();
console.log("myBinarySearchTree", myBinarySearchTree);
myBinarySearchTree.insert(43);
myBinarySearchTree.insert(7);
myBinarySearchTree.insert(17);
myBinarySearchTree.insert(42);
console.log("myBinarySearchTree", JSON.stringify(myBinarySearchTree));
  
module.exports = BinaryTreeNode
  