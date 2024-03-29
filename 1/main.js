String.prototype.plus = function(str) {
    let i = this.length - 1;
    let k = str.length - 1;
    let result = '';
    let carry = 0;
    
    while (i >= 0 || k >= 0 || carry != 0) {
        const dg1 = i >= 0 ? parseInt(this[i]) : 0;
        const dg2 = k >= 0 ? parseInt(str[k]) : 0;
        const sum = dg1 + dg2 + carry;
        carry = parseInt(sum / 10);
        result = (sum % 10) + result;
        i--;
        k--;
    }
    
    return result;
}

String.prototype.minus = function (str) {
    let i = this.length - 1;
    let k = str.length - 1;
    let result = '';
    let remind = 0;

    while (i >= 0 || remind != 0) {
        const dg1 = parseInt(this[i]);
        const dg2 = k >= 0 ? parseInt(str[k]) : 0;
        let sum = dg1 - dg2 - remind;
        if (sum < 0) {
            sum = (10 + dg1) - dg2 - remind
            remind = 1
        }else {
            remind = 0
        }
        result = (sum % 10) + result;
        i--;
        k--;
    }
    return result.replace(/^0*(?=[0-9])/g, '');
}

String.prototype.divide = function (str) {

    let oparatedDigits = '';
    let result = '';
    
    for (let i = 0; i < this.length; i++) {
        oparatedDigits += this[i];
        let count = 0;

        while (parseInt(oparatedDigits) >= parseInt(str)) {
            oparatedDigits = oparatedDigits.minus(str); 
            count++;
        }
        result += count;
    }
    return result.replace(/^0*(?=[0-9])/g, '');
}

String.prototype.multiply = function (str) {
    let i = str.length - 1;
 
    let carry = 0; 
    let partialMiltiplication = 0;
    let subresult = '';
    let result = '';

    while ( i >= 0 ) {
        const dgSTR = i >= 0 ? +str[i] : 0;
        let k = this.length - 1;
        subresult = '';

        while (k >= 0){

            const dgTHIS = k >= 0 ? +this[k] : 0;

            partialMiltiplication = dgSTR*dgTHIS + carry;
            carry = parseInt(partialMiltiplication /10)
            subresult = (partialMiltiplication % 10) + subresult 
           
            k--;
        } 
  
        subresult = subresult + '0'.repeat(str.length - 1 -i)
        result = result.plus(subresult);
        
        i--;
        
    }
    return result
}
    
console.log(('23546345634563456346534565346'.plus('23546345634563456346534565346')))
console.log(('23546345634563456346534565346'.minus('23546345634563456346534565346')))
console.log('23546345634563456346534565346'.multiply('23546345634563456346534565346'))
console.log('23546345634563456346534565346'.divide('23546345634563456346534565346'))
