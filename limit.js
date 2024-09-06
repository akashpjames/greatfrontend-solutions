/*
Create a function that takes two arguments: a callback function and a number n. 
This function should ensure that the callback is called at most n times. 
After the callback has been invoked n times, any additional calls to the created 
function should return the result of the last callback invocation.
let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByAtMostThrice = limit(incrementBy, 3);
incrementByAtMostThrice(2); // i is now 3; The function returns 3.
incrementByAtMostThrice(3); // i is now 6; The function returns 6.
incrementByAtMostThrice(4); // i is now 10; The function returns 10.
incrementByAtMostThrice(5); // i is still 10 as this is the 4th invocation; The function returns 10 as it's the result of the last invocation.
i = 4;
incrementByAtMostThrice(2); // i is still 4 as it is not modified. The function still returns 10.
*/

export default function limit(func, n) {
  const maxAllowedCalls = n;
  const lastResult;
  return function(...args) {
    if(maxAllowedCalls <= 0) {
      return lastResult;
    }
    maxAllowedCalls--;
    lastResult = func.call(this, ...args);
    return lastResult;
  }
}