import CustomHashTable from "./CustomHashTable.js";

  // Testing the CustomHashTable
  let hashTable = new CustomHashTable();
  hashTable.set('hello', 'world')
  hashTable.set('goodbye', 'earth')
  console.log(hashTable.get('hello')) // Output: world
  console.log(hashTable.get('goodbye')) // Output: earth
  hashTable.delete('hello')
  console.log(hashTable.get('hello')) // Output: undefined
  