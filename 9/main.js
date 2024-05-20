import { Stack, MinMaxStack } from "./structures/Stack.js";
import { Queue } from "./structures/Queue.js";
import { BinaryTree, isBST } from "./structures/BinaryTree.js";
import { Graph } from "./structures/Graph.js";
import { Node, SinglyLinkedList, hasCycle } from "./structures/LinkedList.js";


const stack = new MinMaxStack()

stack.push(1)
stack.push(2)
stack.push(5)
stack.push(4)
stack.push(0)

// console.log(stack.stack)

// stack.pop()

// console.log(stack.stack)

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(8)
queue.enqueue(0)
queue.enqueue(11)



// console.log(queue)
// console.log(queue.peek())
// queue.dequeue(0)

// console.log(queue)
// console.log(queue.peek())


const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);

// console.log('In-Order Traversal:');
// tree.inOrderTraversal(value => console.log(value));

// console.log('Pre-Order Traversal:');
// tree.preOrderTraversal(value => console.log(value));

// console.log('Post-Order Traversal:');
// tree.postOrderTraversal(value => console.log(value));

// console.log('Search for 7:', tree.search(7));  // true
// console.log('Search for 3:', tree.search(3));  // false

// console.log('Is BST:', isBST(tree.root));  // true


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

// console.log('DFS:', graph.depthFirstSearch('A')); // [ 'A', 'B', 'E', 'D', 'F', 'C' ]
// console.log('BFS:', graph.breadthFirstSearch('A')); // [ 'A', 'B', 'C', 'E', 'D', 'F' ]

// console.log('Shortest Path BFS from A to E:', graph.shortestPathBFS('A', 'E')); // [ 'A', 'B', 'E' ]
// console.log('Shortest Path Dijkstra from A to E:', graph.dijkstra('A', 'E')); // [ 'A', 'C', 'D', 'F', 'E' ]



const list = new SinglyLinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

list.printList(); // 1 -> 2 -> 3 -> 4 -> 5

console.log('Search for 3:', list.search(3)); // true
console.log('Search for 6:', list.search(6)); // false

list.delete(3);
list.printList(); // 1 -> 2 -> 4 -> 5

list.delete(1);
list.printList(); // 2 -> 4 -> 5

console.log('Search for 1:', list.search(1)); // false

// Creating a cycle for testing
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Cycle here

console.log('Has cycle:', hasCycle(node1)); // true