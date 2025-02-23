/**
 * The Promise.withResolvers() static method returns an object containing a new Promise object and two functions
 * to resolve or reject it, corresponding to the two parameters passed to the executor of the Promise() constructor.
 */

export default function promiseWithResolvers() {
    let resolve, reject;

    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    })

    return {
        promise,
        resolve,
        reject
    }
}