/** Implement Bind
 *
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
    const sym = Symbol();
    const wrapper = Object(thisArg);
    Object.defineProperty(wrapper, sym, {value: this, enumerable: false})
    return function(...newArgs) {
        return wrapper[sym](...argArray, ...newArgs);
    }

    // If we are allowed to use apply/call
    // const originalMethod = this;
    // return function (...args) {
    //   return originalMethod.apply(thisArg, [...argArray, ...args]);
    // };

    /* What if the user has overwritten default apply method, it will fail.
    Using Reflect.apply is more robust.
    const originalFunc = this;
    if (typeof originalFunc !== 'function') {
      throw new TypeError('Bind must be called on a function');
    }

    return function (...args) {
      return Reflect.apply(originalFunc, thisArg, [...argArray, ...args]);
      // More verbose here:
      // return Function.prototype.apply.call(originalFunc, thisArg, [
      //   ...argArray,
      //   ...args,
      // ]);
    };
    */
};