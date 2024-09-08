/*
Implement following functions:
isBoolean(value): Return true if value is a boolean, false otherwise.
isNumber(value): Return true if value is a number, false otherwise. Note that NaN is considered a number.
isNull(value): Return true if value is null, false otherwise.
isString(value): Return true if value is a String, else false.
isSymbol(value): Return true if value is a Symbol primitive, else false.
isUndefined(value): Return true if value is undefined, else false.
*/

export function isBoolean(value) {
    return typeof value === 'boolean'
  }
  
  export function isNumber(value) {
    return typeof value === 'number'
  }
  
  export function isNull(value) {
    return value === null
  }
  
  export function isString(value) {
    return typeof value === 'string'
  }
  
  export function isSymbol(value) {
    return typeof value === 'symbol'
  }
  
  export function isUndefined(value) {
    return typeof value === 'undefined'
  }