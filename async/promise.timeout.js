/**
 * Implement a promiseTimeout function that accepts a promise and a timeout duration (in milliseconds) and returns a Promise.
 * If the promise argument is settled within the timeout period, the returned promise is settled with the promise argument's settled value,
 * which can be both resolved/rejected values.
 * Otherwise, the returned promise will reject with the string "Promise timeout".
 */
export default function promiseTimeout(promise, duration) {
    return new Promise((resolve, reject) => {
        const timerId = setTimeout(() => reject('Promise timeout'), duration);

        promise
            .then(resolve)
            .catch(reject)
            .finally(() => clearTimeout(timerId));
    });
}