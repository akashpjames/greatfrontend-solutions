/**
 * Implement a function objectMap(obj, fn) to return a new object containing the results of calling a
 * provided function on every value in the object.
 * The function fn is called with a single argument, the value that is being mapped/transformed.
 */

export default function objectMap(obj, fn) {
    const result = {};
    for(const key in obj) {
        if(Object.hasOwn(obj, key)) {
            result[key] = fn.call(obj, obj[key]);
        }
    }
    return result;
}

/**
 * Note: Clarification questions:
 * Do we have to consider nested objects when calling the callback function?
 * What should be the value of this in the callback function?
 */