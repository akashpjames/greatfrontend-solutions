/*
Implement a function that accepts a callback and restricts its invocation to at most once. 
Subsequent calls of the function will return the result of the first invocation of the callback function. 
The callback function is invoked with the this binding and arguments of the created function.
Example:
let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
incrementByOnce(2); // i is now 3; The function returns 3.
incrementByOnce(3); // i is still 3; The function returns the result of the first invocation, which is 3.
i = 4;
incrementByOnce(2); // i is still 4 as it is not modified.
*/

export default function once(func) {
    const executed = false;
    const result;
    return function(...args) {
      if(executed) return result;
      executed = true;
      result = func.call(this, ...args);
      return result;
    }
  }