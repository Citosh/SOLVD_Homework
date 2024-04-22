// // Task 1 

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     email: "john.doe@example.com",
//     updateInfo : function(newInfo){
        
//     }


// }

// Object.keys(person).forEach(key => {
//     Object.defineProperty(person, key, {
//         writable: false,    
//     });
// });

// //person.firstName = 'Artem'


// console.log(Object.keys(person))


function curry(f) { // curry(f) выполняет каррирование
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // использование
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
curriedSum(1)
curriedSum(2)