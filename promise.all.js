/*
How would you implement Promise.all() to handle multiple concurrent
API requests and ensure that code execution continues only after all
requests are completed, particularly when you need to depend on the
data from each response?

eg:
// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
*/

export default function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
      const result = [];
      const length = iterable.length;
      let resolved = 0; 
      
      if(!length) resolve(result);
      for(let i=0; i<length; i++) {
        Promise.resolve(iterable[i]).then((val) => {
          result[i] = val;
          resolved++;
          if(resolved === length) { resolve(result)}
        }, 
        (err) => {
          reject(err)
        });
      }
    })
  }