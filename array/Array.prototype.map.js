/*
How would you implement a custom version of Array.prototype.map, 
that replicates the behavior of the native map method?
Sparse elements should be ignored and no corresponding results should be there.
eg:
[1, 2, 3, 4].myMap((i) => i * i); // [1, 4, 9, 16]
*/

Array.prototype.myMap = function (callbackFn, thisArg) {
    const results = [];
    const len = this.length;
    for(let i=0; i<len; i++) {
      const current = this[i];
      if(Object.hasOwn(this, i)) {
        const val = callbackFn.call(thisArg, current, i, this);
        results[i] = val; // results.push will fail the sparse testcase
      }
    }
    return results;
  };