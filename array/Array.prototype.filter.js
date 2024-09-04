/*
How would you implement a custom version of Array.prototype.filter, named myFilter, 
that replicates the behavior of the native filter method? The function should create a 
new array populated with elements that pass the test provided by a callback function. 
Additionally, when handling sparse arrays (e.g., [1, 2, , 4]), the empty values should be 
ignored during the traversal and should not appear in the resulting array. 
eg:
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]
*/
Array.prototype.myFilter = function (callbackFn, thisArg) {
    const result = [];
    const len = this.length;
  
    for(let i=0; i<len; i++) {
      const currentVal = this[i];
      // Ignore index if value is not defined for index (e.g. in sparse arrays).
      if(Object.hasOwn(this, i) &&
      //Mutating the array in the filter callback is a bad idea and 
      //can cause unintended consequences. Mention that mutation of the array within
      //the callback is possible.
        callbackFn.call(thisArg, currentVal, i, this)){
          result.push(currentVal);
      }
    }
  
    return result;
  };