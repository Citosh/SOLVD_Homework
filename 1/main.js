

class StringArithmetic {

    constructor(str1){
        this.str1 = str1;
    }

    plus(str2){
        return +this.str1 + +str2;
    }

    minus(str2){
        return this.str1 - str2;
    }

    divide(str2){
        return ~~(this.str1 / str2) 
    }
    
    multiply(str2){
        return this.str1 * str2 
    }
}

const String = new StringArithmetic('10')

console.log(String.plus('1'))
console.log(String.minus('2'))
console.log(String.divide('3'))
console.log(String.multiply('4'))