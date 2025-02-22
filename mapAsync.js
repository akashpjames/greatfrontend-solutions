/*
Implement a function mapAsync that accepts an array of items and maps each element with an asynchronous mapping function.
The function should return a Promise which resolves to the mapped results.
const asyncDouble = (x: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });

const doubled = await mapAsync([1, 2], asyncDouble);
console.log(doubled); // [2, 4]
 */
export default function mapAsync(iterable, callbackFn) {
    const result = [];
    let len = iterable.length;
    let unresolved = len;
    return new Promise((resolve, reject) => {
        if (!len) resolve(result);
        for (let i = 0; i < len; i++) {
            callbackFn(iterable[i]).then(val => {
                result[i] = val;
            }).catch(err => {
                reject(err);
            }).finally(() => {
                if (--unresolved === 0) {
                    resolve(result);
                }
            })
        }
    })
}