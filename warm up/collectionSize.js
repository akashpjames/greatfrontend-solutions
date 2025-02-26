/**
 * Implement a function size(collection) that takes a collection (an array, object, string, Map, Set)
 * and returns its size, which represents the number of elements in the collection.
 * You should consider null and undefined as well
 */
export default function size(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
        return collection.length;
    }

    if (collection instanceof Map || collection instanceof Set) {
        return collection.size;
    }

    if (collection == null) {
        return 0;
    }

    if (typeof collection === 'object') {
        return Object.keys(collection).length;
    }

    return 0;
}