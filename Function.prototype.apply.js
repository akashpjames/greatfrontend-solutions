/*
Implement apply
function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}
const mary = {
  age: 21,
};
multiplyAge.myApply(mary); // 21
*/
Function.prototype.myApply = function (thisArg, argArray) {
    // If context is null or undefined, set it to the global object (window in browsers)
    thisArg = thisArg || globalThis;
    const sym = Symbol();
    thisArg[sym] = this;
    if (!Array.isArray(argArray) && argArray !== undefined) {
        throw new TypeError('Second argument must be an array or undefined');
    }
    const result = thisArg[sym](...(argArray || []));
    delete thisArg[sym];
    return result;

    // return this.bind(thisArg, ...argArray)();
    // Or you can also pass the argArray into bind() before executing it.
    // return this.bind(thisArg)(...argArray);
    // return this.call(thisArg, ...argArray);
};