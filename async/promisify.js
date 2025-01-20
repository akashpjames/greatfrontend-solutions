/**
 * Implement a function promisify that takes a function following the common callback-last error-first style,
 * i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.
 */
export default function promisify(func) {
    return function(...args) {
        return new Promise((res, rej) => {
            func.call(this, ...args, (err, val) => {
                err? rej(err) : res(val);
            });
        })
    }
}