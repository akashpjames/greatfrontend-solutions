/**
 * Implement a function that accepts two promises and returns a single Promise.
 * This returned promise fulfills when both input promises fulfill, with a single value according to the order and types of the fulfillment values:
 *
 * Numbers should be added together.
 * Strings should be concatenated.
 * Arrays should be combined into a single array.
 * Plain objects should be merged into a single object.
 * Other types aren't supported.
 * The return promise can also be rejected if one of the following happens:
 *
 * The types of the fulfilled results do not match, reject with the string 'Unsupported data types'.
 * One of the promises fail, reject with the rejected promise's reason.
 */
export default function promiseMerge(p1, p2) {
    let resolved = 0;
    let data1, data2;
    return new Promise((resolve, reject) => {
        function then() {
            if(++resolved === 2) {
                try {
                    resolve(handlePromises(data1, data2));
                } catch(e) {
                    reject(e)
                }
            }
        }
        p1.then(res => {
            data1 =res;
            then();
        }, reject)

        p2.then(res => {
            data2 = res;
            then();
        }, reject)
    })

    function handlePromises(result1, result2) {
        if(typeof result1 === 'number' && typeof result2 === 'number') {
            return result1+result2;
        }

        if(typeof result1 === 'string' && typeof result2 === 'string') {
            return result1+result2;
        }

        if(Array.isArray(result1) && Array.isArray(result2)) {
            return [...result1, ...result2];
        }

        if(isPlainObj(result1) && isPlainObj(result2)) {
            return {...result1, ...result2};
        }

        throw 'Unsupported data types';
    }

    function isPlainObj(obj) {
        if (obj === null || typeof obj !== "object") return false;
        return Object.getPrototypeOf(obj) === Object.prototype;
    }
}

// Solution using allSettled

// export default function promiseMerge(p1, p2) {
//     return new Promise((resolve, reject) => {
//         // Wait for both promises to settle
//         Promise.allSettled([p1, p2]).then(results => {
//             const [result1, result2] = results;
//
//             // Check for rejected promises
//             if (result1.status === "rejected") return reject(result1.reason);
//             if (result2.status === "rejected") return reject(result2.reason);
//
//             const value1 = result1.value;
//             const value2 = result2.value;
//
//             // Handle merging based on types
//             if (typeof value1 === "number" && typeof value2 === "number") {
//                 return resolve(value1 + value2);
//             }
//             if (typeof value1 === "string" && typeof value2 === "string") {
//                 return resolve(value1 + value2);
//             }
//             if (Array.isArray(value1) && Array.isArray(value2)) {
//                 return resolve([...value1, ...value2]);
//             }
//             if (isPlainObject(value1) && isPlainObject(value2)) {
//                 return resolve({ ...value1, ...value2 });
//             }
//
//             // Unsupported types
//             return reject("Unsupported data types");
//         });
//     });
// }
//
// // Utility function to check for plain objects
// function isPlainObject(obj) {
//     return obj && typeof obj === "object" && obj.constructor === Object;
// }