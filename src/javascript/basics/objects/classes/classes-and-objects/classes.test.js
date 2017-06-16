import Test from 'ava';
import * as Assignment from './';

Test('has a Stack class', t => {
  t.truthy(Assignment.Stack);
});

Test('has a Queue class', t => {
  t.truthy(Assignment.Queue);
});

Test('has a LinkedList class', t => {
  t.truthy(Assignment.LinkedList);
});

Test('has a DoubleLinkedList class', t => {
  t.truthy(Assignment.DoubleLinkedList);
});


Test('has a Tree class', t => {
  t.truthy(Assignment.Tree);
});

Test('Stack has push', t => {
  const myStack = new Assignment.Stack();
  t.truthy(myStack.push);
});

Test('Stack has pop', t => {
  const myStack = new Assignment.Stack();
  t.truthy(myStack.pop);
});

Test('Stack can store a value', t => {
  const stack = new Assignment.Stack();
  t.is(stack._size, 0);
  t.deepEqual(stack._storage, {});
  
  stack.push(1);
  t.deepEqual(stack._storage, { '0': 1 });
});


Test('Stack can remove a value', t => {
  const stack = new Assignment.Stack();
  t.deepEqual(stack._storage, {});
  
  stack.push(1);
  t.deepEqual(stack._storage, { '0': 1 });
  const value = stack.pop();
  t.is(value, 1);
});


Test('Queue has size', t => {
  const queue = new Assignment.Queue();
  t.is(queue.size, 0);
});

Test('Queue has enqueue', t => {
  const queue = new Assignment.Queue();
  t.truthy(queue.enqueue);
});

Test('Queue has dequeue', t => {
  const queue = new Assignment.Queue();
  t.truthy(queue.enqueue);
});

Test('Queue can enqueue an item', t => {
  const queue = new Assignment.Queue();
  queue.enqueue(1);
  t.is(queue.size, 1);
  t.deepEqual(queue._storage, { '0': 1 });
});


Test('Queue can dequeue an item', t => {
  const queue = new Assignment.Queue();
  queue.enqueue(1);
  t.is(queue.size, 1);
  t.deepEqual(queue._storage, { '0': 1 });
  
  const value = queue.dequeue();
  t.is(value, 1);
  t.deepEqual(queue._storage, {});
  console.log(queue._oldest);
  console.log(queue._newest);
});
