/**
 * The Promise.resolve() static method "resolves" a given value to a Promise. If the value is:
 * A native promise, return that promise.
 * A non-thenable, return a promise that is already fulfilled with that value.
 * A thenable, Promise.resolve() will call the then() method and pass a pair of resolving functions as arguments.
 * A promise that has the same state as the thenable is returned.
 */

export default function promiseResolve(value) {
    if(value instanceof Promise) {
        return value;// return directly if already a promise
    }

    if(value && typeof value.then === 'function') {
        return new Promise((resolve, reject) => {
            value.then(resolve, reject);// call then function with resolve and reject from promise
        })
    }

    // if (value && typeof value.then === 'function') {
    //     return new Promise(value.then.bind(value));
    // }
    // Check the executor function here. We need to make the executor function as value.then.
    // Since the Promise constructor and then() has the same parameters, one might be tempted to pass value.then to a new Promise e.g. new Promise(value.then)
    // and call it a day. However, the then() will lose the value of this. Hence, we need to pass in value.then.bind(value) instead.

    return new Promise((resolve) => resolve(value));
}