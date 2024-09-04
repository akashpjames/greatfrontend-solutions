/*
How would you implement a custom version of Array.prototype.reduce, 
Sparse elements should be ignored.
eg:
[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
*/

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let arrLength = this.length;
  let accumulator;
  let startIndex = 0;
  //First argument is callback function, second argument is intialvalue
  if(arguments.length > 1) {
    accumulator = initialValue;
  } else {
    if(arrLength === 0) throw new TypeError('Empty array and no intial value');
  //When accumulator is not provided, first element is used as accumulator
    accumulator = this[0];
    startIndex = 1;
  }
  for(let i=startIndex; i<arrLength; i++) {
  //Look for sparse elements in array
    if(Object.hasOwn(this, i)) {
      accumulator = callbackFn.call(this, accumulator, this[i], i, this);;
    }
  }
  return accumulator;
};