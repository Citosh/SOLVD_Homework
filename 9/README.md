# Stack and MinMaxStack Documentation

## Stack

The `Stack` class represents a basic stack data structure with common stack operations.

### Properties

- `stack` (array): An array to store the elements of the stack.

### Methods

#### `constructor()`

Initializes a new `Stack` instance with an empty array.

#### `push(item)`

Adds an item to the top of the stack.

- **Parameters:**
  - `item`: The item to be added to the stack.

#### `pop()`

Removes and returns the item from the top of the stack. If the stack is empty, returns `null`.

- **Returns:** The item from the top of the stack, or `null` if the stack is empty.

#### `peek()`

Returns the item from the top of the stack without removing it. If the stack is empty, returns `null`.

- **Returns:** The item from the top of the stack, or `null` if the stack is empty.

#### `isEmpty()`

Checks if the stack is empty.

- **Returns:** `true` if the stack is empty, otherwise `false`.

## MinMaxStack

The `MinMaxStack` class extends the `Stack` class and provides additional functionality to retrieve the minimum and maximum values in the stack at any given time.

### Properties

- Inherits properties from `Stack`.
- `minStack` (array): An array to store the minimum values.
- `maxStack` (array): An array to store the maximum values.

### Methods

#### `constructor()`

Initializes a new `MinMaxStack` instance with empty arrays for the main stack, minimum stack, and maximum stack.

#### `push(item)`

Adds an item to the top of the stack. Also updates the `minStack` and `maxStack` if the item is a new minimum or maximum.

- **Parameters:**
  - `item`: The item to be added to the stack.

#### `pop()`

Removes and returns the item from the top of the stack. Also updates the `minStack` and `maxStack` if the popped item was the minimum or maximum. If the stack is empty, returns `null`.

- **Returns:** The item from the top of the stack, or `null` if the stack is empty.

#### `getMin()`

Returns the minimum value in the stack. If the stack is empty, returns `null`.

- **Returns:** The minimum value in the stack, or `null` if the stack is empty.

#### `getMax()`

Returns the maximum value in the stack. If the stack is empty, returns `null`.

- **Returns:** The maximum value in the stack, or `null` if the stack is empty.

#### `isEmpty()`

Inherits the `isEmpty` method from the `Stack` class to check if the stack is empty.

- **Returns:** `true` if the stack is empty, otherwise `false`.

# Queue Documentation

## Queue

The `Queue` class represents a queue data structure, which follows the First-In-First-Out (FIFO) principle.

### Properties

- `items` (object): An object to store the elements of the queue, using keys as indices.
- `frontIndex` (number): An integer to track the index of the front element in the queue.
- `backIndex` (number): An integer to track the index of the back element in the queue.

### Methods

#### `constructor()`

Initializes a new `Queue` instance with an empty object for storing items, and sets `frontIndex` and `backIndex` to 0.

#### `enqueue(item)`

Adds an item to the back of the queue.

- **Parameters:**
  - `item`: The item to be added to the queue.

#### `dequeue()`

Removes the item from the front of the queue and advances the `frontIndex`.

- **Returns:** `undefined`.

#### `peek()`

Returns the item at the front of the queue without removing it.

- **Returns:** The item at the front of the queue.

# BinaryTree Documentation

## TreeNode

The `TreeNode` class represents a node in a binary tree.

### Properties

- `value` (any): The value stored in the node.
- `left` (TreeNode|null): A reference to the left child node.
- `right` (TreeNode|null): A reference to the right child node.

### Methods

#### `constructor(value)`

Initializes a new `TreeNode` instance with a given value and sets the left and right child nodes to `null`.

- **Parameters:**
  - `value`: The value to be stored in the node.

## BinaryTree

The `BinaryTree` class represents a binary tree data structure.

### Properties

- `root` (TreeNode|null): The root node of the binary tree.

### Methods

#### `constructor()`

Initializes a new `BinaryTree` instance with the root set to `null`.

#### `insert(value)`

Inserts a new value into the binary tree.

- **Parameters:**
  - `value`: The value to be inserted into the tree.

#### `insertNode(node, newNode)`

Helper method to recursively find the correct position for a new node in the binary tree.

- **Parameters:**
  - `node` (TreeNode): The current node being compared.
  - `newNode` (TreeNode): The new node to be inserted.

#### `search(value)`

Searches for a value in the binary tree.

- **Parameters:**
  - `value`: The value to search for in the tree.
- **Returns:** `true` if the value is found, otherwise `false`.

#### `searchNode(node, value)`

Helper method to recursively search for a value in the binary tree.

- **Parameters:**
  - `node` (TreeNode): The current node being compared.
  - `value`: The value to search for in the tree.
- **Returns:** `true` if the value is found, otherwise `false`.

#### `inOrderTraversal(callback)`

Performs in-order traversal of the binary tree and applies a callback function to each node's value.

- **Parameters:**
  - `callback` (function): The function to apply to each node's value during traversal.

#### `inOrder(node, callback)`

Helper method to recursively perform in-order traversal of the binary tree.

- **Parameters:**
  - `node` (TreeNode): The current node being traversed.
  - `callback` (function): The function to apply to each node's value during traversal.

#### `preOrderTraversal(callback)`

Performs pre-order traversal of the binary tree and applies a callback function to each node's value.

- **Parameters:**
  - `callback` (function): The function to apply to each node's value during traversal.

#### `preOrder(node, callback)`

Helper method to recursively perform pre-order traversal of the binary tree.

- **Parameters:**
  - `node` (TreeNode): The current node being traversed.
  - `callback` (function): The function to apply to each node's value during traversal.

