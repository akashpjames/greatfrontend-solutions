/**
Implement Call
Example:
function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

multiplyAge.myCall(mary); // 21
 */

Function.prototype.myCall = function (thisArg, ...argArray) {
  // return this.apply(thisArg, argArray)
  // return this.bind(thisArg)(...argArray);
  // thisArg = thisArg || globalThis;

  //Note refer to the implementation of Function.prototype.apply for a better version
  //Over there, we use globalThis and checks if argArray is Array/undefined else throws error.
  thisArg  = Object(thisArg);
  const sym = Symbol();
  thisArg[sym] = this;
  const val = thisArg[sym](...argArray);
  delete thisArg[sym];
  return val;
};