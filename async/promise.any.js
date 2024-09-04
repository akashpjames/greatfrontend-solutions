/*
How would you implement a custom version of Promise.any(), 
named promiseAny, that takes an array of promises as input instead of an iterable?
The function should return a promise that resolves with the value of the first fulfilled
promise or rejects with an array of error reasons if all promises are rejected. 
Ensure that the rejected reason is an array of errors, not an AggregateError object,
and the error messages do not need to be set.
eg:
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    reject(42);
  }, 400);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 100);
});

try {
  await promiseAny([p0, p1]);
} catch (err) {
  console.log(e instanceof AggregateError); // true
  console.log(e.errors); // [ 42, "Err!" ]
}
*/

export default function promiseAny(iterable) {
    return new Promise((resolve, reject) => {
      const errors = [];
      const len = iterable.length;
      let pendingPromises = len;
      if(!len) reject(AggregateError([])
      for(let i=0; i<len; i++) {
        Promise.resolve(iterable[i]).then((val) => {
          pendingPromises--;
          resolve(val);
        }).catch((err) => {
          errors[i]= err;
          pendingPromises--
          if(pendingPromises === 0) {
            reject(AggregateError(errors))
          }
        })
      }
    })
  }