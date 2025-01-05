/**
 * Implement a function groupBy(array, iteratee) that takes an array and an iteratee function,
 * and groups the values in the array based on the iteratee.
 */
export default function groupBy(array, iteratee) {
    if (!Array.isArray(array) || array.length === 0) {
        return {};
    }

    if (typeof iteratee !== "function") {
        throw new TypeError("Iteratee must be a function");
    }

    const map = new Map();
    for (const el of array) {
        const key = iteratee(el);
        if (map.has(key)) {
            map.get(key).push(el); // arrays are by reference, so it will update by mutation
            // const existingVal = map.get(key);
            // map.set(key, [...existingVal, el]);
        } else {
            map.set(key, [el]);
        }
    }
    return Object.fromEntries(map);
}

export default function groupBy(array, iteratee) {
    const result = Object.create(null);

    for (const element of array) {
        const key = iteratee(element);
        //using nullish coalescing assignment operator means you might be accessing inherited properties,
        //which is not desired, but since the object is created via Object.create(null),
        //there will not be inherited properties and is safe to use.
        result[key] ??= [];
        result[key].push(element);
    }

    return result;
}