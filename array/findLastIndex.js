/**
 * Implement a function findLastIndex(array, predicate, [fromIndex=array.length-1]) that takes an array of values, a function predicate,
 * and an optional fromIndex number argument, and returns the index of the last element in the
 * array that satisfies the provided testing function predicate. The elements of the array are iterated from right to left.
 */
export default function findLastIndex(
    array,
    predicate,
    fromIndex = array.length - 1,
) {
    const len = array.length;
    if(fromIndex < 0) {
        fromIndex = Math.max(fromIndex + len, 0)
    } else {
        fromIndex = Math.min(len-1, fromIndex);
    }

    for(let i=fromIndex; i>=0; i--) {
        if(predicate(array[i], i, array)) {
            return i;
        }
    }

    return -1;
}