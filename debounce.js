/*
Implement debounce
eg:
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
//  Call debouncedIncrement() again.
debouncedIncrement(); // i = 0

// t = 100: i is still 0 because it has only
//  been 50ms since the last debouncedIncrement() at t = 50.

// t = 150: Because 100ms have passed since
//  the last debouncedIncrement() at t = 50,
//  increment was invoked and i is now 1 .
*/

export default function debounce(func, wait) {
    let timer;
    //don't use arrow function here as `this` value of the returned
    //function needs to be dynamically determined while executing
    return function(...args) {
      clearTimeout(timer);
      timer =  setTimeout(() => {
        // here we are able to use `this` directly, because of arrow function
        // otherwise, we had to save this in a variable and use it.
        func.call(this, ...args);
      }, wait);
    }
  }