export class Stack {
  
  constructor() {
    this._size = 0;
    this._storage = {};
  }
  
  /**
   * Pushes an item
   * @return {[type]} [description]
   */
  push(value) {
    this._storage[this._size] = value;
    this._size++;
  }
  
  /**
   * Pops off an item
   * @return {[type]} [description]
   */
  pop() {
    this._size--;
    const size = this._size;
    const value = this._storage[size];
    delete this._storage[size];
    return value;
  }
}

export class Queue {
  
  constructor() {
    this._newest = 0;
    this._oldest = 0;
    this._storage = {};
  }
  
  /**
   * Gets the size of the queue
   *
   * @returns {number}
   */
  get size() {
    return this._newest - this._oldest;
  }
  
  
  enqueue(value) {
    this._storage[this._newest] = value;
    this._newest++;
  }
  
  
  dequeue() {
    
    if (this._oldest !== this._newest) {
      const value = this._storage[this._oldest];
      delete this._storage[this._oldest];
      this._oldest++;
      return value;
    }
  }
}


class NodeLinkList {
  
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


export class LinkedList {
  
  constructor() {
    this._length = 0;
    this.head = null;
  }
  
  add(value) {
    const node = new NodeLinkList(value);
    let currentNode = this.head;
    
    if (!currentNode) {
      this.head = node;
      this._length++;
      return node;
    }
    
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    
    currentNode.next = node;
    this._length++;
    return node;
  }
  
  searchNodeAt(position) {
    
  }
  
  remove(position) {
    
  }
}

export class DoubleLinkedList {
  
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }
  
  add(value) {
    
  }
  
  
  searchNodeAt(position) {
    
  }
  
  remove(position) {
    
  }
}

class TreeNode {
  
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
  }
}

export class Tree {
  
  constructor(value) {
    this._root = new TreeNode(value);
  }
  
  traverseDF() {
    
  }
  
  traverseBF() {
    
  }
  
  contains() {
    
  }
  
  add(value, to, traverse) {
    
  }
  
  remove(child, parent) {
    
  }
}
