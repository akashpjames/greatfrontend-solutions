/*
Implement a function deepOmit(obj, keys) that removes specified keys and their corresponding values
from an object, including nested objects or arrays. It works recursively to traverse through the
entire object structure, ensuring that all occurrences of the specified keys are removed at all levels.
The function takes in an object (obj) and an array of string keys (keys).
const obj = {a: 1, b: 2, c: { d: 3,e: 4,}, f: [5, 6],
};
deepOmit(obj, ['b', 'c', 'e']); // { a: 1, f: [5, 6] }
 */
export default function deepOmit(val, keys) {
    // Return immediately if val is null or not an object.
    if (val === null || typeof val !== 'object') {
        return val;
    }

    // Process arrays: return a new array with each element processed recursively.
    if (Array.isArray(val)) {
        return val.map(item => deepOmit(item, keys));
    }

    // If there are no keys to omit, return the original object.
    if (!keys.length) return val;

    const result = {};

    for (const key in val) {
        if (!Object.prototype.hasOwnProperty.call(val, key)) continue;
        if (keys.includes(key)) continue;
        // Recursively process the property.
        result[key] = deepOmit(val[key], keys);
    }
    return result;
}