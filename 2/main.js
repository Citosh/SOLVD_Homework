function addValues(value1, value2) {
    if(
      (typeof value1 === 'number' && typeof value2 === 'number') ||
      (typeof value1 === 'bigint' && typeof value2 === 'bigint') 
    ){
      const result = value1 + value2 
      if (isNaN(result) || !isFinite(result))
        throw new Error(`NaN or Infinite output!`)
      else 
        return result
    }else if (
      (typeof value1 === 'string' && typeof value2 === 'string') 
    ){
      return value1.concat(value2) 
    } else if (
      (typeof value1 === 'boolean' && typeof value2 === 'boolean')
    ){
      return value1 || value2
    }else {
      throw new Error(`cannot perform addition for arguments type : ${typeof value1}, ${typeof value2}`)
    }
  }

function invertBoolean(value1) {
    if(typeof value1 === 'boolean')
        throw new Error('not boolean')
    else 
        return ~value1
}

function stringifyValue(value1) {
  if(typeof value1 === 'symbol')
    throw new Error('cannot stringify symbol!')
  else
    return typeof value1 === 'object' ? JSON.stringify(value1) : value1.toString()   
}

function convertToNumber(value1) {
  let result;

    if (typeof value1 === "boolean") {
      result = Number(value1)
    } else if (typeof value1 === "number") {
      result = value1
    } else if (typeof value1 === "string") {
      result = parseFloat(value1);
    } else {
        throw new Error(`cannot convert ${typeof value1} to number!`);
    }

    if (isNaN(result) || !isFinite(result))
      throw new Error('result of conversion is NaN or Infinity!')
    else 
      return result
    
}

function coerceToType(value1, type) {

  switch(type){

    case 'boolean':
      return convertToBoolean(value1);

    case 'string':
      return stringifyValue(value1);
      
    case 'number':
      return convertToNumber(value1);
    
    case 'bigint':
      return convertToBigint(value1)

    default :
      throw new Error("unsupported type for coercion.");
  }}

 /* optional */

 function convertToBigint(value1){
  try {
    return BigInt(value1)
  } catch (error) {
    throw error
  }
}

function convertToBoolean(value1){
  return Boolean(value1)
}

function convertArrayToObject(value1){
  if (Array.isArray(value1)){
    const object = {};

    value1.forEach((element, index) => {
        object[index] = element;
    });

    return object;
  } else{
    throw new Error(`cannot convert ${typeof value1} to object`)
  }
}

function cloneObject(value1){

  if (typeof value1 !== 'object' || value1 === null) {
    return value1; 
  }

  let clonedObj = Array.isArray(value1) ? [] : {};

  for (let key in value1) {
        clonedObj[key] = cloneObject(value1[key]);
  }
  return clonedObj;
}



export default   {
    addValues,
    invertBoolean,
    stringifyValue,
    convertToNumber,
    coerceToType,
    convertToBoolean,
    convertArrayToObject,
    cloneObject
}