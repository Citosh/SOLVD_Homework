# CustomHashTable Documentation

## CustomHashTable

The `CustomHashTable` class represents a hash table data structure, which allows for efficient insertion, deletion, and retrieval of key-value pairs.

### Properties

- `keyMap` (Array): An array used to store the hash table's key-value pairs.

### Methods

#### `constructor(size = 53)`

Initializes a new `CustomHashTable` instance with a specified size. The default size is 53.

- **Parameters:**
  - `size` (number, optional): The size of the hash table. Default is 53.

#### `_hash(key)`

A custom hash function to convert a string key into an index for the `keyMap` array.

- **Parameters:**
  - `key` (string): The key to be hashed.
- **Returns:** `number` - The index generated from the key.

#### `set(key, value)`

Inserts a key-value pair into the hash table. If the key already exists, the value is updated.

- **Parameters:**
  - `key` (string): The key for the value.
  - `value` (any): The value to be stored.

#### `get(key)`

Retrieves the value associated with a given key from the hash table.

- **Parameters:**
  - `key` (string): The key for which the value is to be retrieved.
- **Returns:** The value associated with the key, or `undefined` if the key is not found.

#### `delete(key)`

Deletes the key-value pair associated with a given key from the hash table.

- **Parameters:**
  - `key` (string): The key for which the key-value pair is to be deleted.
- **Returns:** The value associated with the deleted key, or `undefined` if the key is not found.


## Performance Analysis

### Custom Hash Function

The custom hash function used in the `CustomHashTable` class aims to distribute keys uniformly across the hash table array. It achieves this by leveraging a prime number multiplier and character codes of the key string. 

- **Time Complexity:** The time complexity of the hash function is O(n), where n is the length of the key string or the minimum of 100, whichever is smaller.

### Custom Hash Table

The custom hash table implementation provides efficient key-value pair operations, including insertion, retrieval, and deletion.

- **Insertion:** The time complexity of inserting a key-value pair into the hash table is O(1) on average. In the worst case, when there are collisions, it can degrade to O(n), where n is the number of collisions.
- **Retrieval:** The time complexity of retrieving a value by key is O(1) on average. In the worst case, when all keys hash to the same index, it can degrade to O(n), where n is the number of key-value pairs.
- **Deletion:** The time complexity of deleting a key-value pair is also O(1) on average. In the worst case, when there are collisions, it can degrade to O(n), where n is the number of collisions.

### Trade-offs

- **Space vs. Time:** The hash table's size impacts its space complexity and collision probability. Smaller sizes may lead to more collisions but lower memory usage, while larger sizes reduce collisions but increase memory usage.
- **Hash Function Complexity:** The custom hash function prioritizes simplicity for faster computation. However, a more complex hash function could potentially reduce collisions further but might increase computational overhead.
