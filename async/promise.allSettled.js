/*
The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected,
with an array of objects that each describes the outcome of each promise.

However, if and only if an empty iterable is passed as an argument, Promise.allSettled() returns a Promise object that has already 
been resolved as an empty array.

For each outcome object, a status string is present. If the status is 'fulfilled', then a value is present. 
If the status is 'rejected', then a reason is present. 
The value (or reason) reflects what value each promise was fulfilled (or rejected) with.

Example:
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 100);
});

await promiseAllSettled([p0, p1, p2]);
// [
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'foo' },
// ];
*/

export default function promiseAllSettled(iterable) {
    const result = [];
    return new Promise((resolve) => {
        let total = iterable.length;
        if (!total) resolve(result);

        // Use iterable.entries() to get both index and value.
        for (const [index, item] of iterable.entries()) {
            Promise.resolve(item)
                .then((value) => {
                    result[index] = { status: 'fulfilled', value };
                })
                .catch((reason) => {
                    result[index] = { status: 'rejected', reason };
                })
                .finally(() => {
                    if (--total === 0) resolve(result);
                });
        }
    });
}