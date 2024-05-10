// TASK 1

function promiseAll(arrayOfPromises) {
    return new Promise((resolve, reject) =>{
        let fulfilledPromises = []

        arrayOfPromises.map((promise, index) =>{
            return promise.then((value) =>{
                fulfilledPromises[index] = value
                if(fulfilledPromises.filter(e => e).length === arrayOfPromises.length){
                    resolve(fulfilledPromises)
                }
            }).catch(reject)
        })
    })
}

// const promises = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3)
//   ];

//   promiseAll(promises)
//     .then(results => {
//       console.log("All promises resolved:", results); // Expected: [1, 2, 3]
//     })
//     .catch(error => {
//       console.error("At least one promise rejected:", error);
//     });


// TASK 2
function promiseAllSettled(arrayOfPromises){
    return new Promise((resolve, reject) =>{
        let fulfilledPromises = []

        arrayOfPromises.map((promise, index) =>{
            return promise.then((value) =>{
                fulfilledPromises[index] = {status: 'fulfilled', value}
                if(fulfilledPromises.filter(e => e).length === arrayOfPromises.length){
                    resolve(fulfilledPromises)
                }
            }).catch(reason =>{    
                fulfilledPromises[index] = {status: 'rejected', reason}
                if(fulfilledPromises.filter(e => e).length === arrayOfPromises.length){
                    resolve(fulfilledPromises)
                }
            })
        })
    })
}

// const promises = [
//   Promise.resolve(1),
//   Promise.reject("Error occurred"),
//   Promise.resolve(3)
// ];

// promiseAllSettled(promises)
//   .then(results => {
//     console.log("All promises settled:", results);
//     // Expected: [{ status: 'fulfilled', value: 1 },
//     //            { status: 'rejected', reason: 'Error occurred' },
//     //            { status: 'fulfilled', value: 3 }]
//   });


// TASK 3

function chainPromises(arrayOfFunctions) {
    return arrayOfFunctions.reduce((previousPromise, currentFunction) => {
      return previousPromise.then(result => currentFunction(result));
    }, Promise.resolve());
  }
  


// function asyncFunction1() {
//     return Promise.resolve("Result from asyncFunction1");
//   }
  
//   function asyncFunction2(data) {
//     return Promise.resolve(data + " - Result from asyncFunction2");
//   }
  
//   function asyncFunction3(data) {
//     return Promise.resolve(data + " - Result from asyncFunction3");
//   }
  
//   const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];
  
//   chainPromises(functionsArray)
//     .then(result => {
//       console.log("Chained promise result:", result);
//       // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
//     })
//     .catch(error => {
//       console.error("Chained promise error:", error);
//     });

// TASK 4


function promisify(callbackStyleFunction) {
    return (...args) =>{
        return new Promise((resole, reject) =>{
            callbackStyleFunction(...args, (error, result ) =>{
                if(error)
                    reject(error)
                else 
                    resole(result)
            })
        })  
    }
}

// function callbackStyleFunction(value, callback) {
//     setTimeout(() => {
//       if (value > 0) {
//         callback(null, value * 2);
//       } else {
//         callback("Invalid value", null);
//       }
//     }, 1000);
//   }
  
//   const promisedFunction = promisify(callbackStyleFunction);
  
//   promisedFunction(3)
//     .then(result => {
//       console.log("Promised function result:", result); // Expected: 6
//     })
//     .catch(error => {
//       console.error("Promised function error:", error);
//     });