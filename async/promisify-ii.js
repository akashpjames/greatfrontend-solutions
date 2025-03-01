/*
In Node.js, using the util.promisify.custom symbol, one can override the return value of util.promisify(),
which is useful for cases where the original function does not follow the standard format of taking an error-first
callback as the last argument. This is especially useful for functions with a legacy format that's incompatible with
util.promisify's callback-last convention.
// Example usage in Node.js.
const util = require('node:util');
function doSomething(callback, foo) {
  // ...
}
doSomething[util.promisify.custom] = (foo) => {
  return getPromiseSomehow();
};
const promisified = util.promisify(doSomething);
console.log(promisified === doSomething[util.promisify.custom]);
// prints 'true'
Implement a promisify function that has support for custom return values.
Use the symbol Symbol.for('util.promisify.custom') as the key for the overridden value.
 */
const promisifyCustomSymbol = Symbol.for('util.promisify.custom');

export default function promisify(func) {
    // Check for custom promisify implementation
    if (func[promisifyCustomSymbol]) {
        return func[promisifyCustomSymbol];
    }

    // Return a new function that wraps the original function in a Promise
    return function (...args) {
        return new Promise((resolve, reject) => {
            // Append a callback function as the last argument
            func.call(this, ...args, (err, result) => {
                err ? reject(err) : resolve(result)
            });
        });
    };
}