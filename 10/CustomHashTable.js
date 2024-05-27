export default  class CustomHashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size)
    }
  
    // Custom hash function
    _hash(key) {
      let total = 0
      let WEIRD_PRIME = 31; // Using a prime number to help distribute keys more uniformly
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length
      }
      return total;
    }
  
    // Method to insert key-value pairs
    set(key, value) {
      let index = this._hash(key)
      if (!this.keyMap[index]) {
        this.keyMap[index] = []
      }
      this.keyMap[index].push([key, value])
    }
  
    // Method to retrieve values by key
    get(key) {
      let index = this._hash(key)
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1]
          }
        }
      }
      return undefined
    }
  
    // Method to delete key-value pairs
    delete(key) {
      let index = this._hash(key)
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            let removed = this.keyMap[index].splice(i, 1)
            return removed[0][1]
          }
        }
      }
      return undefined;
    }
  }
  