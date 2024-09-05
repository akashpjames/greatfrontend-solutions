/*
Implement a function memoize(func) that takes in a function parameter func and returns a memoized version of the function. 
You may assume that func only accepts a string or number as its only argument.
Example:
function expensiveFunction(n) {
  console.log('Computing...');
  return n * 2;
}

// Create a memoized version of the function.
const memoizedExpensiveFunction = memoize(expensiveFunction);

// First call (computes and caches the result).
console.log(memoizedExpensiveFunction(5)); // Output: Computing... 10

// Second call with the same argument (returns the cached result).
console.log(memoizedExpensiveFunction(5)); // Output: 10
*/

/*
Here, you can't use Objects and you should rely on maps as Objects only allow strings as keys and can't differentiate between numbers.
Maps can differentiate between string keys and number keys.
*/
export default function memoize(func) {
    const memoizedResults = new Map();
    return function(arg) {
      if(memoizedResults.has(arg)) return memoizedResults.get(arg);
      const result = func.call(this, arg);
      memoizedResults.set(arg, result);
      return result;
    }
  }