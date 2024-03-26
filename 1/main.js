String.prototype.plus = function (str) {
    return parseInt(this) + parseInt(str);
}
String.prototype.minus = function (str) {
    return parseInt(this) - parseInt(str);
}
String.prototype.divide = function (str) {
    return (parseInt(this) - parseInt(this) % parseInt(str)) / parseInt(str);
}
String.prototype.multiply = function (str) {
    return parseInt(this) * parseInt(str);
}

