/**
 * Implement a function isEmpty(value) to check if a value is an empty object, collection, map, or set.
 */
export default function isEmpty(value) {
    if(Array.isArray(value) || typeof value === 'string') {
        return value.length === 0;
    }
    if(value instanceof Map || value instanceof Set) {
        return value.size === 0;
    }
    if(typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
        return Object.keys(value).length === 0;
    }
    return true;
}