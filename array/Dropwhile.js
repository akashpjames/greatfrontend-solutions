/**
 * Implement a function dropWhile(array, predicate) that creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until predicate returns falsey. Your function should not modify the original array.
 * Arguments
 * array (Array): The array to query.
 * predicate (Function): The function invoked per iteration. The function is invoked with three arguments: (value, index, array).
 * Returns
 * (Array): Returns the slice of array.
 */
export default function dropWhile(array, predicate) {
    const len = array.length;
    for(let i=0; i<len; i++) {
        if(!predicate(array[i], i, array)) {
            return array.slice(i);
        }
    }
    return [];
}