#### `postOrderTraversal(callback)`

Performs post-order traversal of the binary tree and applies a callback function to each node's value.

- **Parameters:**
  - `callback` (function): The function to apply to each node's value during traversal.

#### `postOrder(node, callback)`

Helper method to recursively perform post-order traversal of the binary tree.

- **Parameters:**
  - `node` (TreeNode): The current node being traversed.
  - `callback` (function): The function to apply to each node's value during traversal.

## isBST

The `isBST` function checks if a binary tree is a binary search tree (BST).

### Parameters

- `node` (TreeNode|null): The root node of the binary tree.
- `min` (any|null): The minimum value that nodes in the current subtree can have.
- `max` (any|null): The maximum value that nodes in the current subtree can have.

### Returns

- `boolean`: `true` if the binary tree is a BST, otherwise `false`.

### Function

#### `isBST(node, min = null, max = null)`

Checks if a binary tree is a BST by ensuring that each node's value is within the allowed range, and recursively checks the left and right subtrees.

# SinglyLinkedList Documentation

## Node

The `Node` class represents a node in a singly linked list.

### Properties

- `value` (any): The value stored in the node.
- `next` (Node|null): A reference to the next node in the linked list.

### Methods

#### `constructor(value)`

Initializes a new `Node` instance with a given value and sets the next node to `null`.

- **Parameters:**
  - `value`: The value to be stored in the node.

## SinglyLinkedList

The `SinglyLinkedList` class represents a singly linked list data structure.

### Properties

- `head` (Node|null): The head node of the linked list.
- `size` (number): The size of the linked list.

### Methods

#### `constructor()`

Initializes a new `SinglyLinkedList` instance with the head set to `null` and the size set to 0.

#### `insert(value)`

Inserts a new value at the end of the linked list.

- **Parameters:**
  - `value`: The value to be inserted into the linked list.

#### `delete(value)`

Deletes the first occurrence of a value from the linked list.

- **Parameters:**
  - `value`: The value to be deleted from the linked list.
- **Returns:** `true` if the value was found and deleted, otherwise `false`.

#### `search(value)`

Searches for a value in the linked list.

- **Parameters:**
  - `value`: The value to search for in the linked list.
- **Returns:** `true` if the value is found, otherwise `false`.

#### `printList()`

Prints the values in the linked list in a formatted string.

## hasCycle

The `hasCycle` function checks if a singly linked list has a cycle.

### Parameters

- `head` (Node|null): The head node of the linked list.

### Returns

- `boolean`: `true` if the linked list has a cycle, otherwise `false`.

### Function

#### `hasCycle(head)`

Checks if a singly linked list has a cycle by using two pointers (slow and fast) that move at different speeds. If they meet, there is a cycle.

- **Parameters:**
  - `head`: The head node of the linked list.
- **Returns:** `true` if the linked list has a cycle, otherwise `false`.

# Graph Documentation

## Graph

The `Graph` class represents an undirected, weighted graph data structure.

### Properties

- `adjacencyList` (Map): A map that holds the adjacency list of the graph, where each key is a vertex and the corresponding value is an array of neighboring vertices and their edge weights.

### Methods

#### `constructor()`

Initializes a new `Graph` instance with an empty adjacency list.

#### `addVertex(vertex)`

Adds a new vertex to the graph if it does not already exist.

- **Parameters:**
  - `vertex` (any): The vertex to be added to the graph.

#### `addEdge(vertex1, vertex2, weight = 1)`

Adds an edge between two vertices in the graph with an optional weight. If the vertices do not exist, they are added to the graph.

- **Parameters:**
  - `vertex1` (any): The first vertex.
  - `vertex2` (any): The second vertex.
  - `weight` (number): The weight of the edge (default is 1).

#### `depthFirstSearch(start)`

Performs a depth-first search (DFS) starting from the specified vertex.

- **Parameters:**
  - `start` (any): The starting vertex for the DFS.
- **Returns:** An array of vertices in the order they were visited.

#### `breadthFirstSearch(start)`

Performs a breadth-first search (BFS) starting from the specified vertex.

- **Parameters:**
  - `start` (any): The starting vertex for the BFS.
- **Returns:** An array of vertices in the order they were visited.

#### `shortestPathBFS(start, target)`

Finds the shortest path between two vertices using the breadth-first search (BFS) algorithm.

- **Parameters:**
  - `start` (any): The starting vertex.
  - `target` (any): The target vertex.
- **Returns:** An array representing the shortest path from start to target, or `null` if no path is found.

#### `dijkstra(start, target)`

Finds the shortest path between two vertices using Dijkstra's algorithm.

- **Parameters:**
  - `start` (any): The starting vertex.
  - `target` (any): The target vertex.
- **Returns:** An array representing the shortest path from start to target, or `null` if no path is found.

## PriorityQueue

The `PriorityQueue` class represents a priority queue data structure, which is used in Dijkstra's algorithm.

### Properties

- `values` (Array): An array of objects containing vertices and their priorities.

### Methods

#### `constructor()`

Initializes a new `PriorityQueue` instance with an empty values array.

#### `enqueue(vertex, priority)`

Adds a vertex to the priority queue with a given priority.

- **Parameters:**
  - `vertex` (any): The vertex to be added.
  - `priority` (number): The priority of the vertex.

#### `dequeue()`

Removes and returns the vertex with the highest priority (lowest priority number) from the queue.

- **Returns:** An object containing the vertex and its priority.

#### `sort()`

Sorts the values array in ascending order of priority.

#### `isEmpty()`

Checks if the priority queue is empty.

- **Returns:** `true` if the queue is empty, otherwise `false`.