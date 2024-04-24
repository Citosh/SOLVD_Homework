// Task 1


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  updateInfo: function(newInfo) {
    Object.keys(newInfo).forEach(key => {
      if (this.hasOwnProperty(key) && Object.getOwnPropertyDescriptor(this, key).writable) {
        Object.assign(this, newInfo);
      }
    })
  }

}

Object.keys(person).forEach(key => {
  Object.defineProperty(person, key, {
    writable: false,
    configurable: true
  })
})

Object.defineProperty(person, 'address', {
  value: {},
  writable: true,
  configurable: false,
  enumerable: false
})

// person.updateInfo({address : {street : "street", home: 0}})
// console.log(person)


// Task 2


const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5
}

Object.defineProperties(product, {
  price: {
    enumerable: false,
    writable: false
  },
  quantity: {
    enumerable: false,
    writable: false
  } 
})

function getTotalPrice(productObj){
  const price = Object.getOwnPropertyDescriptor(productObj, "price").value
  const quantity = Object.getOwnPropertyDescriptor(productObj, "quantity").value
  return price * quantity
}

// console.log(getTotalPrice(product))

function deleteNonConfigurable(object, property) {
  if (object.hasOwnProperty(property)){
    if(Object.getOwnPropertyDescriptor(object, property).configurable){
      throw new Error(`prorepty ${property} is not configurable`) 
    }
    delete object[property]
  }
}

// console.log(deleteNonConfigurable(product, "name"))


// Task 3


const bankAccount = {
  balance: 1000,

  get formattedBalance(){
    console.log(this)
    return `$${this.balance}`
  },

  set setBalance(newBalance){
    this.balance = newBalance
  },

  trancfer: function(recipientObj, amount){
    if(amount > this.balance){
      throw new Error('Not enought currency')
    }
    else {
      this.setBalance = this.balance - amount
      recipientObj.setBalance = recipientObj.balance + amount
    }
  }
}


// const firstAccount = Object.create(bankAccount);
// const secondAccount = Object.create(bankAccount);
// firstAccount.trancfer(secondAccount, 100)

// console.log(firstAccount)
// console.log(secondAccount)


// Task 4
function createImmutableObject(object){
  
  if (typeof object !== 'object' || object === null) {
    return object; 
  }
  
  let clonedObj = Array.isArray(object) ? [] : {};
  
  Object.keys(object).forEach(key =>{
    clonedObj[key] = createImmutableObject(object[key])
  })
  return Object.freeze(clonedObj);
}

// const imutablePerson = createImmutableObject(person)
// console.log(Object.getOwnPropertyDescriptors(imutablePerson))


// Task 5

function observeObject(object, callback){
  return new Proxy(object, {
    get(target, property){
      callback(property, 'get')
      return Reflect.get(target, property)
    },
    set(target, property, receiver){
      callback(property, 'set')
      return Reflect.set(target, property, receiver)
    }
  })
}

function logCallback(property, method){ 
  console.log(`${property} is ${method}`)
}

// const observedPerson = observeObject(person, logCallback)
// console.log(observedPerson.firstName)


// Task 6


function deepCloneObject(object){
  
  if (typeof object !== 'object' || object === null) {
    return object; 
  }
  
  let clonedObj = Array.isArray(object) ? [] : {};
  
  Object.keys(object).forEach(key =>{
    clonedObj[key] = createImmutableObject(object[key])
  })
  return clonedObj;
}

// const deepClonePerson = deepCloneObject(person)
// console.log(deepClonePerson)


// Task 7


function validateObject(obj, schema) {

  for (const key in schema) {
    if (schema[key].required && !(key in obj)) {
      return false
    }

    if (typeof obj[key] !== schema[key].type) {
      return false
    }
  }
  return true
}


const personSchema = {
  firstName: { type: "string", required: true },
  lastName: { type: "string", required: true },
  age: { type: "number", required: true },
  email: { type: "string", required: true },
}

console.log(validateObject(person, personSchema))


