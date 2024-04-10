function addValues(value1, value2) {
    if (
      (typeof value1 === "string" || typeof value1 === "number") &&
      (typeof value2 === "string" || typeof value2 === "number")
    ) {
      return value1 + value2;
    } else {
      throw new Error("Error! Value1 and Value2 must be strings or numbers.");
    }
  }

function invertBoolean(value1) {
    if(typeof value1 === 'boolean')
        throw new Error('not boolean')
    else 
        return ~value1
}

function stringifyValue(value1) {
    return typeof value1 === 'object' ? JSON.stringify(value1) : value1.toString()   
}


function convertToNumber(value1) {
    if (typeof value1 === "boolean") {
      return Number(value1)
    } else if (typeof value1 === "number") {
      return value1;
    } else if (typeof value1 === "string") {
      return parseFloat(value1);
    } else {
        throw new Error("This value can't convert to number.");
    }
}

function convertToBoolean(value1){
    return Boolean(value1)
}


function coerceToType(value, type) {
    if (type === "boolean") {
      return convertToBoolean(value);
    } else if (type === "string") {
      return stringifyValue(value);
    } else if (type === "number") {
      return convertToNumber(value);
    } else {
      throw new Error("Unsupported type for coercion.");
    }
  }

export default {
    addValues,
    invertBoolean,
    stringifyValue,
    convertToNumber,
    convertToBoolean,
    coerceToType
}