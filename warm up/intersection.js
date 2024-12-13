/**
 * Implement a JavaScript function intersection(arrays) that takes multiple arrays as input and returns a new array containing
 * the unique values that are present in all given arrays SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.
 */

export default function intersection(...arrays) {
    if(!arrays.length) return [];

    const set = new Set(arrays[0]);

    for(let i=1; i<arrays.length; i++) {
        set.forEach(element => {
            if(!(arrays[i].includes(element))) {
                set.delete(element);
            }
        })
    }
    return Array.from(set);

}