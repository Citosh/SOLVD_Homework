// Task 1 


const products_array =  [ {productName: 'tv', price: 300}, {productName: 'phone', price: 30} ]

function calculateDiscountedPrice(products, discountProcentage) {
    return products.map((product) =>{
        return (product.price * ( (100-discountProcentage) / 100 )).toPrecision(3)
    }) 
} 

function calculateTotalPrice(products) {
    return products.reduce((total, price) => parseFloat(total) + parseFloat(price), 0)
} 


// Task 2 

const object = {firstName : 'tyoma', lastName : 'chaplinskyi'}

const concatNames = obj => `${obj.firstName} ${obj.lastName}`

const compose = (fn1) => input => fn1(input)

const getFullName = collection => compose(concatNames)(collection)



// Task 3


function createCounter() {
    let counter = 0;

    function closure(){
        return ++counter
    }
    return closure
}


function repeatFunction(fn, number){
    return function() {
        const result = [];
        if (number >= 0) {
            for (let i = 0; i < number; i++) {
                fn() 
            }
        } else {
            while (true) {
                fn()
            }
        }
        return result
    };
}

// Task 4


// Task 5

