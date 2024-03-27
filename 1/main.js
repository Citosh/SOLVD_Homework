String.prototype.toBigInt = function stringToBigInt() {
    let result = 0n;
    let  decimalplace= 1n;

    for (let i = this.length - 1; i >= 0; i--) {
        result += BigInt(this[i]) * decimalplace;
        decimalplace *= 10n;
    }

    return result;
}

String.prototype.plus = function (str) {
    return `${this.toBigInt() + str.toBigInt()}` 
}

String.prototype.minus = function (str) {
    try {
    const num1 = this.toBigInt()
    const num2 = str.toBigInt()
    
    if (num1<num2) {
        return new Error( 'Wrong input', {cause :'The second parameter must be greater than the first.'})
    }

    return  `${(num1 - num2)}`
 
    } catch (error) {
       return error
    }
    
}
String.prototype.divide = function (str) { 
    try {
        const num1 = this.toBigInt()
        const num2 = str.toBigInt()

        return `${( num1 - num1 % num2 ) / num2 }`;
        
    } catch (error) {
        return error
    }
}

String.prototype.multiply = function (str) {
    return `${this.toBigInt() * str.toBigInt()}` 
}

console.log('9007199254740991'.plus('9007199254740991'))
console.log('999999999999999999999'.minus('999999999999999999999'))
console.log('999999999999999999999'.divide('10'))
console.log('999999999999999999999'.multiply('999999999999999999999'))






