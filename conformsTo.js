/**
 * Implement a function conformsTo(object, source) that checks if object conforms to source by invoking
 * the predicate properties of source with the corresponding property values of object.
 * conformsTo({ a: 1, b: 2 }, { b: (n) => n > 1 });
 * // => true
 *
 * conformsTo({ a: 1, b: 2 }, { b: (n) => n > 2 });
 * // => false
 */

export default function conformsTo(object, source) {
    if (Object.keys(source).length === 0) return true;
    if (Object.keys(object).length === 0) return false;

    for (const [key, predicate] of Object.entries(source)) {
        if (!(key in object)) return false; // Ensure key exists in object
        if (!predicate(object[key])) return false; // Apply predicate
    }

    return true; // All predicates passed
}

function conformsTo2(object, source) {
    return Object.keys(source).every(key => {
        return (
            Object.hasOwn(source, key) &&
            Object.hasOwn(object, key) &&
            source[key](object[key])
        );
    });
}