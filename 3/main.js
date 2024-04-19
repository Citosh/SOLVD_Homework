// Task 1 done

const products_array =  [ {productName: 'tv', price: 300}, {productName: 'phone', price: 30} ]

function calculateDiscountedPrice(products, discountProcentage) {
    return products.map((product) =>{
        return (product.price * ( (100-discountProcentage) / 100 )).toPrecision(3)
    }) 
} 

function calculateTotalPrice(products) {
    return products.reduce((total, price) => parseFloat(total) + parseFloat(price), 0)
} 


// Task 2  done


const getName = (name, obj) => obj[name]  
const concatNames = (firstName, lastName) => `${firstName} ${lastName}`

 function getfullName(person){
    const firstName = getName('firstName', person)
    const lastName = getName('lastName', person)
    return fullName = concatNames(firstName, lastName)
}
const person = {firstName: 'Artem', lastName: 'Chaplinskyi'}

//console.log(getfullName(person))


const splitString = str => str.split(' ')
const sortArr = arr => arr.sort()
const getUnique = arr => new Set(arr)
const compose = (...fns) => arg => fns.reduce((acc, fn) => fn(acc), arg);


const filterUniqueWords = compose(splitString, sortArr,getUnique ) 

//console.log(filterUniqueWords('hello world hello world'))

const students = [
    {
      name: "artem",
      grades: [98, 78, 79, 85, 90],
    },
    {
      name: "sasha",
      grades: [100, 100, 99, 75, 65],
    },
    {
      name: "vadim",
      grades: [79, 82, 82, 62, 66],
    },
  ];

const getGrades = students => students.flatMap( value => value.grades)
const getEverage = grades => grades.reduce((sum, grade) => sum + grade, 0) /grades.length;

const getAverageGrade = compose(getGrades, getEverage) // compose from previous minitask (line 35)

//console.log(getAverageGrade(students))



// Task 3 done

function createCounter() {
    let counter = 0;

    function closure(){
        return ++counter
    }
    return closure
}

// const Counter1 = createCounter()
// const Counter2 = createCounter()
// console.log(Counter1())
// console.log(Counter1())
// console.log(Counter1())
// console.log(Counter2())
// console.log(Counter2())
// console.log(Counter2())

function repeatFunction(fn, number){
    return function() {
        const result = [];
        if (number >= 0) {
            for (let i = 0; i < number; i++) {
                result.push(fn()) 
            }
        } else {
            while (true) {
                result.push(fn()) 
            }
        }
        return result
    };
}

// const RepeatCounter1 = repeatFunction(createCounter(), 5)
// const RepeatCounter2 = repeatFunction(createCounter(), 4)
// console.log(RepeatCounter1())
// console.log(RepeatCounter2())


// Task 4 done

function calculateFactorial(num, acc = 1){

    if(num === 1)
        return acc
    else 
        return calculateFactorial(num - 1, num * acc)
} 

function power(base, exp, res = 1) {

    if (exp === 0) 
        return res;
    else
        return power(base, exp - 1, base * res);
    
}


// Task 5


function lazyMap(arr, mapFn) {
    let i = 0;
  
    return {
      next() {
        if (0 < arr.length) {
            return { value: mapFn(arr[i++]), done: false };
        } else {
            return { done: true };
        }
      }
    }
  }
  
  function increment(value) {
    return ++value;
}

const myArray = [1, 2, 3, 4, 5];
const lazyIncrement = lazyMap(myArray, increment);
  
// console.log(lazyIncrement.next().value)
// console.log(lazyIncrement.next().value)


function fibonacciGenerator() {
    let curr = 0
    let next = 1

    return {
        next(){
            const temp = curr;
            curr = next;
            next = temp + next;
            return { value: temp, done: false };
        }
    }
}

const lazyFibonacci = fibonacciGenerator();

// console.log(lazyFibonacci.next().value)
// console.log(lazyFibonacci.next().value)
// console.log(lazyFibonacci.next().value)
// console.log(lazyFibonacci.next().value)