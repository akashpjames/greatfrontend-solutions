/*
Implement a function deepEqual that performs a deep comparison between two values.
It returns true if two input values are deemed equal, and returns false if not.
You can assume there are only JSON-serializable values (numbers, strings, boolean, null, objects, arrays).
There wouldn't be cyclic objects, i.e. objects with circular references.
Examples
deepEqual('foo', 'foo'); // true
deepEqual({ id: 1 }, { id: 1 }); // true
deepEqual([1, 2, 3], [1, 2, 3]); // true
deepEqual([{ id: '1' }], [{ id: '2' }]); // false
 */
export default function deepEqual(valueA, valueB) {
    //check for primitives and objects which are references of each other
    if(valueA === valueB) return true;

    //if only one of them is null, return false, otherwise, this will error later
    //as JS considers typeof null as object and when we try to access object properties.
    if(valueA === null || valueB === null) return false;

    //early exit check
    if(typeof valueA !== typeof valueB) return false;

    //explicit check to handle some scenarios like {}, [] are given
    if (Array.isArray(valueA) !== Array.isArray(valueB)) return false;

    //handle arrays
    if(Array.isArray(valueA) && Array.isArray(valueB)) {
        if(valueA.length !== valueB.length) return false;
        for(let i=0; i<valueA.length; i++) {
            if(!deepEqual(valueA[i], valueB[i])) return false;
        }
        return true;
    }

    //handle objects
    if(typeof valueA === 'object' && typeof valueB === 'object') {
        const keysA = Object.keys(valueA);
        const keysB = Object.keys(valueB);
        if(keysA.length !== keysB.length) return false;

        for(const key of keysA) {
            if(!Object.hasOwn(valueB, key)) return false;
            if(!deepEqual(valueA[key], valueB[key])) return false;
        }
        return true;
    }
    return false;
}